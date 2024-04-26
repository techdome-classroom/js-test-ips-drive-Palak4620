function longestSubstring(s) {

    var letters = check.split("");
    var max = 0;
    var result = [];
    for (var i = 0; i < letters.length; i++) {
        var start = i
        if (result.indexOf(letters[i]) === -1) {
            result.push(letters[i])
        } else {
            i = i - 1
            result = []
        }
        if (max === 0 || max < result.length) {
            max = result.length
        }
    }
    return max
}
module.exports = { longestSubstring };
