
   
        function validatePassword() {
            const password = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMessage");

            if (password === "") {
                errorMsg.style.display = "block"; // Show the error
            } else {
                errorMsg.style.display = "none"; // Hide error if valid
                // You can add more validation logic here
            }
        }
 