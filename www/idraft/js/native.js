
$(document).ready(function(){
// Example JSONP request with jQuery
                  function loadESPN(){
                  $.ajax({
                         url: "http://api.espn.com/v1/sports/football/news",
                         data: {
                         // enter your developer api key here
                         apikey: "{ahq2xtaj5bcm7en3ea4ugp85}",
                         // the type of data you're expecting back from the api
                         _accept: "application/json"
                         },
                         dataType: "jsonp",
                         success: function(data) {
                         // create an unordered list of headlines
                         var ul = $('<ul/>');
                         $.each(data.headlines, function() {
                                var li = $('<li/>').text(this.headline);
                                ul.append(li);
                                });
                         // append this list to the document body
                         $('body').append(ul);
                         },
                         error: function() {
                         // handle the error
                         }
                         });
                  };
                  loadESPN();
});