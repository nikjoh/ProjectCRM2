using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class OneContact : System.Web.UI.Page
{

    Person aPerson = new Person();
    const string connectionString = "Data Source=localhost;Initial Catalog=Tellus;Integrated Security=True";

    protected void Page_Load(object sender, EventArgs e)
    {
        string contactID = Request.QueryString["PID"];

        GetContact(contactID);
        contactLiteral.Text = JsonConvert.SerializeObject(aPerson);

    }

    private void GetContact(string ID)
    {
        // create connection
        SqlConnection myConnection = new SqlConnection();
        myConnection.ConnectionString = connectionString;

        try
        {
            myConnection.Open();

            SqlCommand myCommand = new SqlCommand();
            myCommand.Connection = myConnection;
            myCommand.CommandText = "select * from Contact where ID ="+ID;

            //int rows = myCommand.ExecuteNonQuery();
            SqlDataReader myReader = myCommand.ExecuteReader();

            while (myReader.Read())
            {
                int id = int.Parse(myReader["ID"].ToString());
                string firstName = myReader["Firstname"].ToString();
                string lastName = myReader["Lastname"].ToString();
                string company = myReader["Company"].ToString();
                //if (company != "")
                //{
                aPerson =new Person(id, firstName, lastName, company);
                //}
                //else
                //{
                //    contactList.Add(new Person(id, firstName, lastName));
                //}

            }
        }
        catch (Exception ex)
        {
            //Console.WriteLine(ex.Message);
        }
        finally
        {
            myConnection.Close();
        }
    



}
}