<!DOCTYPE html>
<html  lang="en">
<body>
<h2>Simple Calculator </h2>
<form action="lab11" method="post">
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
