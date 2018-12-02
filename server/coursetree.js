    //     google.charts.load('current', {packages:["orgchart"]});
    //     google.charts.setOnLoadCallback(drawChart);
      
      
    //   function drawChart(courses) {
    //     // let coursesArray = updateCourses();
    //     let coursesArray = courses;

    //     var data = new google.visualization.DataTable();
    //     data.addColumn('string', 'Name');
    //     data.addColumn('string', 'PreReq');
    //     data.addColumn('string', 'ToolTip');
    // //    filterPreReqs();

    //     // For each orgchart box, provide the name, manager, and tooltip to show.
    //     var i;
    //     for(i = 0; i < coursesArray[0].COURSES.length; i++){
            
    //       data.addRows([
    //       [coursesArray[0].COURSES[i].code, coursesArray[0].COURSES[i].prerequisites, '']
    //       ]);
    //     }

    //     // Create the chart.
    //     var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    //     // Draw the chart, setting the allowHtml option to true for the tooltips.
    //     chart.draw(data, {allowHtml:true});
    //   }

    //   function filterPreReqs(){
    //       var x;
    //       for(i = 0; i < coursesArray[0].COURSES.length; i++){
    //         coursesArray[0].COURSES[i].code.replace(/ /g, '');
    //         coursesArray[0].COURSES[i].prerequisites = coursesArray[0].COURSES[i].prerequisites.replace(/ /g, '');

    //         // coursesArray[0].COURSES[i].prerequisites = coursesArray[0].COURSES[i].prerequisites.replace(/(?![A-Z])./g, '');
    //         var x = coursesArray[0].COURSES[i].prerequisites.search("Prereq:") + 7;
              
    //         coursesArray[0].COURSES[i].prerequisites = coursesArray[0].COURSES[i].prerequisites.slice(x,x+7);
    //       }
    //   }

      //Need a CORS Request
      // var departmentCodes = require('departmentCodes');
      var departmentCodes = JSON.parse(departmentCodes.json);
      var i;
        for(i = 0; i < departmentCodes.departments.length; i++){
      function updateCourses(){

        let departmentCode = departmentCodes.departments[i]
        // let departmentCode = 19140000; //ECE = 19050000, CISE = 19140000
        let UFSemester = 2191;    //Need to figure out all the semester codes
        let UFLink = "https://one.uf.edu/apix/soc/schedule/?category=CWSP&class-num=&course-code=&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=" + departmentCode +"&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-control-number=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=UGRD&term="+ UFSemester + "&wr-2000=&wr-4000=&wr-6000=&writing="
        
        let xhr = createCORSRequest('GET', UFLink);
        // let xmlrequest = new XMLHttpRequest();
        // xhr.open('GET', UFLink, true);
        if (!xhr) {
            alert('CORS not supported');
            return;
          }
        let coursesArray;
  
        
          //GATHERING THE JSON FROM UF
        xhr.onload = function(){
            coursesArray = JSON.parse(this.response);
            drawChart(coursesArray);
        };
        
      
        xhr.send();

        alert(departmentCode);
      }
        // return coursesArray;

      }

      function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
          // XHR for Chrome/Firefox/Opera/Safari.
          xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
          // XDomainRequest for IE.
          xhr = new XDomainRequest();
          xhr.open(method, url);
        } else {
          // CORS not supported.
          xhr = null;
        }
        return xhr;
      }