using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Address
/// </summary>
public class Address
{
    public string Type { get; set; }
    public string Town { get; set; }
    public string Street { get; set; }


    public Address(string type, string town, string street)
    {
        Type = type;
        Town = town;
        Street = street;
    }
}