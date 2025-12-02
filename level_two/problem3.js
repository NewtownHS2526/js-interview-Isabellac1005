// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
function easyProblem1(subscriptionPlan, age) {
    // If subscriptionPlan equals "Ultimate" AND age equals 21, return "can access"
    if (subscriptionPlan === "Ultimate" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Ultimate", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("ultimate", 21)); // Should print: "go home" (case sensitive!)

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
function easyProblem2(subscriptionPlan, age) {
    // If age is 21 AND subscriptionPlan is NOT "Ultimate", return "can sign in"
    if (age === 21 && subscriptionPlan !== "Ultimate") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Basic", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Ultimate", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
function mediumProblem(subscriptionPlan, age) {
    // Check all three conditions using if-else if-else:
    if (subscriptionPlan === "Ultimate" && age === 21) {
        return "can access";
    } else if (age === 21 && subscriptionPlan !== "Ultimate") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Ultimate", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Ultimate", 20)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Premium", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
function hardProblem(subscriptionPlan, age) {
    // Step 1: Check if age equals 21
    if (age === 21) {
        // If subscriptionPlan is "Ultimate", return "can access"
        if (subscriptionPlan === "Ultimate") {
            return "can access";
        } else {
            // Else return "can sign in"
            return "can sign in";
        }
    } else {
        // If age is NOT 21, return "go home"
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Ultimate", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Basic", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Ultimate", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Ultimate", 22)); // Should print: "go home"

