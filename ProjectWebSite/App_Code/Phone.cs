using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Phone
/// </summary>
public class Phone
{
    public string Type { get; set; }
    public string Number { get; set; }

    public Phone(string number)
    {
        Number = number;
    }

    public Phone(string type, string number)
    {
        Type = type;
        Number = number;
    }
}