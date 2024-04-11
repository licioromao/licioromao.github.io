window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.paper-code').forEach((div) => {
        fetch(div.dataset.file)
            .then(response => response.text())
            .then(text => {
                div.innerHTML = text.replace(/\n/g, '<br>');
            });
    });
});