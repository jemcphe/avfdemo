
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready

//getElementById Function... Makes life easier
function $(x){
    var theElement = document.getElementById(x);
    return theElement;
};




function onDeviceReady() {
    var info = $("deviceInfo");
    
    info.innerHTML ='Device Name: '     + device.name       + '<br />' +
                    'Device Cordova: '  + device.cordova    + '<br />' +
                    'Device Platform: ' + device.platform   + '<br />' +
                    'Device UUID: '     + device.uuid       + '<br />' +
                    'Device Version: '  + device.version    + '<br />';
}

//function deviceInfo () {
//    navigator.notification.alert("Device Name: "     + device.name + "",    //+ '<br />' +
////                                 'Device Cordova: '  + device.cordova  + '<br />' +
////                                 'Device Platform: ' + device.platform + '<br />' +
////                                 'Device UUID: '     + device.uuid     + '<br />' +
////                                 'Device Version: '  + device.version  + '<br />',
//                                 alertDismissed,
//                                 'iDraft',
//                                 'OK');
//}


// alert dialog dismissed
function alertDismissed() {
    
}