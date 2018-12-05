var code="";
var name="";
var credits="";

function populateTable(){
    code = document.getElementById("description_code").innerHTML;
    code = code.replace('Code: ','');
    name = document.getElementById("description_name").innerHTML;
    name = name.replace('Course Name: ','');
    credits = document.getElementById("description_credits").innerHTML;
    credits = credits.replace('Credits: ','');
    console.log(code + name + credits);

    document.getElementById("newCode").innerHTML = code;
    document.getElementById("newName").innerHTML = name;
    document.getElementById("newCredits").innerHTML = credits;

}