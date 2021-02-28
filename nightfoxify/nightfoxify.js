/*
 * Nightfoxify Firefox extension
 *
 * Main script
 *
 * @author Juz3
 *
 * Last modified: 28.02.2021
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
    div, tbody, th, tr, td, a, h1, h2, h3, article, header, section, input, table, button, nav { 
      background-color: rgba(31, 32, 34, 0.9) !important;
      color: #FFF !important;
    }
    span, li, p { 
      color: #FFF !important;
    }
    a { 
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
