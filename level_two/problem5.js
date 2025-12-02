// ============================================
// EASY PROBLEM 1: Simple if with two conditions
// ============================================
function easyProblem1(customerType, age) {
    // Check if customerType is "Elite" AND age is 21
    if (customerType === "Elite" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Elite", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Elite", 20)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Regular", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: If-else with !== operator
// ============================================
function easyProblem2(customerType, age) {
    // Check if age is 21 AND customerType is NOT "Elite"
    if (age === 21 && customerType !== "Elite") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Elite", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Premium", 19)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete conditional chain
// ============================================
function mediumProblem(customerType, age) {
    // Check all three conditions using if-else if-else:
    if (customerType === "Elite" && age === 21) {
        return "can access";
    } else if (age === 21 && customerType !== "Elite") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Elite", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Elite", 19)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Premium", 21)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("VIP", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Advanced nested conditions
// ============================================
function hardProblem(customerType, age) {
    // Check if age is 21
    if (age === 21) {
        // If customerType is "Elite", return "can access"
        if (customerType === "Elite") {
            return "can access";
        } else {
            // Else return "can sign in"
            return "can sign in";
        }
    } else {
        // If age is not 21, return "go home"
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Elite", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Standard", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Elite", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("VIP", 30)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Regular", 21)); // Should print: "can sign in"


