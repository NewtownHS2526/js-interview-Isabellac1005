// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
function easyProblem1(membershipClass, age) {
    // Check if membershipClass is "Diamond" AND age is 21
    if (membershipClass === "Diamond" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Diamond", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("diamond", 21)); // Should print: "go home" (case sensitive!)

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
function easyProblem2(membershipClass, age) {
    // Check if age is 21 AND membershipClass is NOT "Diamond"
    if (age === 21 && membershipClass !== "Diamond") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Gold", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Diamond", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
function mediumProblem(membershipClass, age) {
    // Check all three conditions using if-else if-else with &&
    if (membershipClass === "Diamond" && age === 21) {
        return "can access";
    } else if (age === 21 && membershipClass !== "Diamond") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Diamond", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Silver", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Diamond", 20)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Platinum", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
function hardProblem(membershipClass, age) {
    // Step 1: Check if age equals 21
    if (age === 21) {
        // If membershipClass is "Diamond", return "can access"
        if (membershipClass === "Diamond") {
            return "can access";
        } else {
            // Else (membershipClass is not "Diamond") return "can sign in"
            return "can sign in";
        }
    } else {
        // If age is NOT 21, return "go home"
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Diamond", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Gold", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Diamond", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Silver", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Diamond", 22)); // Should print: "go home"


