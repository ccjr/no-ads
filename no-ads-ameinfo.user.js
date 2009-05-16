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

var AllAs, thisA;
allAs = document.getElementsByTagName('a');
for (var i = 0; i< allAs.length; i++) {
  thisA = allAs[i];
  // remove link to interstitial - http://media.ameinfo.com/interstitials/ad.html?oldURL=http://www.ameinfo.com/196506.html&timer=60000
  if (thisA.href.indexOf('http://media.ameinfo.com/interstitials/ad.html') == 0) {
    thisA.href = thisA.href.split("?")[1].split("&")[0].split('=')[1];
  }
}

function removeElement(e) {
  //e.parentNode.removeChild(e);
  e.style.display = 'none';
}

