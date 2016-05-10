// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function payLoad(results) {
  var elements = $("ul li");
  for(var i = 0; i < elements.length; i++) {
       var theText = elements[i].firstChild.nodeValue;
			 console.log(theText);
  }
	console.log(elements);
  document.body.style.backgroundColor="red";
  console.log(results); 
  console.log(document);
}


// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');

  chrome.tabs.executeScript(null,{file:"jquery-2.2.3.min.js"}, function(){
    chrome.tabs.executeScript(null,{file:"scraper.js"});
  });

});
