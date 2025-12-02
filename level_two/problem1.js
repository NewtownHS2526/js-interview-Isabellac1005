// Level Two - Problem Set 1: Theme Park Season Pass Access

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
function easyProblem1(passType, age) {
    // If passType is "Platinum" AND age is 16, return "can access"
    if (passType === "Platinum" && age === 16) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Platinum", 16)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Platinum", 15)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
function easyProblem2(passType, age) {
    // If age is 16 AND passType is NOT "Platinum", return "can sign in"
    if (age === 16 && passType !== "Platinum") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Gold", 16)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Platinum", 16)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
function mediumProblem(passType, age) {
    // Use if-else if-else to handle all three cases:
    if (passType === "Platinum" && age === 16) {
        return "can access";
    } else if (age === 16 && passType !== "Platinum") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Platinum", 16)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Silver", 16)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Bronze", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
function hardProblem(passType, age) {
    // Step 1: Check if age is 16
    if (age === 16) {
        // Check passType:
        if (passType === "Platinum") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Platinum", 16)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Gold", 16)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Platinum", 14)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Regular", 12)); // Should print: "go home"


