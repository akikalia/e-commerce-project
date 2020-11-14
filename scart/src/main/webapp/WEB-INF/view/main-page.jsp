<%@ page import="com.scart.commerce.model.Product" %>
<%@ page import="com.scart.commerce.dao.ProductRepository" %><%--
  Created by IntelliJ IDEA.
  User: alex
  Date: 14/11/2020
  Time: 01:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<jsp:include page="head.html"/>
<body>
<jsp:include page="header.jsp"/>

<% Iterable<Product> products = ((ProductRepository) request.getAttribute("products")).findAll(); %>
<% for(Product product : products) { %>
    <div class="list-item-product">
        <a href="product?${product.getId()}">
            <img src="resources/${product.getName()}.jpeg" alt="${product.getName()}">
            <p class="list-item-product-price">${product.getPrice()}$</p>
            <p class="list-item-product-description">${product.getName()}</p>
        </a>
    </div>
<% } %>

<jsp:include page="footer.jsp"/>
</body>
</html>
