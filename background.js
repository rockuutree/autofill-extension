chrome.runtime.onInstalled.addListener(async () => {
  var url = chrome.runtime.getURL("pages/index.html");
  var tab = await chrome.tabs.create({ url });
  console.log("Created tab ${tab.id}");
});
