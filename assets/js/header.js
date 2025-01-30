function loadHeader(containerId) {
  const headerHTML = `
    <header class="shadow-md lg:px-[0px] flex items-center justify-center fixed top-0 left-0 right-3 z-50">
      <div class="flex items-center justify-center w-screen bg-white p-6">
        <div class="flex items-center justify-between max-w-[1280px] w-full">
          <div class="flex items-center">
            <a href="/index.html">
              <img src="/assets/images/Logo.png" alt="Logo" class="w-[80px] md:w-[150px]" />
            </a>
          </div>
          <nav class="hidden lg:flex space-x-[55px] text-[16px] font-semibold mt-4 md:mt-0">
            <a href="/index.html" class="nav-link">Home</a>
            <a href="/pages/about.html" class="nav-link">About Us</a>
            <a href="/pages/services.html" class="nav-link">Our Services</a>
            <a href="/pages/blog.html" class="nav-link">Blog</a>
            <a href="/pages/contact.html" class="nav-link">Contact Us</a>
          </nav>
          <div class="gap-3 items-center mt-4 md:mt-0 hidden lg:flex">
            <div class="bg-[#217FF3] w-[50px] h-[50px] rounded-[25px] flex items-center justify-center">
              <img src="/assets/images/message__icon.png" alt="Message Icon" class="w-[20px] h-[16px]" />
            </div>
            <div>
              <p class="text-[12px] md:text-[14px]">Send us a message</p>
              <p class="text-[16px] font-semibold">golden@gmail.com</p>
            </div>
          </div>
          <div class="flex gap-6 items-center justify-center lg:hidden">
            <div class="gap-3 items-center md:mt-0 flex">
              <div class="bg-[#217FF3] w-[30px] h-[30px] rounded-[25px] flex items-center justify-center">
                <img src="/assets/images/message__icon.png" alt="Message Icon" class="w-[15px] h-[15px]" />
              </div>
              <div>
                <p class="text-[10px] md:text-[14px]">Send us a message</p>
                <p class="text-[14px] font-semibold">golden@gmail.com</p>
              </div>
            </div>
            <button class="lg:hidden" id="menu-toggle" onclick="toggleMenu()">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="menu" class="lg:hidden bg-white absolute top-20 left-0 w-full z-50 flex flex-col items-start p-4 space-y-6 border-t border-[#d2d2d2]">
          <nav class="flex flex-col space-y-4 text-lg items-start">
            <a href="/index.html" class="nav-link">Home</a>
            <a href="/pages/about.html" class="nav-link">About Us</a>
            <a href="/pages/services.html" class="nav-link">Our Services</a>
            <a href="/pages/blog.html" class="nav-link">Blog</a>
            <a href="/pages/contact.html" class="nav-link">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  `;

  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = headerHTML;
    closeMenuOnRefresh();
    setActiveNavLink();
  }
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("text-blue-500", "font-bold");
    } else {
      link.classList.remove("text-blue-500", "font-bold");
    }
  });
}

function closeMenuOnRefresh() {
  const menu = document.getElementById("menu");
  const body = document.body;
  menu.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  const body = document.body;
  const menuToggle = document.getElementById("menu-toggle");
  const isOpen = !menu.classList.contains("hidden");

  menu.classList.toggle("hidden");

  if (!isOpen) {
    body.classList.add("menu-open");
  } else {
    body.classList.remove("menu-open");
  }

  menuToggle.innerHTML = isOpen
    ? `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
       </svg>`
    : `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
       </svg>`;
}


loadHeader("header-container");
