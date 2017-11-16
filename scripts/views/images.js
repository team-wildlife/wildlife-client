// $(function() {
//   var params = {
//     // Request parameters
//     "q": "cats",
//     "mkt": "en-us",
//     "count": "10",
//     "offset": "0",
//     "safesearch": "Moderate",
//   };
//
//   $.ajax({
//     url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?" + $.param(params),
//     beforeSend: function(xhrObj){
//       // Request headers
//       xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","e23593948467494b89ba367541f66bbc");
//     },
//     type: 'GET',
//     // Request body
//     data: '{body}', //maybe doesn't need anything in body
//   })
//     .done(function(data) {
//       console.log(JSON.stringify(data));
//     })
//     .fail(function() {
//       console.log('error');
//     });
// });
