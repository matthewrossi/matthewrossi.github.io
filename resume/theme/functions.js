function decodeEmail(encodedString) {
    var email = ""; 
    var keyInHex = encodedString.substr(0, 2);
    var key = parseInt(keyInHex, 16);
    for (var n = 2; n < encodedString.length; n += 2) {
        var charInHex = encodedString.substr(n, 2);
        var char = parseInt(charInHex, 16);
        var output = char ^ key;
        email += String.fromCharCode(output);
    }
    return email;
}

function updateAnchor(el) {
    var encoded = el.innerHTML;
    var decoded = decodeEmail(encoded);
    el.textContent = decoded;
    el.href = 'mailto:' + decoded;
}

function decode() {
    var allElements = document.getElementsByClassName("eml-protected");
    for (var i = 0; i < allElements.length; i++) {
        updateAnchor(allElements[i]);
    }
}

function toggle(section) {
    var sectionDOM = document.getElementById(section);
    var readmore = sectionDOM.getElementsByClassName("readmore")[0];
    var contents = sectionDOM.getElementsByClassName("content");
    var button = sectionDOM.getElementsByTagName('button')[0];

    var isExpanded = readmore.classList.contains("expand");

    if (!isExpanded) {
        readmore.classList.add("expand");
        for (const elem of contents) {
            elem.classList.add("expand");
        }
        button.innerHTML = "Show only three latest " + section;
    } else {
        readmore.classList.remove("expand");
        for (const elem of contents) {
            elem.classList.remove("expand");
        }
        button.innerHTML = "Show all " + section;
    }
}
