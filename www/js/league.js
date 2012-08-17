window.addEventListener("DOMContentLoaded", function() {

                        console.log("js loaded");
                        // Wait for Cordova to load
                        //
                        document.addEventListener("deviceready", onDeviceReady, false);
                        
                        // Cordova is ready
                        //
                        
                        // alert dialog dismissed
                        function alertDismissed() {
                        
                        }
                        //Native Camera Functions
                        var pictureSource;   // picture source
                        var destinationType; // sets the format of returned value
                        
                        function onDeviceReady() {
                        pictureSource=navigator.camera.PictureSourceType;
                        destinationType=navigator.camera.DestinationType;
                        }
                        
                        // Called when a photo is successfully retrieved
                        //
                        function onPhotoDataSuccess(data) {
                        alert("onPhotoDataSuccess Function has ran");
                        // Uncomment to view the base64 encoded image data
                        //console.log(imageData);
                        $('capture').style.display = "none";
                        // Get image handle
                        //
                        var cameraPic = document.getElementById('image');
                        
                        // Unhide image elements
                        //
                        cameraPic.style.display = 'block';
                        
                        // Show the captured photo
                        // The inline CSS rules are used to resize the image
                        //
                        cameraPic.src = "data:image/jpeg;base64," + data;
                        }
                        
                        // Called when a photo is successfully retrieved
                        //
                        function onPhotoURISuccess(imageURI) {
                        // Uncomment to view the image file URI
                        // console.log(imageURI);
                        
                        // Get image handle
                        //
                        var largeImage = document.getElementById('image');
                        
                        // Unhide image elements
                        //
                        largeImage.style.display = 'block';
                        
                        // Show the captured photo
                        // The inline CSS rules are used to resize the image
                        //
                        largeImage.src = imageURI;
                        }
                        
                        // A button will call this function
                        //
                        function capturePhoto() {
                        // Take picture using device camera and retrieve image as base64-encoded string
                        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                                                    destinationType: destinationType.DATA_URL });
                        }
                        
                        // A button will call this function
                        //
                        function getPhoto(source) {
                        // Retrieve image file location from specified source
                        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
                                                    destinationType: destinationType.FILE_URI,
                                                    sourceType: source });
                        }
                        
                        // Called if something bad happens.
                        // 
                        function onFail(message) {
                        alert('Failed because: ' + message);
                        }

function $(x){
var theElement = document.getElementById(x);
return theElement;
};
                        var getPhotoLink = $("capture");
                        getPhotoLink.addEventListener("click", getPhoto);

var errMsg = $('errors');

function storeLeague(key){
    //If there is no key, this is a new item and we need to generate a new key
    if(!key){
        //Create Random Key
        var 	id									= Math.floor(Math.random()*1000001);
    } else {
        //else, set the id to the existing key we're editing so that it will save over the data.
        //The key is the same key that's been passed along from the editSubmit event handler
        //to the validate function, and then passed here, into the storeData function.
        id = key;
    }
    // gather up all our form field values and store in an object.
    // Object properties contain array with the form label and input value.
    var league = {};
    league.leaguename                   = ["League Name:", $('leaguename').value];
    league.teamcount					= ["Number of Teams:", $('teamcount').value];
    league.leaguelink					= ["League Link:", $('leaguelink').value];
    //Save Data into Local Storage: Use Stringify to convert our object to a string.
    localStorage.setItem(id, JSON.stringify(league));
    alert("League Was Saved!");
                        console.log("League Saved");
    navigator.notification.alert(
                                 'You have successfully added a league!',  // message
                                 alertDismissed,         // callback
                                 'iDraft',            // title
                                 'ok'                  // buttonName
                                 );
                        
};

//                        function localData() {
//                        if (localStorage.length === 0){
//                        alert("Nothing to show you!");
//                        }
//                        for(var i=0, j=localStorage.length; i<j; i++) {
//                        var key = localStorage.key(i);
//                        var value = localStorage.getItem(key);
//                        var obj = JSON.parse(value);
//                        console.log(obj);
//                        return obj;
//                        };
//                        }
                        
                        
                        function getData() {
                        if (localStorage.length === 0){
                        alert("Nothing to show you!");
                        }
                        console.log("Data Got!!");
//                        toggleControls("on");
//                        if(localStorage.length === 0) {
//                        navigator.notification.alert("There are no players stored, so a default player was added",
//                                                     alertDismissed,
//                                                     "iDraft",
//                                                     "OK");
//                        autoFillData();
//                        }
                        //Create Div/ul/li tags to display data
                        var makeDiv = document.createElement('div');
                        makeDiv.setAttribute("id", "leagues");
                        document.body.appendChild(makeDiv);
                        var makeList = document.createElement('ul');
                        makeDiv.appendChild(makeList);
                        $('leagues').style.display = "display";
                        for(var i=0, j=localStorage.length; i<j; i++) {
                        var makeLi = document.createElement('li');
                        var linksLi = document.createElement('li');
                        makeList.appendChild(makeLi);
                        var key = localStorage.key(i);
                        var value = localStorage.getItem(key);
                        var obj = JSON.parse(value);
                        var makeSubList = document.createElement('ul');
                        makeLi.appendChild(makeSubList);
                        //getImage(obj.position[1], makeSubList);
                        for(var n in obj) {
                        var makeSubLi = document.createElement('li');
                        makeSubList.appendChild(makeSubLi);
                        var optSubText = obj[n][0] +" "+ obj[n][1];
                        makeSubLi.innerHTML = optSubText;
                        makeSubList.appendChild(linksLi);
                        }
                        }
                        //makeItemLinks(localStorage.key(i), linksLi); //Create our edit and delete buttons/links for each item in localStorage.
                        };
                        
                        
                        function clearLocal() {
                        if(localStorage.length === 0) {
                        alert("Nothing to Clear");
//                        navigator.notification.alert(
//                                                     "There is no data to clear.",
//                                                     alertDismissed,
//                                                     "iDraft",
//                                                     "OK");
                        }else{
                        localStorage.clear();
                        alert("Cleared Storage");
//                        navigator.notification.alert("All Players have been deleted!",
//                                                     alertDismissed,
//                                                     "iDraft",
//                                                     "OK");
                        window.location.reload();
                        return false;
                        }
                        }
                        
                        
function validate (e) {
//Define the elements we want to check
var getLeagueName   = $('leaguename');
var getTeamCount    = $('teamcount');

//Reset Error Mesages
errMsg.innerHTML = "";
getLeagueName.style.border = "1px solid black";
getTeamCount.style.border = "1px solid black";

//Get error messages
var messageAry = [ ];
//League Name Validation
if(getLeagueName.value === "") {
var leagueNameError = "* Please Enter A League Name";
getLeagueName.style.border = "3px solid #a31d1d";
messageAry.push(leagueNameError);
}
//If there were errors, display them on the screen
if(messageAry.length >= 1) {
for(var i=0, j=messageAry.length; i < j; i++) {
var txt = document.createElement('li');
txt.innerHTML = messageAry[i];
errMsg.appendChild(txt);
}
e.preventDefault();
return false;
}else{
//If all is OK, save our data
                        console.log("Data Saved");
storeLeague(this.key);
}	
}
                        function loadPage(){
                        window.location.replace("myleagues.html");
                        }
                        
//Display Data
                        var displayLink = $("displaybtn");
                        displayLink.addEventListener("click", getData);
                        var clearLink   =   $("clearbtn");
                        clearLink.addEventListener("click", clearLocal);
var saveLink = $("submit");
saveLink.addEventListener("click", validate);
});