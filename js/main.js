// ===== Render Category Icons =====
function renderCategories() {
  const row = document.getElementById('categoryRow');
  if (!row) return;
  row.innerHTML = categories.map((cat, i) => `
    <div class="category-item${i === 0 ? ' active' : ''}" data-category="${cat.name}">
      <div class="category-icon">${cat.icon}</div>
      <span class="category-label">${cat.name}</span>
    </div>
  `).join('');

  row.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
      row.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
      item.classList.add('active');
      const cat = item.dataset.category;
      filterByCategory(cat);
    });
  });
}

// ===== Render Promotions =====
function renderPromotions() {
  const scroll = document.getElementById('promoScroll');
  if (!scroll) return;

  const promos = [
    {
      title: "中正大學美食季",
      desc: "精選校園周邊人氣餐廳，滿$200免外送費",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
      color: "#06C167"
    },
    {
      title: "新店優惠 買一送一",
      desc: "指定店家消費享買一送一優惠",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop",
      color: "#276EF1"
    },
    {
      title: "宵夜時段限定",
      desc: "晚上 9 點後下單，指定飲品半價",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop",
      color: "#FF6937"
    }
  ];

  scroll.innerHTML = promos.map(p => `
    <div class="promo-card">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="promo-overlay">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="promo-btn">查看優惠</span>
      </div>
    </div>
  `).join('');
}

// ===== Render Restaurant Cards =====
function renderRestaurants(list) {
  const grid = document.getElementById('restaurantGrid');
  if (!grid) return;

  grid.innerHTML = list.map(r => `
    <a href="detail.html?id=${r.id}" class="restaurant-card">
      <div class="card-image-wrap">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        ${r.promotion ? `<div class="card-promo-badge">${r.promotion}</div>` : ''}
        <div class="card-fav" onclick="event.preventDefault(); this.classList.toggle('liked')">♡</div>
      </div>
      <div class="card-info">
        <div class="card-title-row">
          <h3>${r.name}</h3>
          <div class="card-rating">
            <span class="star">★</span> ${r.rating}
          </div>
        </div>
        <div class="card-meta">${r.category}・(${r.reviews}+)・${r.deliveryTime}</div>
      </div>
    </a>
  `).join('');
}

// ===== Filter Logic =====
let activeCategory = null;
let activeFilter = null;

function filterByCategory(cat) {
  activeCategory = cat;
  applyFilters();
}

function applyFilters() {
  let list = [...restaurants];

  // Category filter
  if (activeCategory) {
    list = list.filter(r => r.category === activeCategory || r.tags.includes(activeCategory));
  }

  // Tag filters
  if (activeFilter === 'promotion') {
    list = list.filter(r => r.promotion);
  } else if (activeFilter === 'rating-high') {
    list.sort((a, b) => b.rating - a.rating);
  } else if (activeFilter === 'fast') {
    list = list.filter(r => parseInt(r.deliveryTime) < 30);
  } else if (activeFilter === 'price-low') {
    list = list.filter(r => r.priceRange === '$');
  }

  if (list.length === 0) {
    document.getElementById('restaurantGrid').innerHTML = '<p style="color:#999;grid-column:1/-1;text-align:center;padding:40px;">沒有找到符合條件的餐廳</p>';
    return;
  }

  renderRestaurants(list);
}

// ===== Filter Tags Click =====
function setupFilterTags() {
  const tags = document.querySelectorAll('.filter-tag');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const filter = tag.dataset.filter;
      if (activeFilter === filter) {
        activeFilter = null;
        tag.classList.remove('active');
      } else {
        tags.forEach(t => t.classList.remove('active'));
        activeFilter = filter;
        tag.classList.add('active');
      }
      applyFilters();
    });
  });
}

// ===== Search =====
function setupSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      activeCategory = null;
      activeFilter = null;
      document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
      renderRestaurants(restaurants);
      return;
    }
    const filtered = restaurants.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.tags.some(t => t.toLowerCase().includes(q)) ||
      r.description.toLowerCase().includes(q)
    );
    renderRestaurants(filtered);
  });
}

// ===== View All =====
function setupViewAll() {
  const btn = document.getElementById('viewAllBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    activeCategory = null;
    activeFilter = null;
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
    renderRestaurants(restaurants);
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderPromotions();
  renderRestaurants(restaurants);
  setupFilterTags();
  setupSearch();
  setupViewAll();
});
