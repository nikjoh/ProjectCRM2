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

