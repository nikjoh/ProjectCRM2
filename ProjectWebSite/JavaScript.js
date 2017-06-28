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
//function SortContacts() {

//}

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