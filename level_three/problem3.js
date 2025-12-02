// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
function easyProblem1(roomType, guestAge) {
    // If roomType is "Presidential" AND guestAge is 21, return "can access"
    if (roomType === "Presidential" && guestAge === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Presidential", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Deluxe", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
function easyProblem2(roomType, guestAge) {
    // If guestAge is 21 AND roomType is NOT "Presidential", return "can sign in"
    if (guestAge === 21 && roomType !== "Presidential") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Presidential", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Suite", 19)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
function mediumProblem(roomType, guestAge) {
    // Check the first condition: roomType === "Presidential" && guestAge === 21
    if (roomType === "Presidential" && guestAge === 21) {
        return "can access";
    }
    // Check the second condition: guestAge === 21 && roomType !== "Presidential"
    else if (guestAge === 21 && roomType !== "Presidential") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Presidential", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Deluxe", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Presidential", 18)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Standard", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
function hardProblem(roomType, guestAge) {
    // Step 1: Check if guestAge is 21
    if (guestAge === 21) {
        // Step 2: Check roomType
        if (roomType === "Presidential") {
            return "can access"; // If roomType is "Presidential", return "can access"
        } else {
            return "can sign in"; // If roomType is not "Presidential", return "can sign in"
        }
    } else {
        return "go home"; // If guestAge is not 21, return "go home"
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Presidential", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Deluxe", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Presidential", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Suite", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Standard", 19)); // Should print: "go home"
