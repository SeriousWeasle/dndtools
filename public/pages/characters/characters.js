var charlist;

function getCharacters () {
    for (i = 0; i < testData.length; i++) {
        if (charlist == undefined || charlist == null) {
            charlist = "<div class='character' onmouseover='hoverOverAnim(this)' onmouseout='hoverOverAnim(this)'>" + testData[i].name + "</div>";
        }
        
        else {
            charlist = charlist + "<div class='character' onmouseover='hoverOverAnim(this)' onmouseout='hoverOverAnim(this)'>" + testData[i].name + "</div>";
        }
    }

    document.getElementById("characters-list").innerHTML = charlist;
}