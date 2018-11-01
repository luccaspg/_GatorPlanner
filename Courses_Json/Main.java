import java.util.ArrayList;
import java.util.Scanner;
import java.io.*;

public class Main {
    //CODE HAS TO BE FIXED AND COSMETICALLY IMPROVED

    public static void main(String[] args){
        Scanner Input = new Scanner(System.in);
        String departmentCode;

        System.out.println("Input the department code:"); //ECE = 19050000, CISE = 19140000
        departmentCode = Input.next();


        String URL = "https://one.uf.edu/apix/soc/schedule/?category=CWSP&class-num=&course-code=&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=" + departmentCode +"&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-control-number=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=UGRD&term=2188&wr-2000=&wr-4000=&wr-6000=&writing=";
        URLSetter printURL = new URLSetter(URL);

        String mainURL = printURL.getURL();
        System.out.println(mainURL);

        Department department = new Department(mainURL);
        department.Count(mainURL);

        ArrayList<String> encodedString = department.getEncodedStrings();
        for(String string : encodedString){
            System.out.println(string);
        }

        ArrayList<Course> CISECourses = defCourses(encodedString);


        for(Course course : CISECourses){
            System.out.println(course.getCodeAndName());
            System.out.println(course.getDescription());
        }
//        try{
//            FileOutputStream text = new FileOutputStream("Courses.txt");
//            text
//        }
//        catch (IOException io){
//            System.out.println("Error");
//        }
//







    }
    public static ArrayList<Course> defCourses(ArrayList<String> courses){
        ArrayList<Course> defArray = new ArrayList<>();
        for(String string : courses){
            Course newCourse = new Course();
            newCourse.setCourse(string);
            defArray.add(newCourse);
        }
        return defArray;
    }
}
