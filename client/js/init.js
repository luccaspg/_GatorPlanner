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
var globalHost = "http://localhost:8080/course/";
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

    var url = "http://localhost:8080/course/user/" + ufemail;
	var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    
    xhr.onload = function(){
        var data = JSON.parse(this.response);
        if(password == data[0].password){
            document.getElementById("User").style.display = 'block';
            document.getElementById("logout").style.display='block';
            alert("login success");
            globaluser = data;
            // testuser = data;
            //popup
            var a = document.getElementById("profPop");
           // var userButton = document.createElement('button');
           //  userButton.setAttribute('class', 'btn');
           //  userButton.setAttribute('id','profile');
           //  userButton.setAttribute=('onclick','profilePopup();' );
           //  userButton.onclick=function(){profilePopup();};
           //  userButton.textContent = "Profile";
           //  right.appendChild(userButton);
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


    // var userButton = document.createElement('button');
    // userButton.setAttribute('class', 'btn');
    // userButton.textContent = "Profile";
    // right.appendChild(userButton);

    if(globaluser[0].isAdmin){
        document.getElementById("adminUser").style.display='block';
        document.getElementById("upCourse").style.display='block';
        // var adminButton = document.createElement('button');
        // adminButton.setAttribute('class', 'btn');
        // adminButton.textContent = "Admin";
        // right.appendChild(adminButton);
        //
        // adminButton.setAttribute('onclick', 'adminFunc()');
    }
    var addButton = document.createElement('button');
    addButton.setAttribute('class', 'btn');
    addButton.textContent = "New Table";
    addButton.setAttribute("onclick", 'createNewTable()');
    right.appendChild(addButton);
    
    populateTable();
    // right.appendChild(tablesdiv);

    // var tables = document.createElement('table');
    // var headings = document.createElement('tr');
    // var name = document.createElement('th');
    // name.textContent = "Course Name";
    // var code = document.createElement('th');
    // code.textContent = "Code";
    // var credits = document.createElement('th');
    // credits.textContent = "Credits";
    // var deleteBtn = document.createElement('th');
    // deleteBtn.textContent = "Delete";


    // tables.appendChild(headings);
    // headings.appendChild(name);
    // headings.appendChild(code);
    // headings.appendChild(credits);
    // headings.appendChild(deleteBtn);
    // tablesdiv.appendChild(tables);






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

// function clearTables(){
//     var elem = document.getElementById;
//     elem.parentNode.removeChild(elem);
//     return false;
//     }
// }

function adminFunc(){
    cleanRight();
    var right = document.getElementById('right_side');
    // var tablesdiv = document.createElement('div');
   
    // right.appendChild(tablesdiv);


    // var userButton = document.createElement('button');
    // userButton.setAttribute('class', 'btn');
    // userButton.setAttribute('id','profile');
    // userButton.setAttribute('onclick','profilePopup();' );
    // userButton.onclick=function(){profilePopup();};
    // userButton.textContent = "Profile";
    // right.appendChild(userButton);

    if(globaluser[0].isAdmin){

        // var adminButton = document.createElement('button');
        // adminButton.setAttribute('class', 'btn');
        // adminButton.textContent = "Tables";
        // right.appendChild(adminButton);
        //
        // adminButton.setAttribute('onclick', 'populateTables()');
    }
    var addButton = document.createElement('button');
    addButton.setAttribute('class', 'btn');
    addButton.textContent = "New Table";
    addButton.setAttribute('onclick', 'createNewTable()');
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
//view modal
function profilePopup(){
    document.getElementById('profPop').style = "display: block;";
}
function unhideUser(){
    document.getElementById('Update Account').style = "display: block;";
}

function updateUser(){
    
    email = globaluser[0].email;


    var url = "http://localhost:8080/course/user/" + email;
    console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function(){

    var data = JSON.parse(xhr.response);
    console.log(data);

    var id = data[0]._id;
    console.log(id);
    updateUsername(id);
	};
	
	xhr.send();
}

function updateUsername(_id) {

    fname = document.getElementById("updatefn").value;
    lname = document.getElementById("updateln").value;
    password = document.getElementById("updatepsw").value;



    var url = "http://localhost:8080/course/user/" + _id + "/" + fname + "/" + lname + "/" + password;
    console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', url, true);

	xhr.onload = function(){

    document.getElementById("updatefn").value = "";
    document.getElementById("updateln").value = "";
    document.getElementById("updatepsw").value = "";

    alert("User succesfully updated!")

	};
	
	xhr.send();
}
function unhideAdmin(){
    document.getElementById('Users').style = "display: block;";
}
function unhideCourse(){
    document.getElementById('Course').style = "display: block;";
}


function getAllEmails() {
    $( ".printEmails" ).empty();
    var url = "http://localhost:8080/course/e";
    console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function(){
        document.getElementById("printEmails").innerHTML = "";
        var data = JSON.parse(xhr.response);

        for (var i = 0; i < data.length; i++){
            var item = data[i];
            var ul = document.getElementById("printEmails");
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        }
	};
	
    xhr.send();
}

function deleteUser(){
    
    var emailReq = document.getElementById("emailDelete").value;

    var url = "http://localhost:8080/course/user/" + emailReq;
    console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function(){

        var data = JSON.parse(xhr.response);
        console.log(data);

        var id = data[0]._id;

        deleteUsername(id);
	};
	
	xhr.send();
}

function deleteUsername(_id) {

    var url = "http://localhost:8080/course/user/" + _id;
    console.log(url);
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', url, true);

    document.getElementById("emailDelete").value =  "";
    alert("User succesfully updated!");

	xhr.send();
}

function updateCourse() {

    var selectedDepartment = getDepartmentFilter();
    var courseToBeUpdated = document.getElementById("updateCourseSel").value;
    var courseName = document.getElementById("updateName").value;
    var courseId = document.getElementById("updateId").value;
    var courseCode = document.getElementById("updateN").value;
    var courseCredits = document.getElementById("updateCredits").value;
    var courseDes = document.getElementById("updateDes").value;

    var prereq = "Prereq: " + courseId + " " + courseCode;

    var url = "http://localhost:8080/course/" + selectedDepartment + "/" + courseToBeUpdated + "/" + courseName + "/" + prereq + "/" + courseCredits + "/" + courseDes;
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', url, true);

	xhr.onload = function(){

        document.getElementById("updateCourseSel").value = "";
        document.getElementById("updateName").value= "";
        document.getElementById("updateId").value= "";
        document.getElementById("updateN").value= "";
        document.getElementById("updateCredits").value = "";
        document.getElementById("updateDes").value = "";

    alert("Course succesfully updated!")

	};
	
	xhr.send();
}

function getDepartmentFilter(){
	var newCode;
    var newValue = document.getElementById('filterDepartment').value;
    console.log(newValue);
    for (var i = 0; i < departmentCodes.length; i++){
        console.log(departmentCodes[i].CODE);
        if (departmentCodes[i].DESC == newValue){
            newCode = departmentCodes[i].CODE;
			return newCode;
        }
    }
}
function createNewTable(){
    var userID;

    var xhr = new XMLHttpRequest();
    var url = 'user/' + globaluser[0].email;
    xhr.open('GET', globalHost + url, true );
    console.log(globalHost + url);

    xhr.onload = function(){
        userID = JSON.parse(this.response)
        var request = new XMLHttpRequest();
        request.open('POST', globalHost + 'table/' + userID[0]._id, true);
        request.onload = function(){
            var tableID = JSON.parse(this.response);
            console.log(tableID);
            createTableElement(tableID._id);
        }
        request.send();
        // alert('table created');
        
    };
    xhr.send();
}


function populateTable(){
    // clearTables();
    var tableList;
    var div = document.getElementById('tables_place');

    
    var userID;
    var xhr = new XMLHttpRequest();
    var url = 'user/' + globaluser[0].email;
    xhr.open('GET', globalHost + url, true );

    xhr.onload = function(){
        userID = JSON.parse(this.response);
        var request = new XMLHttpRequest();
        request.open('GET', globalHost + 'table/' + userID[0]._id, true);
        request.onload =  function() {
            tableList = JSON.parse(this.response);
            console.log(tableList[0]._id);


            for(var i = 0; i < tableList.length; i++){

                createTableElement(tableList[i]._id);
            }

            


        };
        request.send();
    };

    xhr.send();


}
var selectedTable;
function selectTable(id){
    selectedTable = id;
    populateCoursesTable(id);

}

function createTableElement(id){
    console.log(id);
    var div = document.getElementById('right_side');
    var newTable = document.createElement('table');
    var headings = document.createElement('tr');
    var name = document.createElement('th');
    name.textContent = "Course Name";
    //test area
    var select = document.createElement('button');
    select.textContent = 'Select';
    name.appendChild(select);
    select.setAttribute('onclick', 'selectTable(\"' + id + '\")');
    //


    var code = document.createElement('th');
    code.textContent = "Code";
    var credits = document.createElement('th');
    credits.textContent = "Credits";
    var deleteBtn = document.createElement('th');
    var deleteClick = document.createElement('button')
    deleteBtn.appendChild(deleteClick);
    deleteClick.textContent = "Delete";
    deleteClick.setAttribute('onclick', 'deleteTable(\"' + id +'\")');
    newTable.setAttribute('id', id);


    newTable.appendChild(headings);
    headings.appendChild(name);
    headings.appendChild(code);
    headings.appendChild(credits);
    headings.appendChild(deleteBtn);

    // newTable.appendChild(tables);
    // var div = document.getElementById('tables_place');
    div.appendChild(newTable);

    // populateCoursesTable(id)



    
    
}

function deleteTable(id){
    
    // var userID;
    var xhr = new XMLHttpRequest();
    var url = 'table/' + id;
    console.log(globalHost + url);
    xhr.open('DELETE', globalHost + url, true );

    // xhr.onreadystatechange = function(){
    //     // let user = JSON.parse(this.response);
    //     if(this.readyState == 4 && this.status == 200){
    //         populateTable();

    //     }

    xhr.send();

    var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
    return false;

    

}

function populateCoursesTable(id){
    var table = document.getElementById(id);

    // while (table.firstChild) {
    // table.removeChild(table.firstChild);
    // }

    var row = document.createElement('tr')
    table.appendChild(row);
    var name = document.createElement('td');
    var code = document.createElement('td');
    var credits = document.createElement('td');

    var removeCourse = document.createElement('td');
    var removeBtn = document.createElement('button');

    var xhr = new XMLHttpRequest();
    var url = 'lists/' + id;
    console.log(globalHost + url);
    xhr.open('GET', globalHost + url, true );

    xhr.onload = function(){
        
        var list = JSON.parse(this.response);
        console.log(this.response);

        //clearing
        // for(var i = 0; i < list.length - 1; i++){
        //     table.removeChild(table.lastChild)
        // }
        //clean
        for(var i = 0; i < list.length; i++){
            name.textContent = list[i].course.name;
            code.textContent = list[i].course.deptCode;
            credits.textContent = list[i].course.credits;

            removeBtn.textContent = "X";
            removeCourse.appendChild(removeBtn);
            removeBtn.setAttribute(deleteCourse(list[i]._id));
            
            row.appendChild(name);
            row.appendChild(code);
            row.appendChild(credits);
            //append the delete element
            name = document.createElement('td');
            code = document.createElement('td');
            credits = document.createElement('td');
            row = document.createElement('tr')
            table.appendChild(row);

            removeBtn = document.createElement('button');
            removeCourse = document.createElement('td');


        }
        
    }


    xhr.send();

}

function courseToTable(id){
    var table = document.getElementById(toString(id));


}

function deleteCourse(ID){

// var code = "CEN3031";
// var credits = "4";
// var name = "joseph order a pizza";

// var code = document.getElementById('description_code').value;
// var name = document.getElementById('description_name').value;
// var credits = document.getElementById('description_credits').value;



var url = globalHost + "/lists/" + ID;
   //  var course = document.getElementById('COURSE');
   //  var name = course.elements[0].value;
   //  // alert(ufemail);
   //  var code = course.elements[1].value;
   //  var credits = course.elements[2].value;
   //  var ID = 'test';
   //  // alert(ufemail + password);
   // // var testfake = false;

   //  var url = globalHost + '/list/' + ID '/' + code + '/' + credits + '/' + name;
   var xhr = new XMLHttpRequest();
   xhr.open('DELETE', url, true);
    
   xhr.send();
}
function createCourse(){

// var code = "CEN3031";
// var credits = "4";
// var name = "joseph order a pizza";

// var code = document.getElementById('description_code').value;
// var name = document.getElementById('description_name').value;
// var credits = document.getElementById('description_credits').value;

var code = document.getElementById("description_code").innerHTML;
var name = document.getElementById('description_name').innerHTML;
var credits = document.getElementById('description_credits').innerHTML;

code = code.slice(5);
name = name.slice(12);
credits = credits.slice(8);

var url = "http://localhost:8080/course/list/" + selectedTable + "/" + code + "/" + credits + "/" + name;
   //  var course = document.getElementById('COURSE');
   //  var name = course.elements[0].value;
   //  // alert(ufemail);
   //  var code = course.elements[1].value;
   //  var credits = course.elements[2].value;
   //  var ID = 'test';
   //  // alert(ufemail + password);
   // // var testfake = false;

   //  var url = globalHost + '/list/' + ID '/' + code + '/' + credits + '/' + name;
   var xhr = new XMLHttpRequest();
   xhr.open('PUT', url, true);
    
   xhr.send();
}

function makeAdmin(){
    
    var emailAdmin = document.getElementById("giveAdmin").value;

    var url = "http://localhost:8080/course/user/" + emailAdmin;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function(){

        var data = JSON.parse(xhr.response);
        console.log(data);

        var id = data[0]._id;
        console.log(id);

        grantAdmin(id);
	};
	
	xhr.send();
}

function grantAdmin(_id) {

    var url = "http://localhost:8080/course/user/admin/" + _id;
    
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', url, true);

    xhr.onload = function() {
        document.getElementById("giveAdmin").value =  "";
        alert("User Granted Admin");
    }

	xhr.send();
}