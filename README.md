Gator Planner - Web Apps Project
Admin info: admin@ufl.edu pass "admin" (Has the ability to grant users admin privileges)
Student info: mirandacraghead@ufl.edu pass "a" (Or register your own user)

CRUD operations 
USER
	-create a user
	-read a course in tree/list view
	-update user information
	-add/edit/delete courses to semester planner
ADMIN	
	-admin update courses
	-read a course in tree/list view
	-grant other users as admins 
	-delete users 
	-and update his/her information 
	
Deployed on Heroku
Sticked with the mean stack as the technology stack, however due to problems with AngularJS, transitioned more towards vanilla javascript for the front end.
Added some additonal features not mentioned in our wireframes such as the implementation/look of the list view 
Added more detail to the admin page with the additional buttons. However kept to the overall look and feel of the wireframes. 

Stuck with a single web application as to provide ease when planning courses. We felt it would be more effort to switch through multiple pages than just stay on one page and have all functions within. Defined the original admin manually within the databse. However, any admin can grant any users admin privileges. This was a security measure as we didn't want students updating courses or deleting users. We have blocked out elements from the page based on your status as an admin/student.  

Tree/List View
Some requests to the UF API return empty departments. So some departments in the filter may not respond with courses.

When updating a course as an admin, reclick the go button next to the tree filter to refresh the tree view and to see the updated course.
When subtmitting the update course form, changing the prerequitsites will change where the course will be drawn in the tree. Leaving the field empty will result in a standalone node.

When adding a course to your planner, select the table select button you want to add to. Then you can click on the add button below the tree (once clicking on a tree node) to add to the table. Clicking the delete marker next to a course will delete that corresponding course. Adding and deleting the courses will reset the drop down of the table, so you must select the table again to see the changes.
