var m1, m2, m3;

var bits = [0, 0, 0]; // Initial bit values
var codewordBits = [0, 0, 0, 0, 0, 0]; // Initial codeword bit values
var receivedCodewordBits = [0, 0, 0, 0, 0, 0]; // Initial transmitted codeword bit values
var receivedCodewordBitsEntered = [0, 0, 0, 0, 0, 0]; // Initial received codeword bit values

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

function toggleReceivedBit(bitIndex) {
    // Toggle the bit value
    receivedCodewordBitsEntered[bitIndex - 1] = 1 - receivedCodewordBitsEntered[bitIndex - 1]; // Toggles between 0 and 1
    document.getElementById('receivedBit' + bitIndex).innerText = receivedCodewordBitsEntered[bitIndex - 1];
}

function display() {
    [m1, m2, m3] = bits;

    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const mEntered = document.getElementById("mEntered"); //message entered

    mEntered.innerHTML = "The entered message is ( " + m1 + " " + m2 + " " + m3 + " ).";
    part1.style.display = "none";
    part2.style.display = "block";
    return;
}

function initial() {
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const mEntered = document.getElementById("mEntered");
    const cEntered = document.getElementById("cEntered");

    mEntered.innerHTML = "";
    cEntered.innerHTML = "";
    cTransmitted.innerHTML = "";
    decodedEntered.innerHTML = "";

    part1.style.display = "block";
    part2.style.display = "none";
    part3.style.display = "none";
    part4.style.display = "none";

    bits = [0, 0, 0];
    codewordBits = [0, 0, 0, 0, 0, 0];
    receivedCodewordBitsEntered = [0, 0, 0, 0, 0, 0];
    receivedCodewordBits = [0, 0, 0, 0, 0, 0];
    form2.reset();
    form3.reset();
    form4.reset();

}

function check() {

    const [b1, b2, b3, b4, b5, b6] = codewordBits;
    const obs = document.getElementById("observations");
    const cEntered = document.getElementById("cEntered"); //codeword entered
    var c1, c2, c3, c4, c5, c6;

    c1 = m1;
    c2 = m2;
    c3 = m3;
    c4 = (c1 + c3) % 2;
    c5 = (c1 + c2) % 2;
    c6 = (c2 + c3) % 2;


    if ((b1 == c1) && (b2 == c2) && (b3 == c3) && (b4 == c4) && (b5 == c5) && (b6 == c6)) {

        cEntered.innerHTML = "<b>Correct Answer!!!</b>";
        cEntered.style.color = "green";
        part1.style.display = "none";
        part2.style.display = "none";
        part3.style.display = "block";
        return;
    }

    else {
        if (cEntered.innerHTML == "<b>Wrong Answer :(</b>") {
            cEntered.innerHTML = "<b>Wrong Again :(</b>";
            cEntered.style.color = "red";
            return;
        }

        else {
            cEntered.innerHTML = "<b>Wrong Answer :(</b>";
            cEntered.style.color = "red";
            return;
        }
    }
}

function transmit() {
    // TODO : implement the transmit function
    // get the errorsWanted
    const errorsWanted = document.getElementById("errorsWanted").value;
    const obs = document.getElementById("observations");
    const cTransmitted = document.getElementById("cTransmitted"); //codeword transmitted

    // flip any errorsWanted bits in the codeword

    let errors = [];
    while (errors.length < errorsWanted) {
        let r = Math.floor(Math.random() * 6);
        if (errors.indexOf(r) === -1) errors.push(r);
    }

    let received = codewordBits.map((bit, index) => {
        if (errors.indexOf(index) !== -1) return 1 - bit;
        return bit;
    });

    // let errors = [...Array(errorsWanted).keys()].map(() => Math.floor(Math.random() * 2));
    // // add the errors to the codeword
    // let received = codewordBits.map((bit, index) => bit ^ errors[index]); // ^ is the XOR operator
    // display the received codeword
    cTransmitted.innerHTML = "The received codeword is ( " + received.join(" ") + " ).";
    receivedCodewordBits = received;
    part1.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "none";
    part4.style.display = "block";

}

function checkReceived() {
    const decodedEntered = document.getElementById("decodedEntered"); //decoded message entered

    // minimum distance decoding
    let minDistance = Infinity;
    let candidates = [];
    for (let i = 0; i < Math.pow(2, bits.length); i++) {
        let msg = i.toString(2).padStart(bits.length, "0").split("").map((bit) => parseInt(bit));
        let distance = 0;
        let candidate = [msg[0], msg[1], msg[2], (msg[0] + msg[2]) % 2, (msg[0] + msg[1]) % 2, (msg[1] + msg[2]) % 2];
        for (let j = 0; j < candidate.length; j++) {
            distance += candidate[j] ^ receivedCodewordBits[j];
        }
        if (distance < minDistance) {
            minDistance = distance;
            candidates = [candidate];
        } else if (distance === minDistance) {
            candidates.push(candidate);
        }

    }

    // check if the candidate is in the list of candidates
    isCorrect = false;
    for (let i = 0; i < candidates.length; i++) {
        if (JSON.stringify(candidates[i]) == JSON.stringify(receivedCodewordBitsEntered)) {
            isCorrect = true;
            break;
        };
    }

    console.log(candidates, isCorrect);

    if (isCorrect) {
        decodedEntered.innerHTML = "<b>Correct Answer!!!</b>";
        decodedEntered.style.color = "green";
        return;
    }
    else {
        if (decodedEntered.innerHTML == "<b>Wrong Answer :(</b>") {
            decodedEntered.innerHTML = "<b>Wrong Again :(</b>";
            decodedEntered.style.color = "red";
            return;
        }

        else {
            decodedEntered.innerHTML = "<b>Wrong Answer :(</b>";
            decodedEntered.style.color = "red";
            return;
        }
    }

}
