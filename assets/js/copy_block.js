document.querySelectorAll('.copy-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    var code = button.previousElementSibling.textContent;
    var textarea = document.createElement('textarea');
    textarea.textContent = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  });
});