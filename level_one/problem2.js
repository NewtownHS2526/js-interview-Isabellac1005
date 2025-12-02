// Level One - Problem Set 2: Movie Theater Ticket System

// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
function easyProblem1(ticketType, age) {
    // Check if ticketType equals "VIP" AND age equals 16
    if (ticketType === "VIP" && age === 16) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("VIP", 16)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("vip", 16)); // Should print: "go home" (case sensitive!)

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
function easyProblem2(ticketType, age) {
    // Check if age is 16 AND ticketType is NOT "VIP"
    if (age === 16 && ticketType !== "VIP") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 16)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("VIP", 16)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
function mediumProblem(ticketType, age) {
    // Use if-else if-else with && operator to handle the conditions
    if (ticketType === "VIP" && age === 16) {
        return "can access";
    } else if (age === 16 && ticketType !== "VIP") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("VIP", 16)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Regular", 16)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("VIP", 15)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Student", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
function hardProblem(ticketType, age) {
    // Step 1: Check if age equals 16
    if (age === 16) {
        // Step 2: Nested conditions for ticketType
        if (ticketType === "VIP") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        // If age is NOT 16
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("VIP", 16)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Standard", 16)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("VIP", 14)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 16)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("VIP", 18)); // Should print: "go home"

