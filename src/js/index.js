// Function to spawn a modal with a YouTube embed
function embedModal(embed)
{
  let html = $('html');
  let body = $('body');

  // Make the body clip
  html.addClass('is-clipped');

  // Create the modal
  let modalDiv = $('<div class="modal is-active">');
  let modalBackgroundDiv = $('<div class="modal-background">').appendTo(modalDiv);
  let modalContentDiv = $('<div class="modal-content box has-background-dark px-2 py-2">').appendTo(modalDiv);
  let modalCloseButton = $('<button class="modal-close is-large">').appendTo(modalDiv);

  let closeModal = function() {
    modalDiv.remove();
    html.removeClass('is-clipped');
  };

  modalBackgroundDiv.on('click', closeModal);
  modalCloseButton.on('click', closeModal);

  // Create the embed
  let embedFigure = $('<figure class="image is-16by9">').appendTo(modalContentDiv);
  let embedIFrame = $(`<iframe class="has-ratio" src="${embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`).appendTo(embedFigure);

  // Fade in the modal
  modalDiv.appendTo(body).fadeIn();
}


// Event handler for when the document is loaded
$(function() {
  // Parse the document body with the Twemoji library
  twemoji.parse(document.body);
});

// Event handler for when an embed toggle is clicked
$('.is-embed-toggle').click(function() {
  embedModal($(this).attr('data-embed'));
});
