/*
 * Nightfoxify Firefox extension
 *
 * action from browserAction
 *
 * @author Juz3
 *
 * Last modified: 01.03.2021
 */

browser.browserAction.onClicked.addListener(() => {
  setBGMode();
});

function setBGMode() {
  browser.storage.local.get("bgMode").then((result) => {
    browser.storage.local.set({ bgMode: !result.bgMode });
    if (result.bgMode) {
      browser.browserAction.setIcon({ path: "icons/moon_off48.png" });
    } else {
      browser.browserAction.setIcon({ path: "icons/moon_on48.png" });
    }
  });
}
