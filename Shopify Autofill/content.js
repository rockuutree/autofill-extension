/**
 * Content class,
 * javascript file that runs in the con text of web pages
 * Allows the extension to interact with
 * and modify the conent of the web pages
 *
 *
 * @author (Ryan Vu)
 * @version (6/15/23)
 */

/**
 * Description: add data Object item to whichever index
 * PRE-CONDITION: Valid input
 * POST-CONDITION:
 */

//chrome.runtime -> retrieves the background page and retun details about the manifest / Object
//onMessage-> Event listener that is a part of chrome extension's API
//addListener -> callback function
//request -> message sent by sender : can be any data type
//sender -> object containing information about the sender of the message
//sendResponse -> function that can be used to send a response back to the sender
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    //Sets the value of the following  field to the value of request.etc
    document.getElementById("checkout_shipping_address_first_name").value =
      request.firstname;
    document.getElementById("checkout_shipping_address_last_name").value =
      request.lastname;
    document.getElementById("checkout_email").value = request.email;
    document.getElementById("checkout_shipping_address_address1").value =
      request.address;
    document.getElementById("checkout_shipping_address_city").value =
      request.city;
    document.getElementById("checkout_shipping_address_zip").value =
      request.postcode;
    document.getElementById("checkout_shipping_address_phone").value =
      request.phonenumber;
    //Sends a response object with the status property set to "Success!"
    sendResponse({ status: "Success!" });
  } catch (error) {
    console.log(error); //Logs the error to the console
    sendResponse({ status: error }); //Sets the response object to error
  }
  return true; ///Returns true that the response will be sent asynchronously
});
