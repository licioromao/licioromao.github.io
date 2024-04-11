document.querySelectorAll('.paper-code').forEach(function(div) {
  var file = div.getAttribute('data-file');
  fetch(file)
    .then(response => response.text())
    .then(data => {
      div.querySelector('pre').textContent = data;
    });
});