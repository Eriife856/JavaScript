// ## 🎯 Practice Exercise 1

// **Task:** Simple Grading System  

// **Requirements:**  
// 1. Create a function `getGrade(score)`  
// 2. Use if/else if statements to assign grades:  
//    - 90+ → "A"  
//    - 80–89 → "B"  
//    - 70–79 → "C"  
//    - 60–69 → "D"  
//    - Below 60 → "F"  
// 3. Return a message like: `"Score: 85 → Grade: B"`  

// **Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`.
function getGrade(grade) {
    if (grade == 100) {
        return "Outstanding! Grade:A+";
    } else if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "c";
    } else if (grade >= 60) {
        return "D"
    } else if (grade <= 60)
        return "f"
    // console.log(getGrade(65))

}
console.log(getGrade(100))

// ## 🎯 Practice Exercise 2

// **Task:** Discount Calculator  

// **Requirements:**  
// 1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
// 2. Apply discounts:  
//    - Student → 10%  
//    - Senior → 15%  
//    - Employee → 20%  
// 3. If `isFirstPurchase` is true, add an extra 5% discount  
// 4. Return the final price (rounded to 2 decimals)  

// **Challenge:** Print a full receipt showing original price, discount percent, and final price.

function calculatePrice(price, customerType, isFirstTime) {
    let discount = 0;
    if (customerType === "student") {
        discount = 0.10; // 10% discount
    } else if (customerType === "Senior") {
        discount = 0.15; // 15% discount
    } else if (customerType === "Employee") {
        discount = 0.20; // 20% discount
    }

    //additional discount for first-time customer
    if (isFirstTime) {
        discount += 0.05; // Extra 5%
    }

    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}
let result = calculatePrice(100, "student", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);

// ## 🎯 Practice Exercise 3

// **Task:** Weather Advisor  

// **Requirements:**  
// 1. Write a function `weatherAdvice(temperature, isRaining)`  
// 2. Use if/else if to return advice:  
//    - < 32 and raining → "Freezing rain! Stay inside!"  
//    - < 32 → "Very cold, wear a heavy coat."  
//    - 32–60 → "Chilly, bring a jacket."  
//    - 60–80 → "Nice weather!"  
//    - `>` 80 → "It's hot, stay hydrated!"  
// 3. Return the advice as a string  

// **Challenge:** Add a ternary operator for quick advice like:  
//    `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.

function weatherAdvice(temperature, isRaining) {
    if (temperature <= 32 && isRaining) {
        return "Freezing rain! Stay Inside!";
    } else if (temperature < 32) {
        return "Very cold, wear a jacket.";
    } else if (temperature <= 32 && isRaining <= 60) {
        return "Chilly,bring a jacket.";
    } else if (temperature <= 60 && isRaining <= 80) {
        return "Nice Weather!.";
    } else if (temperature >= 80) {
        return "it's hot, stay hydrated";
    }
    let advice = isRaining ? "Bring Umbrella" : "No umbrella needed"
    console.log(advice);
}

// excercise 4 ATM simulation
function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > 500) {
            return `Withdrawal limit exceeded. You can only withdraw up to 500 at once`;
        } else if (balance >= amount) {
            balance -= amount;
            return `withdrawal successful. new balance:${balance}`;
        } else {
            return `insufficient funds. Your balanec is ${balance}`;
        }
    } else if (action === "deposit") {
        balance += amount;
        return `deposit successful. new balance:${balance}`;
    } else {
        return "Invalid action. please choose 'withdraw' or 'deposit' .";
    }
}
 console.log(atm(20000, "withdraw", 500))


 // excercise 5 personal assistant
function personalAssistant(time,weather,dayType){
    if (time >= 5 && ,=11){
        if(dayType == "workday"){
            console.log("Good morning. Do have a great day at work today!")
        }else
    }
}

