// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
function easyProblem1(patronLevel, age) {
    // Check if patronLevel is "Collector" AND age is 21
    if (patronLevel === "Collector" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Collector", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Collector", 20)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
function easyProblem2(patronLevel, age) {
    // Check if age is 21 AND patronLevel is NOT "Collector"
    if (age === 21 && patronLevel !== "Collector") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Member", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Collector", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
function mediumProblem(patronLevel, age) {
    // Check all three conditions using if-else if-else
    if (patronLevel === "Collector" && age === 21) {
        return "can access";
    } else if (age === 21 && patronLevel !== "Collector") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Collector", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Visitor", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Student", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
function hardProblem(patronLevel, age) {
    // First, check if age is 21
    if (age === 21) {
        // If patronLevel is "Collector", return "can access"
        if (patronLevel === "Collector") {
            return "can access";
        } else {
            // Else, return "can sign in" for any other patronLevel
            return "can sign in";
        }
    } else {
        // If age is NOT 21, return "go home"
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Collector", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Member", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Collector", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Guest", 15)); // Should print: "go home"
