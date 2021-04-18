console.log("Background Running")

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    let trigger = {
        text : "Injecting Script"
    }
    chrome.tabs.sendMessage(tab.id, trigger);
}