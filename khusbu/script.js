/* ============================================
   LuxeWear Boutique — JavaScript
   ============================================ */

// ---- Product Data ----
const products = [
  {
    id: 1,
    name: 'Royal Banarasi Silk Saree',
    category: 'Sarees',
    price: 4999,
    originalPrice: 5999,
    image: 'images/saree-banarasi.png',
    images: ['images/saree-banarasi.png', 'images/saree-kanjeevaram.png'],
    badge: 'new',
    rating: 4.9,
    reviews: 248,
    colors: ['#7B1B2D', '#C49B2C', '#1A3A5C'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A stunning Royal Banarasi Silk Saree with intricate gold zari weaving throughout. This masterpiece from the looms of Varanasi features traditional motifs, rich silk fabric, and a luxurious pallu that drapes beautifully. Perfect for weddings, Diwali celebrations, and festive gatherings where you want to make a regal statement.'
  },
  {
    id: 2,
    name: 'Chikankari Kurti Set',
    category: 'Kurti Sets',
    price: 1799,
    originalPrice: 2499,
    image: 'images/kurti-chikankari.png',
    images: ['images/kurti-chikankari.png', 'images/kurti-mirror.png'],
    badge: 'sale',
    rating: 4.7,
    reviews: 186,
    colors: ['#D4856A', '#F5E1CE', '#FFFFFF'],
    sizes: ['S', 'M', 'L'],
    description: 'An elegant Lucknowi Chikankari Kurti Set featuring delicate hand-embroidered floral patterns on soft cotton fabric. Comes with matching palazzo pants and a lightweight dupatta. The breathable fabric and timeless embroidery make it perfect for daily wear, office, or casual festive outings.'
  },
  {
    id: 3,
    name: 'Festive Anarkali Suit',
    category: 'Anarkali Suits',
    price: 3499,
    originalPrice: 4499,
    image: 'images/anarkali-festive.png',
    images: ['images/anarkali-festive.png', 'images/anarkali-emerald.png'],
    badge: 'new',
    rating: 4.8,
    reviews: 142,
    colors: ['#7B1B2D', '#4A0E0E', '#C49B2C'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Turn heads at every celebration with this stunning Festive Anarkali Suit in rich maroon with golden embroidery. The flared silhouette features heavy thread work and sequin embellishments on premium georgette fabric. Comes with a matching churidar and embroidered dupatta. Ideal for Karva Chauth, Diwali parties, and sangeet functions.'
  },
  {
    id: 4,
    name: 'Royal Bridal Lehenga Choli',
    category: 'Lehenga Choli',
    price: 6999,
    originalPrice: null,
    image: 'images/lehenga-bridal.png',
    images: ['images/lehenga-bridal.png', 'images/lehenga-designer.png'],
    badge: null,
    rating: 5.0,
    reviews: 89,
    colors: ['#7B1B2D', '#C49B2C', '#FAEBD7'],
    sizes: ['S', 'M', 'L'],
    description: 'A breathtaking Royal Bridal Lehenga Choli with heavy zardozi and mirror work embroidery on rich velvet fabric. This masterpiece features a fully embroidered blouse, a voluminous lehenga with intricate border work, and a matching dupatta with golden lace trim. Designed to make every bride feel like royalty on her wedding day.'
  },
  {
    id: 5,
    name: 'Floral Indo-Western Gown',
    category: 'Indo-Western',
    price: 2299,
    originalPrice: 2999,
    image: 'images/indowestern-floral.png',
    images: ['images/indowestern-floral.png', 'images/indowestern-sage.png', 'images/kurti-lavender.png'],
    badge: 'sale',
    rating: 4.6,
    reviews: 213,
    colors: ['#D4856A', '#FFB6C1', '#F5E1CE'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A gorgeous Floral Indo-Western Gown that beautifully blends Indian and Western aesthetics. Crafted from lightweight georgette with delicate floral prints and subtle gold foil accents. The A-line silhouette, ruffled hemline, and flowing drape make it perfect for engagement parties, reception dinners, and mehendi ceremonies.'
  },
  {
    id: 6,
    name: 'Emerald Georgette Anarkali',
    category: 'Anarkali Suits',
    price: 2999,
    originalPrice: 3799,
    image: 'images/anarkali-emerald.png',
    images: ['images/anarkali-emerald.png', 'images/anarkali-festive.png'],
    badge: null,
    rating: 4.8,
    reviews: 167,
    colors: ['#0B6623', '#006400', '#C49B2C'],
    sizes: ['S', 'M', 'L'],
    description: 'A sophisticated Emerald Green Georgette Anarkali with exquisite gold thread embroidery. The lustrous fabric catches the light beautifully while the fitted bodice and flowing flare create a regal silhouette. The intricate border work and matching dupatta make this a statement piece for Eid, sangeet, and family celebrations.'
  },
  {
    id: 7,
    name: 'Mirror Work Kurti Set',
    category: 'Kurti Sets',
    price: 1499,
    originalPrice: null,
    image: 'images/kurti-mirror.png',
    images: ['images/kurti-mirror.png', 'images/kurti-chikankari.png'],
    badge: null,
    rating: 4.5,
    reviews: 198,
    colors: ['#F5E1CE', '#D2B48C', '#9E8A82'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A beautifully crafted Mirror Work Kurti Set featuring traditional Rajasthani mirror embellishments on premium cotton fabric. Comes with matching pants and a printed dupatta. The comfortable fit, breathable fabric, and eye-catching mirror work make it perfect for festive occasions, college events, and casual outings.'
  },
  {
    id: 8,
    name: 'Designer Wedding Lehenga',
    category: 'Lehenga Choli',
    price: 5999,
    originalPrice: 6999,
    image: 'images/lehenga-designer.png',
    images: ['images/lehenga-designer.png', 'images/lehenga-bridal.png'],
    badge: 'sale',
    rating: 4.9,
    reviews: 76,
    colors: ['#C49B2C', '#7B1B2D', '#FAEBD7'],
    sizes: ['S', 'M', 'L'],
    description: 'A fairy-tale Designer Wedding Lehenga featuring layers of net and silk with heavy resham and zari embroidery. The intricately embellished blouse, voluminous lehenga with can-can underlayer, and net dupatta with scalloped borders create a dreamy bridal look. Available in royal gold and maroon combination.'
  },
  {
    id: 9,
    name: 'Kanjeevaram Silk Saree',
    category: 'Sarees',
    price: 5499,
    originalPrice: 6499,
    image: 'images/saree-kanjeevaram.png',
    images: ['images/saree-kanjeevaram.png', 'images/saree-banarasi.png'],
    badge: 'sale',
    rating: 4.7,
    reviews: 134,
    colors: ['#1A3A5C', '#000080', '#C49B2C'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A magnificent Kanjeevaram Silk Saree handwoven by master artisans of Tamil Nadu. Features traditional temple border motifs, contrast pallu with rich gold zari, and pure mulberry silk fabric that drapes gracefully. This heirloom-quality saree is perfect for weddings, poojas, and grand festive celebrations.'
  },
  {
    id: 10,
    name: 'Sage Indo-Western Maxi',
    category: 'Indo-Western',
    price: 2499,
    originalPrice: null,
    image: 'images/indowestern-sage.png',
    images: ['images/indowestern-sage.png', 'images/indowestern-floral.png', 'images/kurti-lavender.png'],
    badge: 'new',
    rating: 4.6,
    reviews: 178,
    colors: ['#9DC183', '#8FBC8B', '#F5E1CE'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A graceful Sage Green Indo-Western Maxi Dress that fuses modern style with Indian elegance. Made from flowing georgette with delicate thread work on the bodice and subtle shimmer throughout. Features a romantic V-neckline, flutter sleeves, and floor-length hemline. Perfect for engagement parties, reception, and destination weddings.'
  },
  {
    id: 11,
    name: 'Gold Sequin Anarkali',
    category: 'Anarkali Suits',
    price: 3999,
    originalPrice: 4999,
    image: 'images/anarkali-gold.png',
    images: ['images/anarkali-gold.png', 'images/anarkali-festive.png', 'images/anarkali-emerald.png'],
    badge: 'new',
    rating: 4.9,
    reviews: 121,
    colors: ['#C49B2C', '#DAA520', '#7B1B2D'],
    sizes: ['S', 'M', 'L'],
    description: 'Dazzle at every celebration in this stunning Gold Sequin Anarkali with all-over hand-embroidered sequins and beadwork. The golden shimmer fabric, fitted bodice with sweetheart neckline, and voluminous flare create a show-stopping look. Comes with matching churidar and net dupatta. Perfect for sangeet, reception, and Diwali parties.'
  },
  {
    id: 12,
    name: 'Lavender Lucknowi Kurti Set',
    category: 'Kurti Sets',
    price: 1699,
    originalPrice: 2199,
    image: 'images/kurti-lavender.png',
    images: ['images/kurti-lavender.png', 'images/kurti-chikankari.png', 'images/kurti-mirror.png'],
    badge: 'sale',
    rating: 4.4,
    reviews: 234,
    colors: ['#E6E6FA', '#DDA0DD', '#D8BFD8'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A beautiful Lavender Lucknowi Kurti Set with intricate chikankari embroidery on soft mul cotton fabric. The delicate handwork and pastel tone create an effortlessly feminine look. Comes with matching palazzo and a sheer dupatta. Perfect for haldi ceremonies, casual festive gatherings, and everyday ethnic wear.'
  }
];

// ---- State ----
let cart = JSON.parse(localStorage.getItem('luxeCart')) || [];
let currentProduct = null;
let selectedSize = null;
let selectedColor = null;

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounts();
  renderFeatured();
  renderShopGrid();
  updateCartBadge();
  setupScrollAnimations();
  setupNavbarScroll();
});


// ============================================
// NAVIGATION
// ============================================
function showPage(pageName, category) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const page = document.getElementById('page-' + pageName);
  if (page) page.classList.add('active');

  // Update nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.dataset.page === pageName) a.classList.add('active');
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu if open
  document.getElementById('navLinks').classList.remove('active');
  document.getElementById('hamburger').classList.remove('active');

  // Page-specific actions
  if (pageName === 'shop') {
    if (category) {
      const radios = document.querySelectorAll('input[name="category"]');
      radios.forEach(r => {
        r.checked = r.value === category;
      });
    }
    filterProducts();
  }

  if (pageName === 'cart') {
    renderCart();
  }

  // Re-trigger scroll animations
  setTimeout(setupScrollAnimations, 100);
}

function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('active');
}

function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}


// ============================================
// SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}


// ============================================
// PRODUCT RENDERING
// ============================================
function createProductCard(product) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const starsHTML = '★'.repeat(Math.floor(product.rating)) +
    (product.rating % 1 >= 0.5 ? '½' : '');

  let badgeHTML = '';
  if (product.badge === 'new') {
    badgeHTML = '<span class="product-card-badge badge-new">New</span>';
  } else if (product.badge === 'sale') {
    badgeHTML = '<span class="product-card-badge badge-sale">Sale</span>';
  }

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHTML}
        <div class="product-card-overlay">
          <div class="product-card-actions">
            <button class="product-action-btn" onclick="event.stopPropagation(); viewProduct(${product.id})" title="Quick View">
              <i class="fas fa-eye"></i>
            </button>
            <button class="product-action-btn" onclick="event.stopPropagation(); quickAddToCart(${product.id})" title="Add to Cart">
              <i class="fas fa-shopping-bag"></i>
            </button>
            <button class="product-action-btn" title="Add to Wishlist">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="product-card-info" onclick="viewProduct(${product.id})">
        <p class="product-card-category">${product.category}</p>
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-price">
          <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
          ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
        </div>
        <div class="product-card-rating">
          ${starsHTML} <span>(${product.reviews})</span>
        </div>
      </div>
    </div>
  `;
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  const featured = products.filter(p => p.badge === 'new' || p.rating >= 4.8).slice(0, 8);
  grid.innerHTML = featured.map(p => createProductCard(p)).join('');
}

// Dynamically update category counts on homepage
function updateCategoryCounts() {
  const countEls = document.querySelectorAll('.category-card');
  countEls.forEach(card => {
    const nameEl = card.querySelector('.category-card-name');
    const countEl = card.querySelector('.category-card-count');
    if (nameEl && countEl) {
      const categoryName = nameEl.textContent.trim();
      const count = products.filter(p => p.category === categoryName).length;
      countEl.textContent = count + (count === 1 ? ' Design' : ' Designs');
    }
  });
}

function renderShopGrid(filteredProducts) {
  const grid = document.getElementById('shopGrid');
  const items = filteredProducts || products;
  grid.innerHTML = items.map(p => createProductCard(p)).join('');
  document.getElementById('productCount').textContent = items.length;
}


// ============================================
// FILTERING & SORTING
// ============================================
function filterProducts() {
  const category = document.querySelector('input[name="category"]:checked')?.value || 'All';
  const maxPrice = parseInt(document.getElementById('priceRange').value);
  const sortBy = document.getElementById('sortSelect').value;

  let filtered = [...products];

  // Category filter
  if (category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }

  // Price filter
  filtered = filtered.filter(p => p.price <= maxPrice);

  // Sorting
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'newest':
      filtered.sort((a, b) => b.id - a.id);
      break;
  }

  renderShopGrid(filtered);
}

function updatePriceFilter(value) {
  document.getElementById('priceValue').textContent = '₹' + parseInt(value).toLocaleString('en-IN');
  filterProducts();
}

function toggleFilters() {
  document.getElementById('shopSidebar').classList.toggle('active');
}


// ============================================
// PRODUCT DETAIL
// ============================================
function viewProduct(id) {
  currentProduct = products.find(p => p.id === id);
  if (!currentProduct) return;

  selectedSize = null;
  selectedColor = null;

  // Update the product detail page
  document.getElementById('productBreadcrumb').textContent = currentProduct.name;
  document.getElementById('productMainImg').src = currentProduct.images[0];
  document.getElementById('productMainImg').alt = currentProduct.name;
  document.getElementById('productCategory').textContent = currentProduct.category;
  document.getElementById('productName').textContent = currentProduct.name;
  document.getElementById('productPrice').textContent = '₹' + currentProduct.price.toLocaleString('en-IN');
  document.getElementById('productDescription').textContent = currentProduct.description;

  // Stars
  const starsEl = document.getElementById('productStars');
  starsEl.textContent = '★'.repeat(Math.floor(currentProduct.rating)) +
    (currentProduct.rating % 1 >= 0.5 ? '½' : '');

  document.getElementById('productReviewCount').textContent =
    `${currentProduct.rating} (${currentProduct.reviews} reviews)`;

  // Original price & discount
  const origEl = document.getElementById('productOriginalPrice');
  const discEl = document.getElementById('productDiscount');
  if (currentProduct.originalPrice) {
    origEl.textContent = '₹' + currentProduct.originalPrice.toLocaleString('en-IN');
    origEl.style.display = 'inline';
    const disc = Math.round((1 - currentProduct.price / currentProduct.originalPrice) * 100);
    discEl.textContent = disc + '% OFF';
    discEl.style.display = 'inline';
  } else {
    origEl.style.display = 'none';
    discEl.style.display = 'none';
  }

  // Thumbnails
  const thumbContainer = document.getElementById('productThumbs');
  thumbContainer.innerHTML = currentProduct.images.map((img, i) => `
    <div class="product-gallery-thumb ${i === 0 ? 'active' : ''}" onclick="changeThumbnail('${img}', this)">
      <img src="${img}" alt="${currentProduct.name} view ${i + 1}">
    </div>
  `).join('');

  // Sizes
  const sizeContainer = document.getElementById('sizeOptions');
  sizeContainer.innerHTML = currentProduct.sizes.map(s => `
    <button class="size-btn" onclick="selectSize('${s}', this)">${s}</button>
  `).join('');

  // Colors
  const colorContainer = document.getElementById('colorOptions');
  colorContainer.innerHTML = currentProduct.colors.map(c => `
    <div class="color-swatch" style="background: ${c};" onclick="selectColor('${c}', this)" title="${c}"></div>
  `).join('');

  // Reset quantity
  document.getElementById('qtyInput').value = 1;

  showPage('product');
}

function changeThumbnail(src, el) {
  document.getElementById('productMainImg').src = src;
  document.querySelectorAll('.product-gallery-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(size, el) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function selectColor(color, el) {
  selectedColor = color;
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
}


// ============================================
// CART
// ============================================
function quickAddToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    size: product.sizes[1] || product.sizes[0],
    color: product.colors[0],
    quantity: 1,
    cartId: Date.now()
  };

  addItemToCart(cartItem);
}

function addToCartFromDetail() {
  if (!currentProduct) return;

  if (!selectedSize) {
    showToast('Please select a size', 'error');
    return;
  }

  const qty = parseInt(document.getElementById('qtyInput').value) || 1;

  const cartItem = {
    id: currentProduct.id,
    name: currentProduct.name,
    price: currentProduct.price,
    image: currentProduct.image,
    size: selectedSize,
    color: selectedColor || currentProduct.colors[0],
    quantity: qty,
    cartId: Date.now()
  };

  addItemToCart(cartItem);
}

function addItemToCart(item) {
  // Check if same product with same size exists
  const existing = cart.find(c => c.id === item.id && c.size === item.size);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart();
  updateCartBadge();
  showToast(`${item.name} added to cart!`);
}

function removeCartItem(cartId) {
  cart = cart.filter(c => c.cartId !== cartId);
  saveCart();
  updateCartBadge();
  renderCart();
}

function updateCartItemQty(cartId, delta) {
  const item = cart.find(c => c.cartId === cartId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity < 1) {
    removeCartItem(cartId);
    return;
  }
  if (item.quantity > 10) item.quantity = 10;

  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('luxeCart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const listEl = document.getElementById('cartItemsList');
  const summaryEl = document.getElementById('cartSummary');
  const emptyEl = document.getElementById('cartEmpty');
  const contentEl = document.getElementById('cartContent');

  if (cart.length === 0) {
    contentEl.style.display = 'none';
    emptyEl.classList.remove('hidden');
    return;
  }

  contentEl.style.display = '';
  emptyEl.classList.add('hidden');

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <div>
          <h3>${item.name}</h3>
          <p class="cart-item-meta">Size: ${item.size} &nbsp;|&nbsp; Qty: ${item.quantity}</p>
        </div>
        <div class="cart-item-bottom">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="quantity-selector" style="transform: scale(0.85); transform-origin: left;">
              <button class="qty-btn" onclick="updateCartItemQty(${item.cartId}, -1)">−</button>
              <input type="number" class="qty-input" value="${item.quantity}" readonly>
              <button class="qty-btn" onclick="updateCartItemQty(${item.cartId}, 1)">+</button>
            </div>
          </div>
          <span class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
          <button class="cart-item-remove" onclick="removeCartItem(${item.cartId})">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Summary
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 3000 ? 0 : 99;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  document.getElementById('cartSubtotal').textContent = '₹' + subtotal.toLocaleString('en-IN');
  document.getElementById('cartShipping').textContent =
    shipping === 0 ? 'Free' : '₹' + shipping.toLocaleString('en-IN');
  document.getElementById('cartTax').textContent = '₹' + Math.round(tax).toLocaleString('en-IN');
  document.getElementById('cartTotal').textContent = '₹' + Math.round(total).toLocaleString('en-IN');
}


// ============================================
// CHECKOUT
// ============================================
function openCheckout() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 3000 ? 0 : 99;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  document.getElementById('checkoutTotal').textContent = '₹' + Math.round(total).toLocaleString('en-IN');
  document.getElementById('checkoutForm').classList.remove('hidden');
  document.getElementById('checkoutSuccess').classList.add('hidden');
  document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('active');
}

function handleCheckout(e) {
  e.preventDefault();

  // Show success
  document.getElementById('checkoutForm').classList.add('hidden');
  document.getElementById('checkoutSuccess').classList.remove('hidden');

  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();
}

function closeCheckoutSuccess() {
  closeCheckout();
  showPage('shop');
}


// ============================================
// FORMS
// ============================================
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  showToast('Welcome! You\'re now subscribed to our newsletter.');
  document.getElementById('newsletterEmail').value = '';
}

function handleContact(e) {
  e.preventDefault();
  showToast('Message sent successfully! We\'ll get back to you soon.');
  document.getElementById('contactForm').reset();
}


// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"
       style="color: ${type === 'error' ? 'var(--color-danger)' : 'var(--color-success)'}; font-size: 1.1rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


// ============================================
// CLOSE MODAL ON OUTSIDE CLICK
// ============================================
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeCheckout();
  }
});

// Close sidebar on outside click (mobile)
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('shopSidebar');
  if (sidebar.classList.contains('active') &&
    !sidebar.contains(e.target) &&
    !e.target.closest('.filter-toggle-btn')) {
    sidebar.classList.remove('active');
  }
});
