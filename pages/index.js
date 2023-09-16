/**
 * Description: Method saves the values of the input
 * PRE-CONDITION: Valid input
 * POST-CONDITION: Variables will change to the user input
 */
function saveForm() {
  var firstname = document.getElementById("first-name").value;
  var lastname = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var postcode = document.getElementById("postcode").value;
  var phonenumber = document.getElementById("phonenumber").value;

  //Array containing the necessary data for the autofill
  var formData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    address: address,
    city: city,
    postcode: postcode,
    phonenumber: phonenumber,
  };

  //Method provided by the Chrome Extension API for storing data
  //In the user's synchronized storage
  chrome.storage.sync.set({ formData: formData }, function () {
    console.log("Form data saved");
  });
}

/**
 * Description: Method used to load the current user profile containing
 * the list of data values
 * PRE-CONDITION: Previously stored data
 * POST-CONDITION: Input will be filled with the last saved user profile
 */
function loadData() {
  //Retrieves the data
  chrome.storage.sync.get("formData", function (data) {
    console.log(data);
    //Fills the input boxes with the data values
    document.getElementById("first-name").value = data.formData.firstname;
    document.getElementById("last-name").value = data.formData.lastname;
    document.getElementById("email").value = data.formData.email;
    document.getElementById("address").value = data.formData.address;
    document.getElementById("city").value = data.formData.city;
    document.getElementById("postcode").value = data.formData.postcode;
    document.getElementById("phonenumber").value = data.formData.phonenumber;
  });
}

//Fired when the initial HTML document has been loaded
document.addEventListener("DOMContentLoaded", function () {
  //Allows for when a certain element is triggered save -> (submit) it calls the saveForm function
  document.querySelector("form").addEventListener("submit", saveForm);
});

document.addEventListener("DOMContentLoaded", function () {
  //When Load Profile is "click", then it loads data
  document.getElementById("load-data").addEventListener("click", loadData);
});
