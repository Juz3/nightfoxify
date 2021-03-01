/*
 * Nightchromed Google Chrome extension
 *
 * Main script
 *
 * @author Juz3
 *
 * Last modified: 01.03.2021
 */
let bgStyle = document.createElement("style");

document.body.appendChild(bgStyle);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && "bgMode" in changes) {
    setBgMode(changes.bgMode.newValue);
  } else {
    console.error("nightchromed error");
  }
});

function setBgMode(toggle) {
  if (toggle) {
    // See "../style.css"
    bgStyle.innerText = `
    html, body {
      background-color: rgba(22, 23, 26, 0.9) !important;
      color: #FFF !important;
    }
    article, button, div, figure, form, h1, h2, h3, h4, h5, header, input, li, nav, pre, section, tbody, th, tr, td, table, ul {
      background-color: rgba(31, 32, 34, 0.9) !important;
      color: #FFF !important;
    }
    span, p {
      color: #FFF !important;
    }
    a {
      background-color: rgba(31, 32, 34, 0.9) !important;
      color: #3e74e7 !important;
    }
    cite {
      color: #777777 !important;
    }`;
  } else {
    bgStyle.innerText = ``;
  }
}

// if bgMode is saved in storage, set it automatically.
// without this, toggle is needed on every new page load
chrome.storage.local.get(["bgMode"], function (result) {
  setBgMode(result.bgMode);
});
