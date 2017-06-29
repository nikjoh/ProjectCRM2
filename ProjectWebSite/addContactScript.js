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
