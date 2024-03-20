function check1() {
    
    const m1 = document.getElementById("m1").value;
    const m2 = document.getElementById("m2").value;
    const m3 = document.getElementById("m3").value;
    const m4 = document.getElementById("m4").value;
    const m5 = document.getElementById("m5").value;
    const m6 = document.getElementById("m6").value;
    const m7 = document.getElementById("m7").value;
    const m8 = document.getElementById("m8").value;
    const m9 = document.getElementById("m9").value;
    const part1 = document.getElementById("part1");
    const mEntered = document.getElementById("mEntered");

     if (m1.length == 0 || m2.length == 0 || m3.length == 0
        || m4.length == 0 || m5.length == 0 || m6.length == 0
        || m7.length == 0 || m8.length == 0 || m9.length == 0) {

        mEntered.innerHTML = "Enter all the bits.";
        return;

    }

    else if (m1.length > 1 || m2.length > 1 || m3.length > 1
        || m4.length > 1 || m5.length > 1 || m6.length > 1
        || m7.length > 1 || m8.length > 1 || m9.length > 1) {

        mEntered.innerHTML = "Enter values from 0 to 8.";
        return;

    }

    else if (m1 > 1 || m1 < 0 || m2 > 1 || m2 < 0 || m3 > 1 || m3 < 0
        || m4 > 1 || m4 < 0 || m5 > 1 || m5 < 0 || m6 > 1 || m6 < 0
        || m7 > 1 || m7 < 0 || m8 > 1 || m8 < 0 || m9 > 1 || m9 < 0) {

        mEntered.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else if ((m1 == 1) && (m2 == 0) && (m3 == 1) && (m4 == 1)
        && (m5 == 1) && (m6 == 0) && (m7 == 0) && (m8 == 1) && (m9 == 1)) {

        mEntered.innerHTML = "<b>Correct Answer!!!</b>";
        mEntered.style.color = "green";
        return;
    }

    else {
        if (mEntered.innerHTML == "<b>Wrong Answer :(</b>") {
            mEntered.innerHTML = "<b>Wrong Again :(</b>";
            mEntered.style.color = "red";
            return;
        }

        else {
            mEntered.innerHTML = "<b>Wrong Answer :(</b>";
            mEntered.style.color = "red";
            mEntered.innerHTML = "The entered message is <br><b>["
            + m1 + " " + m2 + " " + m3 + " " + m4 + " " + m5 + " " + m6 + "]</b>.";
            part1.style.display = "none";
            part2.style.display = "block";
            return;
        }
    }
    
}

function check() {
    const a1 = document.getElementById("a1").value;
    const a2 = document.getElementById("a2").value;
    const a3 = document.getElementById("a3").value;
    const a4 = document.getElementById("a4").value;
    const a5 = document.getElementById("a5").value;
    const a6 = document.getElementById("a6").value;
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const cEntered = document.getElementById("cEntered");

    if (!a1 || !a2 || !a3 || !a4 || !a5 || !a6) {
        cEntered.innerHTML = "Enter all the bits.";
        return;
    }

    const d1 = parseInt(a1);
    const d2 = parseInt(a2);
    const d3 = parseInt(a3);
    const d4 = parseInt(a4);
    const d5 = parseInt(a5);
    const d6 = parseInt(a6);

    if (isNaN(d1) || isNaN(d2) || isNaN(d3) || isNaN(d4) || isNaN(d5) || isNaN(d6)) {
        cEntered.innerHTML = "Enter valid numeric values.";
        return;
    }

    if (d1 < 0 || d1 > 8 || d2 < 0 || d2 > 8 || d3 < 0 || d3 > 5 || d4 < 0 || d4 > 5 || d5 < 0 || d5 > 5 || d6 < 0 || d6 > 5) {
        cEntered.innerHTML = "Enter values within the specified ranges.";
        return;
    }

    if (d1 === 3 && d2 === 6 && d3 === 3 && d4 === 3 && d5 === 3 && d6 === 3) {
        cEntered.innerHTML = "<b>Correct Answer!!!</b>";
        cEntered.style.color = "green";
    } else {
        cEntered.innerHTML = "<b>Wrong Answer :(</b><br>The entered message is [" + a1 + " " + a2 + " " + b1 + " " + b2 + " " + c1 + " " + c2 + "].";
        cEntered.style.color = "red";
        part1.style.display = "none";
        part2.style.display = "block";
    }
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

    part1.style.display = "block";
    part2.style.display = "none";
    form1.reset();
    form2.reset();
}



function page1() {
    const part1 = document.getElementById("example1");
    const part2 = document.getElementById("example2");
    const form1 = document.getElementById("form1");
    const cEntered = document.getElementById("obs1");

    part1.style.display = "block";
    part2.style.display = "none";
    cEntered.innerHTML = ""; // Clear any messages in mEntered
    form1.reset(); // Reset form1
    form2.reset(); // Reset form2, assuming you want to reset it
}

  
  
function page2() {
    const part1 = document.getElementById("example1");
    const part2 = document.getElementById("example2");
    const form2 = document.getElementById("form2");
    const mEntered = document.getElementById("obs2");

    part1.style.display = "none";
    part2.style.display = "block";
    mEntered.innerHTML = ""; // Clear any messages in cEntered
    form1.reset(); // Reset form1
    form2.reset(); // Reset form2, assuming you want to reset it
}

  