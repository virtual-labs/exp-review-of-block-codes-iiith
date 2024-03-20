var array = [];
var cnt;
function change(id) {

    const obs=document.getElementById("observations");
    const background = document.getElementById(id).style.backgroundColor;

    obs.innerHTML="";


    if (background == "rgb(26, 255, 0)") {
        document.getElementById(id).style.background = "rgb(200, 200, 200)";

        for (var i = 0; i < array.length; i++) {
            if (array[i] === id) {
                array.splice(i, 1);
            }
        }
    }

    else {
        document.getElementById(id).style.background = "rgb(26,255,0)";
        array.push(id);
    }
}

function check() {

    const obs=document.getElementById("observations");
    if (array.length == 0) {
        obs.innerHTML="No codeword has been selected. Choose the codewords by clicking on them."
        obs.style.color="black";
    }
    
    else {
        getCnt();
        console.log(cnt);
        if (cnt === 8) {
            obs.innerHTML = "<b>Correct Answer!!!</b>";
            obs.style.color="green";
        }
        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color="red";
        }
    }
}

function getCnt() {
    cnt=0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "w1" || array[i] === "w2" || array[i] === "w3" || array[i] === "w4" ||
            array[i] === "w5" || array[i] === "w6" || array[i] === "w7" || array[i] === "w8") {
            cnt++;
        }
        else if (array[i] === "w9" || array[i] === "w10" || array[i] === "w11" || array[i] === "w12" ||
            array[i] === "w13" || array[i] === "w14" || array[i] === "w15") {
            cnt--;
        }
    }
}

function deselect() {
    
    document.getElementById("w1").style.background = "rgb(200, 200, 200)";
    document.getElementById("w2").style.background = "rgb(200, 200, 200)";
    document.getElementById("w3").style.background = "rgb(200, 200, 200)";
    document.getElementById("w4").style.background = "rgb(200, 200, 200)";
    document.getElementById("w5").style.background = "rgb(200, 200, 200)";
    document.getElementById("w6").style.background = "rgb(200, 200, 200)";
    document.getElementById("w7").style.background = "rgb(200, 200, 200)";
    document.getElementById("w8").style.background = "rgb(200, 200, 200)";
    document.getElementById("w9").style.background = "rgb(200, 200, 200)";
    document.getElementById("w10").style.background = "rgb(200, 200, 200)";
    document.getElementById("w11").style.background = "rgb(200, 200, 200)";
    document.getElementById("w12").style.background = "rgb(200, 200, 200)";
    document.getElementById("w13").style.background = "rgb(200, 200, 200)";
    document.getElementById("w14").style.background = "rgb(200, 200, 200)";
    document.getElementById("w15").style.background = "rgb(200, 200, 200)";

    document.getElementById("observations").innerHTML = "";

    cnt = 0;
    array = [];
}