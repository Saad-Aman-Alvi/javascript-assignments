 // Take inputs from the user
  var num1 = +prompt("Enter the first number:");
  var num2 = +prompt("Enter the second number:");
  var operation = prompt("Enter the operation (+, -, *, /, %):");

  var result;

  // Perform calculation based on the operation
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      alert("Error: Division by zero is not allowed.");
    }
  } else if (operation === "%") {
    if (num2 !== 0) {
      result = num1 % num2;
    } else {
      alert("Error: Division by zero is not allowed.");
    }
  } else {
    alert("Invalid operation!");
  }

  // Show the result if it exists
  if (result !== undefined) {
    alert("Result: " + result);
  }