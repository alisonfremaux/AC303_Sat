$(document).ready(function(){
	$("comfirm").on("click", function){
		chrome.tabs.create({"url": "https://www.boredbutton.com/" });
	}

})