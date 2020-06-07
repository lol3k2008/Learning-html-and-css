//    animowane napisy
//  By   ==     https://scrollrevealjs.org/guide/customization.html
ScrollReveal().reveal('.headline');
ScrollReveal({ reset: true });



ScrollReveal().reveal('.rev_300', { delay: 300 });
ScrollReveal().reveal('.rev_400', { delay: 400 });
ScrollReveal().reveal('.rev_500', { delay: 500 });
ScrollReveal().reveal('.rev_600', { delay: 600 });
ScrollReveal().reveal('.rev_700', { delay: 700 });
ScrollReveal().reveal('.rev_800', { delay: 800 });
ScrollReveal().reveal('.rev_900', { delay: 900 });
ScrollReveal().reveal('.rev_1k', { delay: 1000 });
ScrollReveal().reveal('.rev_1200', { delay: 1200 });




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