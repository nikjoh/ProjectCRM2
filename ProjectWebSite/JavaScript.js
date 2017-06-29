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
            var s = "<a href='http://localhost:62111/ViewContact.html?ID=" + data[i].ID + "'>";
            stringToAppend += "<tr><td>" + s + data[i].FirstName + "</a></td><td>" + data[i].LastName + "</td>" + "<td>" + data[i].Company + "</td>";
            //stringToAppend += "<tr><td>" + data[i].FirstName + "</td><td>" + data[i].LastName + "</td>" + "<td>" + data[i].Company + "</td>";
                    
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

function SortContact(sortOut) {

var TableBody = document.getElementById("tableBody");
var RowsInTable = TableBody.children;

for (var i = 0; i < RowsInTable.length; i++) {
	
	for (var j = i + 1; j < RowsInTable.length; j++) {
		var iName = RowsInTable[i].children[sortOut].innerHTML;
		var jName = RowsInTable[j].children[sortOut].innerHTML;

		if (iName.localeCompare(jName) > 0) {
			TableBody.insertBefore(RowsInTable[j], RowsInTable[i]);

		}
	}
}
}

function DeleteContact(id) {

    // create url parameter
    var params = "?";
    params += jQuery.param({
        'DeleteContact': id
    });

    $.getJSON('http://localhost:62111/KAB.aspx' + params)
        .done(function (data) {
            alert("Contact successfully deleted!!");
            //PrintContacts();
        });
}

//function UpdateContact() {

//}

$(document).ready(function () {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        //console.log($(window).scrollTop())

        if ($(window).scrollTop() > 280) {
            $('nav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 281) {
            $('nav').removeClass('navbar-fixed');
        }
    });
});

function PrintContact() {
    var personID = GetURLParameter('ID');

    $.getJSON('http://localhost:62111/OneContact.aspx?PID=' + personID).done(function (data) {

        $('#FN').text(data.FirstName+" "+ data.LastName);
        $('#FTG').text(data.Company);

    });
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}