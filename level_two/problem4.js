// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
function easyProblem1(ticketTier, age) {
    // Check if ticketTier is "Championship" AND age is 16
    if (ticketTier === "Championship" && age === 16) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Championship", 16)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Championship", 15)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Regular", 16)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
function easyProblem2(ticketTier, age) {
    // Check if age is 16 AND ticketTier is NOT "Championship"
    if (age === 16 && ticketTier !== "Championship") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 16)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Championship", 16)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Premium", 14)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
function mediumProblem(ticketTier, age) {
    // Check all cases using if-else if-else:
    if (ticketTier === "Championship" && age === 16) {
        return "can access";
    } else if (age === 16 && ticketTier !== "Championship") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Championship", 16)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 16)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Championship", 14)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Premium", 16)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("VIP", 20)); //


