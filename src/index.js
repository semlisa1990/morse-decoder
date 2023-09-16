const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let res = '';
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if (letter == '**********') {
            res += ' ';
        } else {
            let morseLetter = '';
            for (let k = 0; k < 5; k++) {
                let morseChar = letter.slice(k * 2, k * 2 + 2);
                switch (morseChar) {
                    case '10':
                        morseLetter += '.';
                        break;
                    case '11':
                        morseLetter += '-';
                        break;
                    default:
                        break;
                }
            }
            res += MORSE_TABLE[morseLetter];
        }
    }
   return res;
}

module.exports = {
    decode
}


