function payLoad() {
	
	var elements = $("#content div.clearfix div.clearfix div.clearfix>div>a").not(".fcg a").not("a[data-role=button]").not("a[rel=dialog]");
  // var elements = $("#content a").not(".fcg a").not("a[data-role=button]");
  for(var i = 0; i < elements.length; i++) {
			var omo = jQuery(elements[i]).attr("onmouseover");
			if(omo!= undefined && omo.length > 0) {
				omo = omo.substr(30);
				omo = omo.substr(0, omo.length - 3);
				omo = omo.replace(/\\/g, '')
				console.log(omo);
			} else if(elements[i].href != window.location.href+"#") {
				console.log(elements[i].href);
			}
  }
  document.body.style.backgroundColor="red";
}

payLoad();