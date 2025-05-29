<?php

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MultiCalculator</title>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="nav.css">
    <script src="nav.js" ></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   
<!-- <p> ashu sharma </p>
  -->
</head>
<body>
    <!-- Navbar -->
<nav class="navbar">
  
  
    
    <div class="menu-container">
      <a class="menu-button" onclick="toggleMenu()">
        <i class="fa-solid fa-bars" style="color: #000000;"></i>
      </a>
    </div>
  
  
  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <button onclick="showCalculator('simple')">Simple Calculator</button>
    <button onclick="showCalculator('sip')">SIP Calculator</button>
    <button onclick="showCalculator('calorie')">Calorie Calculator</button>
    <button onclick="showCalculator('age')">Age Calculator</button>
    <button onclick="showCalculator('salary')">Salary Calculator</button>
  </div>

    <div class="logo-container">
      <a href="index.html" class="logo"><i class="fa-solid fa-calculator"></i>MultiCalculator</a>
    </div>
    
    <div class="search-container">
      <a class="search-button" onclick="toggleSearch()">
       <i class="fa-solid fa-magnifying-glass "></i>
      </a>
      <div class="search-bar" id="searchBar">
        <input type="text" placeholder="Search calculators..." />
        <button class="search-close" onclick="toggleSearch()"><i class="fa-solid fa-xmark"></i></button>
      </div>
    </div>
  
</nav>



?>
