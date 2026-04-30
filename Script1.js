const cerch = document.getElementById("IBig");
cerch.style.opacity="0";
iframee = false;
full = false;
current = 0;
old = 0;

function update() {
    if (current!=0) {
        current=document.getElementById("IBig").src;
        document.getElementById("button2").placeholder=old;
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
        old=current;
        current=source;
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
            
            
       