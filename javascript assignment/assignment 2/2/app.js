   var a = 2, b = 1;
        var result = --a - --b + ++b + b--;

        // Display final values
        document.getElementById("results").innerHTML = `
            a = ${a} <br>
            b = ${b} <br>
            result = ${result}
        `;