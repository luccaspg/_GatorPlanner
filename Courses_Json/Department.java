import java.util.ArrayList;

public class Department {

    private static String departmentString;
    private static int CourseCount;
    private String[] Code = new String[CourseCount];
    private static ArrayList<String> encodedStrings = new ArrayList<String>();

    public Department(String url){
        setURL(url);


    }
    public static ArrayList<String> getEncodedStrings(){
        return encodedStrings;
    }


    public static void setURL(String url){
        departmentString = url;
    }

    public static void Count(String str){


        String codeString = "\"code\"";
        String subString1 = str;//departmentString; //uncomment  for test correction
        String subString2;
        int firstCount = subString1.indexOf(codeString);

        subString2 = subString1.substring(firstCount + codeString.length());    //Deletes everything before "code"

        int secondCount = subString2.indexOf(codeString);
        if(!subString2.contains(codeString)){
            encodedStrings.add(subString2);
            return;
        }
        encodedStrings.add(subString2.substring(0,secondCount));

        subString1 = subString2.substring(secondCount);

        Count(subString1);

        //System.out.println(encodedStrings.get(0));

    }
}
