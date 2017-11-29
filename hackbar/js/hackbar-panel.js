var urlfield = document.getElementById("hackbar_urlfield");
var postdatafield = document.getElementById("hackbar_postdatafield");
var refererfield = document.getElementById("hackbar_refererfield");

/* ---------- main processs --------- */

var loadurlBtn = document.getElementById('hackbar_loadurl');
var splitBtn = document.getElementById('hackbar_split');
var executeBtn = document.getElementById('hackbar_run');

var postdataCbx = document.getElementById("hackbar_enablepostdata");
var refererCbx = document.getElementById("hackbar_enablereferer");

var postdatacontainer = document.getElementById('hackbar_postdatacontainer');
var referercontainer = document.getElementById('hackbar_referercontainer');


var mysqlbasicinfoBtn = document.getElementsByName("mysqlbasicinfo")[0];
var mysqlconvertutf8Btn = document.getElementsByName("mysqlconvertutf8")[0];
var mysqlconvertlatin1Btn = document.getElementsByName("mysqlconvertlatin1")[0];
var mysqltosqlcharBtn = document.getElementsByName("mysqltosqlchar")[0];
var mssqltosqlcharBtn = document.getElementsByName("mssqltosqlchar")[0];
var oracletosqlcharBtn = document.getElementsByName("oracletosqlchar")[0];
var unionselectBtn = document.getElementsByName("unionselect")[0];
var spacestocommentsBtn = document.getElementsByName("spacestocomments")[0];

var stringtocharcodeBtn = document.getElementsByName("stringtocharcode")[0];
var stringtohtmlcharcodeBtn = document.getElementsByName("stringtohtmlcharcode")[0];
var xssalertBtn = document.getElementsByName("xssalert")[0];

var b64encodeBtn = document.getElementsByName("base64encode")[0];
var b64decodeBtn = document.getElementsByName("base64decode")[0];
var urlencodeBtn = document.getElementsByName("urlencode")[0];
var urldecodeBtn = document.getElementsByName("urldecode")[0];

var md5hashBtn = document.getElementsByName("md5hash")[0];
var sha1hashBtn = document.getElementsByName("sha1hash")[0];
var sha256hashBtn = document.getElementsByName("sha256hash")[0];
var rot13Btn = document.getElementsByName("rot13")[0];

var addslashesBtn = document.getElementsByName("addslashes")[0];
var stripslashesBtn = document.getElementsByName("stripslashes")[0];
var stripspacesBtn = document.getElementsByName("stripspaces")[0];
var reverseBtn = document.getElementsByName("reverse")[0];

var currentFocusField = null;

loadurlBtn.addEventListener("click", loadUrl, false);
splitBtn.addEventListener('click', splitUrl);
executeBtn.addEventListener('click', execute);

postdataCbx.addEventListener('change', togglepostdata);
refererCbx.addEventListener('change', togglereferer);

urlfield.focus();
currentFocusField = urlfield;
anonClickMenuFunct = function (event) {
    onClickMenu(event);
};

mysqlbasicinfoBtn.addEventListener('click', anonClickMenuFunct, false);
mysqlconvertutf8Btn.addEventListener('click', anonClickMenuFunct, false);
mysqlconvertlatin1Btn.addEventListener('click', anonClickMenuFunct, false);
mysqltosqlcharBtn.addEventListener('click', anonClickMenuFunct, false);
mssqltosqlcharBtn.addEventListener('click', anonClickMenuFunct, false);
oracletosqlcharBtn.addEventListener('click', anonClickMenuFunct, false);
unionselectBtn.addEventListener('click', anonClickMenuFunct, false);
spacestocommentsBtn.addEventListener('click', anonClickMenuFunct, false);
stringtocharcodeBtn.addEventListener('click', anonClickMenuFunct, false);
stringtohtmlcharcodeBtn.addEventListener('click', anonClickMenuFunct, false);
xssalertBtn.addEventListener('click', anonClickMenuFunct, false);
b64encodeBtn.addEventListener('click', anonClickMenuFunct, false);
b64decodeBtn.addEventListener('click', anonClickMenuFunct, false);
urlencodeBtn.addEventListener('click', anonClickMenuFunct, false);
urldecodeBtn.addEventListener('click', anonClickMenuFunct, false);
md5hashBtn.addEventListener('click', anonClickMenuFunct, false);
sha1hashBtn.addEventListener('click', anonClickMenuFunct, false);
sha256hashBtn.addEventListener('click', anonClickMenuFunct, false);
rot13Btn.addEventListener('click', anonClickMenuFunct, false);
addslashesBtn.addEventListener('click', anonClickMenuFunct, false);
stripslashesBtn.addEventListener('click', anonClickMenuFunct, false);
stripspacesBtn.addEventListener('click', anonClickMenuFunct, false);
reverseBtn.addEventListener('click', anonClickMenuFunct, false);

anonFocusFunct = function (event) {
    onFieldFocus(event);
};
urlfield.addEventListener('focus', anonFocusFunct, false);
postdatafield.addEventListener('focus', anonFocusFunct, false);
refererfield.addEventListener('focus', anonFocusFunct, false);
urlfield.addEventListener('click', onFieldClick, false);
postdatafield.addEventListener('click', onFieldClick, false);
refererfield.addEventListener('click', onFieldClick, false);

function onFieldFocus(event) {
    currentFocusField = event.currentTarget;
}

function onFieldClick(event) {
    event.currentTarget.focus();
}

function onClickMenu(event) {
    var txt = "";
    var newString = "";
    switch (event.currentTarget.name) {
        case 'mysqlbasicinfo':
            newString = SQL.selectionMySQLBasicInfo();
            this.setSelectedText(newString);
            break;
        case 'mysqlconvertutf8':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionMySQLConvertUsing('utf8',txt);
                this.setSelectedText(newString);
            }
            break;
        case 'mysqlconvertlatin1':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionMySQLConvertUsing('latin1', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'mysqltosqlchar':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToSQLChar('mysql', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'mssqltosqlchar':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToSQLChar('mssql', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'oracletosqlchar':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToSQLChar('oracle', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'unionselect':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToUnionSelect(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'spacestocomments':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToInlineComments('oracle', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stringtocharcode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = XSS.selectionToChar('stringFromCharCode', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stringtohtmlcharcode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = XSS.selectionToChar('htmlChar', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'xssalert':
            newString = 'alert(String.fromCharCode(88, 83, 83))';
            this.setSelectedText(newString);
            break;
        case 'base64encode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.base64Encode(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'base64decode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.base64Decode(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'urlencode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = urlencode(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'urldecode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = unescape(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'md5hash':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.md5(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'sha1hash':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.sha1(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'sha256hash':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.sha2(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'rot13':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.rot13(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'addslashes':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.addSlashes(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stripslashes':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.stripSlashes(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stripspaces':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.stripSpaces(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'reverse':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.reverseString(txt);
                this.setSelectedText(newString);
            }
            break;
    }
    currentFocusField.focus();
}

/* ---------- Actions --------- */

function getSelectedText() {
    var selectionStart = this.currentFocusField.selectionStart;
    var selectionEnd = this.currentFocusField.selectionEnd;
    if (selectionEnd - selectionStart < 1) {
        browser.devtools.inspectedWindow.eval(
            "alert(\"Select text before using this function!\");",
            function (result, isException) {
                // no action
            }
        );
        return false;
    }
    return this.currentFocusField.value.substr(selectionStart, selectionEnd - selectionStart);
}

function setSelectedText(str) {
    var selectionStart = this.currentFocusField.selectionStart;
    var selectionEnd = this.currentFocusField.selectionEnd;
    var pre = this.currentFocusField.value.substr(0, selectionStart);
    var post = this.currentFocusField.value.substr(selectionEnd, this.currentFocusField.value.length);
    this.currentFocusField.value = pre + str + post;
    this.currentFocusField.selectionStart = selectionStart;
    this.currentFocusField.selectionEnd = selectionStart + str.length;
}


function urlencode(inputstr) {
    var newString = escape(inputstr);
    newString = newString.replace(/\*/g, '%2a');
    newString = newString.replace(/\//g, '%2f');
    newString = newString.replace(/\+/g, '%2b');
    return newString;
}

function loadUrl() {
    browser.devtools.inspectedWindow.eval(
        "window.location.href",
        function (result, isException) {
            if (isException)
                urlfield.value = "";
            else
                urlfield.value = result;
        }
    );
}

function splitUrl() {
    var uri = currentFocusField.value;
    uri = uri.replace(new RegExp(/&/g), "\n&");
    uri = uri.replace(new RegExp(/\?/g), "\n?");
    currentFocusField.value = uri;
    return true;
}

var typePostdata = "";

function getPostData() {
    if ((postdatafield.value || '').indexOf("Content-Disposition: form-data; name=") > -1) {
        typePostdata = "multipart";
        return postdatafield.value;
    }
    else if ((postdatafield.value || '').indexOf("&") > -1) {
        typePostdata = "formdata";
        var dataString = postdatafield.value;
        dataString = dataString.replace(new RegExp(/\n|\r/g), '');
        dataString = dataString.replace(new RegExp(/\+/g), "%2B");
        dataString = dataString.replace(new RegExp(/\=\=/g), "%3d%3d"); // for base64
        dataString = dataString.replace(new RegExp(/\=\&/g), "%3d&");   // for base64
        return dataString.split('&');
    }
    else {
        typePostdata = "raw";
        return postdatafield.value;
    }
}

function execute() {
    if (refererCbx.checked) {
        browser.runtime.sendMessage({
            urlfield: urlfield.value,
            refererfield: refererfield.value
        });
    }
    if (!postdataCbx.checked) { // just get method
        browser.devtools.inspectedWindow.eval(
            "window.location.href = '" + urlfield.value + "';",
            function (result, isException) {
                //no action
            }
        );
        return;
    }
    var postData = getPostData();
    if (typePostdata === "formdata") {
        var scriptpost = 'document.body.innerHTML += \'<form id="hackbardynForm" action="' + urlfield.value + '" method="post">';
        for (var i = 0; i < postData.length; i++) {
            var field = postData[i].split('=');
            var fieldvalue = "";
            if (field.length === 2) {
                fieldvalue = field[1];
            }
            else if (field.length === 3) { // base64 case
                if (field[2] === "") {
                    fieldvalue = field[1] + "%3d";
                }
            }
            else {
                console.error("New exception: Too much field in a variable");
            }
            scriptpost += '<input type="hidden" name="' + field[0] + '" value="' + fieldvalue + '">';
        }
        scriptpost += '</form>\';document.getElementById("hackbardynForm").submit();';
        browser.devtools.inspectedWindow.eval(
            scriptpost,
            function (result, isException) {
                //no action
            }
        );
    }
    else // for raw data and mutilpart formdata
    {
        var responsePost = "";
        fetch(urlfield.value, {
            method: "POST",
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache': 'no-cache'
            },
            credentials: 'include',
            body: postdatafield.value
        }).then(function (response) {
            response.text().then(function (text) {
                responsePost = text;
                var scriptpost = 'document.body.innerHTML = unescape(\'' + urlencode(responsePost) + '\');window.history.pushState("", "", \'' + urlfield.value + '\');';
                browser.devtools.inspectedWindow.eval(
                    scriptpost,
                    function (result, isException) {
                        //no action
                    }
                );
            });
        });
    }
}

function togglepostdata() {
    if (postdataCbx.checked) {
        postdatacontainer.style.visibility = "visible";
        postdatacontainer.style.position = "relative";
    } else {
        postdatacontainer.style.visibility = "hidden";
        postdatacontainer.style.position = "absolute";
    }
}

function togglereferer() {
    if (refererCbx.checked) {
        referercontainer.style.visibility = "visible";
        referercontainer.style.position = "relative";
    } else {
        referercontainer.style.visibility = "hidden";
        referercontainer.style.position = "absolute";
    }
}

