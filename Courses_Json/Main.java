import java.util.ArrayList;
import java.util.Scanner;
import java.io.*;
import java.util.HashMap;
// import java.ioFileNotFoundException;


public class Main {
    //CODE HAS TO BE FIXED AND COSMETICALLY IMPROVED

    public static void main(String[] args)throws FileNotFoundException, IOException{
        Scanner Input = new Scanner(System.in);
        String departmentCode;

        // System.out.println("Input the department code:"); //ECE = 19050000, CISE = 19140000
        departmentCode = Input.next();


        String URL = "https://one.uf.edu/apix/soc/schedule/?category=CWSP&class-num=&course-code=&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=" + departmentCode +"&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-control-number=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=UGRD&term=2188&wr-2000=&wr-4000=&wr-6000=&writing=";
        URLSetter printURL = new URLSetter(URL);

        String mainURL = printURL.getURL();
        // System.out.println(mainURL);

        Department department = new Department(mainURL);
        department.Count(mainURL);

        //AUTO IMPORT DOES NOT WORK
        HashMap<String,String> DepartmentTables = getCodeAndName();
        // DepartmentTables.forEach((_code, _name)->{
        //     departmentCode = _code;
        //     URL = "https://one.uf.edu/apix/soc/schedule/?category=CWSP&class-num=&course-code=&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=" + departmentCode +"&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-control-number=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=UGRD&term=2188&wr-2000=&wr-4000=&wr-6000=&writing=";
        //     printURL = new URLSetter(URL);
        //     mainURL = printURL.getURL();

        //     department = new Department(mainURL);
        //     department.Count(mainURL);
        //     ExportJson(mainURL, departmentCode);
        // });
        

        ExportJson(mainURL, departmentCode);
        ArrayList<String> encodedString = department.getEncodedStrings();
        for(String string : encodedString){
            // System.out.println(string);
            // ExportJson()
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
    public static void ExportJson(String json, String fileName)throws FileNotFoundException, IOException{
        FileWriter file = new FileWriter("./JsonFiles/" + fileName + ".json");
        PrintWriter printer = new PrintWriter(file);
        printer.println(json);

    }

    public static HashMap<String, String> getCodeAndName()throws FileNotFoundException{
        File file = new File("./DepartmentCodes.txt");
        String bigString = "";
        Scanner scan = new Scanner(file);
        while(scan.hasNextLine()){
            bigString = bigString + scan.nextLine();
        }
        // System.out.println(bigString);
        HashMap<String, String> departmentTable = new HashMap<>();

        char[] bigArray = bigString.toCharArray();
        String Code;
        String Name;
        for(int i = 0; i < bigString.length(); i++){
            Code = bigString.substring(bigString.indexOf("CODE")+7, bigString.indexOf(","));
            Name = bigString.substring(bigString.indexOf("DESC")+8, bigString.indexOf("\"",bigString.indexOf("DESC")+9));
            // System.out.println(Code + Name);
            bigString = bigString.substring(bigString.indexOf("},")+3);

            departmentTable.put(Code, Name);
        }



        // Code = "";
        // Name = "";
        // bool dpt = true;
        // bool CODE = false;
        // bool DESC = false;
        // bool DESCStart = false;
        // for(char Char : bigArray){
        //     if(Char == ':' & !dpt &){
        //         CODE = true;

        //     }
        //     else if(Char == ':' & dpt){
        //         dpt = false;
        //     }
        //     if(CODE){
        //         Code = Code + Char;
        //     }
        //     if(Char == ','){
        //         CODE = false;
        //         DESC = true;
        //     }
        //     if(Char == ':' & DESC)

        // }






        return departmentTable;
    }
}
