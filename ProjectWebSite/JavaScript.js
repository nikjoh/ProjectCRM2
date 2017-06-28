


function GetContacts(){
    $.getJSON('http://localhost:62111/KAB.aspx').done(function (data) {

        $("#tableBody").children().remove();

        var stringToAppend = "";
        for (var i = 0; i < data.length; i++) {
            stringToAppend += "<tr><td>" + data[i].FirstName + "</td><td>" + data[i].LastName + "</td>" + "<td>" + data[i].Company + "</td>";
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

        $("#tableBody").append(stringToAppend);

    });
}
