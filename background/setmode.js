/*
 * Nightfoxify Google Chrome extension
 *
 * action from browserAction
 *
 * @author Juz3
 *
 * Last modified: 28.02.2021
 */

chrome.browserAction.onClicked.addListener(() => {
  setBGMode();
});

async function setBGMode() {
  await chrome.storage.local.get("bgMode", function (result) {
    chrome.storage.local.set({ bgMode: !result.bgMode });
    if (result.bgMode) {
      chrome.browserAction.setIcon({ path: "icons/moon_off48.png" });
    } else {
      chrome.browserAction.setIcon({ path: "icons/moon_on48.png" });
    }
  });
}
