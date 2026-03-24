document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    document.getElementById('detailContent').innerHTML = `
      <div style="text-align:center;padding:60px 0;">
        <h2>找不到此餐廳</h2>
        <a href="index.html" class="btn-back">← 返回首頁</a>
      </div>
    `;
    return;
  }

  // Set page title
  document.title = `${restaurant.name} | CCU Eats`;

  // Hero image
  document.getElementById('detailHero').src = restaurant.image;
  document.getElementById('detailHero').alt = restaurant.name;

  // Render stars
  const stars = '★'.repeat(Math.floor(restaurant.rating)) + (restaurant.rating % 1 >= 0.5 ? '½' : '');

  // Render content
  document.getElementById('detailContent').innerHTML = `
    <a href="index.html" class="btn-back">← 返回列表</a>

    <div class="detail-header">
      <h1>${restaurant.name}</h1>
      <div class="detail-rating-row">
        <span class="star">★ ${restaurant.rating}</span>
        <span>(${restaurant.reviews}+ 則評論)</span>
        <span>・${restaurant.category}</span>
        <span>・${restaurant.priceRange}</span>
        <span>・${restaurant.deliveryTime}</span>
      </div>
    </div>

    <div class="detail-info">
      <div class="detail-info-item">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
        ${restaurant.address}
      </div>
      <div class="detail-info-item">
        <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        ${restaurant.phone}
      </div>
      <div class="detail-info-item">
        <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
        營業時間：${restaurant.hours}
      </div>
    </div>

    <p class="detail-description">${restaurant.description}</p>

    <div class="menu-section">
      <h2>菜單</h2>
      ${restaurant.menu.map(item => `
        <div class="menu-item">
          <div class="menu-item-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <div class="menu-item-price">$${item.price}</div>
        </div>
      `).join('')}
    </div>

    <div class="reviews-section">
      <h2>顧客評論</h2>
      ${restaurant.reviewsList.map(rev => `
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">${rev.user.charAt(0)}</div>
            <div class="review-user-info">
              <h4>${rev.user}</h4>
              <span>${rev.date}</span>
            </div>
          </div>
          <div class="review-stars">${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}</div>
          <p class="review-text">${rev.text}</p>
        </div>
      `).join('')}
    </div>

    <a href="index.html" class="btn-back">← 返回列表</a>
  `;
});
