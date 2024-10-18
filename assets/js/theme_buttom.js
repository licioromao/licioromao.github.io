
    // Function to toggle the theme
    function toggleTheme() {
        const body = document.body;
        const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

        body.classList.remove(currentTheme);
        body.classList.add(newTheme);

        // Change the image of the theme toggle button
        var themeToggleButton = document.getElementById('theme-toggle');

        if (body.classList.contains('light-mode')) {
            themeToggleButton.src = '/assets/dark-theme.png';
        } else {
            themeToggleButton.src = '/assets/light-theme.png';
        }

        // Save the user's preference in localStorage
        localStorage.setItem('theme', newTheme);
    }

    // // Check and apply the saved theme on page load
    // window.onload = function() {
    //     const savedTheme = localStorage.getItem('theme');
    //     document.body.classList.add(savedTheme);
    // }

// Ensure the correct theme and image are set on page load
document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    var themeToggleButton = document.getElementById('theme-toggle');

    // Check and apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(savedTheme);
    
    if (body.classList.contains('dark-mode')) {
      themeToggleButton.src = '/assets/light-theme.png';
    } else {
      themeToggleButton.src = '/assets/dark-theme.png';
    }
  });
