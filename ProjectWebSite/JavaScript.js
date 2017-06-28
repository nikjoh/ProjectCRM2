function AddContact() {
 var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var company = document.getElementById("company").value;

var myBody = document.getElementById("tableBody");
var myTR = document.createElement("tr");


var myTDFirstName = document.createElement("td");
myTDFirstName.innerHTML = firstName;
myTR.appendChild(myTDFirstName);

var myTDLastName = document.createElement("td");
myTDLastName.innerHTML = lastName;
myTR.appendChild(myTDLastName);

var myTDCompany = document.createElement("td");
myTDCompany.innerHTML = company;
myTR.appendChild(myCompany);

myBody.appendChild(myTR);
}


GetContacts(){
    $.getJSON('http://localhost:62111/contact.aspx').done(function (data) {

        $("#myTableBody").children().remove();

        var stringToAppend = ""
        for (var i = 0; i < data.length; i++) {
            stringToAppend += "<tr><td>" + data[i].ID + "</td><td>" + data[i].FirstName + "</td>" + "<td>" + data[i].LastName + "</td>";
            //stringToAppend += "<td>" + data[i].LastName + "</td>";
            //stringToAppend += "<td>" + data[i].Firstname + "</td>";

            //if (data[i].Adresses) {


            //    for (var j = 0; j < data[i].Adresses.length; j++) {
            //        stringToAppend += "<td>" + data[i].Adresses[j].Street + "</td><td>" + data[i].Adresses[j].City + "</td>";
            //    }
            //}

            stringToAppend += "</tr>";
        }
        //stringToAppend += "";

        $("#myTableBody").append(stringToAppend);

    });
}
