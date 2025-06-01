 // Set the number for the multiplication table
        let number = 5; // You can change this to any number
        let table = "";

        // Loop to create the table from 1 to 10
        for (let i = 1; i <= 10; i++) {
            table += number + " x " + i + " = " + (number * i) + "<br>";
        }

        // Display the table in the browser
        document.getElementById("tableOutput").innerHTML = table;