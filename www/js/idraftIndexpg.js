document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready

//getElementById Function... Makes life easier

function onDeviceReady(){
    navigator.notification.alert("The Data in the HEADLINES section is being pulled from the ESPN API",
                                 alertDismissed,
                                 "iDraft",
                                 "Cool!");
}
function alertDismissed() {
    // leaving empty
}