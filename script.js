document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;

            alert(`Thank you for signing up, ${firstName} ${lastName}!\nEmail: ${email}\nAge: ${age}`);
        });
    