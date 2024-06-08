// Highlight active link
function highlightActiveLink() {
    let currentURL = window.location.href;
    let navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
}

// Fetch and insert navbar, then highlight active link
fetch('../components/navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;
        highlightActiveLink();
    });

  