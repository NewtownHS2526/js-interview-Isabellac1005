// Level One - Problem Set 3: Gym Membership Access

// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
function easyProblem1(membershipLevel, age) {
    // Check if membershipLevel is "Gold" AND age is 21
    if (membershipLevel === "Gold" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Gold", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Silver", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
function easyProblem2(membershipLevel, age) {
    // Check if age is 21 AND membershipLevel is NOT "Gold"
    if (age === 21 && membershipLevel !== "Gold") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Silver", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Gold", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Bronze", 20)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
function mediumProblem(membershipLevel, age) {
    // First check: membershipLevel === "Gold" && age === 21 → "can access"
    if (membershipLevel === "Gold" && age === 21) {
        return "can access";
    }
    // Second check: age === 21 && membershipLevel !== "Gold" → "can sign in"
    else if (age === 21 && membershipLevel !== "Gold") {
        return "can sign in";
    }
    // Everything else → "go home"
    else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Gold", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Silver", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Gold", 18)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Bronze", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
function hardProblem(membershipLevel, age) {
    // First check if age is 21
    if (age === 21) {
        // Nested check: if membershipLevel is "Gold"
        if (membershipLevel === "Gold") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Gold", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Silver", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Gold", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Bronze", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Platinum", 19)); // Should print: "go home"
