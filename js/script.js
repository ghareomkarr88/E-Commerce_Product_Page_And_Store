'use strict';

/* ============================================================
   DATA LAYER - Products JSON
============================================================ */
const PRODUCTS_DATA = [
  { id:1, name:'Sony WH-1000XM5 Headphones', category:'Electronics', price:279, originalPrice:349, rating:4.9, reviews:2840, emoji:'🎧', badge:'hot', stock:15, sold:892, tags:['hot','top'], description:'Industry-leading noise cancellation with up to 30 hours battery life. Crystal clear calls with multipoint connection.', colors:['#000','#c0b8b8','#e5e0d8'], sizes:[], specs:{Brand:'Sony',Battery:'30hrs',Connectivity:'Bluetooth 5.2',Weight:'250g'} },
  { id:2, name:'MacBook Pro 14" M3 Pro', category:'Laptops', price:1999, originalPrice:2499, rating:4.8, reviews:1567, emoji:'💻', badge:'new', stock:8, sold:324, tags:['new','top'], description:'Supercharged by M3 Pro chip. Stunning Liquid Retina XDR display. Up to 22 hours battery life.', colors:['#1d1d1f','#e3d9cb'], sizes:[], specs:{Chip:'Apple M3 Pro',RAM:'18GB',Storage:'512GB SSD',Display:'14.2" Liquid Retina'} },
  { id:3, name:'Nike Air Max 2025 Sneakers', category:'Fashion', price:149, originalPrice:199, rating:4.7, reviews:3291, emoji:'👟', badge:'sale', stock:42, sold:1203, tags:['sale','hot'], description:'The next evolution in Air Max cushioning. Lightweight upper with dynamic breathability.', colors:['#ff4d00','#fff','#1a1a1a'], sizes:['US 7','US 8','US 9','US 10','US 11','US 12'], specs:{Brand:'Nike',Material:'Mesh + Foam',Sole:'React Foam',Style:'Running'} },
  { id:4, name:'Samsung 65" QLED 4K TV', category:'Electronics', price:1199, originalPrice:1599, rating:4.6, reviews:891, emoji:'📺', badge:'sale', stock:5, sold:278, tags:['sale'], description:'4K QLED display with 120Hz refresh rate. Quantum HDR 32X with Object Tracking Sound Pro.', colors:['#1a1a1a'], sizes:[], specs:{Screen:'65 inch',Resolution:'4K UHD',HDR:'Quantum HDR 32X',Hz:'120Hz'} },
  { id:5, name:'Apple Watch Ultra 2', category:'Wearables', price:799, originalPrice:899, rating:4.8, reviews:2103, emoji:'⌚', badge:'top', stock:19, sold:567, tags:['top','new'], description:'The most rugged and capable Apple Watch. Built for endurance athletes and adventurers.', colors:['#f5f5f5','#e8c69e','#1c1c1e'], sizes:['41mm','45mm'], specs:{Display:'49mm OLED',Battery:'60hrs',GPS:'Dual Frequency L1+L5',WaterResist:'100m'} },
  { id:6, name:'Dyson V15 Detect Vacuum', category:'Home', price:699, originalPrice:799, rating:4.7, reviews:1456, emoji:'🌀', badge:'new', stock:23, sold:412, tags:['new'], description:'Detects and counts dust particles. Adapts suction power automatically. HEPA filter captures allergens.', colors:['#ffdd00','#9657f7'], sizes:[], specs:{SuctionPower:'240 AW',Battery:'60min',Filter:'HEPA',Bin:'0.76L'} },
  { id:7, name:'Levi\'s 501 Original Jeans', category:'Fashion', price:59, originalPrice:89, rating:4.5, reviews:5632, emoji:'👖', badge:'sale', stock:87, sold:2341, tags:['sale'], description:'The original fit that started it all. Straight leg, button fly, and iconic durability.', colors:['#4169e1','#1a1a1a','#8b7355'], sizes:['28','30','32','34','36','38'], specs:{Material:'100% Cotton',Fit:'Original Straight',Rise:'Mid',Wash:'Medium'} },
  { id:8, name:'PlayStation 5 Console', category:'Gaming', price:499, originalPrice:499, rating:4.9, reviews:8921, emoji:'🎮', badge:'hot', stock:3, sold:4521, tags:['hot','top'], description:'Experience lightning-fast loading, deeper immersion with haptic feedback, adaptive triggers, and 3D Audio.', colors:['#fff','#000'], sizes:[], specs:{CPU:'AMD Zen 2',GPU:'RDNA 2',Storage:'825GB SSD',Optical:'4K Blu-ray'} },
  { id:9, name:'Ninja Creami Ice Cream Maker', category:'Kitchen', price:199, originalPrice:249, rating:4.6, reviews:3421, emoji:'🍦', badge:'new', stock:34, sold:876, tags:['new'], description:'Create ice cream, gelato, sorbet, and more from scratch. 7 one-touch programs.', colors:['#c0c0c0','#1a1a1a'], sizes:[], specs:{Programs:'7 One-Touch',Container:'24oz',Motor:'1.5HP',Cord:'4 feet'} },
  { id:10, name:'Ray-Ban Aviator Sunglasses', category:'Fashion', price:179, originalPrice:179, rating:4.7, reviews:2156, emoji:'🕶️', badge:'top', stock:56, sold:1089, tags:['top'], description:'Classic aviator style with polarized lenses. UV400 protection with metal frame construction.', colors:['#ffd700','#c0c0c0','#000'], sizes:[], specs:{Frame:'Metal',Lens:'Polarized Crystal',UV:'400 Protection',Style:'Aviator'} },
  { id:11, name:'KitchenAid Stand Mixer Pro', category:'Kitchen', price:449, originalPrice:549, rating:4.8, reviews:4567, emoji:'🍰', badge:'sale', stock:12, sold:1234, tags:['sale','top'], description:'Professional-grade 7-quart bowl-lift stand mixer. 10 speeds with 67 touch points in the bowl.', colors:['#e63946','#1a1a1a','#fff','#ffd200'], sizes:[], specs:{Bowl:'7 Quart',Speeds:'10',Watts:'1.3HP','Includes':'3 attachments'} },
  { id:12, name:'Kindle Paperwhite 5', category:'Electronics', price:139, originalPrice:179, rating:4.6, reviews:6789, emoji:'📚', badge:'sale', stock:78, sold:3456, tags:['sale'], description:'The thinnest, lightest Paperwhite yet with a flush-front design and 300 ppi glare-free display.', colors:['#000','#c0b8b8'], sizes:[], specs:{Display:'6.8" 300ppi',Storage:'8-32GB',Battery:'10 weeks',Waterproof:'IPX8'} },
  { id:13, name:'Instant Pot Duo 7-in-1', category:'Kitchen', price:99, originalPrice:149, rating:4.7, reviews:12345, emoji:'🫕', badge:'hot', stock:45, sold:5678, tags:['hot'], description:'7-in-1 multi-cooker: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker & warmer.', colors:['#c0c0c0','#1a1a1a'], sizes:['3Qt','6Qt','8Qt'], specs:{Functions:'7 in 1',Capacity:'6 Quart',Programs:'13 Smart Programs',Safety:'10+ safety features'} },
  { id:14, name:'LEGO Star Wars Set 75355', category:'Toys', price:249, originalPrice:299, rating:4.9, reviews:2108, emoji:'🚀', badge:'new', stock:28, sold:743, tags:['new','top'], description:'Build the legendary Millennium Falcon with 1353 pieces. Highly detailed with iconic cockpit section.', colors:['#808080'], sizes:[], specs:{Pieces:'1353',Age:'18+',Theme:'Star Wars',Size:'16" x 12"'} },
  { id:15, name:'Adidas Ultraboost 23 Running', category:'Fashion', price:189, originalPrice:229, rating:4.6, reviews:1876, emoji:'🏃', badge:'new', stock:33, sold:567, tags:['new'], description:'BOOST midsole for incredible energy return. Primeknit upper moves with your foot. Continental rubber outsole.', colors:['#000','#fff','#4169e1','#ff4d00'], sizes:['US 6','US 7','US 8','US 9','US 10','US 11','US 12'], specs:{Midsole:'BOOST',Upper:'Primeknit',Outsole:'Continental Rubber',Drop:'10mm'} },
  { id:16, name:'GoPro Hero 12 Black', category:'Electronics', price:399, originalPrice:449, rating:4.7, reviews:2341, emoji:'📷', badge:'new', stock:20, sold:892, tags:['new','hot'], description:'5.3K60 video, 27MP photos with HyperSmooth 6.0 stabilization. Front and rear touch screens.', colors:['#1a1a1a'], sizes:[], specs:{Video:'5.3K60',Photo:'27MP',Stabilization:'HyperSmooth 6.0',Waterproof:'10m'} },
  { id:17, name:'Vitamix 5200 Blender', category:'Kitchen', price:349, originalPrice:449, rating:4.8, reviews:3210, emoji:'🥤', badge:'top', stock:16, sold:678, tags:['top'], description:'Aircraft-grade stainless steel blades. 10 variable speed settings. Self-cleaning in 30 to 60 seconds.', colors:['#1a1a1a','#c0c0c0','#e63946'], sizes:[], specs:{Motor:'2HP',Container:'64oz',Speeds:'10 Variable',Warranty:'7 Years'} },
  { id:18, name:'Fujifilm Instax Mini 12', category:'Electronics', price:79, originalPrice:99, rating:4.5, reviews:4521, emoji:'📸', badge:'sale', stock:55, sold:2103, tags:['sale','hot'], description:'Stylish instant camera with automatic exposure and close-up lens mode. Super cute design in 5 colors.', colors:['#ffb6c1','#98d8e8','#fff','#f5f5f5','#1a1a1a'], sizes:[], specs:{Film:'Instax Mini',Lens:'60mm f12.7',Flash:'Auto','Battery':'2x AA'} },
];

const CATEGORIES_DATA = [
  { name:'All', emoji:'🛍️', id:'all' },
  { name:'Electronics', emoji:'💻', id:'Electronics' },
  { name:'Fashion', emoji:'👗', id:'Fashion' },
  { name:'Gaming', emoji:'🎮', id:'Gaming' },
  { name:'Kitchen', emoji:'🍳', id:'Kitchen' },
  { name:'Home', emoji:'🏠', id:'Home' },
  { name:'Wearables', emoji:'⌚', id:'Wearables' },
  { name:'Toys', emoji:'🧸', id:'Toys' },
  { name:'Laptops', emoji:'💾', id:'Laptops' },
];

const DEALS_DATA = [
  { id:8, discount:50, sold:89, total:100 },
  { id:1, discount:25, sold:67, total:80 },
  { id:4, discount:35, sold:45, total:60 },
  { id:11, discount:20, sold:73, total:90 },
];

const TESTIMONIALS_DATA = [
  { name:'Sarah Johnson', title:'Verified Buyer', avatar:'👩', stars:5, text:'Absolutely love NexaShop! The product quality is incredible and delivery was super fast. I ordered Monday and it arrived Wednesday. Will definitely shop again!' },
  { name:'Marcus Williams', title:'Tech Enthusiast', avatar:'👨🏿', stars:5, text:'Best online store I\'ve used in years. The search and filter options make finding products so easy. Plus the 3D product views are amazing. Highly recommend!' },
  { name:'Emily Chen', title:'Fashion Blogger', avatar:'👩🏻', stars:5, text:'The fashion collection is on point and prices are very competitive. Returns process was smooth and customer service was incredibly helpful throughout.' },
  { name:'James Rodriguez', title:'Gaming Pro', avatar:'🧑🏽', stars:4, text:'Got the PS5 bundle and it arrived perfectly packaged. The checkout was super easy and secure. Great selection of gaming accessories too!' },
  { name:'Priya Patel', title:'Home Chef', avatar:'👩🏾', stars:5, text:'The kitchen appliances section is fantastic! My KitchenAid mixer arrived in perfect condition. Quality matches the description exactly. Love this store!' },
  { name:'Alex Thompson', title:'Fitness Coach', avatar:'🧑', stars:5, text:'Found the best deals on sports gear here. The price range filters make it so easy to shop within budget. Fast shipping and authentic products guaranteed!' },
];

/* ============================================================
   STATE MANAGEMENT - MVC Architecture
============================================================ */
const Store = {
  state: {
    products: [],
    filteredProducts: [],
    displayedProducts: [],
    cart: [],
    wishlist: [],
    currentCategory: 'all',
    currentSort: 'default',
    currentView: 'grid',
    filters: {
      minPrice: 0,
      maxPrice: 2000,
      minRating: 0,
      tags: [],
      inStock: false,
    },
    searchQuery: '',
    itemsPerPage: 12,
    loadedCount: 12,
    checkoutStep: 0,
  },

  init() {
    this.loadFromStorage();
    this.state.products = [...PRODUCTS_DATA];
    this.applyFilters();
  },

  loadFromStorage() {
    try {
      const cart = localStorage.getItem('nexashop_cart');
      const wishlist = localStorage.getItem('nexashop_wishlist');
      if (cart) this.state.cart = JSON.parse(cart);
      if (wishlist) this.state.wishlist = JSON.parse(wishlist);
    } catch(e) {
      console.warn('Storage error:', e);
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem('nexashop_cart', JSON.stringify(this.state.cart));
      localStorage.setItem('nexashop_wishlist', JSON.stringify(this.state.wishlist));
    } catch(e) {
      console.warn('Storage error:', e);
    }
  },

  applyFilters() {
    let products = [...this.state.products];

    // Category filter
    if (this.state.currentCategory !== 'all') {
      products = products.filter(p => p.category === this.state.currentCategory);
    }

    // Search filter
    if (this.state.searchQuery) {
      const q = this.state.searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Price filter
    products = products.filter(p =>
      p.price >= this.state.filters.minPrice &&
      p.price <= this.state.filters.maxPrice
    );

    // Rating filter
    if (this.state.filters.minRating > 0) {
      products = products.filter(p => p.rating >= this.state.filters.minRating);
    }

    // Tag filter
    if (this.state.filters.tags.length > 0) {
      products = products.filter(p =>
        this.state.filters.tags.some(tag => p.tags.includes(tag))
      );
    }

    // In stock filter
    if (this.state.filters.inStock) {
      products = products.filter(p => p.stock > 0);
    }

    // Sort
    products = this.sortProducts(products);

    this.state.filteredProducts = products;
    this.state.loadedCount = this.state.itemsPerPage;
    this.state.displayedProducts = products.slice(0, this.state.loadedCount);

    return products;
  },

  sortProducts(products) {
    const sorted = [...products];
    switch (this.state.currentSort) {
      case 'price-asc': return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc': return sorted.sort((a, b) => b.price - a.price);
      case 'name-asc': return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc': return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
      case 'popularity': return sorted.sort((a, b) => b.sold - a.sold);
      case 'newest': return sorted.sort((a, b) => b.id - a.id);
      default: return sorted;
    }
  },

  getCartTotal() {
    return this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  getCartCount() {
    return this.state.cart.reduce((sum, item) => sum + item.qty, 0);
  },

  addToCart(productId, qty = 1) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return false;

    const existingIndex = this.state.cart.findIndex(item => item.id === productId);
    if (existingIndex >= 0) {
      this.state.cart[existingIndex].qty += qty;
    } else {
      this.state.cart.push({ ...product, qty });
    }
    this.saveToStorage();
    return true;
  },

  removeFromCart(productId) {
    this.state.cart = this.state.cart.filter(item => item.id !== productId);
    this.saveToStorage();
  },

  updateCartQty(productId, qty) {
    if (qty <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const item = this.state.cart.find(i => i.id === productId);
    if (item) item.qty = qty;
    this.saveToStorage();
  },

  toggleWishlist(productId) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return false;

    const inWishlist = this.state.wishlist.some(w => w.id === productId);
    if (inWishlist) {
      this.state.wishlist = this.state.wishlist.filter(w => w.id !== productId);
    } else {
      this.state.wishlist.push(product);
    }
    this.saveToStorage();
    return !inWishlist;
  },

  isInWishlist(productId) {
    return this.state.wishlist.some(w => w.id === productId);
  },

  isInCart(productId) {
    return this.state.cart.some(c => c.id === productId);
  },

  loadMore() {
    this.state.loadedCount += this.state.itemsPerPage;
    this.state.displayedProducts = this.state.filteredProducts.slice(0, this.state.loadedCount);
  },

  clearCart() {
    this.state.cart = [];
    this.saveToStorage();
  },
};

/* ============================================================
   UI CONTROLLERS
============================================================ */
const UI = {
  renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    const counts = {};
    PRODUCTS_DATA.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    grid.innerHTML = CATEGORIES_DATA.map(cat => `
      <div class="category-card ${Store.state.currentCategory === cat.id ? 'active' : ''}"
           onclick="selectCategory('${cat.id}')"
           data-cat="${cat.id}">
        <span class="cat-emoji">${cat.emoji}</span>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-count">${cat.id === 'all' ? PRODUCTS_DATA.length + ' items' : (counts[cat.id] || 0) + ' items'}</div>
      </div>
    `).join('');
  },

  renderProducts() {
    const grid = document.getElementById('productsGrid');
    const countEl = document.getElementById('productsCount');
    const loadMoreWrap = document.getElementById('loadMoreWrap');

    if (!grid) return;

    const products = Store.state.displayedProducts;
    const total = Store.state.filteredProducts.length;

    if (countEl) {
      countEl.innerHTML = `Showing <strong>${products.length}</strong> of <strong>${total}</strong> products`;
    }

    if (products.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="icon">🔍</div>
          <h3>No products found</h3>
          <p>Try adjusting your filters or search query</p>
          <button onclick="clearFilters()" style="margin-top:20px;padding:12px 28px;background:var(--gradient);color:white;border:none;border-radius:50px;font-size:0.9rem;font-weight:700;cursor:pointer;">Clear Filters</button>
        </div>
      `;
      if (loadMoreWrap) loadMoreWrap.style.display = 'none';
      return;
    }

    const isListView = Store.state.currentView === 'list';

    grid.innerHTML = products.map((p, i) => {
      const inWish = Store.isInWishlist(p.id);
      const inCart = Store.isInCart(p.id);
      const stockPct = Math.round((p.stock / (p.stock + p.sold)) * 100);
      const stockClass = stockPct > 50 ? 'stock-high' : stockPct > 20 ? 'stock-mid' : 'stock-low';
      const discount = p.originalPrice > p.price ? Math.round((1 - p.price/p.originalPrice)*100) : 0;

      return `
        <div class="product-card ${isListView ? 'list-view' : ''}"
             style="animation-delay:${i * 0.05}s"
             onclick="openProductModal(${p.id})"
             data-id="${p.id}">
          <div class="product-image-wrap">
            <div class="product-img">${p.emoji}</div>
            <div class="product-badges">
              ${p.badge ? `<span class="badge-chip ${p.badge}">${p.badge.toUpperCase()}</span>` : ''}
              ${discount > 0 ? `<span class="badge-chip sale">-${discount}%</span>` : ''}
            </div>
            <div class="product-actions">
              <button class="action-btn wishlist ${inWish ? 'active' : ''}"
                      onclick="event.stopPropagation();handleWishlist(${p.id})"
                      title="${inWish ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                <i class="${inWish ? 'fas' : 'far'} fa-heart"></i>
              </button>
              <button class="action-btn quick-view"
                      onclick="event.stopPropagation();openProductModal(${p.id})"
                      title="Quick View">
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div class="product-info">
            <div class="product-category">${p.category}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-rating">
              <div class="stars">${renderStars(p.rating)}</div>
              <span class="rating-count">(${p.reviews.toLocaleString()})</span>
            </div>
            <div class="product-price-row">
              <div class="price-group">
                <span class="price-current">$${p.price}</span>
                ${p.originalPrice > p.price ? `<span class="price-original">$${p.originalPrice}</span>` : ''}
                ${discount > 0 ? `<span class="price-discount">-${discount}%</span>` : ''}
              </div>
              <button class="add-cart-btn ${inCart ? 'added' : ''}"
                      onclick="event.stopPropagation();handleAddToCart(${p.id}, this)"
                      title="Add to Cart">
                <i class="fas fa-${inCart ? 'check' : 'cart-plus'}"></i>
                ${isListView ? (inCart ? 'Added' : 'Add') : ''}
              </button>
            </div>
            <div class="stock-bar">
              <div class="stock-text">
                <span>Sold: ${p.sold}</span>
                <span>Stock: ${p.stock}</span>
              </div>
              <div class="stock-track">
                <div class="stock-fill ${stockClass}" style="width:${100-stockPct}%"></div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (loadMoreWrap) {
      loadMoreWrap.style.display = Store.state.loadedCount < total ? 'block' : 'none';
    }
  },

  renderCart() {
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');
    const summary = document.getElementById('cartSummary');
    const badge = document.getElementById('cartBadge');
    const chip = document.getElementById('cartCountChip');

    const cart = Store.state.cart;
    const count = Store.getCartCount();
    const total = Store.getCartTotal();

    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
    if (chip) chip.textContent = count;

    if (!body) return;

    if (cart.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <div class="empty-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some amazing products to get started!</p>
        </div>
      `;
      if (footer) footer.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = 'block';

    body.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.category}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${item.id}, ${item.qty - 1})">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, ${item.qty + 1})">+</button>
          </div>
        </div>
        <div class="cart-item-price">
          <div class="cart-item-total">$${(item.price * item.qty).toFixed(2)}</div>
          <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
            <i class="fas fa-trash"></i> Remove
          </button>
        </div>
      </div>
    `).join('');

    const tax = total * 0.08;
    const shipping = total > 50 ? 0 : 9.99;
    const grandTotal = total + tax + shipping;

    if (summary) {
      summary.innerHTML = `
        <div class="summary-row">
          <span>Subtotal (${count} items)</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span>${shipping === 0 ? '<span style="color:var(--accent);font-weight:700;">FREE</span>' : '$' + shipping.toFixed(2)}</span>
        </div>
        <div class="summary-row">
          <span>Tax (8%)</span>
          <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row total">
          <span>Total</span>
          <span>$${grandTotal.toFixed(2)}</span>
        </div>
      `;
    }
  },

  renderWishlist() {
    const body = document.getElementById('wishlistBody');
    const badge = document.getElementById('wishlistBadge');
    const chip = document.getElementById('wishlistCountChip');

    const wishlist = Store.state.wishlist;
    const count = wishlist.length;

    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
    if (chip) chip.textContent = count;

    if (!body) return;

    if (wishlist.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <div class="empty-icon">❤️</div>
          <h3>Wishlist is empty</h3>
          <p>Save products you love to your wishlist!</p>
        </div>
      `;
      return;
    }

    body.innerHTML = wishlist.map(item => `
      <div class="wishlist-item">
        <div class="wishlist-item-img">${item.emoji}</div>
        <div class="wishlist-item-info">
          <div class="wishlist-item-name">${item.name}</div>
          <div class="wishlist-item-price">$${item.price}</div>
        </div>
        <div class="wishlist-item-actions">
          <button class="wish-add-btn" onclick="moveToCart(${item.id})">
            <i class="fas fa-cart-plus"></i> Add
          </button>
          <button class="wish-remove-btn" onclick="removeFromWishlist(${item.id})">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `).join('');
  },

  renderDeals() {
    const grid = document.getElementById('dealsGrid');
    if (!grid) return;

    grid.innerHTML = DEALS_DATA.map(deal => {
      const product = PRODUCTS_DATA.find(p => p.id === deal.id);
      if (!product) return '';
      return `
        <div class="deal-card" onclick="openProductModal(${product.id})">
          <div class="deal-discount-badge">-${deal.discount}%</div>
          <div class="deal-emoji">${product.emoji}</div>
          <div class="product-category">${product.category}</div>
          <div class="product-name" style="-webkit-line-clamp:1;">${product.name}</div>
          <div style="display:flex;align-items:baseline;gap:10px;margin:8px 0;">
            <span class="price-current">$${Math.round(product.originalPrice * (1 - deal.discount/100))}</span>
            <span class="price-original">$${product.originalPrice}</span>
          </div>
          <div class="deal-progress">
            <div class="deal-progress-text">
              <span>🔥 ${deal.sold} sold</span>
              <span>${deal.total - deal.sold} left</span>
            </div>
            <div class="deal-progress-bar">
              <div class="deal-progress-fill" style="width:${(deal.sold/deal.total)*100}%"></div>
            </div>
          </div>
          <button class="add-cart-btn" style="width:100%;justify-content:center;margin-top:12px;"
                  onclick="event.stopPropagation();handleAddToCart(${product.id}, this)">
            <i class="fas fa-bolt"></i> Grab Deal
          </button>
        </div>
      `;
    }).join('');
  },

  renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = TESTIMONIALS_DATA.map(t => `
      <div class="testimonial-card">
        <div class="test-stars">${'⭐'.repeat(t.stars)}</div>
        <p class="test-text">"${t.text}"</p>
        <div class="test-author">
          <div class="test-avatar">${t.avatar}</div>
          <div>
            <div class="test-name">${t.name}</div>
            <div class="test-title">${t.title}</div>
          </div>
        </div>
      </div>
    `).join('');
  },
};

/* ============================================================
   PRODUCT MODAL
============================================================ */
function openProductModal(id) {
  const product = PRODUCTS_DATA.find(p => p.id === id);
  if (!product) return;

  const overlay = document.getElementById('productModalOverlay');
  const content = document.getElementById('modalContent');

  const inWish = Store.isInWishlist(id);

  content.innerHTML = `
    <div class="modal-gallery">
      <div class="modal-main-img" id="modalMainImg">${product.emoji}</div>
      <div class="modal-thumbnails">
        ${['1','2','3'].map((_, i) => `
          <div class="modal-thumb ${i === 0 ? 'active' : ''}" onclick="selectThumb(this, '${product.emoji}')">
            ${product.emoji}
          </div>
        `).join('')}
      </div>
    </div>
    <div class="modal-info">
      <div class="modal-category">${product.category}</div>
      <h2 class="modal-name">${product.name}</h2>
      <div class="modal-rating">
        <div class="stars">${renderStars(product.rating)}</div>
        <span style="font-size:0.85rem;color:var(--text2);font-weight:600;">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
      </div>
      <div class="modal-price-row">
        <span class="modal-price-current">$${product.price}</span>
        ${product.originalPrice > product.price ? `<span class="modal-price-old">$${product.originalPrice}</span>` : ''}
        ${product.originalPrice > product.price ? `<span class="price-discount">-${Math.round((1-product.price/product.originalPrice)*100)}% OFF</span>` : ''}
      </div>
      <p class="modal-desc">${product.description}</p>

      ${product.colors.length > 0 ? `
        <div class="modal-options">
          <div class="option-label">Color</div>
          <div class="color-options">
            ${product.colors.map((c, i) => `
              <div class="color-dot ${i===0?'selected':''}" style="background:${c};"
                   onclick="selectColor(this)"></div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${product.sizes.length > 0 ? `
        <div class="modal-options">
          <div class="option-label">Size</div>
          <div class="size-options">
            ${product.sizes.map((s, i) => `
              <button class="size-chip ${i===0?'selected':''}"
                      onclick="selectSize(this)">${s}</button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="modal-qty-row">
        <div class="modal-qty-controls">
          <button class="modal-qty-btn" onclick="changeModalQty(-1)">−</button>
          <input class="modal-qty-num" id="modalQty" type="number" value="1" min="1" readonly />
          <button class="modal-qty-btn" onclick="changeModalQty(1)">+</button>
        </div>
        <button class="modal-add-btn" onclick="addFromModal(${product.id})">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>

      <div class="modal-actions-row">
        <button class="modal-wish-btn" id="modalWishBtn" onclick="handleWishlistModal(${product.id})">
          <i class="${inWish ? 'fas' : 'far'} fa-heart"></i>
          ${inWish ? 'In Wishlist' : 'Add to Wishlist'}
        </button>
        <button class="modal-share-btn" onclick="shareProduct('${product.name}')">
          <i class="fas fa-share-alt"></i> Share
        </button>
      </div>

      <div class="modal-specs">
        ${Object.entries(product.specs).map(([k, v]) => `
          <div class="spec-row">
            <span class="spec-key">${k}</span>
            <span class="spec-val">${v}</span>
          </div>
        `).join('')}
        <div class="spec-row">
          <span class="spec-key">In Stock</span>
          <span class="spec-val" style="color:${product.stock > 0 ? 'var(--accent)' : 'var(--secondary)'}">
            ${product.stock > 0 ? product.stock + ' units' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModalOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function handleModalClose(e) {
  if (e.target === document.getElementById('productModalOverlay')) {
    closeProductModal();
  }
}

function selectThumb(el, emoji) {
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectColor(el) {
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
}

function selectSize(el) {
  document.querySelectorAll('.size-chip').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function changeModalQty(delta) {
  const input = document.getElementById('modalQty');
  if (!input) return;
  const newVal = Math.max(1, parseInt(input.value) + delta);
  input.value = newVal;
}

function addFromModal(productId) {
  const qty = parseInt(document.getElementById('modalQty')?.value || 1);
  for (let i = 0; i < qty; i++) {
    Store.addToCart(productId);
  }
  UI.renderCart();
  UI.renderProducts();
  closeProductModal();
  showToast('Added to cart! 🛒', 'success');
}

function handleWishlistModal(productId) {
  const added = Store.toggleWishlist(productId);
  const btn = document.getElementById('modalWishBtn');
  if (btn) {
    btn.innerHTML = `
      <i class="${added ? 'fas' : 'far'} fa-heart"></i>
      ${added ? 'In Wishlist' : 'Add to Wishlist'}
    `;
  }
  UI.renderWishlist();
  UI.renderProducts();
  showToast(added ? '❤️ Added to wishlist!' : '💔 Removed from wishlist', added ? 'success' : 'info');
}

function shareProduct(name) {
  if (navigator.share) {
    navigator.share({ title: name, text: `Check out ${name} on NexaShop!`, url: window.location.href });
  } else {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Link copied to clipboard! 📋', 'info');
  }
}

/* ============================================================
   CHECKOUT MODAL
============================================================ */
const CHECKOUT_STEPS = ['Cart', 'Shipping', 'Payment', 'Review', 'Confirm'];

let checkoutState = {
  step: 0,
  data: {}
};

function openCheckout() {
  if (Store.state.cart.length === 0) {
    showToast('Your cart is empty!', 'warning');
    return;
  }
  toggleCart();
  checkoutState.step = 0;
  renderCheckout();
  document.getElementById('checkoutModalOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModalOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function handleCheckoutClose(e) {
  if (e.target === document.getElementById('checkoutModalOverlay')) closeCheckout();
}

function renderCheckout() {
  renderCheckoutSteps();
  renderCheckoutBody();
}

function renderCheckoutSteps() {
  const stepsEl = document.getElementById('checkoutSteps');
  if (!stepsEl) return;

  const steps = ['Shipping', 'Payment', 'Review', '✓'];

  let html = '';
  steps.forEach((s, i) => {
    const isDone = i < checkoutState.step;
    const isActive = i === checkoutState.step;
    html += `
      <div class="step-item">
        <div class="step-circle ${isDone ? 'done' : isActive ? 'active' : ''}">
          ${isDone ? '✓' : i + 1}
        </div>
        ${i < steps.length - 1 ? `<div class="step-line ${isDone ? 'done' : ''}"></div>` : ''}
      </div>
    `;
  });

  stepsEl.innerHTML = html;
}

function renderCheckoutBody() {
  const body = document.getElementById('checkoutBody');
  if (!body) return;

  if (checkoutState.step === 0) {
    body.innerHTML = `
      <div class="form-step active">
        <h3 class="form-step-title">📦 Shipping Information</h3>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">First Name *</label>
            <input class="form-control" id="firstName" type="text" placeholder="John" value="${checkoutState.data.firstName||''}" />
            <span class="error-msg" id="firstNameErr">Please enter your first name</span>
          </div>
          <div class="form-group">
            <label class="form-label">Last Name *</label>
            <input class="form-control" id="lastName" type="text" placeholder="Doe" value="${checkoutState.data.lastName||''}" />
            <span class="error-msg" id="lastNameErr">Please enter your last name</span>
          </div>
        </div>
        <div class="form-grid single">
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input class="form-control" id="email" type="email" placeholder="john@example.com" value="${checkoutState.data.email||''}" />
            <span class="error-msg" id="emailErr">Please enter a valid email</span>
          </div>
        </div>
        <div class="form-grid single">
          <div class="form-group">
            <label class="form-label">Phone Number *</label>
            <input class="form-control" id="phone" type="tel" placeholder="+1 234 567 8900" value="${checkoutState.data.phone||''}" />
            <span class="error-msg" id="phoneErr">Please enter a valid phone number</span>
          </div>
        </div>
        <div class="form-grid single">
          <div class="form-group">
            <label class="form-label">Street Address *</label>
            <input class="form-control" id="address" type="text" placeholder="123 Main Street, Apt 4B" value="${checkoutState.data.address||''}" />
            <span class="error-msg" id="addressErr">Please enter your address</span>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">City *</label>
            <input class="form-control" id="city" type="text" placeholder="New York" value="${checkoutState.data.city||''}" />
            <span class="error-msg" id="cityErr">Please enter your city</span>
          </div>
          <div class="form-group">
            <label class="form-label">ZIP Code *</label>
            <input class="form-control" id="zip" type="text" placeholder="10001" value="${checkoutState.data.zip||''}" />
            <span class="error-msg" id="zipErr">Please enter a valid ZIP</span>
          </div>
        </div>
        <div class="checkout-nav">
          <span></span>
          <button class="checkout-next" onclick="nextStep()">Continue to Payment <i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    `;
  } else if (checkoutState.step === 1) {
    body.innerHTML = `
      <div class="form-step active">
        <h3 class="form-step-title">💳 Payment Method</h3>
        <div class="payment-methods">
          <label class="payment-method selected" data-pay="card" onclick="selectPayment(this)">
            <input type="radio" name="payment" value="card" checked />
            <span class="pm-icon">💳</span>
            <span class="pm-name">Credit Card</span>
          </label>
          <label class="payment-method" data-pay="paypal" onclick="selectPayment(this)">
            <input type="radio" name="payment" value="paypal" />
            <span class="pm-icon">🅿️</span>
            <span class="pm-name">PayPal</span>
          </label>
          <label class="payment-method" data-pay="apple" onclick="selectPayment(this)">
            <input type="radio" name="payment" value="apple" />
            <span class="pm-icon"></span>
            <span class="pm-name">Apple Pay</span>
          </label>
          <label class="payment-method" data-pay="crypto" onclick="selectPayment(this)">
            <input type="radio" name="payment" value="crypto" />
            <span class="pm-icon">₿</span>
            <span class="pm-name">Crypto</span>
          </label>
        </div>
        <div id="cardFields">
          <div class="form-grid single">
            <div class="form-group">
              <label class="form-label">Card Number *</label>
              <input class="form-control" id="cardNum" type="text" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCard(this)" value="${checkoutState.data.cardNum||''}" />
              <span class="error-msg" id="cardNumErr">Please enter a valid card number</span>
            </div>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Expiry Date *</label>
              <input class="form-control" id="expiry" type="text" placeholder="MM/YY" maxlength="5" oninput="formatExpiry(this)" value="${checkoutState.data.expiry||''}" />
              <span class="error-msg" id="expiryErr">Please enter a valid expiry</span>
            </div>
            <div class="form-group">
              <label class="form-label">CVV *</label>
              <input class="form-control" id="cvv" type="password" placeholder="•••" maxlength="4" value="${checkoutState.data.cvv||''}" />
              <span class="error-msg" id="cvvErr">Please enter CVV</span>
            </div>
          </div>
          <div class="form-grid single">
            <div class="form-group">
              <label class="form-label">Cardholder Name *</label>
              <input class="form-control" id="cardName" type="text" placeholder="John Doe" value="${checkoutState.data.cardName||''}" />
              <span class="error-msg" id="cardNameErr">Please enter cardholder name</span>
            </div>
          </div>
        </div>
        <div class="checkout-nav">
          <button class="checkout-prev" onclick="prevStep()"><i class="fas fa-arrow-left"></i> Back</button>
          <button class="checkout-next" onclick="nextStep()">Review Order <i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    `;
  } else if (checkoutState.step === 2) {
    const total = Store.getCartTotal();
    const tax = total * 0.08;
    const shipping = total > 50 ? 0 : 9.99;
    const grand = total + tax + shipping;

    body.innerHTML = `
      <div class="form-step active">
        <h3 class="form-step-title">📋 Review Your Order</h3>
        <div class="order-items">
          ${Store.state.cart.map(item => `
            <div class="order-item">
              <div class="order-item-img">${item.emoji}</div>
              <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-qty">Qty: ${item.qty}</div>
              </div>
              <div class="order-item-price">$${(item.price * item.qty).toFixed(2)}</div>
            </div>
          `).join('')}
        </div>
        <div class="cart-summary">
          <div class="summary-row"><span>Subtotal</span><span>$${total.toFixed(2)}</span></div>
          <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '$'+shipping.toFixed(2)}</span></div>
          <div class="summary-row"><span>Tax (8%)</span><span>$${tax.toFixed(2)}</span></div>
          <div class="summary-row total"><span>Grand Total</span><span>$${grand.toFixed(2)}</span></div>
        </div>
        <div style="background:var(--bg3);border-radius:var(--radius3);padding:14px;font-size:0.85rem;color:var(--text2);margin-top:16px;">
          <strong style="color:var(--text);">📍 Deliver to:</strong> ${checkoutState.data.address}, ${checkoutState.data.city} ${checkoutState.data.zip}
        </div>
        <div class="checkout-nav">
          <button class="checkout-prev" onclick="prevStep()"><i class="fas fa-arrow-left"></i> Back</button>
          <button class="checkout-next" onclick="placeOrder()" style="background:linear-gradient(135deg,#43e97b,#38f9d7);color:#1a1a1a;">
            <i class="fas fa-lock"></i> Place Order
          </button>
        </div>
      </div>
    `;
  } else if (checkoutState.step === 3) {
    const orderId = 'NX' + Date.now().toString().slice(-8);
    body.innerHTML = `
      <div class="form-step active">
        <div class="success-step">
          <div class="success-icon">✅</div>
          <h2 class="success-title">Order Placed Successfully!</h2>
          <p class="success-desc">Thank you for shopping with NexaShop! Your order is confirmed and will be delivered soon.</p>
          <div class="order-number">
            🧾 Order #${orderId}
          </div>
          <p class="success-desc">A confirmation email has been sent to <strong>${checkoutState.data.email}</strong></p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:24px;">
            <button onclick="closeCheckout()" class="checkout-next">
              <i class="fas fa-home"></i> Continue Shopping
            </button>
          </div>
        </div>
      </div>
    `;
    Store.clearCart();
    UI.renderCart();
  }
}

function selectPayment(el) {
  document.querySelectorAll('.payment-method').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  const val = el.dataset.pay;
  const cardFields = document.getElementById('cardFields');
  if (cardFields) cardFields.style.display = val === 'card' ? 'block' : 'none';
}

function formatCard(input) {
  let val = input.value.replace(/\D/g,'').slice(0,16);
  input.value = val.replace(/(.{4})/g,'$1 ').trim();
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g,'');
  if (val.length >= 2) val = val.slice(0,2)+'/'+val.slice(2,4);
  input.value = val;
}

function validateStep() {
  if (checkoutState.step === 0) {
    const fields = [
      { id:'firstName', err:'firstNameErr', validate: v => v.trim().length >= 2 },
      { id:'lastName', err:'lastNameErr', validate: v => v.trim().length >= 2 },
      { id:'email', err:'emailErr', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id:'phone', err:'phoneErr', validate: v => v.trim().length >= 8 },
      { id:'address', err:'addressErr', validate: v => v.trim().length >= 5 },
      { id:'city', err:'cityErr', validate: v => v.trim().length >= 2 },
      { id:'zip', err:'zipErr', validate: v => v.trim().length >= 3 },
    ];

    let valid = true;
    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const err = document.getElementById(f.err);
      if (!input) return;
      const isValid = f.validate(input.value);
      input.classList.toggle('error', !isValid);
      input.classList.toggle('success', isValid);
      if (err) err.classList.toggle('show', !isValid);
      if (!isValid) valid = false;
      else checkoutState.data[f.id] = input.value;
    });
    return valid;
  }

  if (checkoutState.step === 1) {
    const payMethod = document.querySelector('.payment-method.selected');
    const isCard = payMethod?.dataset.pay === 'card';
    if (!isCard) return true;

    const fields = [
      { id:'cardNum', err:'cardNumErr', validate: v => v.replace(/\s/g,'').length === 16 },
      { id:'expiry', err:'expiryErr', validate: v => /^\d{2}\/\d{2}$/.test(v) },
      { id:'cvv', err:'cvvErr', validate: v => v.length >= 3 },
      { id:'cardName', err:'cardNameErr', validate: v => v.trim().length >= 3 },
    ];

    let valid = true;
    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const err = document.getElementById(f.err);
      if (!input) return;
      const isValid = f.validate(input.value);
      input.classList.toggle('error', !isValid);
      input.classList.toggle('success', isValid);
      if (err) err.classList.toggle('show', !isValid);
      if (!isValid) valid = false;
      else checkoutState.data[f.id] = input.value;
    });
    return valid;
  }
  return true;
}

function nextStep() {
  if (!validateStep()) {
    showToast('Please fix the errors above', 'error');
    return;
  }
  checkoutState.step = Math.min(checkoutState.step + 1, 3);
  renderCheckout();
}

function prevStep() {
  checkoutState.step = Math.max(checkoutState.step - 1, 0);
  renderCheckout();
}

function placeOrder() {
  showToast('Processing your order...', 'info');
  setTimeout(() => {
    checkoutState.step = 3;
    renderCheckout();
    showToast('🎉 Order placed successfully!', 'success');
  }, 1500);
}

/* ============================================================
   EVENT HANDLERS
============================================================ */
function handleAddToCart(productId, btn) {
  Store.addToCart(productId);
  UI.renderCart();
  UI.renderProducts();

  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="fas fa-cart-plus"></i>';
    }, 2000);
  }

  showToast('🛒 Added to cart!', 'success');
}

function handleWishlist(productId) {
  const added = Store.toggleWishlist(productId);
  UI.renderWishlist();
  UI.renderProducts();
  showToast(added ? '❤️ Added to wishlist!' : '💔 Removed from wishlist', added ? 'success' : 'info');
}

function removeFromCart(productId) {
  Store.removeFromCart(productId);
  UI.renderCart();
  UI.renderProducts();
  showToast('Removed from cart', 'info');
}

function updateQty(productId, qty) {
  Store.updateCartQty(productId, qty);
  UI.renderCart();
}

function removeFromWishlist(productId) {
  Store.toggleWishlist(productId);
  UI.renderWishlist();
  UI.renderProducts();
  showToast('Removed from wishlist', 'info');
}

function moveToCart(productId) {
  Store.addToCart(productId);
  Store.toggleWishlist(productId);
  UI.renderCart();
  UI.renderWishlist();
  UI.renderProducts();
  showToast('Moved to cart! 🛒', 'success');
}

function selectCategory(catId) {
  Store.state.currentCategory = catId;
  Store.applyFilters();
  UI.renderCategories();
  UI.renderProducts();

  const shopSection = document.getElementById('shop');
  if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setView(view) {
  Store.state.currentView = view;
  const grid = document.getElementById('productsGrid');
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');

  if (grid) grid.classList.toggle('list-view', view === 'list');
  if (gridBtn) gridBtn.classList.toggle('active', view === 'grid');
  if (listBtn) listBtn.classList.toggle('active', view === 'list');

  UI.renderProducts();
}

function clearFilters() {
  Store.state.currentCategory = 'all';
  Store.state.filters = { minPrice: 0, maxPrice: 2000, minRating: 0, tags: [], inStock: false };
  Store.state.searchQuery = '';
  Store.state.currentSort = 'default';

  // Reset UI
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');
  const priceRange = document.getElementById('priceRange');
  const sortSelect = document.getElementById('sortSelect');
  const searchInput = document.getElementById('searchInput');

  if (minPrice) minPrice.value = '';
  if (maxPrice) maxPrice.value = '';
  if (priceRange) { priceRange.value = 2000; updateRangeStyle(priceRange); }
  if (sortSelect) sortSelect.value = 'default';
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.rating-option').forEach((el, i) => {
    el.classList.toggle('selected', i === 0);
    const radio = el.querySelector('input[type="radio"]');
    if (radio) radio.checked = i === 0;
  });

  document.querySelectorAll('.tag-filter').forEach(cb => cb.checked = false);

  const inStockOnly = document.getElementById('inStockOnly');
  if (inStockOnly) inStockOnly.checked = false;

  Store.applyFilters();
  UI.renderCategories();
  UI.renderProducts();

  showToast('Filters cleared', 'info');
}

function loadMore() {
  Store.loadMore();
  UI.renderProducts();
}

/* ============================================================
   SIDEBAR TOGGLES
============================================================ */
let cartOpen = false;
let wishlistOpen = false;
let filterOpen = false;

function toggleCart() {
  cartOpen = !cartOpen;
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar?.classList.toggle('open', cartOpen);
  overlay?.classList.toggle('show', cartOpen);

  if (wishlistOpen) {
    wishlistOpen = false;
    document.getElementById('wishlistSidebar')?.classList.remove('open');
  }

  document.body.style.overflow = cartOpen ? 'hidden' : '';
}

function toggleWishlist() {
  wishlistOpen = !wishlistOpen;
  const sidebar = document.getElementById('wishlistSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar?.classList.toggle('open', wishlistOpen);
  overlay?.classList.toggle('show', wishlistOpen);

  if (cartOpen) {
    cartOpen = false;
    document.getElementById('cartSidebar')?.classList.remove('open');
  }

  document.body.style.overflow = wishlistOpen ? 'hidden' : '';
}

function toggleFilter() {
  filterOpen = !filterOpen;
  const sidebar = document.getElementById('filterSidebar');
  const overlay = document.getElementById('filterOverlay');

  if (window.innerWidth <= 900) {
    sidebar?.classList.toggle('mobile-open', filterOpen);
    overlay?.classList.toggle('show', filterOpen);
    document.body.style.overflow = filterOpen ? 'hidden' : '';
  } else {
    sidebar?.classList.toggle('hidden', filterOpen);
    const layout = document.getElementById('shopLayout');
    if (layout) {
      layout.style.gridTemplateColumns = filterOpen ? '1fr' : '280px 1fr';
    }
    filterOpen = !filterOpen; // Re-toggle since we flipped it
  }
}

/* ============================================================
   SEARCH
============================================================ */
let searchTimeout;

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const mobileSearch = document.getElementById('mobileSearch');
  const suggestions = document.getElementById('searchSuggestions');

  function handleSearch(query) {
    Store.state.searchQuery = query;
    Store.applyFilters();
    UI.renderProducts();
  }

  function showSuggestions(query) {
    if (!query || query.length < 2 || !suggestions) {
      if (suggestions) suggestions.classList.remove('show');
      return;
    }

    const matches = PRODUCTS_DATA.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);

    if (matches.length === 0) {
      suggestions.classList.remove('show');
      return;
    }

    suggestions.innerHTML = matches.map(p => `
      <div class="suggestion-item" onclick="selectSuggestion('${p.name.replace(/'/g, "\\'")}', ${p.id})">
        <span style="font-size:1.2rem;">${p.emoji}</span>
        <span>${p.name}</span>
        <i class="fas fa-arrow-right"></i>
      </div>
    `).join('');

    suggestions.classList.add('show');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        handleSearch(e.target.value);
        showSuggestions(e.target.value);
      }, 300);
    });

    searchInput.addEventListener('blur', () => {
      setTimeout(() => suggestions?.classList.remove('show'), 200);
    });
  }

  if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => handleSearch(e.target.value), 300);
    });
  }
}

function selectSuggestion(name, id) {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = name;
  document.getElementById('searchSuggestions')?.classList.remove('show');
  Store.state.searchQuery = name;
  Store.applyFilters();
  UI.renderProducts();
  openProductModal(id);
}

/* ============================================================
   FILTERS INIT
============================================================ */
function initFilters() {
  const priceRange = document.getElementById('priceRange');
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');
  const sortSelect = document.getElementById('sortSelect');

  if (priceRange) {
    priceRange.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      Store.state.filters.maxPrice = val;
      const rangeVal = document.getElementById('rangeVal');
      if (rangeVal) rangeVal.textContent = val >= 2000 ? '$2000+' : '$' + val;
      updateRangeStyle(priceRange);
      if (maxPrice) maxPrice.value = val < 2000 ? val : '';
      Store.applyFilters();
      UI.renderProducts();
    });
  }

  if (minPrice) {
    minPrice.addEventListener('input', (e) => {
      Store.state.filters.minPrice = parseInt(e.target.value) || 0;
      Store.applyFilters();
      UI.renderProducts();
    });
  }

  if (maxPrice) {
    maxPrice.addEventListener('input', (e) => {
      Store.state.filters.maxPrice = parseInt(e.target.value) || 2000;
      if (priceRange) {
        priceRange.value = Store.state.filters.maxPrice;
        updateRangeStyle(priceRange);
      }
      Store.applyFilters();
      UI.renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      Store.state.currentSort = e.target.value;
      Store.applyFilters();
      UI.renderProducts();
    });
  }

  // Rating filter
  document.addEventListener('click', (e) => {
    const ratingOption = e.target.closest('.rating-option');
    if (ratingOption) {
      document.querySelectorAll('.rating-option').forEach(el => el.classList.remove('selected'));
      ratingOption.classList.add('selected');
      const radio = ratingOption.querySelector('input');
      if (radio) {
        radio.checked = true;
        Store.state.filters.minRating = parseFloat(radio.value);
        Store.applyFilters();
        UI.renderProducts();
      }
    }
  });

  // Tag filters
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('tag-filter')) {
      const tags = [...document.querySelectorAll('.tag-filter:checked')].map(cb => cb.value);
      Store.state.filters.tags = tags;
      Store.applyFilters();
      UI.renderProducts();
    }

    if (e.target.id === 'inStockOnly') {
      Store.state.filters.inStock = e.target.checked;
      Store.applyFilters();
      UI.renderProducts();
    }
  });
}

function updateRangeStyle(range) {
  const pct = ((range.value - range.min) / (range.max - range.min)) * 100;
  range.style.setProperty('--val', pct + '%');
}

/* ============================================================
   COUNTDOWN TIMER
============================================================ */
function initCountdown() {
  const timerEl = document.getElementById('countdownTimer');
  if (!timerEl) return;

  let endTime = sessionStorage.getItem('dealEndTime');
  if (!endTime) {
    endTime = Date.now() + 12 * 60 * 60 * 1000;
    sessionStorage.setItem('dealEndTime', endTime);
  }

  function update() {
    const remaining = endTime - Date.now();
    if (remaining <= 0) {
      timerEl.innerHTML = '<span style="color:var(--secondary);font-weight:700;">⚡ Deals Ended!</span>';
      return;
    }

    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);

    timerEl.innerHTML = `
      <div class="time-block"><span class="time-num">${String(h).padStart(2,'0')}</span><span class="time-label">Hours</span></div>
      <span class="time-sep">:</span>
      <div class="time-block"><span class="time-num">${String(m).padStart(2,'0')}</span><span class="time-label">Mins</span></div>
      <span class="time-sep">:</span>
      <div class="time-block"><span class="time-num">${String(s).padStart(2,'0')}</span><span class="time-label">Secs</span></div>
    `;
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================
   HERO ROTATION
============================================================ */
function initHeroRotation() {
  const heroItems = [
    { emoji:'🎧', name:'Pro Headphones', price:'$279' },
    { emoji:'💻', name:'MacBook Pro M3', price:'$1,999' },
    { emoji:'⌚', name:'Apple Watch Ultra', price:'$799' },
    { emoji:'🎮', name:'PlayStation 5', price:'$499' },
    { emoji:'📸', name:'GoPro Hero 12', price:'$399' },
  ];

  let i = 0;
  setInterval(() => {
    i = (i + 1) % heroItems.length;
    const item = heroItems[i];
    const emojiEl = document.getElementById('heroEmoji');
    const nameEl = document.getElementById('heroName');
    const priceEl = document.getElementById('heroPrice');
    if (emojiEl && nameEl && priceEl) {
      emojiEl.style.transform = 'scale(0)';
      setTimeout(() => {
        emojiEl.textContent = item.emoji;
        nameEl.textContent = item.name;
        priceEl.textContent = item.price;
        emojiEl.style.transform = 'scale(1)';
      }, 300);
    }
  }, 3000);
}

/* ============================================================
   THEME TOGGLE
============================================================ */
function initTheme() {
  const saved = localStorage.getItem('nexashop_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('nexashop_theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ============================================================
   SCROLL EFFECTS
============================================================ */
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) header.classList.toggle('scrolled', scrollY > 50);
    if (backToTop) backToTop.classList.toggle('show', scrollY > 400);
  }, { passive: true });

  // Intersection Observer for fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToShop() {
  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDeals() {
  document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   MOBILE NAV
============================================================ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav?.classList.toggle('show');
  });
}

/* ============================================================
   TOAST SYSTEM
============================================================ */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = { success: 'fa-check', error: 'fa-times', info: 'fa-info', warning: 'fa-exclamation' };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon"><i class="fas ${icons[type] || 'fa-check'}"></i></div>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ============================================================
   PRELOADER PARTICLES
============================================================ */
function createParticles() {
  const container = document.getElementById('preloaderParticles');
  if (!container) return;

  const colors = ['#6c63ff','#ff6584','#43e97b','#ffd200','#38f9d7'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'p-particle';
    const size = Math.random() * 10 + 4;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*6+4}s;
      animation-delay:${Math.random()*5}s;
      opacity:0.6;
    `;
    container.appendChild(p);
  }
}

/* ============================================================
   STAR RENDER HELPER
============================================================ */
function renderStars(rating) {
  return [1,2,3,4,5].map(i => {
    if (i <= Math.floor(rating)) return '<span class="star">⭐</span>';
    return '<span class="star empty" style="filter:grayscale(1)">⭐</span>';
  }).join('');
}

/* ============================================================
   NEWSLETTER
============================================================ */
function initNewsletter() {
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    if (email) {
      showToast(`🎉 Subscribed! Check ${email} for your 20% discount code.`, 'success');
      document.getElementById('newsletterEmail').value = '';
    }
  });
}

/* ============================================================
   APP INITIALIZATION
============================================================ */
function initApp() {
  createParticles();

  // Init store
  Store.init();

  // Render all sections
  UI.renderCategories();
  UI.renderProducts();
  UI.renderCart();
  UI.renderWishlist();
  UI.renderDeals();
  UI.renderTestimonials();

  // Init features
  initSearch();
  initFilters();
  initCountdown();
  initHeroRotation();
  initTheme();
  initScrollEffects();
  initMobileNav();
  initNewsletter();

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cartOpen) toggleCart();
      if (wishlistOpen) toggleWishlist();
      if (document.getElementById('productModalOverlay')?.classList.contains('show')) closeProductModal();
      if (document.getElementById('checkoutModalOverlay')?.classList.contains('show')) closeCheckout();
    }
  });
}

/* ============================================================
   PRELOADER & INIT
============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader?.classList.add('hidden');
    initApp();

    // Re-run fade-in observer after content loads
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.05 });

      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 100);
  }, 2800);
});
