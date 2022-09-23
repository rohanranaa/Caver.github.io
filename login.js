function validation(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email==`@gmail.com`&& password=="1234") {
        window.location.href="button.html"
    } 
    else {
        alert("Enter Valid Email ID")
        
    }
}