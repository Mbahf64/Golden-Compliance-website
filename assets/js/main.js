// Function to load external HTML files
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load header and footer on all pages
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "/assets/components/header.html");
    loadComponent("footer", "/assets/components/footer.html");
    loadComponent("services", "/assets/components/services.html");
    loadComponent("our_Strength", "/assets/components/our_Strength.html");
    loadComponent("blog", "/assets/components/blog.html");
    loadComponent("contact", "/assets/components/contact.html");
});
