// (function() {
//   chrome.runtime.onMessage.addListener(function(message) {
//     var len;
//     if (message.type === 'onActivated') {
//       len = document.querySelectorAll('.lc-broken-link').length;
//       len = len || '';
//       return chrome.runtime.sendMessage({
//         type: 'setBadgeText',
//         value: len.toString()
//       });
//     }
//   });

// }).call(this);

  var open_tab = function( url ){
    //var obj = {"url":url, "selected":true};
    //chrome.tabs.create(obj);
    window.open(url,url);
  }

chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse){
//    window.alert("gatcha!:"+JSON.stringify(msg) + " :e:");
      console.log(JSON.stringify(msg));
      console.log(JSON.stringify(sender));
      console.log(JSON.stringify(sendResponse));
      if(msg.command != "open_recipient"){

        console.log("msg is fail."+msg.command);
        return;
      }
      var as = document.getElementsByTagName('*');
      console.log("as:" +as);
      // console.log(as.length);
      // for( var i = 0; i < as.length; i++ ){
      //     var href = as[i].getAttribute("href");
      //     if(href == null) continue;
      //     console.log( "as :"+i +"\t:\t" + href);
      //     //open_tab(href);
      // }

      var aTags = document.getElementsByClassName('a-link-normal');
      console.log("aTags:"+JSON.stringify( aTags ));
      console.log(aTags.length);
      var previousHTML;
      for( var i = 0; i < aTags.length; i++ ){
        var html = aTags[i].innerHTML;
        if(html != "領収書／購入明細書"){
          continue;
        }
        var href = aTags[i].getAttribute("href");
        if(href == null) continue;
        if(previousHTML == href) continue;
        previousHTML = href;

        console.log( "aTags :"+i +"\t:\t" + href);
        open_tab("https://www.amazon.co.jp"+href);
      }

      //open_tab("https://google.com");

  }
);
