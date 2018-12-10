function fade(id) {
    var dom = document.getElementById(id);
    var level = 1;

    function step() {
        // convert to Hex string
        var h = level.toString(16);
        dom.style.backgroundColor = '#FFFF' + h + h;
        if(level < 15) {
            level++;
            setTimeout(step, 100);
        }
    }
    setTimeout(step, 100);
}