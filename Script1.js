const cerch = document.getElementById("IBig");
cerch.style.opacity="0";
iframee = false;
full = false;
current = 0;
old = "https:/"+"/143.244.207.157";
display2=0;
currentmode="darkmode";
proxytrue=unknown;
panikURL = "https://www.classlink.com/"
document.onvisibilitychange = function() {
  if (document.visibilityState === 'hidden') {
    window.alert("window exited");
  }
};

function update() {
    if (current!=0) {
        old=current;
        current=document.getElementById("IBig").src;
        document.getElementById("button2").setAttribute('placeholder', "what");
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
    updatepanik(schoology);
    } else if (element.value === "infinite campus") {
        if (pickValue.style.opacity ==="1") {
            pickValue.style.opacity='0';
        }
    updatepanik(ic);
    } else if (element.value === "classlink") {
        if (pickValue.style.opacity ==="1") {
            pickValue.style.opacity='0';
        }
    updatepanik(classlink);
    } else if (element.value === "custom") {
        if (pickValue.style.opacity==="0") {
            pickValue.style.opacity = '1';
        }
    }
}

function updatepanik(hmm) {
    if (hmm!="1") {
        window.alert("not custom");
        if (hmm==="classlink") {
            panikURL = "classlink";
            window.alert(panikURL);
        } else if (hmm==="ic") {
            panikURL = "https://www.infinitecampus.com";
            window.alert(panikURL);
        } else if (hmm==="schoology") {
            panikURL = "https://svvsd.schoology.com";
            window.alert(panikURL);
        }
    } else {
        panikURL = document.getElementById("custompanik").value;
    }
}

function PANIKPANIK() {
    window.open(panikURL);
}

function launch() {
    if (iframee===false) { 
        cerch.style.opacity="1";
        const inpt = document.getElementById("button1");
        let source = inpt.value || "Falcon.html";
        cerch.src = source;
        update();
        iframee=true;
    } else if (iframee) {
        cerch.style.opacity='0';
        cerch.src="";
        iframee = false;
    }
}

const toggle = document.getElementById('preventLeaveToggle');

window.onbeforeunload = window.alert('Are you sure that you want to leave this page?');

window.onbeforeunload = preventDefault();

window.onbeforeunload = event.preventDefault();


window.addEventListener('beforeunload', (event) => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = 'hey no';
});

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

function Proxyy() {
                if (iframee) {
                    iframee = false;
                    cerch.style="opacity:0;";
                    cerch.src = "";
                } else if (iframee===false) {
                    cerch.src = "Falcon.html";
                    cerch.style="opacity:1;"
                    iframee = true;
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
        document.getElementById("button2").style.backgroundColor="#FFFFFF";
        proxytrue=false;
    } else {
        document.getElementById("button2").style.backgroundColor="#000000";
        proxytrue=true;
    } 
}
checkifproxy();