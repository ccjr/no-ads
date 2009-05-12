// ==UserScript==
// @name           no-ads-ameinfo
// @namespace      http://userscripts.org/users/ccjr/no-ads-ameinfo
// @description    Remove some of the annoying ads at AMEInfo
// @include        http://ameinfo.com/*
// @include        http://*.ameinfo.com/*
// ==/UserScript==

var allDivs, thisDiv;
allDivs = document.getElementsByTagName('div');
for (var i = 0; i < allDivs.length; i++) {
  thisDiv = allDivs[i];
  // divs with class 'banner', 'leaderboard clearfix', 'skyscraper' are mean
  if (thisDiv.className == 'banner' || 
      thisDiv.className == 'leaderboard clearfix' ||
      thisDiv.className == 'skyscraper') {
    removeElement(thisDiv);
  }
}

// the second to last div is also an add
removeElement(allDivs[allDivs.length - 2]);

function removeElement(e) {
  //e.parentNode.removeChild(e);
  e.style.display = 'none';
}

