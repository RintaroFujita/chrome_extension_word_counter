chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	    chrome.scripting.executeScript({
		            target: { tabId: tabs[0].id },
		            function: function () {
				                return window.getSelection().toString();
				            }
		        }, function (result) {
				        var selectedText = result[0];
				        chrome.runtime.sendMessage({ message: "update_char_count", text: selectedText });
				    });
});
chrome.runtime.onMessage.addListener(
	    function (request, sender, sendResponse) {
		            if (request.message === "update_popup") {
				                var charCount = request.count;
				                document.getElementById('charCount').innerText = charCount + ' 文字';
				            }
		        }
);

