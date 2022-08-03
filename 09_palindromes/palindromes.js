const palindromes = function (word) {
    let clean_word = word.toLowerCase().trim().replace(/[^a-zA-Z]+/g, '');
    let reversed_word = clean_word.split('').reverse().join('');
    return clean_word == reversed_word;
    

};

// Do not edit below this line
module.exports = palindromes;
