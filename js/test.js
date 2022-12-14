function findLongestWord(string) {
    // Change code below this line
    const carefully = string.split(' ');
    const anymoreWord = 0;
    
    for (i = 0; i < carefully.length; i += 1) {
            anymoreWord = carefully[1].length;
    }

    if (carefully[i].length > anymoreWord) {
        longestWord = carefully[i];
        return longestWord;
    }
    // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));