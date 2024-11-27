document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modeToggle');
    const body = document.body;

    // Check local storage for mode preference
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save preference to local storage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });
});
