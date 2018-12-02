google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);
    
    
      function drawChart(jsonData) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');
       filterPreReqs();

        // For each orgchart box, provide the name, manager, and tooltip to show.
        var i;
        for(i = 0; i < jsonData[0].COURSES.length; i++){
            
          data.addRows([
          [jsonData[0].COURSES[i].code, jsonData[0].COURSES[i].prerequisites, '']
          ]);
        }

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        var options = {
            allowHtml:true,
            allowCollapse:true,
            // nodeClass:"classNode"
            
            };
        chart.draw(data, options);

        //EVENT LISTENER FOR THE POPULATE
        google.visualization.events.addListener(chart, 'select', popDescription);
              
function popDescription(){

    
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var courseCode = data.getValue(selectedItem.row, 0);
    //   alert(data.getValue(selectedItem.row, 3));

    //CREATING POP UP
    var popUp = document.createElement('div');
    popUp.setAttribute('class', "popup");
    popUp.textContent = courseCode;
    var divsection = document.getElementById("description");
    divsection.appendChild(popUp);
    popUp.classList.toggle("show");
    
    // createDescription(topping);
    }

}

function createDescription(code){


}

      function filterPreReqs(){
          var x;
          for(i = 0; i < cisejson[0].COURSES.length; i++){
            cisejson[0].COURSES[i].code.replace(/ /g, '');
            cisejson[0].COURSES[i].prerequisites = cisejson[0].COURSES[i].prerequisites.replace(/ /g, '');

            // cisejson[0].COURSES[i].prerequisites = cisejson[0].COURSES[i].prerequisites.replace(/(?![A-Z])./g, '');
            var x = cisejson[0].COURSES[i].prerequisites.search("Prereq:") + 7;
              
            cisejson[0].COURSES[i].prerequisites = cisejson[0].COURSES[i].prerequisites.slice(x,x+7);
          }
      }




  


}