MISC = {
    addSlashes: function (txt) {
        txt = txt.replace(/\\/g, '\\\\');
        txt = txt.replace(/\'/g, "\\'");
        txt = txt.replace(/\"/g, '\\"');
        return txt;
    },

    stripSlashes: function (txt) {
        txt = txt.replace(/\\'/g, '\'');
        txt = txt.replace(/\\"/g, '"');
        txt = txt.replace(/\\\\/g, '\\');
        return txt;
    },

    stripSpaces: function (txt) {
        txt = txt.replace(/ /g, '');
        return txt;
    },

    reverseString: function (originalString) {
        var splitext = originalString.split("");
        var revertext = splitext.reverse();
        var reversed = revertext.join("");
        return reversed;
    }
};