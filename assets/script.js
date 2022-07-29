function validateForm() {
    if( document.myForm.firstname.value == "" ) {
    alert( "First name must be filled!" ); document.myForm.firstname.focus() ; return false;
    }
    if( document.myForm.lastname.value == "" ) {
    alert( "Last name must be filled!" ); document.myForm.lastname.focus() ; return false;
    }
    if( document.myForm.country.value == "-1" ) {
    alert( "Please provide your country!" ); return false;
    } 
    return( true );
}