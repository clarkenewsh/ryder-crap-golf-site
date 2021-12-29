/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the hamburger icon. Set at media query */
function showNav() {
    let x = document.getElementById("responsive-nav");
    if(x.className === "responsive-nav") {
      x.className += " unfold";
    } else {
      x.className = "responsive-nav";

    };
  };



  /* Toggle between results divs. Show selected div and hide remaining results div */
  jQuery(function(){
    jQuery('.showSingle').click(function(){
          jQuery('.targetDiv').hide();
          jQuery('#div'+$(this).attr('target')).show();
    });
  });


  // Toggle newsletter click modal
  $('#newsletterButton').on('click', function(){
    event.preventDefault();
    $(this).parent().find('#newsModal').removeClass('hidden');
   
  });
  
  // Remove newsletter click modal 
  $('.modalHide').on('click', function(){
    event.preventDefault();
    $(this).parent().parent().find('#newsModal').addClass('hidden');
  });

  




  
  

  
  