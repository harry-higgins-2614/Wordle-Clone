import wordList  from "@/assets/lengthWordList.json"
import wordList4 from "@/assets/4length.json"

import wordList6 from "@/assets/6length.json"

export async function getWord(wordLength = 5) { 
    
    if (wordLength == 4) { 

        var length = wordList4.length;
        var rand = Math.floor(Math.random() * length);
        return wordList4[rand]
        
    } else if (wordLength == 6) { 
        var length = wordList6.length;
        var rand = Math.floor(Math.random() * length);
        return wordList6[rand]
    }
    
    var length = wordList.length;

    var rand = Math.floor(Math.random() * length);

    console.log(wordList[rand]);
    return wordList[rand]
}

export async function validateWord(word, length = 5) { 
    if (length == 4) { 
        return wordList4.includes(word);
    } else if (length == 6) { 
        return wordList6.includes(word);
    }
    return wordList.includes(word);
}