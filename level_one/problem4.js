// Level One - Problem Set 4: Online Game Access Control

// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
function easyProblem1(playerRank, level) {
    // Check if playerRank is "Elite" AND level is 10
    if (playerRank === "Elite" && level === 10) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Elite", 10)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Elite", 9)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Pro", 10)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
function easyProblem2(playerRank, level) {
    // Check if level is 10 AND playerRank is NOT "Elite"
    if (level === 10 && playerRank !== "Elite") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Pro", 10)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Elite", 10)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Beginner", 8)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
function mediumProblem(playerRank, level) {
    // First check: playerRank === "Elite" && level === 10 → "can access"
    if (playerRank === "Elite" && level === 10) {
        return "can access";
    }
    // Second check: level === 10 && playerRank !== "Elite" → "can sign in"
    else if (level === 10 && playerRank !== "Elite") {
        return "can sign in";
    }
    // Everything else → "go home"
    else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Elite", 10)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Pro", 10)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Elite", 8)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Beginner", 10)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Master", 15)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
function hardProblem(playerRank, level) {
    // First check if level is 10
    if (level === 10) {
        // Nested check: if playerRank is "Elite"
        if (playerRank === "Elite") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Elite", 10)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Pro", 10)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Elite", 9)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Beginner", 10)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Master", 12)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Expert", 10)); // Should print: "can sign in"
