function getDepartment(){
    var e = document.getElementById("Department");
    var strUser = e.options[e.selectedIndex].value;
    //console.log(strUser);
    document.getElementById('dep').innerHTML = strUser;
    document.getElementById('courseView').style = "display: block;";
}

var departments = [
    "Chemistry", "Mathematics", "Zoology"
];
var Department = document.getElementById("Department");
for (var k = 0; k < departments.length; k++) {
    var option = document.createElement("OPTION");
    option.innerHTML = departments[k];
    console.log(option.innerHTML);
    Department.options.add(option);
}