import java.util.HashMap;

public class Course {

    private String CourseCode;
    private String CourseName;
    private String Description;
    private Course[] PreRequisites;


    //HashMap<String, String> Courses;


    public void setCourse(String course){

        int firstIndex = course.indexOf('"') + 1;
        int secondIndex = course.indexOf('"', firstIndex +1);
        this.CourseCode = course.substring(firstIndex, secondIndex);

        firstIndex = course.indexOf("name") + 7;
        secondIndex = course.indexOf("termInd", firstIndex + 1) - 3;
        this.CourseName = course.substring(firstIndex, secondIndex);

        firstIndex = course.indexOf("description") + 14;
        secondIndex = course.indexOf("prereq", firstIndex + 1) - 3;
        this.Description = course.substring(firstIndex, secondIndex);


    }

    public String getCodeAndName(){
        String codeAndName = this.CourseCode + " - " + this.CourseName;
        return codeAndName;
    }
    public String getDescription(){
        return this.Description;
    }
    public void setPreRequisites(){

    }

}


























