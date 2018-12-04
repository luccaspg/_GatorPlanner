function unhideL(){
    document.getElementById('login').style = "display: block;";
}
function unhideR(){
    document.getElementById('register').style = "display: block;";
}
function semesterTerm(){
    var e = document.getElementById("Semester");
    var strUser = e.options[e.selectedIndex].value;
    //console.log(strUser);
    document.getElementById('term').innerHTML = strUser + " Semester";
}
function treeView(){
    document.getElementById('listView').style = "display: none;";
}
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
function getDepartment(){
    var e = document.getElementById("Department");
    var strUser = e.options[e.selectedIndex].value;
    //console.log(strUser);
    document.getElementById('dep').innerHTML = strUser;
    document.getElementById('courseView').style = "display: block;";
    document.getElementById('listView').style = "display: none;";
}
function getMajor(){
    var e = document.getElementById("major");
    var strUser = e.options[e.selectedIndex].value;
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
var Department = document.getElementById("Department");
for (var k = 0; k < departments.length; k++) {
    var option = document.createElement("OPTION");
    option.innerHTML = departments[k];
    console.log(option.innerHTML);
    Department.options.add(option);
}
function listView(){
    document.getElementById('listView').style = "display: block;";
}
