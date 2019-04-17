import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/Lab11")
public class Lab11 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Integer num1 = Integer.parseInt(request.getParameter("num1"));
        Integer num2 = Integer.parseInt(request.getParameter("num2"));
        Integer num3 = Integer.parseInt(request.getParameter("num3"));
        Integer num4 = Integer.parseInt(request.getParameter("num4"));
        Integer result1 = num1+num2;
        Integer result2 = num3*num4;

//        response.setContentType("text/html");
//        PrintWriter out = response.getWriter();
//        out.println("result 1 = " + result1);
//        out.println("result 2 = " + result2);

        request.setAttribute("result1", result1);
        request.setAttribute("result2", result2);
        request.setAttribute("num1", num1);
        request.setAttribute("num2", num2);
        request.setAttribute("num3", num3);
        request.setAttribute("num4", num4);
        request.getRequestDispatcher("Lab11.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }


}
