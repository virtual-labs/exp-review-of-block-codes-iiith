var m1, m2, m3;

var bits = [0, 0, 0]; // Initial bit values
var codewordBits = [0, 0, 0, 0, 0, 0]; // Initial codeword bit values
var receivedCodewordBits = [0, 0, 0, 0, 0, 0]; // Initial transmitted codeword bit values
var receivedCodewordBitsEntered = [0, 0, 0, 0, 0, 0]; // Initial received codeword bit values
var setOfCodewords = [];

function toggleBit(bitIndex) {
    // Toggle the bit value
    bits[bitIndex - 1] = 1 - bits[bitIndex - 1]; // Toggles between 0 and 1
    document.getElementById('msgBit' + bitIndex).innerText = bits[bitIndex - 1];
}

function toggleCodewordBit(bitIndex) {
    // Toggle the bit value
    codewordBits[bitIndex - 1] = 1 - codewordBits[bitIndex - 1]; // Toggles between 0 and 1
    document.getElementById('codewordBit' + bitIndex).innerText = codewordBits[bitIndex - 1];
}

function submitCodeword() {
    // console.log("submitCodeword() called");
    receivedCodewordBitsEntered = codewordBits.slice(0);
    let hammingWeightEntered = document.getElementById('hammingWeight').value;
    const helpPrompt = document.getElementById('helpPrompt');

    // check if the codeword is valid
    let candidates = [];
    for (let i = 0; i < Math.pow(2, bits.length); i++) {
        let msg = i.toString(2).padStart(bits.length, "0").split("").map((bit) => parseInt(bit));
        // let distance = 0;
        let candidate = [msg[0], msg[1], msg[2], (msg[0] + msg[2]) % 2, (msg[0] + msg[1]) % 2, (msg[1] + msg[2]) % 2];
        candidates.push(candidate);
    }

    // console.log(candidates);
    // console.log(receivedCodewordBitsEntered);
    // check if the candidate is in the list of candidates
    let isCorrect = false;
    for (let i = 0; i < candidates.length; i++) {
        if (JSON.stringify(candidates[i]) == JSON.stringify(codewordBits)) {
            isCorrect = true;
            break;
        };
    }

    let alreadyExists = false;
    // console.log(setOfCodewords.length);
    // console.log(JSON.stringify(setOfCodewords[i]), JSON.stringify(codewordBits));

    for (let i = 0; i < setOfCodewords.length; i++) {
        console.log(JSON.stringify(setOfCodewords[i]), JSON.stringify(codewordBits));
        if (JSON.stringify(setOfCodewords[i]) == JSON.stringify(codewordBits)) {
            alreadyExists = true;
            break;
        };
    }

    // hamming weight of the codeword is the sum of the bits
    let hammingWeight = receivedCodewordBitsEntered.reduce((acc, bit) => acc + bit);

    // console.log(candidates, isCorrect);



    if (isCorrect) {

        if (!alreadyExists && hammingWeight == hammingWeightEntered) {
            // Clear the error message
            helpPrompt.innerText = 'You have entered the correct codeword and the Hamming weight.';
            helpPrompt.style.color = 'green';
            // Display the list of codewords

            setOfCodewords.push([...codewordBits]);

            document.getElementById('enteredCodewords').innerText = '{' + setOfCodewords.map((codeword) => '(' + codeword.join('') + ')').join(', ') + '}';

        } else if (!alreadyExists && hammingWeight != hammingWeightEntered) {
            // Display an error message
            helpPrompt.innerText = 'Oops! The Hamming weight of the codeword is not ' + hammingWeightEntered + '.' + ' Please try again.';
            helpPrompt.style.color = 'red';
        
        }
        else if (alreadyExists) {
            // Display an error message
            helpPrompt.innerText = 'The codeword already exists in the list of codewords.' + ' Enter a different codeword.';
            helpPrompt.style.color = 'red';
        }

        // console.log("setOfCodewords", setOfCodewords);
        // console.log("isCorrect", isCorrect);
        // console.log("alreadyExists", alreadyExists);

    } else {
        // Display an error message
        helpPrompt.innerText = 'Sorry! This codeword does not belong to the set of codewords. Please try again.';
        helpPrompt.style.color = 'red';
    }
    
    if (setOfCodewords.length == 8) {
        helpPrompt.innerText = 'You have entered all the codewords.';
        part1.style.display = "none";
        part2.style.display = "block";
    }
}


function checkMinimumDistance() {

    const minimumDistanceEntered = document.getElementById('minimumDistance').value;
    const minimumDistance = 3;
    const helpPrompt = document.getElementById('helpPrompt');

    if (minimumDistanceEntered == minimumDistance) {
        // Clear the error message
        helpPrompt.innerText = 'You have entered the correct minimum distance.';
        helpPrompt.style.color = 'green';
        // Display the list of codewords
        document.getElementById('enteredCodewords').innerText = '{' + setOfCodewords.map((codeword) => '(' + codeword.join('') + ')').join(', ') + '}';
    } else {
        // Display an error message
        helpPrompt.innerText = 'Oops! The minimum distance is not ' + minimumDistanceEntered + '.' + ' Please try again.';
        helpPrompt.style.color = 'red';
    }

}