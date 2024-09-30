/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Mapping of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    // Initialize a variable to store the result
    let result = 0;
    
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral and the next one
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If the current value is less than the next one, subtract it
        if (currentVal < nextVal) {
            result -= currentVal;
        } else {
            // Otherwise, add the current value
            result += currentVal;
        }
    }

    return result;
};

// Export the function for use in other files or tests
module.exports = { romanToInt };