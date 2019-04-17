<%--
  Created by IntelliJ IDEA.
  User: anhphanviet
  Date: 2019-04-16
  Time: 14:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>lab12</title>
</head>
<body>
<form action="lab12" method="post">
    <input name="num1" size="4" value="<% if (request.getAttribute("num1") != null) {
    %> <%= request.getAttribute("num1") %>
    <% } %>"> + <input name="num2" size="4" value="<% if (request.getAttribute("num2") != null) {
    %> <%= request.getAttribute("num2") %>
    <% } %>"> =
    <% if (request.getAttribute("result1") != null) {
    %> <%= request.getAttribute("result1") %>
    <% } %>

    <br>
    <input name="num3" size="4" value="<% if (request.getAttribute("num3") != null) {
    %> <%= request.getAttribute("num3") %>
    <% } %>"> * <input name="num4" size="4" value="<% if (request.getAttribute("num4") != null) {
    %> <%= request.getAttribute("num4") %>
    <% } %>"> =
    <% if (request.getAttribute("result2") != null) {
    %> <%= request.getAttribute("result2") %>
    <% } %>
    <br>
    <br>
    <input type="submit">
</form>

</body>
</html>
