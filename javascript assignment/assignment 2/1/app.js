  // Step a: Take a number in a variable
        let number = 10;

        // Step b–f: Perform various operations
        let initialValue = number;
        number = ++number; // Pre-increment
        let afterIncrement = number;
        number = number + 7;
        let afterAddition = number;
        number = --number; // Pre-decrement
        let afterDecrement = number;
        let remainder = number % 3;

        // Prepare output
        let result = `
            Initial value: ${initialValue} <br>
            Value after increment: ${afterIncrement} <br>
            Value after addition (add 7): ${afterAddition} <br>
            Value after decrement: ${afterDecrement} <br>
            The remainder after dividing by 3: ${remainder}
        `;

        // Show result in browser
        document.getElementById("output").innerHTML = result;