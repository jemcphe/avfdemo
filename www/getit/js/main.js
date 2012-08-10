//var app = {
//initialize: function() {
//    this.bind();
//},
//bind: function() {
//    document.addEventListener('deviceready', this.deviceready, false);
//},
//deviceready: function() {
//    // note that this is an event handler so the scope is that of the event
//    // so we need to call app.report(), and not this.report()
//    app.report('deviceready');
//},
//report: function(id) {
//    console.log("report:" + id);
//    // hide the .pending <p> and show the .complete <p>
//    document.querySelector('#' + id + ' .pending').className += ' hide';
//    var completeElem = document.querySelector('#' + id + ' .complete');
//    completeElem.className = completeElem.className.split('hide').join('');
//}
//};


//document.addEventListener('deviceready', onDeviceready, false);
//function onDeviceReady() {
//    $('#source').change(inputChange());
//}
$(document).ready(function(){    
function inputChange(){
    var selected_item = $(this).val();
    
    if (selected_item == "Online") {
    $('#online').val("").removeClass('hidden');
    } else {
    $('#online').val(selected_item).addClass('hidden');
    }
    if (selected_item == "Window Shopping") {
    $('#shopping').val("").removeClass('hidden');
    } else {
    $('#shopping').val(selected_item).addClass('hidden');
    }
    if (selected_item == "TV") {
    $('#tv').val("").removeClass('hidden');
    } else {
    $('#tv').val(selected_item).addClass('hidden');
    }
    if (selected_item == "Magazine") {
    $('#magazine').val("").removeClass('hidden');
    } else {
    $('#magazine').val(selected_item).addClass('hidden');
    }
};
                  
                  // Create StoreData Function
                  function storeData(key){
                  //var id;
                  //If there is no key, this is a new item and we need to generate a new key
                  if(!key){
                  //Create Random Key
                  var 	id									= Math.floor(Math.random()*1000001);
                  console.log("Key was generated!");
                  } else {
                  //else, set the id to the existing key we're editing so that it will save over the data.
                  //The key is the same key that's been passed along from the editSubmit event handler
                  //to the validate function, and then passed here, into the storeData function.
                  id= key;
                  }
                  //getCheckboxValue();
                  // gather up all our form field values and store in an object.
                  // Object properties contain array with the form label and input value.
                  var item = {};
                  item.source				= ["Where it can be found:", $('#source').val()];
                  item.link					= ["Here's the link:", $('#link').val()];
                  item.store					= ["Here's the store:", $('#store').val()];
                  item.station					= ["Here's the TV station:", $('#station').val()];
                  item.magPage                  = ["Here's the Magazine and Page:", $('#magPage').val()];
                  item.price                    = ["Price: $", $('#price').val()];
                  //item.starter				= ["Starter:", starterValue];
                  item.skill					= ["Skill Level:", $('#skill').val()];
                  item.notes					= ["Item Description:", $('#notes').val()];
                  
                  console.log(item);
                  //Save Data into Local Storage: Use Stringify to convert our object to a string.
                  localStorage.setItem(id, JSON.stringify(item));
                  alert("Item Saved!");
                  location.reload();
                  }

$('#source').change(inputChange);
});





//Wait until the DOM is ready.
//window.addEventListener("DOMContentLoaded", function() {
//
//                        //getElementById function
//                        function $(x){
//                        var theElement = document.getElementById(x);
//                        return theElement;
//                        };
                        
//                        function displayInput(source){
//                        switch(source){
//                        case "Online":
//                            $('online').style.display="block";
//                        break;
//                        case "Window Shopping":
//                        $('shopping').style.display="block";
//                        }
//                        };
//                        function reload(){
//                            var change = window.location.reload;
//                        return change;
//                        };
//                        
//                        function getDropDown(){
//                        var dropValue = $('source').value;
//                        var change = $('select').onchange;
//                        //var result = dropValue.options.value;
//                        console.log(dropValue);
//                        
//                        }
//                        getDropDown();
//                        reload();
                        
                        //Function to Create Appropriate Input based on User's selection
//                        function makeInput(){
//                        var formTag = $("addItemForm"),
//                        selectLi = $("where"),
//                        dropValue = document.getElementById("source"),
//                        makeLabel = document.createElement("label"),
//                        createInput = document.createElement("input");
//                        makeLabel.setAttribute("for", "resource");
//                        makeLabel.setAttribute("id" , "label");
//                        createInput.setAttribute("id", "resource");
//                            for(var i=0, j=dropValue.length; i<j; i++){
//                                //alert(dropValue.options[i].value);
//                                var option = dropValue.options[i].value;
//                                if(option === "Online"){
//                                selectLi.appendChild(makeLabel);
//                                makeLabel.innerHTML = "Share The Link: ";
//                                }else if(option === "Window Shopping"){
//                                selectLi.appendChild(makeLabel);
//                                makeLabel.innerHTML = "Tell Us Where: ";
//                                }
//                            }
//                        }
                        //makeInput();
//                        });