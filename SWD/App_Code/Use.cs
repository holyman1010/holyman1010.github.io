//code by jimmysonjane
using System;
using System.Collections.Generic;
using System.Web;
using System.Text.RegularExpressions;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Data.OleDb;
//using NPOI.Util;     //匯入excel使用
//using NPOI.POIFS; //匯入excel使用
//using NPOI.HSSF.UserModel;  //匯入excel使用
//using NPOI.HSSF;  //匯入excel使用
//using NPOI.HPSF;  //匯入excel使用
//using NPOI;
using System.Web.UI.WebControls;
using System.Configuration;            //匯入excel使用

public class Use
{
    string xcbweb_str = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["xcbweb_str"].ToString();
    string placeresult = "";
    public string confirm(string context, string tureurl, string falseurl, string functionname)    //確認文字，確定時導向頁面，取消時導向頁面，刪除function
    {
        string script;
        script = "<script>if(!confirm(\"" + context.ToString() + "\")){location.href='" + falseurl + "'}";
        script = script + "else{location.href='" + tureurl + "&fun=" + functionname + "';}</script>";
        return script;
    }

    public String showmsg(String alertMsg)
    {
        String scriptmsg = "<script>";
        scriptmsg += " alert(\"" + alertMsg + "\");";
        scriptmsg += "</script>";
        return scriptmsg;
    }

    public String ShowMsglinkClose(String alertMsg, String url)  //顯示訊息後重整母視窗並關閉本視窗
    {
        //window.opener.location.reload()
        //<script>alert('"& txt &"');opener.window.location.link='"&url&"';window.close();</script>
        String scriptmsg = "<script>";
        scriptmsg += " alert('" + alertMsg + "');";
        scriptmsg += "window.open('','_self'); window.opener.location.reload(); window.close(); </script>";
        return scriptmsg;
    }

    public String showmsgurl(String alertMsg, String url)
    {
        String scriptmsgurl = "<script>";
        String href = "location.href='" + url + "'";
        scriptmsgurl += " alert(\"" + alertMsg + "\");";
        scriptmsgurl += href;
        scriptmsgurl += "</script>";
        return scriptmsgurl;
    }

    public String showmsgback(String alertMsg)
    {
        String scriptmsgurl = "<script>";
        scriptmsgurl += " alert(\"" + alertMsg + "\");history.back();";
        scriptmsgurl += "</script>";
        return scriptmsgurl;
    }

    public String showmsgTopUrl(String alertMsg, String url)
    {
        String scriptmsgurl = "<script>";
        String href = "top.location='" + url + "';";
        scriptmsgurl += " alert(\"" + alertMsg + "\");";
        scriptmsgurl += href;
        scriptmsgurl += "</script>";
        return scriptmsgurl;
    }
    public bool checklength(string Data, int minlength, int maxlength)
    {
        bool result = Data.Length >= minlength && Data.Length <= maxlength;
        return result;
    }

    public string ReqPlace(string Data)
    {
        string PlaceRange = "taiwan,hongkong";
        string result1 = "";
        string[] arraydata = PlaceRange.Split(',');
        for (int i = 0; i < arraydata.Length; i++)
        {
            if (Data.IndexOf(arraydata[i]) == -1) result1 = "0" + result1;
            else result1 = "1" + result1;
        }
        result1 = result1.PadLeft(10, '0');
        result1 = "0x" + result1.Substring(1, result1.ToString().Length - 1);

        return result1;
    }
    public string GetPlace(string Data)
    {
        string result = "";
        switch (Data)
        {
            case "taiwan": result = "台灣";
                break;
            case "hongkong": result = "香港";
                break;
            default: result = "不在範圍內";
                break;
        }
        return result;
    }
    public string GetShowpart(int Data)
    {
        string result = "";
        //熱門,英雄商城,紅利商城,幻想商城
        if ((1 & Data) > 0) { result = result + "新品,"; }
        if ((2 & Data) > 0) { result = result + "熱門,"; }
        if ((4 & Data) > 0) { result = result + "英雄商城,"; }
        if ((8 & Data) > 0) { result = result + "紅利商城,"; }
        if ((16 & Data) > 0) { result = result + "幻想商城"; }
        if (result == "新品,熱門,英雄商城,紅利商城,幻想商城") { result = "全部"; }
        return result;
    }

    public bool ReqNumPoint(string Data)        //純數字
    {
        if (string.IsNullOrEmpty(Data)) return true;
        bool result = Regex.IsMatch(Data, "[^0-9.$]");
        return result;
    }

    public bool ReqNum(string Data)        //純數字
    {
        if (string.IsNullOrEmpty(Data)) return true;
        bool result = Regex.IsMatch(Data, "[^0-9$]");
        return result;
    }
    public string ReqData(string Data)
    {
        string result = "";
        if (Data.Trim().Length == 0) result = "-1";
        else
        {
            result = Data.Replace("\r\n", "");
            result = result.Replace("<", "&lt;");
            result = result.Replace(">", "&gt;");
            result = result.Replace("'", "’");
        }
        //byte[] by1 = { };
        //ASCIIEncoding AE1 = new ASCIIEncoding();
        //if (Data.Trim().Length == 0) result = "-1";
        //else by1 = AE1.GetBytes(Data);
        //for (int i = 0; i < by1.LongLength; i++)
        //{
        //    result = result + by1[i];
        //}
        return result;
    }
    public string ReqData2(string Data)
    {
        string result = "";
        if (Data.Trim().Length == 0) result = "-1";
        else
        {
            result = Data.Replace("&gt;", ">");
            result = result.Replace("&lt;", "<");
            // result = result.Replace( "<br />" , "\r" );
            result = result.Replace("’", "'");
        }
        //byte[] by1 = { };
        //ASCIIEncoding AE1 = new ASCIIEncoding();
        //if (Data.Trim().Length == 0) result = "-1";
        //else by1 = AE1.GetBytes(Data);
        //for (int i = 0; i < by1.LongLength; i++)
        //{
        //    result = result + by1[i];
        //}
        return result;
    }
    public String ReplaceRed(String Data, string ReStr)
    {
        string result = "";
        result = Data.Replace(ReStr, "<font color=\"red\"><b>" + ReStr + "</b></font>");
        return result;
    }
    public String Replacecolor(String Data, string ReStr, string color)
    {
        string result = "";
        result = Data.Replace(ReStr, "<font color=\"" + color + "\"><b>" + ReStr + "</b></font>");
        return result;
    }
    public string page(int ToPage, int TotalPage, int showpagecount, string firpic, string frontpic, string nextpic, string lastpic, string useclass, string target, string LinkPage, string Rule/*,string cssstart,string cssend*/)
    {
        string result = "";
        int UpPage = ToPage - 1;             //上一頁頁數
        int Downpage = ToPage + 1;      //下一頁頁數
        int Temp = System.Convert.ToInt32((ToPage - 1) / showpagecount) + 1;//→(Topage - 1)防止10可以整除
        int tempint = System.Convert.ToInt32((ToPage - 1) / showpagecount);
        //Temp = (cint(Topage-1))\ShowPage + 1 	'→(Topage - 1)防止10可以整除
        int BackPage = (Temp - 1) * showpagecount;
        int NextPage = Temp * showpagecount + 1;

        string strfirpic = (string.IsNullOrEmpty(firpic)) ? "第一頁" : "<img src=\"" + firpic + "\" alt=\"\" />";

        if (ToPage != 1) result = "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\"><a href=\"" + LinkPage + "?ToPage=1" + Rule + "\" target=\"" + target + "\">" + strfirpic + "</a></td>";
        else result = "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\">" + strfirpic + "</td>";

        string strfrontpic = (string.IsNullOrEmpty(frontpic)) ? "上一頁" : "<img src=\"" + frontpic + "\" alt=\"\" />";

        if (UpPage != 0) result = result + "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\"><a href=\"" + LinkPage + "?ToPage=" + UpPage + Rule + "\" target=\"" + target + "\">" + strfrontpic + "</a></td>";
        else result = result + "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\">" + strfrontpic + "</td>";

        if (UpPage > showpagecount) result = result + "<td class=\"" + useclass + "\"><a href=\"" + LinkPage + "?ToPage=" + BackPage + Rule + "\" target=\"" + target + "\">...</a></td>";
        //For O = (Temp-1)*ShowPage To Temp*ShowPage-1  


        for (int i = (Temp - 1) * showpagecount; i <= Temp * showpagecount - 1; i++)
        {
            if (i + 1 > TotalPage) break;

            if (ToPage == i + 1) result = result + "<td class=\"" + useclass + "\"><b>[" + (i + 1) + "]</b></td>";
            else result = result + "<td class=\"" + useclass + "\"><a href=\"" + LinkPage + "?ToPage=" + (i + 1) + Rule + "&\" target=\"" + target + "\">" + (i + 1) + "</a></td>";
            //<%=hp%>?ToPage=<%=ReqNum(O)+1%>&Y=<%=Y1%>&M=<%=M1%>&N_Type=<%=N_Type%>&keyword=<%=keyword%>"><%=O+1%>
            //  IF O+1 >= cint(rs_page) Then Exit For
        }

        if (NextPage <= TotalPage) result = result + "<td class=\"" + useclass + "\"><a href=\"" + LinkPage + "?ToPage=" + NextPage + Rule + "\" target=\"" + target + "\">...</a></td>";

        string strnextpic = (string.IsNullOrEmpty(nextpic)) ? "下一頁" : "<img src=\"" + nextpic + "\" alt=\"\" />";

        if (ToPage != TotalPage) result = result + "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\"><a href=\"" + LinkPage + "?ToPage=" + TotalPage + Rule + "\" target=\"" + target + "\">" + strnextpic + "</a></td>";
        else result = result + "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\">" + strnextpic + "</td>";

        string strlastpic = (string.IsNullOrEmpty(lastpic)) ? "最末頁" : "<img src=\"" + lastpic + "\" alt=\"\" />";

        if (ToPage != TotalPage) result = result + "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\"><a href=\"" + LinkPage + "?ToPage=" + Downpage + Rule + "\" target=\"" + target + "\">" + strlastpic + "</a></td>";
        else result = result + "<td align=\"center\" valign=\"middle\" class=\"" + useclass + "\">" + strlastpic + "</td>";
        return result;
    }

    public bool limits(string ID, string funName)
    {
        try
        {
            using (SqlConnection conn = new SqlConnection(xcbweb_str)) //宣告sql connetcion
            {
                using (SqlCommand comm = new SqlCommand()) //宣告 sql command
                {
                    comm.Connection = conn; //指定command要使用那一個sql連線
                    comm.CommandType = CommandType.StoredProcedure; //指定command要使用的命令類別, text就是要使用sql語句
                    comm.CommandText = "SelectGroupFunction"; //你要使用的命令
                    SqlParameter AutoID = comm.Parameters.Add("@AutoID", SqlDbType.Int, 4); //預存參數宣告
                    SqlParameter SType = comm.Parameters.Add("@SType", SqlDbType.Char, 1); //預存參數宣告
                    AutoID.Value = ID;
                    SType.Value = "a";

                    conn.Open(); //開啟資料庫連接
                    SqlDataReader data_read = comm.ExecuteReader(); //宣告一個Reader,並且將command所執行的結果填入

                    int num = -1;
                    data_read.Read();
                    num = data_read.GetValue(0).ToString().IndexOf(funName);
                    if (num == -1) return false;
                    else return true;
                }
            }
        }
        catch (Exception viewe)
        {
            return false;
        }
    }
}