function Autofill() {
  chrome.storage.sync.get("formData", function (data) {
    var formData = data.formData
    if (formData) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, formData, function (response) {
          console.log(response)
        })
      })

    }
  })
}

function EditProfile() {
  chrome.tabs.create({ url: chrome.runtime.getURL("pages/index.html") });
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("autofill").addEventListener("click", Autofill)

});

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("edit-profile").addEventListener("click",EditProfile)
  
});
