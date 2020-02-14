<% @ Language=VBScript CodePage=65001%>
<% Session.CodePage = 65001
response.charset="utf-8"%>
<!-- #include virtual ="/include/dbinfo.asp" -->
<!-- #include virtual ="/include/kaguya.asp" -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%
stat=ReqTxt(Request("stat"))
AdminName	= session("AdminName")
select case stat
	case "wallpaper"
		call edit_wallpaper
	case else
		error1("狀態不明!請通知系統人員")
end select


sub edit_wallpaper
	'----確認目前User是否有使用本功能的權限
	'session("funName") = "桌布下載"
	'server.Execute "/purview.asp"
	
	work=ReqTxt(Request("work"))
	id=request("AutoID")

	TB_Name=ReqTxt(request("TB_Name"))

	if len(TB_Name) > 15 then error1("檔案名稱超出15個字")

	TB_SPic=requrl(request("TB_SPic"))
	TB_SizeS=requrl(request("TB_SizeS"))
	TB_SizeL=requrl(request("TB_SizeL"))
	TB_show=requrl(request("Button"))
	'response.Write TB_show
	'response.End()
	response.write "TB_Name=" & TB_Name & "<br>"
	response.write "TB_SPic=" & TB_SPic & "<br>"
	response.write "TB_SizeS=" & TB_SizeS & "<br>"
	response.write "TB_SizeL=" &TB_SizeL & "<br>"
	response.write "TB_show=" &TB_show & "<br>"	

	if work="addwallpaper" then 
		'response.Write "TB_show"
		'response.End()
		'INSERT INTO  (table name) (欄位1,欄位2,欄位3) VALUES (質1,質2,質3 )公式	
		sqlinsert="INSERT INTO  TOP_wallpaper (TOP_W_name,s_picture,B_picture,picture,show) VALUES ('"&TB_Name&"','"&TB_SizeS&"','"&TB_SizeL&"','"&TB_SPic&"','"&TB_show&"')"
		set rs_sqlupdate=conn.execute(sqlinsert)'執行SQL語法
		'response.Write sqlinsert
		'response.End()
		

		If Conn.Errors.count = 0 Then
			response.Write("<script>alert('新增成功!');location.href='/01_index/download/wallpaperMW2.asp';</script>")	'彈跳訊息後轉頁面
	 	else
	 		Error1("修改資料發生錯誤，請重新輸入！")
	 	End if
		
		response.End()



	elseif work="editwallpaper" then


		'update (table name) set 欄位1=質1,欄位2=質2,欄位3=質3 where 條件欄位=條件值 			「更改資料的sql公式」
		sqlupdate="update TOP_wallpaper set picture='"&TB_Name&"',TOP_W_name='"&TB_SPic&"',s_picture='"&TB_SizeS&"',B_picture='"&TB_SizeL&"',show='"&TB_show&"' where AutoID=" &id
		response.write sqlupdate
		'response.end
		set rs_sqlupdate=conn.execute(sqlupdate)
		

		If Conn.Errors.count = 0 Then
			response.Write("<script>alert('修改!');location.href='/01_index/download/wallpaperMW2.asp';</script>")	'彈跳訊息後轉頁面
	 	else
	 		Error1("修改資料發生錯誤，請重新輸入！")
	 	End if
		
		response.End()

	
	end if
		

end sub

%>