function longestSubstring(s) {

    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndexMap) {
            // If the character is already in the map, move the start pointer to the next index of the repeated character
            start = Math.max(start, charIndexMap[s[end]] + 1);
        }
        // Update the index of the current character
        charIndexMap[s[end]] = end;
        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const inputString = "abcabcbb";
console.log(longestSubstring(inputString)); // Output should be 3
module.exports = { longestSubstring };
