function loadComponent(id, file, scriptFile) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(id);
            container.innerHTML = data;

            // Now load the script after content is added
            const script = document.createElement('script');
            script.src = scriptFile;
            document.body.appendChild(script);
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}



document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "/assets/components/header.html");
    loadComponent("footer", "/assets/components/footer.html");
    loadComponent("services", "/assets/components/services.html");
    loadComponent("our_Strength", "/assets/components/our_Strength.html");
    loadComponent("blog", "/assets/components/blog.html");
    loadComponent("contact", "/assets/components/contact.html");
    loadComponent("pagination ", "/assets/components/pagination .html");
});


