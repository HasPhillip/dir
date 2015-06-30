// Set some variables
var lastPixelRatioUpdate = 0;//Date.now();
var pixelRatio = window.devicePixelRatio;

// Check the cookie to see if the pixelRatio has been updated, if so note update
var cookies = document.cookie.split(' ');
for(var c=0;c<cookies.length;c++){
	if(cookies[c].substr(0,4)=='dir='){
		cookies[c] = unescape(cookies[c].substr(4));
		cookies[c] = JSON.parse(cookies[c].substr(0,cookies[c].length-1));
		if(cookies[c]['lastPixelRatioUpdate']==undefined || cookies[c]['lastPixelRatioUpdate']==0){
			lastPixelRatioUpdate = Date.now();
		}else if(cookies[c]['pixelRatio']!=pixelRatio){
			lastPixelRatioUpdate = Date.now();
		}else{
			lastPixelRatioUpdate = cookies[c]['lastPixelRatioUpdate'];
		}
	}
}
cookies.delete;

// Write new cookie
document.cookie='dir='+escape(JSON.stringify({
	'pixelRatio':pixelRatio,
	'lastPixelRatioUpdate':lastPixelRatioUpdate,
	'screenWidth':screen.width,
	'screenHeight':screen.height,
	'dirVersion':2
}))+'; path=/; expires=2147483647';