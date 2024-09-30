/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let machingBreackets = {
        ')':'(',
        '}':'{',
        ']': '['

    };
    for(let char of s){
        if(char === '('|| char === '{' || char === '['){
            stack.push(char);

        }else if(char === '('|| char === '{' || char === '['){
            stack.push(char);
    }
    
};

module.exports = { isValid };


