// Adds a contact to database
function AddContact() {
    var firstName, lastName, company;
    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    company = $("#company").val();

    // check to see if firstname and lastname is set
    if (firstName != "" && lastName != "") {
        // build url parameter
        var params = "?";
        params += jQuery.param({
            'AddContact': 'AddContact',
            'FirstName': firstName,
            'LastName': lastName,
            'Company': company
        });

        // put parameter in url
        $.getJSON('http://localhost:62111/KAB.aspx' + params)
            .done(function (data) {
                
                alert("Contact successfully added!!!");
                $("#firstName").val("");
                $("#lastName").val("");
                $("#company").val("");
        });

    } else {
        alert("You have to type a FirstName and LastName!!");
    }
}

//PrintContacts
function PrintContacts() {
    
    $.getJSON('http://localhost:62111/KAB.aspx').done(function (data) {

        $("#tableBody").children().remove();

        var stringToAppend = "";
        for (var i = 0; i < data.length; i++) {
            
            stringToAppend += "<tr><td>" + data[i].FirstName + "</td><td>" + data[i].LastName + "</td>" + "<td>" + data[i].Company + "</td>";
                    
            stringToAppend += "</tr>";
        }
        //stringToAppend += "";

        $("#tableBody").append(stringToAppend);
        //$("#contactList").show();
    });
}


//function Hide() {
    
//    $("#contactList").hide();

//}
//function SortContacts() {

//}

//function DeleteContact() {

//}

//function UpdateContact() {

//}
