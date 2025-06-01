    // Step a: Take subject names
        let subject1 = prompt("Enter name of 1st subject:");
        let subject2 = prompt("Enter name of 2nd subject:");
        let subject3 = prompt("Enter name of 3rd subject:");

        // Step b: Total marks for each subject
        let totalMarksPerSubject = 100;

        // Step c & d: Take obtained marks
        let obtained1 = parseFloat(prompt(`Enter obtained marks for ${subject1}:`));
        let obtained2 = parseFloat(prompt(`Enter obtained marks for ${subject2}:`));
        let obtained3 = parseFloat(prompt(`Enter obtained marks for ${subject3}:`));

        // Step e: Calculate totals and percentage
        let totalMarks = totalMarksPerSubject * 3;
        let totalObtained = obtained1 + obtained2 + obtained3;
        let percentage = (totalObtained / totalMarks) * 100;

        // Display result using a table
        let resultHTML = `
            <table border="1" cellpadding="10">
                <tr>
                    <th>Subject</th>
                    <th>Total Marks</th>
                    <th>Obtained Marks</th>
                </tr>
                <tr>
                    <td>${subject1}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${obtained1}</td>
                </tr>
                <tr>
                    <td>${subject2}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${obtained2}</td>
                </tr>
                <tr>
                    <td>${subject3}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${obtained3}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>${totalMarks}</th>
                    <th>${totalObtained}</th>
                </tr>
                <tr>
                    <th colspan="2">Percentage</th>
                    <th>${percentage.toFixed(2)}%</th>
                </tr>
            </table>
        `;

        document.getElementById("result").innerHTML = resultHTML;