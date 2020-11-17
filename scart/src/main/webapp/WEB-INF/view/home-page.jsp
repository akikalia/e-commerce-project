<%@ page import="com.homemoderator.commerce.model.Product" %>
<%@ page import="com.homemoderator.commerce.model.Category" %><%--
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
    <h1>auth</h1>
    <a href="/login">login</a>
    <a href="/register">register</a>
</div>

<div>
    <h1>user-intra</h1>
    <a href="/profile">profile</a>
    <a href="/cart">cart</a>
    <a href="/">home</a>
</div>
<div>
    <h1>admin panel</h1>
    <a href="/productpanel">product panel</a>
    <a href="/addcategorypanel">category panel</a>
    <a href="/userpanel">user panel</a>
    <a href="/orderpanel">order panel</a>
    <a href="/promotionpanel">promotion panel</a>
</div>
<div>
    <h1>categories</h1>
    <ul>
        <% Iterable<Category> categories = (Iterable<Category>) request.getAttribute("categories"); %>
        <% for(Category category : categories) { %>
            <li><a href="category?id=${product.getId()}">${product.getName()}</a></li>
        <% } %>
    </ul>
</div>

<div>
    <% Iterable<Product> products = (Iterable<Product>) request.getAttribute("products"); %>
    <% for(Product product : products) { %>
    <%--    <jsp:include page="product.jsp"/> <<<< product--%>
    <div class="list-item-product">
        <a href="product?id=${product.getId()}">
            <img src="resources/${product.getName()}.jpeg" alt="${product.getName()}">
            <p class="list-item-product-price">${product.getPrice()}$</p>
            <p class="list-item-product-description">${product.getName()}</p>
        </a>
    </div>
    <% } %>
</div>

<jsp:include page="footer.jsp"/>
</body>
</html>
