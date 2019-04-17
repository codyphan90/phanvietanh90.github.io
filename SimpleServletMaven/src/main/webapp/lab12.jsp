<%--
  Created by IntelliJ IDEA.
  User: anhphanviet
  Date: 2019-04-16
  Time: 14:52
  To change this template use File | Settings | File Templates.
--%>
<%@page import="mum.Quiz"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>lab12</title>
</head>
<body>
<form action="lab12" method="get">
    <h1>The Number </h1>
<%--    <p>Your current score is <%= session.getAttribute("score")%></p>--%>
    <p>Your current score is ${score}</p>

    <p>Guess the next number in the sequence</p>
    <p><%=  Quiz.questions[(int)session.getAttribute("currentQuestion")]%></p>

    <label>
    Your answer: <input name="answer" size="4">
    </label>
    <br/>
    <br/>
    <input type="submit">
</form>

</body>
</html>
