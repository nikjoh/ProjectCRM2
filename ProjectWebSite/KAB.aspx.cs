using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;

public partial class KAB : System.Web.UI.Page
{

    List<Person> contactList = new List<Person>();
    const string connectionString = "Data Source=localhost;Initial Catalog=Tellus;Integrated Security=True";

    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check url parameter to ADD a contact to database
        string addContact = Request.QueryString["AddContact"];
        if (addContact != null)
        {
            // get contact info
            string firstName = Request.QueryString["FirstName"];
            string lastName = Request.QueryString["LastName"];
            string company = Request.QueryString["Company"];
            // create contact in database
            AddContact(firstName, lastName, company);

        }
        #endregion

        #region Check url parameter to DELETE a contact to database
        string deleteContact = Request.QueryString["DeleteContact"];
        if (deleteContact != null)
        {
            // get contact ID to remove and parse to int
            int id = int.Parse(Request.QueryString["DeleteContact"]);
            // delete contact in database
            DeleteContact(id);

        }
        #endregion

        GetContacts();
        contactLiteral.Text = JsonConvert.SerializeObject(contactList, Formatting.Indented);
        
    }

    void DeleteContact(int ID)
    {
        // create connection
        SqlConnection myConnection = new SqlConnection();
        myConnection.ConnectionString = connectionString;

        try
        {
            myConnection.Open();

            SqlCommand myCommand = new SqlCommand();
            myCommand.Connection = myConnection;
            myCommand.CommandText = "delete from Contact where ID=" + ID;

            int rows = myCommand.ExecuteNonQuery();
        }
        catch (Exception ex)
        {

        }
        finally
        {
            myConnection.Close();
        }
    }

    void AddContact(string firstName, string lastName, string company)
    {
        // create connection
        SqlConnection myConnection = new SqlConnection();
        myConnection.ConnectionString = connectionString;

        try
        {
            myConnection.Open();

            SqlCommand myCommand = new SqlCommand();
            myCommand.Connection = myConnection;
            myCommand.CommandText = "insert into Contact (Firstname, Lastname, Company) values ('" + firstName + "', '" + lastName + "', '" + company + "')";

            int rows = myCommand.ExecuteNonQuery();

        }
        catch (Exception ex)
        {

        }
        finally
        {
            myConnection.Close();
        }
    }

    void GetContacts()
    {
        // create connection
        SqlConnection myConnection = new SqlConnection();
        myConnection.ConnectionString = connectionString;

        try
        {
            myConnection.Open();

            SqlCommand myCommand = new SqlCommand();
            myCommand.Connection = myConnection;
            myCommand.CommandText = "select * from Contact";

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
                contactList.Add(new Person(id, firstName, lastName, company));
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