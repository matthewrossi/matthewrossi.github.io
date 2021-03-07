function decodeEmail(encodedString) {
    var email = ""; 
    var keyInHex = encodedString.substr(0, 2);
    var key = parseInt(keyInHex, 16);
    for (var n = 2; n < encodedString.length; n += 2) {
        var charInHex = encodedString.substr(n, 2)
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
        updateAnchor(allElements[i])
    }
}
