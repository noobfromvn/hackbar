/**
 When we receive the message, add referer to Request Header
 */

var urlfield = "";
var refererfield = "";

function rewriteReferer(e) {
    if (e.url !== urlfield) return {};
    e.requestHeaders.push({
        name: "Referer",
        value: refererfield
    });
    browser.webRequest.onBeforeSendHeaders.removeListener(rewriteReferer);
    return {requestHeaders: e.requestHeaders};
}

function handleMessage(request, sender, sendResponse) {

    urlfield = request.urlfield;
    refererfield = request.refererfield;

    if (sender.url !== browser.runtime.getURL("/hackbar/hackbar-panel.html")) {
        return;
    }

    browser.webRequest.onBeforeSendHeaders.addListener(
        rewriteReferer,
        {urls: ["<all_urls>"], types: ["main_frame"]},
        ["blocking", "requestHeaders"]
    );

}

/**
 Listen for messages from our devtools panel.
 */
browser.runtime.onMessage.addListener(handleMessage);