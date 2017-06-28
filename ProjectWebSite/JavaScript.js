//AddContact(){


//}

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

//function DeleteContact() {

//}

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