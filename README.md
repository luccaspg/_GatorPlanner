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
