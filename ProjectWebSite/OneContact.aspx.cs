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

            //Läser in person
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


                //string phoneType = myReader["Phonetype"].ToString();
                //string phoneNumber = myReader["Phonenumber"].ToString();
                
                //string emailType = myReader["Emailtype"].ToString();
                //string email = myReader["Email"].ToString();


                aPerson = new Person(id, firstName, lastName, company);
                //aPerson.Phones.Add(new Phone(phoneType, phoneNumber));
                
                //aPerson.Emails.Add(new Email(emailType, email));


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

        //Läser in adress
        try
        {
            myConnection.Open();
            SqlCommand myCommand2 = new SqlCommand();
            myCommand2.Connection = myConnection;
            
            myCommand2.CommandText = "select * from Adress where CID =" + ID;
            SqlDataReader myReader2 = myCommand2.ExecuteReader();

            while (myReader2.Read())
            {
                string addressType = myReader2["Adresstype"].ToString();
                string town = myReader2["Town"].ToString();
                string street = myReader2["Street"].ToString();

                aPerson.Addresses.Add(new Address(addressType, town, street));
            }
        }
        catch (Exception)
        {

            
        }
        finally
        {
            myConnection.Close();
        }

        //Läser in Telefon
        try
        {
            myConnection.Open();
            SqlCommand myCommandPhone = new SqlCommand();
            myCommandPhone.Connection = myConnection;

            myCommandPhone.CommandText = "select * from Telefon where CID =" + ID;
            SqlDataReader myReaderPhone = myCommandPhone.ExecuteReader();

            while (myReaderPhone.Read())
            {
                string phoneType = myReaderPhone["Phonetype"].ToString();
                string phoneNumber = myReaderPhone["Phonenumber"].ToString();
                

                aPerson.Phones.Add(new Phone(phoneType, phoneNumber));
            }
        }
        catch (Exception)
        {


        }
        finally
        {
            myConnection.Close();
        }
    }
}