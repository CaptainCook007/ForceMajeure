var my_mail= "drewry.cooper@gmail.com";
var myPassword = "123456";

var aButtonVar = document.getElementById("enter_button");

aButtonVar.onclick = function () {
        
    var fldMail = document.getElementById("fld_email");
    var email = fldMail.value;
    
    
    var password = document.getElementById("fld_password").value;
    
    alert("The email: " + email + " The pass: " + password);
    
    if(fldMail.value == my_mail){
        console.log("is true");
        return true;
    } else {
        console.log("is false");
         return false;
     }
    
    
	//document.getElementById("fld_email").value = "MyMail@gmail.com";
	
};



function sum_er(num_1,num_2){
	var result = num_1 + num_2;
	return result;
}



