



document.addEventListener("DOMContentLoaded", load);




function load(){
    hideErrors();
	document.getElementById("contactForm").addEventListener("reset", resetForm);
	document.getElementById("contactForm").addEventListener("submit", validate, false);
}

function validate(e){
	hideErrors();
	if (formHasErrors()){
		e.preventDefault();
		return false;
	}
	return true;
}

function trim(str) 
{
	return str.replace(/^\s+|\s+$/g,"");
}


function formHasErrors(){
	let errorFlag = false;

	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;

	let emailRegex = new RegExp(/^[\w-]+@([\w-]+)+\.[\w-]+$/);
	let phoneRegex = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
	
	if (!emailRegex.test(email)){
		errorFlag = true;
		document.getElementById("email_error").style.display = "block";
	}

	if (!phoneRegex.test(phone)){
		errorFlag = true;
		document.getElementById("phone_error").style.display = "block";
	}

	if(trim(name) == ""){
		errorFlag = true;
		document.getElementById("name_error").style.display = "block";
	}


return errorFlag;
}


function resetForm(e){
	if(confirm('Clear order?'))
	{
		hideErrors();
		return true;
	}
	e.preventDefault();
	return false;
}



function hideErrors(){
	let error = document.getElementsByClassName("error");
	for (let i = 0; i < error.length; i++){
		error[i].style.display = "none";
	}
}





/*
$('a[href*="#"]')

  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  */