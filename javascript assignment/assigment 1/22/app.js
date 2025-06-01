  // Declare two numbers
        let num1 = 20;
        let num2 = 5;

        // Perform operations
        let addition = num1 + num2;
        let subtraction = num1 - num2;
        let multiplication = num1 * num2;
        let division = num1 / num2;
        let modulus = num1 % num2;

        // Display results
        document.getElementById("add").innerText = "Addition: " + num1 + " + " + num2 + " = " + addition;
        document.getElementById("sub").innerText = "Subtraction: " + num1 + " - " + num2 + " = " + subtraction;
        document.getElementById("mul").innerText = "Multiplication: " + num1 + " * " + num2 + " = " + multiplication;
        document.getElementById("div").innerText = "division: " + num1 + " / " + num2 + " = " + division;
        document.getElementById("mod").innerText = "modulus: " + num1 + " % " + num2 + " = " + modulus;