Gator Planner - Web Apps Project
//manager user button 
//html
<div id="Users" class="modal">
		<div class="container">
			<div class="imgcontainer">
				<span onclick="document.getElementById('Users').style.display='none'" class="close" title="Close">&times;</span>
			</div>
			<!--<form name="">-->
				<!--<input type="text" placeholder="Update First Name" id="updateF">-->
				<!--<input type="text" placeholder="Update Last Name" id="updateL">-->
				<!--<input type="password" placeholder="Update password" id="updateP">-->
				<!--<input class="authenticate" type="button" onclick="" value="Update">-->
			<!--</form>-->
		</div>
	</div>
  
  //function call hide 
  function unhideU(){
    document.getElementById('Users').style = "display: block;";
}

//next button
	<div id="Course" class="modal">
		<div class="container">
			<div aligin="left" class="imgcontainer">
				<span onclick="document.getElementById('Course').style.display='none'" class="close" title="Close">&times;</span>
			</div>
			<div>
				<center><label>Update Course</label></center>
			<form name="">
				<input type="text" placeholder="e.g. CDA3101 type CDA" id="updateId">
				<input type="text" placeholder="e.g. CDA3101 type 3101" id="updateN">
				<input type="password" placeholder="Update Course Name" id="updateName">
				<input type="password" placeholder="Update Pre-reqs" id="updatePre">
				<input type="password" placeholder="Update Description" id="updateDes">
				<input class="authenticate" type="button" onclick="" value="Update">
			</form>
			</div>
		</div>
	</div>

<input type ="button" class="btn" onclick="unhideU()" value="Manager Courses"/>
