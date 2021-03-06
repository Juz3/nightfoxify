/*
 * Nightfoxify Firefox extension
 *
 * Main script
 *
 * @author Juz3
 *
 * Last modified: 01.03.2021
 */
let bgStyle = document.createElement("style");

document.body.appendChild(bgStyle);

browser.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && "bgMode" in changes) {
    setBgMode(changes.bgMode.newValue);
  } else {
    console.error("nightfoxify error");
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
    article, button, div, em, figure, form, h1, h2, h3, h4, h5, 
    header, input, li, main, nav, p, pre, section, tbody, th, 
    tr, td, table, ul, ytd-browse {
      background-color: rgba(31, 32, 34, 0.9) !important;
      color: #FFF !important;
    }
    code, blockquote {
      background-color: rgba(45, 45, 46, 0.5) !important;
    }
    span, yt-formatted-string {
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
browser.storage.local.get("bgMode").then((result) => {
  setBgMode(result.bgMode);
});
