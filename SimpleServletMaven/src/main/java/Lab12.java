import com.sun.deploy.util.StringUtils;
import mum.Quiz;

import javax.rmi.CORBA.Util;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/lab12")
public class Lab12 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("This is lab 12");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession s = request.getSession();
        if (s.getAttribute("quiz") == null) {
            s.setAttribute("score", 0);
            s.setAttribute("quiz", Quiz.questions);
            s.setAttribute("currentQuestion", 0);
            request.getRequestDispatcher("lab12.jsp").forward(request, response);
        } else {
            if ((int) s.getAttribute("currentQuestion") == 4) {
                response.setContentType("text/html");
                PrintWriter out = response.getWriter();
                int score = s.getAttribute("score") == null ? 0 : (int) s.getAttribute("score");
                out.println("<p> Your total score is " + score + "</p>");
                out.println("<br/><a href=\"lab12\">Quiz again</a>");
                s.invalidate();
            } else {
                int questionNo = (int) s.getAttribute("currentQuestion");
                if (!request.getParameter("answer").equals("")) {
                    int answer = Integer.parseInt(request.getParameter("answer"));
                    int score = (int) s.getAttribute("score");
                    if (Quiz.answer[questionNo] == answer) {
                        score++;
                        s.setAttribute("score", score);
                    }
                }
                s.setAttribute("currentQuestion", questionNo + 1);
                request.getRequestDispatcher("lab12.jsp").forward(request, response);
            }
        }

    }
}
