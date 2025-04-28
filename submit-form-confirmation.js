// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    main();
});

function main() {
    // Get the form element
    const contactForm = document.querySelector('.contact-form');
    
    // Add event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        // Prevent default form submission to handle it with JavaScript
        event.preventDefault();
        firstName = document.getElementById('first_name').value;
        lastName = document.getElementById('last_name').value;
        email = document.getElementById('email').value;
        message = document.getElementById('message').value;
        subject = document.getElementById('mailSubject').value
        confirmation = document.getElementById('email_confirm').value;
        if(confirmation && confirmation.trim() !== '') {
            //mailsend();
        } else {
            fetch('https://formsubmit.co/ajax/063065a545b20aa0428e08205f0714ed', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'First Name': `${firstName}`,
                    'Last Name': `${lastName}`,
                    Email: `${email}`,
                    Message: `${message}`,
                    _subject: `${subject}`
                })
            })
                .then(response => response.json())
                .then(data => createConfirmation(data))
                .catch(error => createError(error)
            );
        }
    });
 
    function createConfirmation(data) {
        console.log(data);
        // Create a confirmation message container
        const confirmationMessage = document.createElement('div');
        confirmationMessage.className = 'form-confirmation';
        confirmationMessage.innerHTML = `
            <div class="confirmation-content">
                <i class="fas fa-check-circle"></i>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                <button id="closeConfirmation" class="close-button">Close</button>
            </div>
        `;
        
        // Add styles to the confirmation message
        confirmationMessage.style.position = 'fixed';
        confirmationMessage.style.top = '0';
        confirmationMessage.style.left = '0';
        confirmationMessage.style.width = '100%';
        confirmationMessage.style.height = '100%';
        confirmationMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        confirmationMessage.style.display = 'flex';
        confirmationMessage.style.justifyContent = 'center';
        confirmationMessage.style.alignItems = 'center';
        confirmationMessage.style.zIndex = '2000';
        
        // Style the confirmation content
        const confirmationContent = confirmationMessage.querySelector('.confirmation-content');
        confirmationContent.style.backgroundColor = 'white';
        confirmationContent.style.padding = '2rem';
        confirmationContent.style.borderRadius = '10px';
        confirmationContent.style.textAlign = 'center';
        confirmationContent.style.maxWidth = '500px';
        confirmationContent.style.width = '90%';
        confirmationContent.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        
        // Style the icon
        const icon = confirmationMessage.querySelector('.fa-check-circle');
        icon.style.color = '#85182a'; // Using the site's primary color
        icon.style.fontSize = '3rem';
        icon.style.marginBottom = '1rem';
        
        // Style the heading
        const heading = confirmationMessage.querySelector('h3');
        heading.style.color = '#85182a';
        heading.style.fontSize = '1.8rem';
        heading.style.marginBottom = '0.5rem';
        
        // Style the paragraph
        const paragraph = confirmationMessage.querySelector('p');
        paragraph.style.fontSize = '1.1rem';
        paragraph.style.marginBottom = '1.5rem';
        paragraph.style.color = '#333';
        
        // Style the close button
        const closeButton = confirmationMessage.querySelector('.close-button');
        closeButton.style.backgroundColor = '#85182a';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.padding = '0.75rem 1.5rem';
        closeButton.style.borderRadius = '8px';
        closeButton.style.fontSize = '1rem';
        closeButton.style.cursor = 'pointer';
        closeButton.style.transition = 'background-color 0.3s ease';
        
        // Add hover effect to close button
        closeButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#661724'; // Darker shade for hover
        });
        
        closeButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#85182a';
        });
        
        // Add close functionality
        closeButton.addEventListener('click', function() {
            document.body.removeChild(confirmationMessage);
            
            // Reset the form
            contactForm.reset();
        });
        
        // Add the confirmation message to the page
        document.body.appendChild(confirmationMessage);
    }
    function createError(data) {
        console.log(data);
        // Create a confirmation message container
        const errorMessage = document.createElement('div');
        errorMessage.className = 'form-confirmation';
        errorMessage.innerHTML = `
            <div class="confirmation-content">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Something went wrong</h3>
                <p>Please try again later, or email us directly at johnson.dunnllc@gmail.com</p>
                <button id="closeConfirmation" class="close-button">Close</button>
            </div>
        `;
        
        // Add styles to the confirmation message
        errorMessage.style.position = 'fixed';
        errorMessage.style.top = '0';
        errorMessage.style.left = '0';
        errorMessage.style.width = '100%';
        errorMessage.style.height = '100%';
        errorMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        errorMessage.style.alignItems = 'center';
        errorMessage.style.zIndex = '2000';
        
        // Style the confirmation content
        const errorContent = errorMessage.querySelector('.confirmation-content');
        errorContent.style.backgroundColor = 'white';
        errorContent.style.padding = '2rem';
        errorContent.style.borderRadius = '10px';
        errorContent.style.textAlign = 'center';
        errorContent.style.maxWidth = '500px';
        errorContent.style.width = '90%';
        errorContent.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        
        // Style the icon
        const icon = errorMessage.querySelector('.fa-exclamation-circle');
        icon.style.color = '#85182a'; // Using the site's primary color
        icon.style.fontSize = '3rem';
        icon.style.marginBottom = '1rem';
        
        // Style the heading
        const heading = errorMessage.querySelector('h3');
        heading.style.color = '#85182a';
        heading.style.fontSize = '1.8rem';
        heading.style.marginBottom = '0.5rem';
        
        // Style the paragraph
        const paragraph = errorMessage.querySelector('p');
        paragraph.style.fontSize = '1.1rem';
        paragraph.style.marginBottom = '1.5rem';
        paragraph.style.color = '#333';
        
        // Style the close button
        const closeButton = errorMessage.querySelector('.close-button');
        closeButton.style.backgroundColor = '#85182a';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.padding = '0.75rem 1.5rem';
        closeButton.style.borderRadius = '8px';
        closeButton.style.fontSize = '1rem';
        closeButton.style.cursor = 'pointer';
        closeButton.style.transition = 'background-color 0.3s ease';
        
        // Add hover effect to close button
        closeButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#661724'; // Darker shade for hover
        });
        
        closeButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#85182a';
        });
        
        // Add close functionality
        closeButton.addEventListener('click', function() {
            document.body.removeChild(errorMessage);
            
            // Reset the form
            contactForm.reset();
        });
        
        // Add the confirmation message to the page
        document.body.appendChild(errorMessage);
    }
}
