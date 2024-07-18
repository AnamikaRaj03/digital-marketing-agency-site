function openForm() {
  $('#formPopupOverlay').fadeIn();
}

function closeForm() {
  $('#formPopupOverlay').fadeOut();
}

$(document).ready(function() {
  $('.open-button').click(function() {
      openForm();
  });

  $('#formPopupOverlay').click(function(event) {
      if (!$(event.target).closest('.form-popup').length) {
          closeForm();
      }
  });
});



  
  