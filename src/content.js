var s = document.createElement('script');
var emotes = document.createElement('script');
emotes.src = chrome.extension.getURL('src/emotes.js');
s.src = chrome.extension.getURL('src/inject.js');
s.onload = emotes.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
(document.head || document.documentElement).appendChild(emotes);
