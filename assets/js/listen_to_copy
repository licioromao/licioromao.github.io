document.querySelectorAll('.copy-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    var id = button.id.replace('copy-button', '');
    var code = document.getElementById('paper-code' + id).querySelector('pre').textContent;
    var textarea = document.createElement('textarea');
    textarea.textContent = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  });
});