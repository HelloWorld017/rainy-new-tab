chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.method === 'weather') {
		fetch(WEATHER_SERVER
			.replace('#Location#', request.locationCode)
			.replace('#AppId#', request.appId)
		)
			.then(response => response.text())
			.then(text => sendResponse(text))
			.catch(error => sendResponse(''));

		return true;
	}
});
