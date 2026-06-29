// ==========================
// Callback Function Example (Zomato)
// ==========================

// Callback Function
// This function is executed after the food is prepared.
function notifyCustomer(food) {
    console.log("🍕 Callback Function Called!");
    console.log("📢 Notification: Your " + food + " is ready for delivery.");
}

// Host Function
// This function accepts a callback function as an argument.
function orderFood(callback) {

    console.log("📱 Customer placed an order on Zomato.");

    let food = "Pizza";

    console.log("👨‍🍳 Restaurant is preparing your order...");

    // Simulate cooking time (3 seconds)
    setTimeout(() => {

        console.log("✅ Food Prepared.");

        // Calling the callback function
        callback(food);

    }, 3000);
}

// Passing the callback function
orderFood(notifyCustomer);


The Flow :
Customer Places Order
        │
        ▼
orderFood(callback)
        │
        ▼
Restaurant Prepares Food
        │
        ▼
3 Seconds Pass
        │
        ▼
callback(food)
        │
        ▼
notifyCustomer(food)
        │
        ▼
Customer Gets Notification
