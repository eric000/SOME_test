/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const similar = (word1, word2) => {
        let count = 0
        for(let i = 0; i < word1.length; i++) {
            if (word1.charAt(i) != word2.charAt(i)) {
                count++
            }
            if (count > 1) {
                return false
            }
            
        }
        return true
    }

    let queue = [beginWord]
    let index = wordList.indexOf(beginWord)

    if (index !== -1) wordList.splice(index, 1)

    let res = 2

    while(queue.length) {
        let len = queue.length
        while(len--) {
            let pre = queue.shift()
            for(let i = 0; i< wordList.length; i++) {
                if (!similar(wordList[i], pre)) {
                    continue
                }

                if (wordList[i] === endWord) {
                    return res
                } else {
                    queue.push(wordList[i])
                }
                wordList.splice(i, 1)
                i--
            }
        }
        res++
    }

    return 0
};