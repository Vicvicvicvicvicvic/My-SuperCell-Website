"use strict"

// Validating form input by using appropriate client-side JavaScript functions 3.2.6 B
var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateEmail(text)
{
    if ( text.value.match(emailFormat) )
    {
        alert("Submitted! O_o")
        // Apply inline form validation by using the focus pseudo-class to appropriate form elements 3.2.3 C
        document.form1.text1.focus();
        return true;
    }

    else
    {
        alert("Please enter a valid Email address!!")
        // Apply inline form validation by using the focus pseudo-class to appropriate form elements 3.2.3 C
        document.form1.text1.focus();
        return false;
    }
}
