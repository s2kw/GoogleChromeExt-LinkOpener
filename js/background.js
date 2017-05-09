(function() {
  // コピペ
  chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("clicked!!");
    chrome.tabs.sendMessage(tab.id, {
        command: "open_recipient"
      },
      function(msg) {
        console.log("result message:", msg);
      });
  });

  // 自分で書いたやつ
  chrome.browserAction.onClicked.addListener(function(tab){
  console.log("clicked!!!!");
  chrome.windows.sendMessage(tab.id,
    {command:"open_recipient"},
    function(msg){console.log(JSON.stringify(msg));}
    );
  });


}).call(this);
