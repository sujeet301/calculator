<?php
include 'header.php';
>>>>>>> 359ed8f (new files):index.php

<!-- main section  -->
<div class="main">

  <!-- Modal for choice -->
  <div id="choiceModal">
    <div id="choiceModalContent">
      <h1>Choose Calculator</h1>
      <button onclick="showCalculator('simple')">Simple Calculator</button>
      <button onclick="showCalculator('sip')">SIP Calculator</button>
      <button onclick="showCalculator('calorie')">Calorie Calculator</button>
      <button onclick="showCalculator('age')">Age Calculator</button>
      <button onclick="showCalculator('salary')">Salary Calculator</button>
    </div>
  </div>
  
  <!-- Simple Calculator -->
  <div class="container" id="simpleCalculator" style="display:none;">
    <h2>Simple Calculator</h2>
    <input type="text" id="display" readonly />
    <div class="buttons">
      <button class="clear" onclick="clearDisplay()">C</button>
      <button class="operator" onclick="appendValue('/')">÷</button>
      <button class="operator" onclick="appendValue('*')">×</button>
      <button class="operator" onclick="appendValue('-')">−</button>
      
      <button onclick="appendValue('7')">7</button>
      <button onclick="appendValue('8')">8</button>
      <button onclick="appendValue('9')">9</button>
      <button class="operator" onclick="appendValue('+')">+</button>
      
      <button onclick="appendValue('4')">4</button>
      <button onclick="appendValue('5')">5</button>
      <button onclick="appendValue('6')">6</button>
      <button onclick="appendValue('.')">.</button>
      
      <button onclick="appendValue('1')">1</button>
      <button onclick="appendValue('2')">2</button>
      <button onclick="appendValue('3')">3</button>
      <button class="equal" onclick="calculateResult()">=</button>

      <button onclick="appendValue('0')" style="grid-column: span 2;">0</button>
      <button onclick="appendValue('00')">00</button>
    </div>
    <button class="back-button" onclick="goBack()">Back</button>
  </div>
  
  <!-- SIP Calculator -->
  <div class="container" id="sipCalculator" style="display:none;">
    <h2>SIP Calculator</h2>
    <label for="monthlyInvestment">Monthly Investment (₹):</label>
    <input type="number" id="monthlyInvestment" min="0" placeholder="e.g. 5000" />

    <label for="annualRate">Expected Annual Rate of Return (%):</label>
    <input type="number" id="annualRate" min="0" step="0.01" placeholder="e.g. 12" />

    <label for="investmentPeriod">Investment Period (years):</label>
    <input type="number" id="investmentPeriod" min="0" placeholder="e.g. 10" />

    <button class="calcaulatebutton" onclick="calculateSIP()">Calculate</button>

    <div id="sipResult"></div>
    <button class="back-button" onclick="goBack()">Back</button>
  </div>
  
  <!-- Calorie Calculator -->
  <div class="container" id="calorieCalculator" style="display:none;">
    <h2>Calorie Calculator</h2>

    <label for="age">Age (years):</label>
    <input type="number" id="age" min="0" placeholder="e.g. 25" />
    
    <label for="gender">Gender:</label>
    <select id="gender">
      <option value="" disabled selected>Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    
    <label for="weight">Weight (kg):</label>
    <input type="number" id="weight" min="0" step="0.1" placeholder="e.g. 70" />

    <label for="height">Height (cm):</label>
    <input type="number" id="height" min="0" step="0.1" placeholder="e.g. 170" />
    
    <label for="activity">Activity Level:</label>
    <select id="activity">
      <option value="" disabled selected>Select Activity Level</option>
      <option value="1.2">Sedentary (little or no exercise)</option>
      <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
      <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option
        
        <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
        <option value="1.9">Extra active (very hard exercise & physical job)</option>
      </select>
      
      <button class="calcaulatebutton" onclick="calculateCalories()">Calculate</button>
      
      <div id="calorieResult"></div>
      <button class="back-button" onclick="goBack()">Back</button>
    </div>
    
    <!-- Age Calculator -->
    <div class="age-container container" id="ageCalculator" style="display:none;">
      <h1>Age Calculator</h1>
      <label for="age-dob">Date of Birth:</label>
      <input type="date" id="dob" max="" />
      <button onclick="calculateAge()" class="calcaulatebutton">Calculate Age</button>
      <div class="age-result" id="result">Your age will appear here</div>
      <div class="age-error" id="error"></div>
      <button class="back-button" onclick="goBack()">Back</button>
    </div>

    <!-- salary calculator -->

    <div class="container" id="salaryCalculator" style="display:none;">
    <h2>Salary Calculator</h2>
    <div class="input-group">
      <label for="basic">Basic Salary</label>
      <input type="number" id="basic" placeholder="Enter basic salary" />
    </div>
    <div class="input-group">
      <label for="hra">HRA</label>
      <input type="number" id="hra" placeholder="Enter HRA" />
    </div>
    <div class="input-group">
      <label for="other">Other Allowances</label>
      <input type="number" id="other" placeholder="Enter other allowances" />
    </div>
    <div class="input-group">
      <label for="tax">Tax Deduction (%)</label>
      <input type="number" id="tax" placeholder="Enter tax %" />
    </div>
    <button  class="calcaulatebutton" onclick="calculateSalary()">Calculate Salary</button>
    <div class="salary-result" id="salaryresult">Your salary will appear here</div>
    <button class="back-button" onclick="goBack()">Back</button>
  </div>



  </div>
    include 'footer.php';

    
    <script src="main.js" defer></script>


?>
