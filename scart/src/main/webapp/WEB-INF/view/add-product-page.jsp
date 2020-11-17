<%--
  Created by IntelliJ IDEA.
  User: alex
  Date: 14/11/2020
  Time: 01:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<jsp:include page="head.jsp"/>
<head>
    <meta charset="UTF-8">
    <title>scart</title>
</head>
<body>
<jsp:include page="header.jsp"/>



<div>
    <form method="get" action="/addproduct">
<%--        <input type="number" name="id" >--%>
        <input type="text" name="name" >
        <input type="text" name="description" >
        <input type="number" name="price" >
<%--        <input type="hidden" name="purchaseList" >--%>
<%--        <input type="hidden" name="categoryList" >--%>
        <button type="submit">submit</button>
    </form>
</div>

<a href="/">home</a>

<jsp:include page="footer.jsp"/>
</body>
</html>