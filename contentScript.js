
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg === 'getDom') {
    let inputTags = document.getElementsByTagName('input');
    let res = filter(inputTags, (i) => i.type === 'text');
    res = filter(res, (i) => i.clientWidth > 0);
    res[0].focus();
    res[0].select();
    sendResponse(inputTags);
  }
});

function filter (a, f) {
  let r = [];
  for (let i of a) if (f(i)) r.push(i);
  return r;
}
