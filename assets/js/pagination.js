const blogPosts = [
    {
      image: "/assets/images/blog_image_1.png",
      title: "The Golden Path to Compliance: Why Proactive Guidance Matters",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "In today’s fast-paced regulatory environment, staying ahead of compliance requirements is more critical than ever. Non-compliance can lead to hefty fines, reputational damage, and operational disruptions. […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_2.png",
      title: "Robust Compliance Programs: The Golden Compliance Approach",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Creating a strong compliance program is not just about checking boxes; it’s about embedding a culture of compliance into the fabric of your organization. Golden Compliance specializes in designing and  […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_3.png",
      title: "Mitigating Compliance Risks with Golden Compliance",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Compliance risks are an inevitable part of doing business, but they don’t have to be overwhelming. Golden Compliance is dedicated to helping businesses mitigate these risks through strategic  […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_1.png",
      title: "The Golden Path to Compliance: Why Proactive Guidance Matters",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "In today’s fast-paced regulatory environment, staying ahead of compliance requirements is more critical than ever. Non-compliance can lead to hefty fines, reputational damage, and operational disruptions. […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_2.png",
      title: "Robust Compliance Programs: The Golden Compliance Approach",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Creating a strong compliance program is not just about checking boxes; it’s about embedding a culture of compliance into the fabric of your organization. Golden Compliance specializes in designing and  […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_3.png",
      title: "Mitigating Compliance Risks with Golden Compliance",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Compliance risks are an inevitable part of doing business, but they don’t have to be overwhelming. Golden Compliance is dedicated to helping businesses mitigate these risks through strategic  […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_1.png",
      title: "The Golden Path to Compliance: Why Proactive Guidance Matters",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "In today’s fast-paced regulatory environment, staying ahead of compliance requirements is more critical than ever. Non-compliance can lead to hefty fines, reputational damage, and operational disruptions. […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_2.png",
      title: "Robust Compliance Programs: The Golden Compliance Approach",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Creating a strong compliance program is not just about checking boxes; it’s about embedding a culture of compliance into the fabric of your organization. Golden Compliance specializes in designing and  […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_3.png",
      title: "Mitigating Compliance Risks with Golden Compliance",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Compliance risks are an inevitable part of doing business, but they don’t have to be overwhelming. Golden Compliance is dedicated to helping businesses mitigate these risks through strategic  […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_1.png",
      title: "The Golden Path to Compliance: Why Proactive Guidance Matters",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "In today’s fast-paced regulatory environment, staying ahead of compliance requirements is more critical than ever. Non-compliance can lead to hefty fines, reputational damage, and operational disruptions. […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_2.png",
      title: "Robust Compliance Programs: The Golden Compliance Approach",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Creating a strong compliance program is not just about checking boxes; it’s about embedding a culture of compliance into the fabric of your organization. Golden Compliance specializes in designing and  […]",
      link: "#"
    },
    {
      image: "/assets/images/blog_image_3.png",
      title: "Mitigating Compliance Risks with Golden Compliance",
      date: "Olivia Rhye • 20 Jan 2024",
      excerpt: "Compliance risks are an inevitable part of doing business, but they don’t have to be overwhelming. Golden Compliance is dedicated to helping businesses mitigate these risks through strategic  […]",
      link: "#"
    },

    // Add more blog post objects here...
  ];

  function loadPagination(containerId) {
    const paginationHTML = `
      <div class="flex items-center justify-center py-20 px-[4px] lg:px-[80px]">
        <div class="flex items-center w-full max-w-[1280px] justify-between gap-2">
          <button id="prev" class="flex items-center gap-[8px] border border-gray-300 px-[14px] py-[8px] bg-white text-gray-700 rounded-[8px] disabled:opacity-50"> 
          <img src="/assets/images/arrow-left.png" alt="arrow-left" />Previous</button>
          <div id="pagination" class="flex gap-2"></div>
          <button id="next" class="flex items-center gap-[8px] border border-gray-300 px-[14px] py-[8px] bg-white text-gray-700 rounded-[8px] disabled:opacity-50">
           Next 
          <img src="/assets/images/arrow-right.png" alt="arrow-right" />
         </button>
        </div>
      </div>
    `;
    
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = paginationHTML;
      initializePagination();
    }
  }

  function initializePagination() {
    const pagination = document.getElementById('pagination');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentPage = 1;
    const totalPages = Math.ceil(blogPosts.length / 3); // Adjust number of posts per page (3 here)

    function updatePagination() {
      const blogContainer = document.getElementById('blog-container');
      blogContainer.innerHTML = '';

      // Calculate which posts to show
      const start = (currentPage - 1) * 6;
      const end = Math.min(start + 6, blogPosts.length);
      const postsToShow = blogPosts.slice(start, end);

      // Generate blog cards for current page
      postsToShow.forEach(post => {
        const cardHTML = `
          <div class="flex flex-col gap-[24px]">
            <div class="w-full">
              <img src="${post.image}" alt="${post.title}" class="rounded-[10px] w-full" />
            </div>
            <div class="flex flex-col gap-[8px] ">
              <div class="flex flex-col gap-[12px]">
                  <p class="text-[14px] text-[#2187F3] font-semibold">${post.date}</p>
                  <div class="flex gap-[15px] items-center">
                    <h5 class="font-semibold text-[#181818] text-[23px] leading-[27.6px]">${post.title}</h5>
                  </div>
                  <p class="text-[15px] text-[#515151]">${post.excerpt}</p>
              </div>
              <div class="mt-8">
                <a href="${post.link}" class="font-semibold uppercase rounded-[5px] bg-[#217FF3] hover:bg-[#2180f3e7] px-[31px] py-[15px] text-white">Read More</a>
              </div>
            </div>
          </div>
        `;
        blogContainer.innerHTML += cardHTML;
      });

      // Update pagination buttons
      pagination.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `px-4 py-2 rounded ${i === currentPage ? 'bg-[#F9FAFB] text-gray-700' : ''}`;
        pageBtn.onclick = () => {
          currentPage = i;
          updatePagination();
        };
        pagination.appendChild(pageBtn);
      }

      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
    }

    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    };

    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    };

    updatePagination();
  }

  loadPagination("pagination-container");























// function loadPagination(containerId) {
//     const paginationHTML = `
//         <div class="flex items-center justify-center py-20 px-[4px] lg:px-[80px]">
//             <div class="flex items-center w-full max-w-[1280px] justify-between gap-2">
//                 <button id="prev" class="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50">Previous</button>
//                 <div id="pagination" class="flex gap-2"></div>
//                 <button id="next" class="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50">Next</button>
//             </div>
//         </div>
//     `;
    
//     const container = document.getElementById(containerId);
//     if (container) {
//         container.innerHTML = paginationHTML;
//         initializePagination();
//     }
// }

// function initializePagination() {
//     const pagination = document.getElementById('pagination');
//     const prevBtn = document.getElementById('prev');
//     const nextBtn = document.getElementById('next');
//     let currentPage = 1;
//     const totalPages = 10;

//     function updatePagination() {
//         pagination.innerHTML = '';
//         const pages = [];
        
//         if (currentPage > 4) {
//             pages.push(createPageButton(1));
//             pages.push(createPageButton(2));
//             pages.push(createEllipsis());
//         }
        
//         for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
//             pages.push(createPageButton(i));
//         }
        
//         if (currentPage < totalPages - 3) {
//             pages.push(createEllipsis());
//             pages.push(createPageButton(totalPages - 1));
//             pages.push(createPageButton(totalPages));
//         }
        
//         pages.forEach(page => pagination.appendChild(page));
        
//         prevBtn.disabled = currentPage === 1;
//         nextBtn.disabled = currentPage === totalPages;
//     }

//     function createPageButton(page) {
//         const pageBtn = document.createElement('button');
//         pageBtn.textContent = page;
//         pageBtn.className = `px-4 py-2 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`;
//         pageBtn.onclick = () => { 
//             currentPage = page; 
//             updatePagination(); 
//         };
//         return pageBtn;
//     }

//     function createEllipsis() {
//         const ellipsis = document.createElement('span');
//         ellipsis.textContent = '...';
//         ellipsis.className = 'px-4 py-2 text-gray-700';
//         return ellipsis;
//     }

//     prevBtn.onclick = () => {
//         if (currentPage > 1) {
//             currentPage--;
//             updatePagination();
//         }
//     };

//     nextBtn.onclick = () => {
//         if (currentPage < totalPages) {
//             currentPage++;
//             updatePagination();
//         }
//     };

//     updatePagination();
// }

// loadPagination("pagination-container");