//<!DOCTYPE html>
<!-- saved from url=(0100)http://web4students.montgomerycollege.edu/courses/Fall2013/Rockville/CA27621984/form_validation.html -->

var form = document.querySelector('form');

form.addEventListener('submit', function (e) {

        var errors, errorDiv, namePattern, namePattern, agePattern, emailPattern, urlPattern, phonePattern, phonePattern2;

        errors = [];
        errorDiv = document.getElementById('error');

        
        namePattern = /^[a-z'-]+$/igm;
        namePattern2 = /^[a-z'-]+$/igm;
        agePattern = /^[0-9]+$/igm;
        emailPattern = /[a-z0-9_\-.]+@[a-z0-9]+\.[a-z]{2,}(.[a-z]{2,})?/igm;
        urlPattern = /^(https?:\/\/)?([\a-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/igm;
        phonePattern = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/igm;
		
		
        
        if (this.first_name.value === '') {
                errors.push('First name is required');
        } else {
                if (namePattern.test(this.first_name.value) === false) {
                        errors.push('First name is invalid');
                }else if (this.first_name.value.length > 50) {
                        errors.push('First name can not be greater than 50 characters long');
                }
        }

        if (this.last_name.value === '') {
                errors.push('Last name is required');
        } else {
                if (namePattern2.test(this.last_name.value) === false) {
                        errors.push('Last name is invalid');
                }else if (this.last_name.value.length > 50) {
                        errors.push('Last name can not be greater than 50 characters long');
                }
        }

        
        if (this.age.value !== '') {
                if (agePattern.test(this.age.value) === true) {
                        if (this.age.value < 10) {
                                errors.push('You must be over 18 years old to join this conference');
                        } else if (this.age.value > 100) {
                                errors.push('I am sorry but you better stay home');
                        }
                }else {
                        errors.push('Something wrong with your age?');
                }
        }        

       
        if (this.email.value === '') {
                errors.push('Email address is required');        
        } else {
                if (emailPattern.test(this.email.value) === false) {
                        errors.push('Invalid e-mail');
                }
        }

      
        if (document.getElementById('level').selectedIndex === 0){
                errors.push('Please select an experience level');
        }

       
        var bio = document.getElementById('bio');
        
        if (bio.value === '') {
                errors.push('Bio info is required');
        } else {
                if (bio.value.length > 200) {
                        errors.push('Biography cannot be longer than 140 characters');
                } 
				
        }

       
        if (this.website.value !== '') {
                if (urlPattern.test(this.website.value) === false) {
                        errors.push('Invalid url entered');
                }
        }

        
        if (this.homePhone.value !== '') {
                if (phonePattern.test(this.homePhone.value) === false) {
                        errors.push('Invalid home phone number entered');
                }
        }

        if (this.mobilePhone.value !== '') {
                if (phonePattern2.test(this.mobilePhone.value) === false) {
                        errors.push('Invalid mobile phone number entered');
                }
        }

       
        if (document.querySelectorAll('[name=meal]:checked').length === 0) {
                errors.push('Please select your meal preference');
        }

        
        if (document.querySelectorAll('[name=skills]:checked').length === 0) {
                errors.push('Please select at least one skill set');
        }

       
        $(function() {
$( "#datepicker" ).datepicker();
});

        
        if (errors.length > 0) {
                
                e.preventDefault();

               
                errorDiv.className = '';

              
                errorDiv.innerHTML = errors.join('<br>');
        }
}, false);

  
