$(document).ready(function(){
// Example JSONP request with jQuery
                  function loadESPN(){
                  $.ajax({
                         url: "http://api.espn.com/v1/sports/football/nfl/news/headlines?limit=5&apikey=ahq2xtaj5bcm7en3ea4ugp85",
                         data: {
                         // enter your developer api key here
                         apikey: "{ahq2xtaj5bcm7en3ea4ugp85}",
                         // the type of data you're expecting back from the api
                         _accept: "application/json",
                         limit: 5
                         },
                         type: 'GET',
                         dataType: "jsonp",
                         success: function(data) {
                         console.log("JSON Data Loaded");
                         var ul = $('#espnHeadlines');
                         console.log(data);
                         $.each(data.headlines, function() {
                                var li = $('<li/>').text(this.headline);
                                var pTag = $('<p/>').text(this.description);
                                ul.append(li);
                                li.append(pTag);
                                console.log("So Far So Good!");
                                });
//                         for(var i=0, j=data.headlines; i<j; i++) {
//                         console.log("almost");
//                         var headline = data.headlines;
//                         var makeSubList = $('<li></li>');
//                         var makeSubLi = $( '<p>' + headline[0] + '</p>');
//                         makeSubList.append(makeSubLi).appendTo('#espnHeadlines');
//                         };
                         },
                         error: function() {
                         console.log("Didn't Work");
                         }
                         });
                  };
                  
                  loadESPN();
});