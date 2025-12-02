// Level One - Problem Set 1: Library Access System

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
function easyProblem1(memberType, age) {
    // Check if memberType is "Premium" AND age is 18
    if (memberType === "Premium" && age === 18) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Premium", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Premium", 17)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
function easyProblem2(memberType, age) {
    // Check if age is 18 and memberType is NOT "Premium"
    if (age === 18 && memberType !== "Premium") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Regular", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Premium", 18)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
function mediumProblem(memberType, age) {
    // First, check if memberType is "Premium" and age is 18
    if (memberType === "Premium" && age === 18) {
        return "can access";
    }
    // Then, check if age is 18 and memberType is NOT "Premium"
    else if (age === 18 && memberType !== "Premium") {
        return "can sign in";
    }
    // Otherwise, return "go home"
    else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Premium", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Regular", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Student", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
function hardProblem(memberType, age) {
    // First, check if age is 18
    if (age === 18) {
        // If memberType is "Premium", return "can access"
        if (memberType === "Premium") {
            return "can access";
        } else {
            // If memberType is NOT "Premium", return "can sign in"
            return "can sign in";
        }
    } else {
        // If age is NOT 18, return "go home"
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Premium", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Regular", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Premium", 17)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Student", 16)); // Should print: "go home"
