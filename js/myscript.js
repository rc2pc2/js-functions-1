
const userFirstWord = prompt('Type a word');
const userSecondWord = prompt('Type another word');

if ( areWordsLongTheSame(userFirstWord, userSecondWord) ){
    console.log('Words share the same length');
} else if ( parolaUno.length > parolaDue.length){
    console.log('The first word is the longest');
} else {
    console.log('The second word is the longest');
}

function areWordsLongTheSame(firstWord, secondWord){
    if (firstWord.length === secondWord.length){
        return true;
    }
    return false;
}

function multiplication(moltiplicando, moltiplicatore){
    const result = moltiplicando * moltiplicatore;
    return result;
}

/**
 *
 * Function that checks if a value is a string or not.
 *
 * @param valueToCheck the value to check
 *
 * @returns true if the value given is a string, false otherwise
 */
function isThisAString(valueToCheck){
    if (typeof valueToCheck === "string") {
        return true;
    } else {
        return false;
    }
}

/**
 * Function that generates a random number (not secure) between two values, both included.
 *
 * @param minumNumber the included minium value of the random generated number range.
 * @param maximumNumber the included maximum value of the random generated number range
 * @returns A randomly generated number.
 */
function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);

    return randomNumber;
}