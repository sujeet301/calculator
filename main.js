 
    // Show calculator and hide modal
    function showCalculator(type) {
      document.getElementById('choiceModal').style.display = 'none';
      document.getElementById('simpleCalculator').style.display = 'none';
      document.getElementById('sipCalculator').style.display = 'none';
      document.getElementById('calorieCalculator').style.display = 'none';
      document.getElementById('ageCalculator').style.display = 'none';
      document.getElementById('salaryCalculator').style.display = 'none';

      if (type === 'simple') {
        document.getElementById('simpleCalculator').style.display = 'block';
      } else if (type === 'sip') {
        document.getElementById('sipCalculator').style.display = 'block';
      } else if (type === 'calorie') {
        document.getElementById('calorieCalculator').style.display = 'block';
      }
      else if (type === 'age') {
        document.getElementById('ageCalculator').style.display = 'block';
      }
      else if (type === 'salary') {
        document.getElementById('salaryCalculator').style.display = 'block';
      }
    }

    // Back button - returns to modal choice screen
    function goBack() {
      document.getElementById('salaryCalculator').style.display = 'none';
      document.getElementById('ageCalculator').style.display = 'none';
      document.getElementById('simpleCalculator').style.display = 'none';
      document.getElementById('sipCalculator').style.display = 'none';
      document.getElementById('calorieCalculator').style.display = 'none';
      document.getElementById('choiceModal').style.display = 'flex';
    }

    // Simple Calculator JS
    const display = document.getElementById('display');

    function appendValue(val) {
      const operators = ['+', '-', '*', '/'];
      const lastChar = display.value.slice(-1);
      if (
        operators.includes(val) &&
        (display.value === '' || operators.includes(lastChar))
      ) {
        return; // prevent invalid operators sequence
      }
      display.value += val;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculateResult() {
      try {
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity) {
          alert('Error: Division by zero');
          clearDisplay();
          return;
        }
        display.value = result;
      } catch (e) {
        alert('Invalid expression');
        clearDisplay();
      }
    }

    // SIP Calculator JS
    function calculateSIP() {
      const P = parseFloat(document.getElementById('monthlyInvestment').value);
      const r = parseFloat(document.getElementById('annualRate').value) / 100 / 12; // monthly interest rate
      const n = parseFloat(document.getElementById('investmentPeriod').value) * 12; // total months

      if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) {
        alert('Please enter valid positive numbers');
        return;
      }

      // SIP Future Value formula: FV = P * [((1+r)^n -1) / r] * (1+r)
      let fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

      fv = fv.toFixed(2);

      const totalInvestment = (P * n).toFixed(2);
      const gain = (fv - totalInvestment).toFixed(2);

      const resultDiv = document.getElementById('sipResult');
      resultDiv.innerHTML = `
        Total Investment: ₹${totalInvestment} <br />
        Estimated Maturity Amount: ₹${fv} <br />
        Estimated Gain: ₹${gain}
      `;
    }

    // Calorie Calculator JS
    function calculateCalories() {
      const age = parseInt(document.getElementById('age').value);
      const gender = document.getElementById('gender').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value);
      const activity = parseFloat(document.getElementById('activity').value);

      if (
        isNaN(age) || age <= 0 ||
        !gender ||
        isNaN(weight) || weight <= 0 ||
        isNaN(height) || height <= 0 ||
        isNaN(activity)
      ) {
        alert('Please fill all fields with valid positive values.');
        return;
      }

      // Mifflin-St Jeor Equation for BMR
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      // TDEE calculation
      const tdee = bmr * activity;

      const resultDiv = document.getElementById('calorieResult');
      resultDiv.innerHTML = `
        Your estimated daily calorie requirement is: <strong>${tdee.toFixed(0)} kcal</strong>.
      `;
    }
  


    //age-calculator


        // Set max date to today's date
    document.getElementById('dob').max = new Date().toISOString().split('T')[0];

    function calculateAge() {
      const dobInput = document.getElementById("dob");
      const result = document.getElementById("result");
      const error = document.getElementById("error");
      
      // Clear previous messages
      error.textContent = "";
      
      if (!dobInput.value) {
        error.textContent = "Please select your date of birth.";
        result.textContent = "";
        return;
      }

      const birthDate = new Date(dobInput.value);
      const today = new Date();

      // Check if birth date is in the future
      if (birthDate > today) {
        error.textContent = "Birth date cannot be in the future!";
        result.textContent = "";
        return;
      }

      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();

      // Adjust for negative days
      if (ageDays < 0) {
        ageMonths--;
        // Get the last day of the previous month
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
      }

      // Adjust for negative months
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      // Grammar adjustments for singular/plural
      const yearsText = ageYears === 1 ? "year" : "years";
      const monthsText = ageMonths === 1 ? "month" : "months";
      const daysText = ageDays === 1 ? "day" : "days";

      result.innerHTML = `You are <span style="color:#3498db;font-weight:bold">${ageYears}</span> ${yearsText}, 
                         <span style="color:#3498db;font-weight:bold">${ageMonths}</span> ${monthsText}, and 
                         <span style="color:#3498db;font-weight:bold">${ageDays}</span> ${daysText} old.`;
    }



    //salary calculator

    function calculateSalary() {
      const basic = parseFloat(document.getElementById('basic').value) || 0;
      const hra = parseFloat(document.getElementById('hra').value) || 0;
      const other = parseFloat(document.getElementById('other').value) || 0;
      const taxPercent = parseFloat(document.getElementById('tax').value) || 0;

      const grossSalary = basic + hra + other;
      const taxAmount = (taxPercent / 100) * grossSalary;
      const netSalary = grossSalary - taxAmount;

      document.getElementById('salaryresult').innerHTML = `
        <p>Gross Salary: ₹${grossSalary.toFixed(2)}</p>
        <p>Net Salary (after tax): ₹${netSalary.toFixed(2)}</p>
      `;
    }
