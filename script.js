// -------------------- Login & Signup Buttons --------------------
// Login button
document.querySelector(".b1 button:first-child").addEventListener("click", () => {
    window.location.href = "login.html";
});

// Signup button
document.querySelector(".b1 button:last-child").addEventListener("click", () => {
    window.location.href = "signup.html";
});

// -------------------- Search Functionality --------------------
document.querySelector(".logo1").addEventListener("click", () => {
    const searchValue = document.querySelector(".search-bar input").value;
    if(searchValue.trim() === ""){
        alert("Please enter something to search!");
    } else {
        alert("You searched for: " + searchValue);
        // Yahan tum search page redirect kar sakte ho
        // Example: window.location.href = "search.html?q=" + searchValue;
    }
});

// -------------------- Load More Functionality --------------------
const loadMoreButton = document.querySelector(".but1");
const show5Container = document.querySelector(".show5");

// Daily Deals ke neeche 8 naye items
const newDeals = [
    {img:"images/img5.jpg", title:"Deal 5", desc:"2 Medium pizzas + 2 Drinks", price:"Rs.2700"},
    {img:"images/img6.jpg", title:"Deal 6", desc:"2 Large pizzas + 3 Drinks", price:"Rs.4000"},
    {img:"images/img7.jpg", title:"Deal 7", desc:"3 Large pizzas + 4 Drinks", price:"Rs.5500"},
    {img:"images/img8.jpg", title:"Deal 8", desc:"4 Large pizzas + 5 Drinks", price:"Rs.7000"},
    {img:"images/img9.jpg", title:"Deal 9", desc:"Special Combo 1", price:"Rs.1800"},
    {img:"images/img10.jpg", title:"Deal 10", desc:"Special Combo 2", price:"Rs.2000"},
    {img:"images/img11.jpg", title:"Deal 11", desc:"Special Combo 3", price:"Rs.3000"},
    {img:"images/img12.jpg", title:"Deal 12", desc:"Special Combo 4", price:"Rs.3500"}
];

// Button click event
loadMoreButton.addEventListener("click", () => {
    newDeals.forEach(deal => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <div class="product-image" style="height:120px; background:url('${deal.img}') no-repeat center/cover; border-radius:10px;"></div>
            <div class="product-title">
                <h4>${deal.title}</h4>
                <div class="hert"><img src="hert2.png" alt="heart"></div>
            </div>
            <p>${deal.desc}</p>
            <h3>${deal.price}</h3>
        `;
        show5Container.appendChild(box);
    });
    loadMoreButton.style.display = "none"; // Button hide after click
});

// -------------------- Optional: Smooth Scroll for anchor links --------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
