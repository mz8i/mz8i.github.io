"use strict";

(function() {
/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function getPrefixWidths(text, font) {
    var result = [0];
    for(var i=1; i<=text.length; i++) {
        result.push(getTextWidth(text.substr(0, i), font));
    }
    return result;
}

function getBorders(widthLookup) {
    var result = [];
    for(var i=0; i<widthLookup.length-1; i++) {
        result.push((widthLookup[i]+widthLookup[i+1])/2);
    }
    return result;
}

function getFont(e) {
    var style = window.getComputedStyle(e);
    return ['font-style', 'font-variant', 'font-weight', 'font-size', 'font-family']
        .map(x => style[x]).join(' ');
}

function getNumberShown(borders, width) {
    var index = borders.findIndex(x => width < x);
    if(index == -1) return borders.length;
    return index;
}

/**
 * 
 * @param {string} id The element's id
 * @param {boolean} collapsed Whether to start abbreviated or not
 * @param {string} text The text to abbreviate
 */
function Abbreviation(id, collapsed, text, speed, prefixLength, suffixLength) {
    this.elem = document.getElementById(id);
    this.collapsed = collapsed;
    this.text = text;
    this.speed = speed || 200;
    this.prefixLength = prefixLength || 1;
    this.suffixLength = suffixLength || 1;
    
    var prefix = this.text.substr(0, this.prefixLength);
    var suffix = this.text.substr(this.text.length-this.suffixLength, this.suffixLength);
    this.middle = this.text.substring(this.prefixLength, this.text.length - this.suffixLength);
    
    this.elem.innerHTML = 
    `<span class="a10n-prefix">${prefix}</span><span class="a10n-middle" style="overflow:hidden; display: inline-block">${this.middle}</span><span class="a10n-number"></span><span class="a10n-suffix">${suffix}</span>`;
    
    this.middleElem = this.elem.children[1];
    this.numberElem = this.elem.children[2];

    this.fullWidth = this.middleElem.offsetWidth;
    
    if(this.collapsed) {
        this.middleElem.style.width ='0px';
    }
    this.numberShown = this.collapsed ? 0 : this.middle.length;
    this.updateText();

    for(var i=0; i<4; i++) {
        this.elem.children[i].style.verticalAlign = 'middle';
    }
}

Abbreviation.prototype.updateText = function() {
    var numberHidden = this.middle.length - this.numberShown;
    this.middleElem.textContent = this.middle.substr(0, this.numberShown);
    this.numberElem.textContent = (numberHidden == 0) ? '' : numberHidden.toString();
}

Abbreviation.prototype.toggleCollapsed = function(collapsed) {
    if(this.animationFrame) cancelAnimationFrame(this.animationFrame);
    
    if(this.middleElem.style.width==='') {
        this.middleElem.style.width = this.middleElem.offsetWidth + 'px';
    }

    this.collapsed = collapsed;

    var font = getFont(this.middleElem);
    this.middleWidths = getPrefixWidths(this.middle, font);
    this.fullWidth = this.middleWidths[this.middleWidths.length-1];
    this.borders = getBorders(this.middleWidths);

    var transitionTime = this.middle.length * this.speed / 1000;
    this.middleElem.style.transition = 'width '+transitionTime.toString()+'s';

    var targetWidth = this.collapsed ? 0 : this.fullWidth;
    this.middleElem.style.width = targetWidth + 'px';

    var draw = () => {
        var width = this.middleElem.offsetWidth;
        var numberShown = getNumberShown(this.borders, width);
        if(numberShown != this.numberShown) {
            this.numberShown = numberShown;
            this.updateText();
        }
    };

    var animate = () => {
        if(this.middleElem.offsetWidth != targetWidth) {
            this.animationFrame = requestAnimationFrame(animate);
        }
        draw();
    };

    this.animationFrame = requestAnimationFrame(animate);
}

Abbreviation.prototype.expand = function() {
    this.toggleCollapsed(false);
}

Abbreviation.prototype.collapse = function() {
    this.toggleCollapsed(true);
}

window.Abbreviation = Abbreviation;

})();