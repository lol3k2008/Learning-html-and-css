//    animowane napisy
//  By   ==     https://scrollrevealjs.org/guide/customization.html
ScrollReveal().reveal('.headline');
ScrollReveal({ reset: true });

ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.ha2', { delay: 2000 });
ScrollReveal().reveal('.galery', { delay: 150 });


ScrollReveal().reveal('.photo', { delay: 800 });
ScrollReveal().reveal('.photo1', { delay: 300 });
ScrollReveal().reveal('.photo2', { delay: 600 });
ScrollReveal().reveal('.photo3', { delay: 900 });
ScrollReveal().reveal('.photo4', { delay: 1200 });



ScrollReveal().reveal('.pE1', { delay: 1000 });
ScrollReveal().reveal('.pE2', { delay: 1200 });
ScrollReveal().reveal('.pE3', { delay: 1400 });
ScrollReveal().reveal('.pE4', { delay: 1600 });



// ----------------------------------FORMU---------------------------

$(document).ready(function() {
    $("html").on("submit","#contact_form",function(e){
      e.preventDefault();
      $("#send_form_status").html('').hide();
      var data=$("#contact_form").serialize();
      $.post("/send_form.php",data,function(res){
        $("#send_form_status").html(res.msg).show();
        if(res.status==1){ 
          $("#contact_form")[0].reset();
        } 
      });
    });
  });