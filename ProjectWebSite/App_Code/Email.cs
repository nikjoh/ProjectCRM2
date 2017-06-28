using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Email
/// </summary>
public class Email
{
    public string Type { get; set; }
    public string  Mail { get; set; }


    public Email(string mail)
    {
        Mail = mail;
    }

    public Email(string type, string mail)
    {
        Type = type;
        Mail = mail;
    }
}