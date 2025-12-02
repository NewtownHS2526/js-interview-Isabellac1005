// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
function easyProblem1(guestStatus, age) {
    // Check if guestStatus is "Connoisseur" AND age is 21
    if (guestStatus === "Connoisseur" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Connoisseur", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Connoisseur", 20)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
function easyProblem2(guestStatus, age) {
    // Check if age is 21 AND guestStatus is NOT "Connoisseur"
    if (age === 21 && guestStatus !== "Connoisseur") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Enthusiast", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Connoisseur", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
function mediumProblem(guestStatus, age) {
    // Handle all three cases using if-else if-else
    if (guestStatus === "Connoisseur" && age === 21) {
        return "can access";
    } else if (age === 21 && guestStatus !== "Connoisseur") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Connoisseur", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Novice", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Expert", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
function hardProblem(guestStatus, age) {
    // Check age first
    if (age === 21) {
        // Check guestStatus inside the nested if
        if (guestStatus === "Connoisseur") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Connoisseur", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Enthusiast", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Connoisseur", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Beginner", 18)); // Should print: "go home"


