$(document).ready(function () {
  // Carousel thumbnail click event for changing images
  $('#thumb-1').on('click', function () {
    console.log("Thumbnail 1 clicked");
    $('#productCarousel .carousel-item').removeClass('active'); // Remove active class from all items
    $('#productCarousel .carousel-item').first().addClass('active'); // Set the first item as active
    $('#productCarousel .carousel-item img').first().attr('src', './src/image/product-1.svg'); // Change image
  });

  $('#thumb-2').on('click', function () {
    console.log("Thumbnail 2 clicked");
    $('#productCarousel .carousel-item').removeClass('active'); // Remove active class from all items
    $('#productCarousel .carousel-item').first().addClass('active'); // Set the first item as active
    $('#productCarousel .carousel-item img').first().attr('src', './src/image/product-23.jpg'); // Change image
  });

  // Pagination and dynamic product display
  let currentPage = 1;
  const itemsPerPage = 4;

  // Data for new products
  const newProducts = [
    {
      image: './src/image/product-cover-1.svg',
      title: 'Graphic Design 1',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-2.svg',
      title: 'Graphic Design 2',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-3.svg',
      title: 'Graphic Design 3',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-4.svg',
      title: 'Graphic Design 4',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-5.svg',
      title: 'Graphic Design 5',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-6.svg',
      title: 'Graphic Design 6',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-2.svg',
      title: 'Graphic Design 7',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-3.svg',
      title: 'Graphic Design 8',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-4.svg',
      title: 'Graphic Design 9',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-1.svg',
      title: 'Graphic Design 10',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-5.svg',
      title: 'Graphic Design 11',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-6.svg',
      title: 'Graphic Design 12',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-6.svg',
      title: 'Graphic Design 13',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-4.svg',
      title: 'Graphic Design 14',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-2.svg',
      title: 'Graphic Design 15',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-3.svg',
      title: 'Graphic Design 16',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-6.svg',
      title: 'Graphic Design 17',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-2.svg',
      title: 'Graphic Design 18',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-1.svg',
      title: 'Graphic Design 19',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-3.svg',
      title: 'Graphic Design 20',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-4.svg',
      title: 'Graphic Design 21',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-5.svg',
      title: 'Graphic Design 22',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-3.svg',
      title: 'Graphic Design 23',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-1.svg',
      title: 'Graphic Design 24',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    },
    {
      image: './src/image/product-cover-1.svg',
      title: 'Graphic Design 25',
      description: 'English Department',
      priceOld: '$16.48',
      priceNew: '$6.48'
    }
  ];

   // Function to add products dynamically
   function addNewProducts() {
    const productsHTML = newProducts.map(product => {
      return `
        <div class="col-md-3">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body text-start">
              <h6 class="card-title fw-bold">${product.title}</h6>
              <p class="text-secondary fw-bold">${product.description}</p>
              <p><span class="text-muted text-decoration-line-through">${product.priceOld}</span> <span class="text-success">${product.priceNew}</span></p>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    $('.bestseller-products .row').append(productsHTML); // Append products to the container
  }

  // Add products when the page loads
  addNewProducts();

  // Pagination logic
  let totalItems = $('.bestseller-products .card').length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to display products for the current page
  function showPage(page) {
    $('.bestseller-products .card ').hide(); // Hide all products
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    $('.bestseller-products .card').slice(start, end).show(); // Show products for the current page
    
    // Update Pagination Controls
    updatePaginationControls(page);
  }

  // Function to update the pagination controls dynamically
  function updatePaginationControls(page) {
    $('#paginationControls').empty(); // Clear existing pagination buttons

    // Add "Previous" button
    const prevClass = page === 1 ? 'disabled' : '';
    $('#paginationControls').append(`<li class="page-item ${prevClass}"><a class="page-link" href="#" id="prevPage">Previous</a></li>`);

    // Add page number buttons
    for (let i = 1; i <= totalPages; i++) {
      const activeClass = i === page ? 'active' : '';
      $('#paginationControls').append(`<li class="page-item ${activeClass}"><a class="page-link" href="#" class="pageNum" data-page="${i}">${i}</a></li>`);
    }

    // Add "Next" button
    const nextClass = page === totalPages ? 'disabled' : '';
    $('#paginationControls').append(`<li class="page-item ${nextClass}"><a class="page-link" href="#" id="nextPage">Next</a></li>`);
  }

  // Event listener for the page number buttons
  $(document).on('click', '.pageNum', function (e) {
    e.preventDefault();
    const page = $(this).data('page');
    currentPage = page;
    showPage(currentPage);
  });

  // Event listener for the previous button
  $(document).on('click', '#prevPage', function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Event listener for the next button
  $(document).on('click', '#nextPage', function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Display the first page when the page loads
  showPage(currentPage);
});