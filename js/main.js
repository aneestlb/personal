(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);
function validate(){
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var subject=document.getElementById( "subject");
    var message=document.getElementById("message");

    if(username.value==""){
        alert("must enter username");
        document.sentMessage.name.focus();
        return false;
    }
    if(email.value==""){
        alert("must enter email");
        document.sentMessage.email.focus();
        return false;
    }
    if(subject.value==""){
        alert("must enter subject");
        document.sentMessage.subject.focus();
        return false;
    }
    if(message.value==""){
        alert("must enter message");
        document.sentMessage.message.focus();
        return false;
    }
    return true;
}
const form=document.getElementById('submit-form'); 
const username=document.getElementById('username'); 
const emailId=document.getElementById('email'); 
const messagesInbox=document.getElementById('message'); 
 
 
 
form.addEventListener('submit',e =>{ 
 
    e.preventDefault(); 
    validateInput(); 
}); 
   
const setError= (element , message)=>{ 
 
    const inputControl =element.parentElement; 
    // const errorDisplay = inputControl.querySelector('.error'); 
    // errorDisplay.innerText=message; 
     
    element.placeholder = message; 
    username.style.border="1px solid red"; 
    emailId.style.border="1px solid red"; 
    messagesInbox.style.border="1px solid red"; 
    inputControl.classList.add('error'); 
    inputControl.classList.remove('success'); 
     
} 
 
const setSuccess=element=>{ 
 
    const inputControl=element.parentElement; 
    // const errorDisplay= inputControl.querySelector('.error'); 
    // errorDisplay.innerText=''; 
    element.placeholder = ''; 
    inputControl.classList.add('success'); 
    inputControl.classList.remove('error'); 
}; 
 
const isValidName=username=>{ 
 
    const rename=/^[a-zA-Z]/; 
    return rename.test(String(username)); 
} 
 
const isValidEmail=emailId=>{ 
 
    const re=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/; 
    return re.test(String(emailId).toLowerCase()); 
} 
 
const validateInput = ()=>{ 
 
    const usernameValue=username.value.trim(); 
    const emailIdValue=emailId.value.trim(); 
    const messagesInboxValue=messagesInbox.value.trim(); 
 
 
    if(usernameValue===''){ 
 
        setError(username,'Username is required'); 
    }else if(! isValidName(usernameValue)){ 
        //setError(username); 
        document.getElementById('message-error').innerHTML='Name should be alphabets'; 
         
 
    }else{ 
 
        setSuccess(username); 
    } 
 
    if(emailIdValue===''){ 
 
        setError(emailId,'Email is required'); 
    }else if(! isValidEmail(emailIdValue)){ 
        alert('Provide a valid Email address') 
        setError(emailId,'Provide a valid email address'); 
    }else { 
 
        setSuccess(emailId); 
    } 
     
 
    if(messagesInboxValue===''){ 
 
        setError(messagesInbox,'Message is mandatory'); 
    }else if(messagesInboxValue.split(' ').length<10){ 
 
        document.getElementById('message-error').innerHTML='Messages should be atleast 10 words'; 
        // setError(messagesInbox,'Messages should be atleast 10 words') 
    }else{ 
 
        setSuccess(messagesInbox); 
    } 
 
    //FOR SUBMISSION: 
 
    const inputs = [username, emailId, messagesInbox]; 
  if (inputs.every(input => input.parentElement.classList.contains('success'))) { 
    form.submit(); 
    alert('Form Submitted Successfully'); 
    
         
  } 
 
}
