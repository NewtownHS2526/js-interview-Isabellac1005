// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
function easyProblem1(memberTier, age) {
    // Check if memberTier is "Executive" AND age is 18
    if (memberTier === "Executive" && age === 18) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Executive", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Standard", 18)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
function easyProblem2(memberTier, age) {
    // Check if age is 18 AND memberTier is NOT "Executive"
    if (age === 18 && memberTier !== "Executive") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Regular", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Executive", 18)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Premium", 16)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
function mediumProblem(memberTier, age) {
    // Handle all three cases using if-else if-else chain:
    if (memberTier === "Executive" && age === 18) {
        return "can access";
    } else if (age === 18 && memberTier !== "Executive") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Executive", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Executive", 16)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("VIP", 22)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
function hardProblem(memberTier, age) {
    // Step 1: Check if age is 18
    if (age === 18) {
        // If memberTier is "Executive", return "can access"
        if (memberTier === "Executive") {
            return "can access";
        } else {
            // Else, return "can sign in"
            return "can sign in";
        }
    } else {
        // If age is NOT 18, return "go home"
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Executive", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Standard", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Executive", 17)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 18)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Basic", 20)); // Should print: "go home"


