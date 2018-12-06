function unhideL(){
    document.getElementById('login').style = "display: block;";
    document.getElementById('register').style = "display: none";
}
function unhideR(){
    document.getElementById('register').style = "display: block;";
    document.getElementById('login').style = "display: none";
}
var view = true;
var globaluser;
var testuser;
// Create a "close" button and append it to each list item
//var myNodelist = document.getElementsByTagName("LI");
//var i;
//for (i = 0; i < myNodelist.length; i++) {
  //  var span = document.createElement("SPAN");
   // var txt = document.createTextNode("\u00D7");
   // span.className = "close";
    //span.appendChild(txt);
   // myNodelist[i].appendChild(span);
//}

// Click on a close button to hide the current list item
//var close = document.getElementsByClassName("close");
//var i;
//for (i = 0; i < close.length; i++) {
  //  close[i].onclick = function() {
    //    var div = this.parentElement;
      //  div.style.display = "none";
    //}
//}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function viewSelect() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// function displayInfo(info){
//     document.getElementById(info).classList.toggle("show");
//     // info.classList.toggle('show');

// }


function loginFunc(){
    var user = document.getElementById('loginForm');
    var ufemail = user.elements[0].value;
    // alert(ufemail);
    var password = user.elements[1].value;

    // alert(ufemail + password);
    var testfake = false;
    if(ufemail == 'test@ufl.edu'){
        ufemail = 'josephvlam@ufl.edu';
        testfake = true;
    }
    var url = "http://localhost:8080/course/user/" + ufemail;
	var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    
    xhr.onload = function(){
        var data = JSON.parse(this.response);
        if(password == data[0].password){
            alert("login success");
            globaluser = data;
            // testuser = data;
            if(testfake){
                globaluser[0].isAdmin = false;
            }
            populateTables();
        }
        
        else{
            alert('wrong information');
        }
    }
    xhr.send();
}


function populateTables(){
    cleanRight();
    var right = document.getElementById('right_side');
    var tablesdiv = document.createElement('div');
   
    // right.appendChild(tablesdiv);


    var userButton = document.createElement('button');
    userButton.setAttribute('class', 'btn');
    userButton.textContent = "Profile";
    right.appendChild(userButton);

    if(globaluser[0].isAdmin){
        var adminButton = document.createElement('button');
        adminButton.setAttribute('class', 'btn');
        adminButton.textContent = "Admin";
        right.appendChild(adminButton);

        adminButton.setAttribute('onclick', 'adminFunc()');
    }
    var addButton = document.createElement('button');
    addButton.setAttribute('class', 'btn');
    addButton.textContent = "New Table";
    addButton.setAttribute()
    right.appendChild(addButton);
    
    right.appendChild(tablesdiv);

    var tables = document.createElement('table');
    var headings = document.createElement('tr');
    var name = document.createElement('th');
    name.textContent = "Course Name";
    var code = document.createElement('th');
    code.textContent = "Code";
    var credits = document.createElement('th');
    credits.textContent = "Credits";
    var deleteBtn = document.createElement('th');
    deleteBtn.textContent = "Delete";


    tables.appendChild(headings);
    headings.appendChild(name);
    headings.appendChild(code);
    headings.appendChild(credits);
    headings.appendChild(deleteBtn);
    tablesdiv.appendChild(tables);






}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function getDepartment(){
    var e = document.getElementById("Department");
    var strUser = e.options[e.selectedIndex].value;
    //console.log(strUser);
    document.getElementById('dep').innerHTML = strUser;
}

var departments = [
    "Chemistry", "Mathematics", "Zoology"
];


var courses = '{ "Chemistry" : [' +
    '{ "CourseCode": "CHM2211" ,"Name": "Chem1" , "Credits":"3" },' +
    '{ "CourseCode": "CHM2212" ,"Name": "Chem2" , "Credits":"3" },' +
    '{ "CourseCode": "CHM4100" ,"Name": "Org Chem1" , "Credits":"5" } ]}';

var obj = JSON.parse(courses);
//var ojb2 = JSON.parse(departments);
//function newElement() {

    for (var j = 0; j < obj.Chemistry.length; j++) {
        console.log(obj.Chemistry[j].CourseCode);

        var li = document.createElement("li");
        var li2=  document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");

        var name =  obj.Chemistry[j].Name;
        var code = obj.Chemistry[j].CourseCode;
        var credit = obj.Chemistry[j].Credits;

        var n = document.createTextNode(name);
        var co = document.createTextNode(code);
        var cr = document.createTextNode(credit);

        li.appendChild(n);
        li2.appendChild(co);
        li3.appendChild(cr);

        document.getElementById("cn").appendChild(li);
        document.getElementById("cc").appendChild(li2);
        document.getElementById("c").appendChild(li3);


        var button = document.createElement("button");
        button.className = "close";
        button.innerHTML = "X";
        li4.appendChild(button);
        document.getElementById("d").appendChild(li4);


        //var span = document.createElement("SPAN");
        //var txt = document.createTextNode("\u00D7");
        //span.className = "close";
        //span.appendChild(txt);
        //document.getElementById("d").appendChild(span);
        //var d = document.createElement("li");
        //var span = document.createElement("SPAN");
        //var txt = document.createTextNode("\u00D7");
        //d.className = "close";
        //(d).appendChild(txt);
        //doucument.getElementById(d).appendChild(d);
        //li.appendChild(span);

        //for (i = 0; i < close.length; i++) {
          //  close[i].onclick = function () {
            //    var div = this.parentElement;
              //  div.style.display = "none";
            //}
        //}
    }
//}
/*var Department = document.getElementById("Department");
for (var k = 0; k < departments.length; k++) {
    var option = document.createElement("OPTION");
    option.innerHTML = departments[k];
    console.log(option.innerHTML);
    Department.options.add(option);
}*/

function cleanRight(){
    let myNode = document.getElementById("right_side");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
}

function adminFunc(){
    cleanRight();
    var right = document.getElementById('right_side');
    // var tablesdiv = document.createElement('div');
   
    // right.appendChild(tablesdiv);


    var userButton = document.createElement('button');
    userButton.setAttribute('class', 'btn');
    userButton.textContent = "Profile";
    right.appendChild(userButton);

    if(globaluser[0].isAdmin){
        var adminButton = document.createElement('button');
        adminButton.setAttribute('class', 'btn');
        adminButton.textContent = "Tables";
        right.appendChild(adminButton);

        adminButton.setAttribute('onclick', 'populateTables()');
    }
    var addButton = document.createElement('button');
    addButton.setAttribute('class', 'btn');
    addButton.textContent = "New Table";
    right.appendChild(addButton);


    var courseCode = document.getElementById("description_description").innerHTML;
		if (courseCode) {
        // var courseCode = data.getValue(selectedItem.row, 0);
        

    var courseForm = document.createElement('form');
    courseForm.setAttribute('id', 'course_form');

    right.appendChild(courseForm);

    courseForm.textContent = "Description:"
    courseForm.appendChild(document.createElement('br'));
    var code = document.createElement('input');
    code.setAttribute('type', 'text');
    code.setAttribute('value', courseCode);
    courseForm.appendChild(document.createElement('br'));

    // courseForm.appendChild()
    // courseForm.textContent = courseForm.textContent + "Name:"
    // courseCode = document.getElementById('description_name').innerHTML;
    // // courseForm.textContent = "Name:"
    // courseForm.appendChild(document.createElement('br'));
    // code = document.createElement('input');
    // code.setAttribute('type', 'text');
    // code.setAttribute('value', courseCode);
    courseForm.appendChild(code);

    var submitBtn = document.createElement("input");
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'submit');
    submitBtn.setAttribute('onclick', 'changeCourseCode()');
    courseForm.appendChild(submitBtn);
    
    // right.appendChild(tablesdiv);
        }

}


function changeCourseCode(){
    //TODO POST COURSE FUNCTION

    var courseForm = document.getElementById('course_form');
    var courseCode = courseForm.elements[0].value; //should have the text field variable

}


//TODO
function registerFunc(){
    var register = document.getElementById('registerLink');
    var ufemail = register.elements[2].value;
    if(ufemail.includes('@ufl.edu')){
        alert(ufemail + ' successfully registered!');
    }
    else{
        alert('register an UF email');
    }
}