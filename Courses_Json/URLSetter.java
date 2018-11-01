import java.util.*;
import java.net.*;
import java.io.*;
public class URLSetter {

    private static String urlPAge;

    public URLSetter(String url){
        printURLString(url);
    }
    public static void printURLString(String url) {
        try {
            String urlPage = setURL(url);  //"https://one.uf.edu/apix/soc/schedule/?category=CWSP&class-num=&course-code=&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=19050000&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-control-number=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=UGRD&term=2188&wr-2000=&wr-4000=&wr-6000=&writing="
            System.out.println(urlPage);
        }
        catch (IOException e){
            System.out.println("WrongInput");
        }

    }

    public static String getURL(){
        return urlPAge;
    }





    public static String setURL(String URL) throws IOException{

        URL StatPage = new URL(URL);
        URLConnection Page = StatPage.openConnection();
        InputStream InputPage = Page.getInputStream();

        BufferedReader ReadPage = new BufferedReader(new InputStreamReader(InputPage));

        String PageLines = null;
        PageLines = ReadPage.readLine();

        urlPAge = PageLines;

        return PageLines;
    }
}
