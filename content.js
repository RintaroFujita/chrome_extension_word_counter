chrome.runtime.onMessage.addListener(
	    function (request, sender, sendResponse) {
		            if (request.message === "update_char_count") {
				                var charCount = request.text.length;
				                chrome.runtime.sendMessage({ message: "update_popup", count: charCount });
				            }
		        }
);

