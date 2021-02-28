/*
 * Nightfoxify Google Chrome extension
 *
 * action from browserAction
 *
 * @author Juz3
 *
 * Last modified: 28.02.2021
 */

browserAction.onClicked.addListener(() => {
  setBGMode();
});

async function setBGMode() {
  await chrome.storage.local.get("bgMode").then((result) => {
    chrome.storage.local.set({ bgMode: !result.bgMode });
    if (result.bgMode) {
      browserAction.setIcon({ path: "icons/moon_off48.png" });
    } else {
      browserAction.setIcon({ path: "icons/moon_on48.png" });
    }
  });
}
