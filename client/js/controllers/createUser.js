function createUser(){
    
    fname = document.getElementById("regfname").value;
    lname = document.getElementById("reglname").value;
    email = document.getElementById("regemail").value;
    password = document.getElementById("regpassword").value;


    var url = "http://localhost:8080/course/user/" + email + "/" + fname + "/" + lname + "/" + password;
    console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);

	xhr.onload = function(){
	}
	
	xhr.send();
}