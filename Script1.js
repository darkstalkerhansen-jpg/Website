const cerch = document.getElementById("IBig");
cerch.style.opacity="0";
iframee = false;
full = false;
current = 0;
old = "https:/"+"/143.244.207.157";
display2=0;
currentmode=darkmode;

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

function previous() {
    cerch.src=old;
    update();
}

function newWindow() {
    cerch.style.opacity="1";
        const inpt = document.getElementById("button1");
        let source = inpt.value || "Falcon.html";
        cerch.src = source;
        update();
        iframee=true;
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
    window.alert("modedetect")
    if (currentmode===darkmode) {
        currentmode=lightmode;
        switch1();
    } else if (currentmode===lightmode) {
        currentmode=darkmode;
        switch1();
    }
}
            
function switch1() {
    window.alert("switchedmodes")
    if (currentmode===lightmode) {
        document.body.style.background="#FFFF";
    } else if (currentmode===darkmode) {
        document.body.style.background="#000000";
    }
}