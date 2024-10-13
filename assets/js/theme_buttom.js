
    // Function to toggle the theme
    function toggleTheme() {
        const body = document.body;
        const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

        body.classList.remove(currentTheme);
        body.classList.add(newTheme);

        // Save the user's preference in localStorage
        localStorage.setItem('theme', newTheme);
    }

    // Check and apply the saved theme on page load
    window.onload = function() {
        const savedTheme = localStorage.getItem('theme') || 'light-mode';
        document.body.classList.add(savedTheme);
    }
