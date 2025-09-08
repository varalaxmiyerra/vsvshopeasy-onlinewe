// Updated Products Page JavaScript - Connected to Backend API
class ProductsManager {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.currentPage = 1;
        this.productsPerPage = 5;
        this.currentView = 'grid';
        this.apiBaseUrl = ''; // No backend API, using only static data
        
        this.init();
    }

    async init() {
        await this.loadProducts();
        this.setupEventListeners();
        this.setupCart();
    }

    async loadProducts() {
        // Since no backend API, load fallback products directly
        this.loadFallbackProducts();
    }

    loadFallbackProducts() {
        console.log('Loading fallback products...');
        this.products = [
            {
                id: 1,
                name: "Wireless Headphones",
                category: "electronics",
                price: 2999,
                originalPrice: 4999,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
                rating: 4.5,
                reviews: 128,
                badge: "New"
            },
            {
                id: 2,
                name: "Smart Watch",
                category: "electronics",
                price: 7999,
                originalPrice: 12999,
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300",
                rating: 4.2,
                reviews: 89,
                badge: "Sale"
            },
            {
                id: 3,
                name: "Running Shoes",
                category: "fashion",
                price: 3499,
                originalPrice: 5499,
                image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300",
                rating: 4.8,
                reviews: 256,
                badge: null
            },
            {
                id: 4,
                name: "Gaming Laptop",
                category: "electronics",
                price: 59999,
                originalPrice: 79999,
                image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300",
                rating: 4.7,
                reviews: 342,
                badge: "Hot"
            },
            {
                id: 5,
                name: "Yoga Mat",
                category: "sports",
                price: 899,
                originalPrice: 1299,
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300",
                rating: 4.3,
                reviews: 78,
                badge: "New"
            },
            {
                id: 6,
                name: "Coffee Maker",
                category: "home",
                price: 2499,
                originalPrice: 3999,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1754824909/download_28_mxpuxp.jpg",
                rating: 4.4,
                reviews: 156,
                badge: "Sale"
            },
            {
                id: 7,
                name: "Skincare Set",
                category: "beauty",
                price: 1899,
                originalPrice: 2499,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1754824674/images_6_qcjc79.jpg",
                rating: 4.6,
                reviews: 203,
                badge: null
            },
            {
                id: 8,
                name: "Mystery Novel",
                category: "books",
                price: 399,
                originalPrice: 599,
                image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300",
                rating: 4.9,
                reviews: 92,
                badge: "New"
            },
            {
                id: 9,
                name: "Bluetooth Speaker",
                category: "electronics",
                price: 3999,
                originalPrice: 5999,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300",
                rating: 4.5,
                reviews: 89,
                badge: "New"
            },
            {
                id: 10,
                name: "Winter Jacket",
                category: "fashion",
                price: 4499,
                originalPrice: 6999,
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
                rating: 4.6,
                reviews: 167,
                badge: "Sale"
            },
            {
                id: 11,
                name: "4K Ultra HD TV",
                category: "electronics",
                price: 45999,
                originalPrice: 59999,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909547/HISENSE_65A7NQTUK_65_Smart_4K_Ultra_HD_HDR_QLED_TV_nh0ylp.jpg",
                rating: 4.7,
                reviews: 210,
                badge: "Hot"
            },
            {
                id: 12,
                name: "Leather Wallet",
                category: "fashion",
                price: 1299,
                originalPrice: 1999,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909544/e2557ec9-9666-4071-8b7a-768c935b773d_-_Copy_vbjxnp.jpg",
                rating: 4.4,
                reviews: 134,
                badge: null
            },
            {
                id: 13,
                name: "Ceramic Vase",
                category: "home",
                price: 799,
                originalPrice: 1299,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909543/e3d8386b-0f65-4c8e-8dec-5b3b2c1808b2_bfeywl.jpg",
                rating: 4.3,
                reviews: 56,
                badge: "New"
            },
            {
                id: 14,
                name: "Organic Face Cream",
                category: "beauty",
                price: 1599,
                originalPrice: 2199,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909543/without_name_facial_creams_-_Google_Search_mjunf9.jpg",
                rating: 4.5,
                reviews: 98,
                badge: "Sale"
            },
            {
                id: 15,
                name: "Cookbook: Healthy Meals",
                category: "books",
                price: 499,
                originalPrice: 799,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909536/20_Easy_and_Healthy_Recipes_for_One-person_Living_ihjdwt.jpg",
                rating: 4.8,
                reviews: 120,
                badge: null
            },
            {
                id: 16,
                name: "Mountain Bike",
                category: "sports",
                price: 15999,
                originalPrice: 19999,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909535/This_product_is_excluded_from_the_free_delivery_sgyip9.jpg",
                rating: 4.6,
                reviews: 75,
                badge: "New"
            },
            {
                id: 17,
                name: "Bluetooth Earbuds",
                category: "electronics",
                price: 2499,
                originalPrice: 3999,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909535/e36dad36-0c0a-4a59-a828-220aede21e16_na0han.jpg",
                rating: 4.3,
                reviews: 180,
                badge: null
            },
            {
                id: 18,
                name: "Denim Jacket",
                category: "fashion",
                price: 2999,
                originalPrice: 3999,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909535/Refresh_your_layers_with_the_Patch_Pocket_Chic_nbatwp.jpg",
                rating: 4.5,
                reviews: 210,
                badge: "Sale"
            },
            {
                id: 19,
                name: "Table Lamp",
                category: "home",
                price: 1299,
                originalPrice: 1799,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909534/Serene_Wavecrest_Lamp_xxrpr4.jpg",
                rating: 4.4,
                reviews: 89,
                badge: null
            },
            {
                id: 20,
                name: "Herbal Shampoo",
                category: "beauty",
                price: 699,
                originalPrice: 999,
                image: "https://res.cloudinary.com/ds3wuvkwo/image/upload/v1756909534/Experience_the_purity_of_nature_with_Havintha_s_kmfqlc.jpg",
                rating: 4.2,
                reviews: 140,
                badge: "New"
            }
        ];
        this.filteredProducts = [...this.products];
        this.renderProducts();
        this.updatePagination();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('productSearch');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchProducts(e.target.value);
            });
        }

        // Filter functionality
        const categoryFilter = document.getElementById('categoryFilter');
        const priceFilter = document.getElementById('priceFilter');
        const sortFilter = document.getElementById('sortFilter');

        if (categoryFilter) categoryFilter.addEventListener('change', () => this.filterProducts());
        if (priceFilter) priceFilter.addEventListener('change', () => this.filterProducts());
        if (sortFilter) sortFilter.addEventListener('change', () => this.sortProducts());

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.renderProducts();
                    this.updatePagination();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                    this.renderProducts();
                    this.updatePagination();
                }
            });
        }
    }

    setupCart() {
        const cartCountElement = document.querySelector('.cart-count');

        // Update cart count display using cart-manager
        const updateCartCount = () => {
            if (cartCountElement && window.cart) {
                cartCountElement.textContent = window.cart.getTotalItems();
            }
        };

        updateCartCount();

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(e.target.getAttribute('data-product-id'), 10);
                if (!productId || !window.cart) return;

                // Find product details from products list
                const product = this.products.find(p => p.id === productId);
                if (!product) return;

                // Add product to cart using cart-manager
                window.cart.addToCart(product);

                // Update cart count display
                updateCartCount();

                // Add animation
                e.target.textContent = 'Added!';
                e.target.style.background = '#28a745';

                setTimeout(() => {
                    e.target.textContent = 'Add to Cart';
                    e.target.style.background = '#667eea';
                }, 1000);
            }
        });
    }

    async renderProducts() {
        const container = document.getElementById('productsContainer');
        if (!container) return;

        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

    container.innerHTML = '';
    container.className = this.currentView === 'grid' ? 'products-grid' : 'products-list';

    productsToShow.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = this.currentView === 'grid' ? 'product-card' : 'product-card-list';
      productElement.dataset.productId = product.id;
      productElement.dataset.category = product.category;
      
      if (this.currentView === 'grid') {
        productElement.innerHTML = `
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-category">${this.getCategoryName(product.category)}</p>
            <div class="product-price">
              <span class="current-price">₹${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="product-rating">
              ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
              <span>(${product.reviews})</span>
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
          </div>
        `;
      } else {
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image-list">
          <div class="product-info-list">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-category">${this.getCategoryName(product.category)}</p>
            <div class="product-price">
              <span class="current-price">₹${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="product-rating">
              ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
              <span>(${product.reviews} reviews)</span>
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
          </div>
        `;
      }
      
      container.appendChild(productElement);
    });
    }

    getCategoryName(category) {
      const categories = {
        electronics: 'Electronics',
        fashion: 'Fashion',
        home: 'Home & Living',
        beauty: 'Beauty',
        books: 'Books',
        sports: 'Sports'
      };
      return categories[category] || category;
    }

    async searchProducts(query) {
      if (!query) {
        this.filteredProducts = [...this.products];
      } else {
        // Filter locally since no backend API
        const lowerQuery = query.toLowerCase();
        this.filteredProducts = this.products.filter(p =>
          p.name.toLowerCase().includes(lowerQuery) ||
          this.getCategoryName(p.category).toLowerCase().includes(lowerQuery)
        );
      }
      this.currentPage = 1;
      this.renderProducts();
    }

    async filterProducts() {
      const categoryFilter = document.getElementById('categoryFilter');
      const priceFilter = document.getElementById('priceFilter');
      
      let filtered = [...this.products];
      
      if (categoryFilter && categoryFilter.value !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter.value);
      }
      
      if (priceFilter && priceFilter.value !== 'all') {
        const priceRange = priceFilter.value;
        filtered = filtered.filter(p => {
          if (priceRange === '0-1000') return p.price < 1000;
          if (priceRange === '1000-5000') return p.price >= 1000 && p.price <= 5000;
          if (priceRange === '5000-10000') return p.price > 5000 && p.price <= 10000;
          if (priceRange === '10000+') return p.price > 10000;
          return true;
        });
      }
      
      this.filteredProducts = filtered;
      this.currentPage = 1;
      this.renderProducts();
    }

    async sortProducts() {
      const sortFilter = document.getElementById('sortFilter');
      if (!sortFilter) return;
      
      let sorted = [...this.filteredProducts];
      switch (sortFilter.value) {
        case 'price-low':
          sorted.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          sorted.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // Assuming products have an 'id' or 'date' to sort by newest, here using id descending
          sorted.sort((a, b) => b.id - a.id);
          break;
        case 'rating':
          sorted.sort((a, b) => b.rating - a.rating);
          break;
        default:
          // Featured or default sorting, no change
          break;
      }
      this.filteredProducts = sorted;
      this.currentPage = 1;
      this.renderProducts();
    }

    updatePagination() {
      const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
      const currentPageElement = document.getElementById('currentPage');
      const totalPagesElement = document.getElementById('totalPages');
      const prevBtn = document.getElementById('prevPage');
      const nextBtn = document.getElementById('nextPage');
      
      if (currentPageElement) currentPageElement.textContent = this.currentPage;
      if (totalPagesElement) totalPagesElement.textContent = totalPages;

      if (prevBtn) {
        prevBtn.disabled = this.currentPage <= 1;
      }
      if (nextBtn) {
        nextBtn.disabled = this.currentPage >= totalPages;
      }
    }
}

// Initialize products manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productsContainer')) {
    window.productsManagerInstance = new ProductsManager();
  }
});
