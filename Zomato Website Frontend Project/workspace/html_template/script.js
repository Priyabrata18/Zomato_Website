// Restaurant data
const restaurantData = [
    {
        id: 1,
        name: "Bella Italia",
        cuisine: "Italian",
        rating: 4.5,
        price: "$$",
        deliveryTime: "30-45 min",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Authentic Italian cuisine with fresh ingredients and traditional recipes",
        menu: [
            { name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella, and basil", price: "$12.99" },
            { name: "Spaghetti Carbonara", description: "Traditional pasta with eggs, cheese, and pancetta", price: "$14.99" },
            { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: "$6.99" }
        ],
        reviews: [
            { author: "John Doe", rating: 5, text: "Amazing food and great service!" },
            { author: "Jane Smith", rating: 4, text: "Loved the pasta, will definitely come back." }
        ]
    },
    {
        id: 2,
        name: "Dragon Palace",
        cuisine: "Chinese",
        rating: 4.3,
        price: "$",
        deliveryTime: "25-40 min",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Delicious Chinese cuisine with authentic flavors and fresh ingredients",
        menu: [
            { name: "Kung Pao Chicken", description: "Spicy chicken with peanuts and vegetables", price: "$11.99" },
            { name: "Beef Fried Rice", description: "Wok-fried rice with tender beef and vegetables", price: "$10.99" },
            { name: "Sweet & Sour Pork", description: "Crispy pork with sweet and sour sauce", price: "$12.99" }
        ],
        reviews: [
            { author: "Mike Johnson", rating: 4, text: "Great Chinese food, very authentic!" },
            { author: "Sarah Wilson", rating: 4, text: "Fast delivery and tasty food." }
        ]
    },
    {
        id: 3,
        name: "Spice Garden",
        cuisine: "Indian",
        rating: 4.7,
        price: "$$",
        deliveryTime: "35-50 min",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Authentic Indian cuisine with rich spices and traditional cooking methods",
        menu: [
            { name: "Chicken Tikka Masala", description: "Tender chicken in creamy tomato curry", price: "$15.99" },
            { name: "Biryani", description: "Fragrant basmati rice with spices and meat", price: "$14.99" },
            { name: "Naan Bread", description: "Fresh baked Indian flatbread", price: "$3.99" }
        ],
        reviews: [
            { author: "David Brown", rating: 5, text: "Best Indian food in the city!" },
            { author: "Lisa Chen", rating: 4, text: "Excellent flavors and generous portions." }
        ]
    },
    {
        id: 4,
        name: "Taco Fiesta",
        cuisine: "Mexican",
        rating: 4.2,
        price: "$",
        deliveryTime: "20-35 min",
        image: "/images/Tacos.jpg",
        description: "Fresh Mexican street food with authentic flavors and quality ingredients",
        menu: [
            { name: "Beef Tacos", description: "Soft tortillas with seasoned beef and fresh toppings", price: "$8.99" },
            { name: "Chicken Burrito", description: "Large tortilla filled with chicken, rice, and beans", price: "$9.99" },
            { name: "Guacamole & Chips", description: "Fresh avocado dip with crispy tortilla chips", price: "$5.99" }
        ],
        reviews: [
            { author: "Carlos Rodriguez", rating: 4, text: "Authentic Mexican flavors!" },
            { author: "Emma Davis", rating: 4, text: "Great value for money." }
        ]
    },
    {
        id: 5,
        name: "Burger Junction",
        cuisine: "Fast Food",
        rating: 4.0,
        price: "$",
        deliveryTime: "15-25 min",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Juicy burgers and crispy fries made fresh to order",
        menu: [
            { name: "Classic Burger", description: "Beef patty with lettuce, tomato, and special sauce", price: "$7.99" },
            { name: "Chicken Wings", description: "Crispy wings with your choice of sauce", price: "$9.99" },
            { name: "French Fries", description: "Golden crispy fries seasoned to perfection", price: "$3.99" }
        ],
        reviews: [
            { author: "Tom Wilson", rating: 4, text: "Great burgers, fast service!" },
            { author: "Amy Johnson", rating: 4, text: "Love the crispy fries." }
        ]
    },
    {
        id: 6,
        name: "Sushi Zen",
        cuisine: "Japanese",
        rating: 4.6,
        price: "$$$",
        deliveryTime: "40-55 min",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fresh sushi and Japanese cuisine prepared by master chefs",
        menu: [
            { name: "California Roll", description: "Crab, avocado, and cucumber sushi roll", price: "$8.99" },
            { name: "Salmon Teriyaki", description: "Grilled salmon with teriyaki glaze and rice", price: "$16.99" },
            { name: "Miso Soup", description: "Traditional Japanese soup with tofu and seaweed", price: "$3.99" }
        ],
        reviews: [
            { author: "Yuki Tanaka", rating: 5, text: "Authentic Japanese flavors!" },
            { author: "Robert Lee", rating: 4, text: "Fresh fish and great presentation." }
        ]
    }
];

let currentRestaurants = [...restaurantData];
let currentPage = 1;
const itemsPerPage = 6;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadRestaurants();
    initializeMobileMenu();
    initializeScrollEffects();
});

// Load restaurants into the grid
function loadRestaurants() {
    const grid = document.getElementById('restaurantsGrid');
    grid.innerHTML = '';
    
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const restaurantsToShow = currentRestaurants.slice(startIndex, endIndex);
    
    restaurantsToShow.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        grid.appendChild(card);
    });
    
    // Show/hide load more button
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (endIndex >= currentRestaurants.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create restaurant card HTML
function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card fade-in';
    card.onclick = () => openRestaurantModal(restaurant.id);
    
    card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
        <div class="restaurant-info">
            <div class="restaurant-header">
                <div>
                    <div class="restaurant-name">${restaurant.name}</div>
                    <div class="restaurant-cuisine">${restaurant.cuisine}</div>
                </div>
                <div class="restaurant-rating">
                    <i class="fas fa-star"></i>
                    ${restaurant.rating}
                </div>
            </div>
            <div class="restaurant-details">
                <div class="restaurant-price">${restaurant.price}</div>
                <div class="restaurant-time">
                    <i class="fas fa-clock"></i>
                    ${restaurant.deliveryTime}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Search restaurants
function searchRestaurants() {
    const searchInput = document.getElementById('searchInput');
    const locationInput = document.getElementById('locationInput');
    const searchTerm = searchInput.value.toLowerCase();
    const location = locationInput.value.toLowerCase();
    
    if (!searchTerm && !location) {
        showMessage('Please enter a search term or location', 'error');
        return;
    }
    
    currentRestaurants = restaurantData.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm) ||
        restaurant.description.toLowerCase().includes(searchTerm)
    );
    
    currentPage = 1;
    loadRestaurants();
    
    // Smooth scroll to results
    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    
    if (currentRestaurants.length === 0) {
        document.getElementById('restaurantsGrid').innerHTML = `
            <div class="error-message">
                No restaurants found matching your search criteria. Try different keywords.
            </div>
        `;
    }
}

// Filter restaurants by cuisine
function filterRestaurants(cuisine) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (cuisine === 'all') {
        currentRestaurants = [...restaurantData];
    } else {
        currentRestaurants = restaurantData.filter(restaurant => 
            restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
        );
    }
    
    currentPage = 1;
    loadRestaurants();
}

// Filter by cuisine from quick links
function filterByCuisine(type) {
    // This could be expanded to filter by delivery type, dining, etc.
    currentRestaurants = [...restaurantData];
    currentPage = 1;
    loadRestaurants();
    
    // Smooth scroll to results
    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
}

// Sort restaurants
function sortRestaurants() {
    const sortSelect = document.getElementById('sortSelect');
    const sortBy = sortSelect.value;
    
    switch (sortBy) {
        case 'rating':
            currentRestaurants.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            currentRestaurants.sort((a, b) => a.price.length - b.price.length);
            break;
        case 'price-high':
            currentRestaurants.sort((a, b) => b.price.length - a.price.length);
            break;
        case 'delivery-time':
            currentRestaurants.sort((a, b) => {
                const aTime = parseInt(a.deliveryTime.split('-')[0]);
                const bTime = parseInt(b.deliveryTime.split('-')[0]);
                return aTime - bTime;
            });
            break;
    }
    
    currentPage = 1;
    loadRestaurants();
}

// Load more restaurants
function loadMoreRestaurants() {
    currentPage++;
    loadRestaurants();
}

// Open restaurant modal
function openRestaurantModal(restaurantId) {
    const restaurant = restaurantData.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    const modal = document.getElementById('restaurantModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${restaurant.image}" alt="${restaurant.name}" class="modal-image">
        </div>
        <div class="modal-body">
            <h2 class="modal-restaurant-name">${restaurant.name}</h2>
            <div class="modal-restaurant-info">
                <span class="modal-rating">
                    <i class="fas fa-star"></i>
                    ${restaurant.rating}
                </span>
                <span class="modal-price">${restaurant.price}</span>
                <span class="modal-time">
                    <i class="fas fa-clock"></i>
                    ${restaurant.deliveryTime}
                </span>
            </div>
            <p>${restaurant.description}</p>
            
            <div class="menu-section">
                <h3>Menu</h3>
                ${restaurant.menu.map(item => `
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4>${item.name}</h4>
                            <p class="menu-item-description">${item.description}</p>
                        </div>
                        <div class="menu-item-price">${item.price}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="reviews-section">
                <h3>Reviews</h3>
                ${restaurant.reviews.map(review => `
                    <div class="review">
                        <div class="review-header">
                            <span class="review-author">${review.author}</span>
                            <span class="review-rating">
                                ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                            </span>
                        </div>
                        <p class="review-text">${review.text}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('restaurantModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('restaurantModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Submit contact form
function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    showMessage('Thank you for your message! We will get back to you soon.', 'success');
    form.reset();
}

// Show message
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert at the top of the page
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Initialize mobile menu
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close mobile menu when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.style.display = '';
        }
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll-to-top functionality
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
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
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Search on Enter key press
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('searchInput');
        const locationInput = document.getElementById('locationInput');
        
        if (document.activeElement === searchInput || document.activeElement === locationInput) {
            searchRestaurants();
        }
    }
});

// Add loading animation for better UX
function showLoading() {
    const grid = document.getElementById('restaurantsGrid');
    grid.innerHTML = '<div class="loading">Loading restaurants...</div>';
}

// Simulate API calls with loading states
function simulateAPICall(callback, delay = 1000) {
    showLoading();
    setTimeout(callback, delay);
}

// Initialize geolocation for location-based search
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const locationInput = document.getElementById('locationInput');
                locationInput.value = `Current Location`;
                showMessage('Location detected successfully!', 'success');
            },
            (error) => {
                showMessage('Unable to detect location. Please enter manually.', 'error');
            }
        );
    } else {
        showMessage('Geolocation is not supported by this browser.', 'error');
    }
}

// Add click handler for location icon
document.addEventListener('DOMContentLoaded', function() {
    const locationIcon = document.querySelector('.location-input i');
    if (locationIcon) {
        locationIcon.addEventListener('click', getCurrentLocation);
        locationIcon.style.cursor = 'pointer';
        locationIcon.title = 'Use current location';
    }
});