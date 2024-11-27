const main = document.querySelector('.main');

// get date

fetch('./data.json')
   .then(response => {
      if (!response.ok) {
         throw new Error(`Error ${response.status}`);
      }

      return response.json();
   })
   .then(data => {
      renderDesserts(data);
      console.log(data);
   })
   .catch(error => {
      console.error('Ошибка загрузки JSON:', error);
   });

// render Desserts

function renderDesserts(data = []) {
   data.forEach(item => {
      const productCard = document.createElement('div');
      productCard.classList = 'card';

      productCard.innerHTML = `    
               <div class="wrapper-position-btn-order">
                  <div class="card_container-img">
                     <img
                        class="img-desserts"
                        src=${item.image.desktop}
                        alt=${item.name}
                        srcset=""
                     />
                  </div>
                  <button type="button" class="card_btn-order">
                     Add to cart
                  </button>
               </div>
               <div class="wrapper-text">
                  <p class="card_category">${item.category}</p>
                  <h4 class="card_name">${item.name}</h4>
                  <p class="card_price">${item.price}</p>
               </div>
            `;
      const button = productCard.querySelector('.card_btn-order');
      button.addEventListener('click', () => {
         addToCart(item.name);
      });
      main.appendChild(productCard);
   });
}

function addToCart(name) {
   console.log(name);
}
