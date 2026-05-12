const cerch = document.getElementById("IBig");
cerch.style.opacity="0";
iframee = false;
full = false;
current = 0;
old = "https:/"+"/143.244.207.157";
display2=0;
currentmode="darkmode";
proxytrue=unknown;
panikURL = "https://svvsd.schoology.com/";
custom = false;

function update() {
    if (current!=0) {
        old=current;
        current=document.getElementById("IBig").src;
    }

}
function fullscreen() {
    const wow = document.getElementById("title-wrapper");
    if (full===false) {
        cerch.style.display='block';
        cerch.style.border='none';
        cerch.style.width='100vw';
        cerch.style.height='100vh';
        wow.style.display = 'none';
        full = true;
    } else if (full) {
        cerch.style.border='outset';
        cerch.style.width='500px';
        cerch.style.height='500px';
        wow.style.display = 'flex';
        full = false;
    }
}

function detectpanikURL() {
    const element = document.getElementById("panik");
    const pickValue = document.getElementById("custompanik");
    if (element.value === "schoology") {
        if (pickValue.style.opacity ==="1") {
            pickValue.style.opacity='0';
        }
        updatepanik("schoology");
        custom = false;
    } else if (element.value === "infinite campus") {
        if (pickValue.style.opacity ==="1") {
            pickValue.style.opacity='0';
        }
        updatepanik("ic");
        custom = false;
    } else if (element.value === "classlink") {
        if (pickValue.style.opacity ==="1") {
            pickValue.style.opacity='0';
        }
        updatepanik("classlink");
        custom = false;
    } else if (element.value === "custom") {
        if (pickValue.style.opacity==="0") {
            pickValue.style.opacity = '1';
        }
        updatepanik("custom");
        custom = true;
    }
}

function updatepanik(type) {
    if (type==="classlink") {
        panikURL = "https://www.classlink.com";
        window.alert("set to classlink");
    } else if (type==="ic") {
        panikURL = "https://www.infinitecampus.com";
        window.alert("set to infinite campus");
    } else if (type==="schoology") {
        panikURL = "https://svvsd.schoology.com";
        window.alert("set to schoology");
    } else if (type==="custom") {
        panikURL = document.getElementById("custompanik").value;
        window.alert("set to custom(please input custom panik url)");
    }
}

function PANIKPANIK() {
    if (custom===false) {
        window.open(panikURL);
        window.alert("panik activated");
    } else {
        window.open(document.getElementById("custompanik").value);
    }
}

function code() {
    window.location.href="https://github.dev/darkstalkerhansen-jpg/Website";
}

function check() {
    coed = window.open("https://github.com/darkstalkerhansen-jpg/Website");
    let timeLeft = 2; // Total seconds
    const timerId = setInterval(() => {
        // ONE IF STATEMENT: Checks focus before reducing time
        if (document.hasFocus()) {
            timeLeft--;
        } 
        if (timeLeft <= 0) {
            clearInterval(timerId);
            coed.close();
        }
    }, 1000);
    setTimeout(() => {
        coed.location.reload();
    }, 3000 );
    setTimeout(() => {
        coed.location.reload();
    }, 5000 );
    setTimeout(() => {
        coed.close();
    }, 7000 );
}

if (document.hasFucus()===false) {
    const coverup = window.open("https://darkstalkerhansen-jpg.github.io/Website/index.html");
    const coverupeth = window.open("https://darkstalkerhansen-jpg.github.io/Website/index.html");
    setTimeout(() => {
        coverup.close();
        coverupeth.close();
        if (confirm("you good bruv?")) {
            window.alert("this is good news mark. we can finnaly be bees. BEES? We can live for thirty years. THIRTY YEARS? we can be pets mark. PETS? yes mark, this is good news");
        } else {
            window.alert("damn");
        }
    }, 800 );
}

function proxy5() {
    navigator.clipboard.writeText("https://darkstalkerhansen-jpg.github.io/Website/index.html");
    window.alert("text copied(pase into proxy)");
    window.open("https://143.244.207.157");
}

function superupdate() {
    scriptstuff = window.open("https://darkstalkerhansen-jpg.github.io/Website/Script2.js");
    scriptstuff2 = window.open("https://darkstalkerhansen-jpg.github.io/Website/Script1.js");
    CSSstuff = window.open("https://darkstalkerhansen-jpg.github.io/Website/FALCON2.css");
    setTimeout(() => {
        scriptstuff.location.reload();
    }, 1000); // Refreshes after 0.1 seconds
    setTimeout(() => {
        scriptstuff.close();
        window.alert("got to here 2");
    }, 2000); // Refreshes after 0.2 seconds
    setTimeout(() => {
        window.alert("got to here!");
    }, 4000); // Refreshes after 0.2 seconds
    setTimeout(() => {
        scriptstuff2.location.reload();
    }, 5000); // closes after 0.3 seconds
    setTimeout(() => {
        scriptstuff2.close();
    }, 6000); // Refreshes after 0.1 seconds
    setTimeout(() => {
        window.alert("got here");
    }, 8000); // Refreshes after 0.2 seconds
    setTimeout(() => {
        CSSstuff.location.reload();
    }, 9000); // closes after 0.3 seconds
    setTimeout(() => {
        CSSstuff.close();
    }, 10000); // Refreshes after 0.1 seconds
}

function previous() {
    cerch.src=old;
    update();
}

function newWindow() {
    cerch.style.opacity="1";
    const inpt = document.getElementById("button1");
    let source = inpt.value || "Falcon.html";
    if (source!="Falcon.html") {
        if (source.substr(0,8) == 'https://') {
            window.alert('the string starts with https://');
            cerch.src = source;
            update();
            iframee=true;
        } else {
            window.alert("duck2");
            cerch.src=("https://duckduckgo.com/?q=" + source);
            update();
            iframee=true;
        }
    } else {
        window.alert("is falcon");
        cerch.src = source;
        update();
        iframee=true;
    }
}


function switchmodes() {
    if (currentmode==="darkmode") {
        currentmode="lightmode";
        switch1();
    } else if (currentmode==="lightmode") {
        currentmode="darkmode";
        switch1();
    }
}
            
function switch1() {
    if (currentmode==="lightmode") {
        document.body.style.background="#FFFF";
    } else if (currentmode==="darkmode") {
        document.body.style.background="#000000";
    }
}

function checkifproxy() {
    if (window.location.ancestorOrigins) {
        document.getElementById("button1").style.backgroundColor="#FFFFFF";
        proxytrue=false;
    } else {
        document.getElementById("button1").style.backgroundColor="#000000";
        proxytrue=true;
    } 
}

function loadscript() {
    checkifproxy();
    detectpanikURL();
    window.alert("version 1.7");
}