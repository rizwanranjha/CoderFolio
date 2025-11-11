/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

// Contact Form Handler
(function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const spinner = submitBtn.querySelector('.spinner-border');
        const formStatus = document.getElementById('formStatus');
        
        // Get email from form data attribute (set in _config.yml)
        const recipientEmail = contactForm.getAttribute('data-email') || 'your-email@example.com';
        
        // Show loading state
        submitBtn.disabled = true;
        spinner.classList.remove('d-none');
        formStatus.innerHTML = '';
        
        // Prepare form data for FormSubmit
        const formData = new FormData(contactForm);
        formData.append('_subject', 'New Contact Form Submission from ' + formData.get('name'));
        formData.append('_captcha', 'false');
        formData.append('_template', 'box');
        formData.append('_autoresponse', 'Thank you for contacting me! I will get back to you soon.');
        
        try {
            const response = await fetch('https://formsubmit.co/ajax/' + recipientEmail, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                formStatus.innerHTML = '<div class="alert alert-success"><i class="bi bi-check-circle me-2"></i>Your message has been sent successfully! I will get back to you soon.</div>';
                contactForm.reset();
            } else {
                formStatus.innerHTML = '<div class="alert alert-danger"><i class="bi bi-exclamation-triangle me-2"></i>There was an error sending your message. Please try again or email me directly.</div>';
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formStatus.innerHTML = '<div class="alert alert-danger"><i class="bi bi-exclamation-triangle me-2"></i>Network error. Please check your connection and try again.</div>';
        } finally {
            submitBtn.disabled = false;
            spinner.classList.add('d-none');
        }
    });
})();