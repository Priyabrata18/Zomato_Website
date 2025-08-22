(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const d=[{id:1,name:"Bella Italia",cuisine:"Italian",rating:4.5,price:"$$",deliveryTime:"30-45 min",image:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",description:"Authentic Italian cuisine with fresh ingredients and traditional recipes",menu:[{name:"Margherita Pizza",description:"Classic pizza with tomato sauce, mozzarella, and basil",price:"$12.99"},{name:"Spaghetti Carbonara",description:"Traditional pasta with eggs, cheese, and pancetta",price:"$14.99"},{name:"Tiramisu",description:"Classic Italian dessert with coffee and mascarpone",price:"$6.99"}],reviews:[{author:"John Doe",rating:5,text:"Amazing food and great service!"},{author:"Jane Smith",rating:4,text:"Loved the pasta, will definitely come back."}]},{id:2,name:"Dragon Palace",cuisine:"Chinese",rating:4.3,price:"$",deliveryTime:"25-40 min",image:"https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",description:"Delicious Chinese cuisine with authentic flavors and fresh ingredients",menu:[{name:"Kung Pao Chicken",description:"Spicy chicken with peanuts and vegetables",price:"$11.99"},{name:"Beef Fried Rice",description:"Wok-fried rice with tender beef and vegetables",price:"$10.99"},{name:"Sweet & Sour Pork",description:"Crispy pork with sweet and sour sauce",price:"$12.99"}],reviews:[{author:"Mike Johnson",rating:4,text:"Great Chinese food, very authentic!"},{author:"Sarah Wilson",rating:4,text:"Fast delivery and tasty food."}]},{id:3,name:"Spice Garden",cuisine:"Indian",rating:4.7,price:"$$",deliveryTime:"35-50 min",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",description:"Authentic Indian cuisine with rich spices and traditional cooking methods",menu:[{name:"Chicken Tikka Masala",description:"Tender chicken in creamy tomato curry",price:"$15.99"},{name:"Biryani",description:"Fragrant basmati rice with spices and meat",price:"$14.99"},{name:"Naan Bread",description:"Fresh baked Indian flatbread",price:"$3.99"}],reviews:[{author:"David Brown",rating:5,text:"Best Indian food in the city!"},{author:"Lisa Chen",rating:4,text:"Excellent flavors and generous portions."}]},{id:4,name:"Taco Fiesta",cuisine:"Mexican",rating:4.2,price:"$",deliveryTime:"20-35 min",image:"/images/Tacos.jpg",description:"Fresh Mexican street food with authentic flavors and quality ingredients",menu:[{name:"Beef Tacos",description:"Soft tortillas with seasoned beef and fresh toppings",price:"$8.99"},{name:"Chicken Burrito",description:"Large tortilla filled with chicken, rice, and beans",price:"$9.99"},{name:"Guacamole & Chips",description:"Fresh avocado dip with crispy tortilla chips",price:"$5.99"}],reviews:[{author:"Carlos Rodriguez",rating:4,text:"Authentic Mexican flavors!"},{author:"Emma Davis",rating:4,text:"Great value for money."}]},{id:5,name:"Burger Junction",cuisine:"Fast Food",rating:4,price:"$",deliveryTime:"15-25 min",image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",description:"Juicy burgers and crispy fries made fresh to order",menu:[{name:"Classic Burger",description:"Beef patty with lettuce, tomato, and special sauce",price:"$7.99"},{name:"Chicken Wings",description:"Crispy wings with your choice of sauce",price:"$9.99"},{name:"French Fries",description:"Golden crispy fries seasoned to perfection",price:"$3.99"}],reviews:[{author:"Tom Wilson",rating:4,text:"Great burgers, fast service!"},{author:"Amy Johnson",rating:4,text:"Love the crispy fries."}]},{id:6,name:"Sushi Zen",cuisine:"Japanese",rating:4.6,price:"$$$",deliveryTime:"40-55 min",image:"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",description:"Fresh sushi and Japanese cuisine prepared by master chefs",menu:[{name:"California Roll",description:"Crab, avocado, and cucumber sushi roll",price:"$8.99"},{name:"Salmon Teriyaki",description:"Grilled salmon with teriyaki glaze and rice",price:"$16.99"},{name:"Miso Soup",description:"Traditional Japanese soup with tofu and seaweed",price:"$3.99"}],reviews:[{author:"Yuki Tanaka",rating:5,text:"Authentic Japanese flavors!"},{author:"Robert Lee",rating:4,text:"Fresh fish and great presentation."}]}];let c=[...d],l=1;const m=6;document.addEventListener("DOMContentLoaded",function(){u(),v(),y()});function u(){const e=document.getElementById("restaurantsGrid");e.innerHTML="";const t=0,n=l*m;c.slice(t,n).forEach(a=>{const r=p(a);e.appendChild(r)});const i=document.querySelector(".btn-load-more");n>=c.length?i.style.display="none":i.style.display="block"}function p(e){const t=document.createElement("div");return t.className="restaurant-card fade-in",t.onclick=()=>f(e.id),t.innerHTML=`
        <img src="${e.image}" alt="${e.name}" class="restaurant-image">
        <div class="restaurant-info">
            <div class="restaurant-header">
                <div>
                    <div class="restaurant-name">${e.name}</div>
                    <div class="restaurant-cuisine">${e.cuisine}</div>
                </div>
                <div class="restaurant-rating">
                    <i class="fas fa-star"></i>
                    ${e.rating}
                </div>
            </div>
            <div class="restaurant-details">
                <div class="restaurant-price">${e.price}</div>
                <div class="restaurant-time">
                    <i class="fas fa-clock"></i>
                    ${e.deliveryTime}
                </div>
            </div>
        </div>
    `,t}function h(){const e=document.getElementById("searchInput"),t=document.getElementById("locationInput"),n=e.value.toLowerCase(),o=t.value.toLowerCase();if(!n&&!o){s("Please enter a search term or location","error");return}c=d.filter(i=>i.name.toLowerCase().includes(n)||i.cuisine.toLowerCase().includes(n)||i.description.toLowerCase().includes(n)),l=1,u(),document.getElementById("restaurants").scrollIntoView({behavior:"smooth"}),c.length===0&&(document.getElementById("restaurantsGrid").innerHTML=`
            <div class="error-message">
                No restaurants found matching your search criteria. Try different keywords.
            </div>
        `)}function f(e){const t=d.find(i=>i.id===e);if(!t)return;const n=document.getElementById("restaurantModal"),o=document.getElementById("modalContent");o.innerHTML=`
        <div class="modal-header">
            <img src="${t.image}" alt="${t.name}" class="modal-image">
        </div>
        <div class="modal-body">
            <h2 class="modal-restaurant-name">${t.name}</h2>
            <div class="modal-restaurant-info">
                <span class="modal-rating">
                    <i class="fas fa-star"></i>
                    ${t.rating}
                </span>
                <span class="modal-price">${t.price}</span>
                <span class="modal-time">
                    <i class="fas fa-clock"></i>
                    ${t.deliveryTime}
                </span>
            </div>
            <p>${t.description}</p>
            
            <div class="menu-section">
                <h3>Menu</h3>
                ${t.menu.map(i=>`
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>${i.name}</h4>
                            <p class="menu-item-description">${i.description}</p>
                        </div>
                        <div class="menu-item-price">${i.price}</div>
                    </div>
                `).join("")}
            </div>
            
            <div class="reviews-section">
                <h3>Reviews</h3>
                ${t.reviews.map(i=>`
                    <div class="review">
                        <div class="review-header">
                            <span class="review-author">${i.author}</span>
                            <span class="review-rating">
                                ${"★".repeat(i.rating)}${"☆".repeat(5-i.rating)}
                            </span>
                        </div>
                        <p class="review-text">${i.text}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `,n.style.display="block",document.body.style.overflow="hidden"}function g(){const e=document.getElementById("restaurantModal");e.style.display="none",document.body.style.overflow="auto"}window.onclick=function(e){const t=document.getElementById("restaurantModal");e.target===t&&g()};function s(e,t){const n=document.createElement("div");n.className=`${t}-message`,n.textContent=e,document.body.insertBefore(n,document.body.firstChild),setTimeout(()=>{n.remove()},5e3)}function v(){const e=document.querySelector(".mobile-menu-toggle"),t=document.querySelector(".nav-menu");e.addEventListener("click",()=>{t.style.display=t.style.display==="block"?"none":"block"}),window.addEventListener("resize",()=>{window.innerWidth>768&&(t.style.display="")})}function y(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth",block:"start"})})});let e=document.createElement("button");e.innerHTML='<i class="fas fa-arrow-up"></i>',e.className="scroll-to-top",e.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #e23744;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `,document.body.appendChild(e),window.addEventListener("scroll",()=>{window.scrollY>500?e.style.display="block":e.style.display="none"}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}document.addEventListener("keypress",function(e){if(e.key==="Enter"){const t=document.getElementById("searchInput"),n=document.getElementById("locationInput");(document.activeElement===t||document.activeElement===n)&&h()}});function w(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{const t=document.getElementById("locationInput");t.value="Current Location",s("Location detected successfully!","success")},e=>{s("Unable to detect location. Please enter manually.","error")}):s("Geolocation is not supported by this browser.","error")}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".location-input i");e&&(e.addEventListener("click",w),e.style.cursor="pointer",e.title="Use current location")});
