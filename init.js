/**
* Responsive
* 
* author: Thilo Ilg
* version: 1.1.6
* 
**/

/** 
* --- jAlbumGlobals ---
* jAlbumGlobals is responsible for constant parameter of the skin.
* In the process of creating an album the jAlbum parser will overwrite 
* the variables according to the skin with the selected ones in the
* program. jAlbumGlobals also includes global variables which describe
* the state of the skin like if it is embedded, viewed on a mobile device,
* online or in filesystem etc.
*/
var jAlbumGlobals1649784512343 = (function () {

	var styles = ["dark.css", "light.css", "transparent.css"]; // styles

	var mobile = isMobile(); // is the skin viewed on a mobile device
	var online = isOnline(); // is the skin viewed online or in the filesystem
	var jAlbumURL = getURL(); // what's the current url?

	var stylePath = ""; //path points to the styles folder
	var resPath = ""; // path points to the res folder

	var credits = "jAlbum photography website storage"; // should skin show credits in footer
	var albumTitle = "夜景咖啡"; // what's the album title?
	var contentPath = ""; // path points to the skin folder
	var imgHoverScaleFactor = "scale(1.1)"; // scale factor of hovering an element

	var folderTitleUp = true; // positioning of folder title, under or above folder
	var folderImgCount = false; // says if folder deep count should be shown
	var maxImgInRow = 10; // restricts the number of elements in a row
	var imgBorderSize = 3; // define border size of element
	var imgBoxSize = 175; // defines size of container of element
	var showFolderName = false; // says if folder name should be displayed
	var textSize = 11; // defines text size of whole page
	var showComments = true; // defines if comments should be shown in slideshow
	var slideBorderSize = 0;
	var slideBorderColor = "#ff000000";
	var slideMarginSize = 0; // Margin around full screen image.
	var style = "dark.css";

	var dataTree = {"path":"%E5%A4%9C%E6%99%AF%E5%92%96%E5%95%A1","counters":{"total":24,"images":24,"files":24},"thumb":{"path":"thumbs\/IMG_2863.JPG","width":256,"height":247},"objects":[{"path":"IMG_2820.JPG","image":{"path":"slides\/IMG_2820.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2820.JPG","width":256,"height":192},"fileSize":2926662,"name":"IMG_2820.JPG","fileDate":"2022-04-12T23:06:18.379Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/30s","originalDate":"2022-04-07T23:48:04.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"14mm","cameraMake":"Apple","isoEquivalent":2000,"flash":"Flash did not fire","focalLength":"2mm"}},{"path":"IMG_2738.JPG","image":{"path":"slides\/IMG_2738.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2738.JPG","width":256,"height":192},"fileSize":2477388,"name":"IMG_2738.JPG","fileDate":"2022-04-12T23:07:56.47Z","category":"image","camera":{"aperture":1.6,"exposureTime":"1\/4s","originalDate":"2022-04-07T22:53:36.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"51mm","cameraMake":"Apple","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"4mm"}},{"path":"IMG_2777.JPG","image":{"path":"slides\/IMG_2777.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2777.JPG","width":256,"height":192},"fileSize":2410337,"name":"IMG_2777.JPG","fileDate":"2022-04-12T23:07:59.494Z","category":"image","camera":{"aperture":1.6,"exposureTime":"1\/4s","originalDate":"2022-04-07T23:28:33.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"26mm","cameraMake":"Apple","isoEquivalent":1250,"flash":"Flash did not fire","focalLength":"4mm"}},{"path":"IMG_2892.JPG","image":{"path":"slides\/IMG_2892.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2892.JPG","width":256,"height":192},"fileSize":2007042,"name":"IMG_2892.JPG","fileDate":"2022-04-12T23:08:05.504Z","category":"image","camera":{"aperture":1.6,"exposureTime":"1\/700s","originalDate":"2022-04-11T18:16:24.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"26mm","cameraMake":"Apple","isoEquivalent":32,"flash":"Flash did not fire","focalLength":"4mm"}},{"path":"IMG_2863.JPG","image":{"path":"slides\/IMG_2863.JPG","width":1170,"height":1127},"thumb":{"path":"thumbs\/IMG_2863.JPG","width":256,"height":247},"fileSize":636000,"name":"IMG_2863.JPG","fileDate":"2022-04-12T23:09:49.691Z","category":"image","camera":{"originalDate":"2022-04-11T17:35:45.0Z"}},{"path":"IMG_2866.JPG","image":{"path":"slides\/IMG_2866.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2866.JPG","width":256,"height":192},"fileSize":2934316,"name":"IMG_2866.JPG","fileDate":"2022-04-12T23:31:12.574Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/1800s","originalDate":"2022-04-11T18:07:51.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":32,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_2869.JPG","image":{"path":"slides\/IMG_2869.JPG","width":1016,"height":1536},"thumb":{"path":"thumbs\/IMG_2869.JPG","width":169,"height":256},"fileSize":4098905,"name":"IMG_2869.JPG","fileDate":"2022-04-12T23:31:12.681Z","category":"image","camera":{"aperture":1.6,"exposureTime":"1\/1250s","originalDate":"2022-04-11T18:08:12.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"26mm","cameraMake":"Apple","isoEquivalent":32,"flash":"Flash did not fire","focalLength":"4mm"}},{"path":"IMG_6658.JPG","image":{"path":"slides\/IMG_6658.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_6658.JPG","width":256,"height":192},"fileSize":3019158,"name":"IMG_6658.JPG","fileDate":"2022-04-12T23:31:13.252Z","category":"image","camera":{"aperture":1.8,"exposureTime":"1\/17s","originalDate":"2022-04-11T18:40:40.0Z","cameraModel":"iPhone XS Max","focalLength35mm":"26mm","cameraMake":"Apple","isoEquivalent":640,"flash":"Flash did not fire","focalLength":"4mm"}},{"path":"IMG_6667.JPG","image":{"path":"slides\/IMG_6667.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_6667.JPG","width":256,"height":192},"fileSize":1499469,"name":"IMG_6667.JPG","fileDate":"2022-04-12T23:31:13.315Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/30s","originalDate":"2022-04-11T18:47:38.0Z","cameraModel":"iPhone XS Max","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":800,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_6676.JPG","image":{"path":"slides\/IMG_6676.JPG","width":828,"height":466},"thumb":{"path":"thumbs\/IMG_6676.JPG","width":256,"height":144},"fileSize":225809,"name":"IMG_6676.JPG","fileDate":"2022-04-12T23:31:13.354Z","category":"image","camera":{"originalDate":"2022-04-12T10:59:12.0Z"}},{"path":"IMG_2659.JPG","image":{"path":"slides\/IMG_2659.JPG","width":1152,"height":1536},"thumb":{"path":"thumbs\/IMG_2659.JPG","width":192,"height":256},"fileSize":2913505,"name":"IMG_2659.JPG","fileDate":"2022-04-12T23:31:13.427Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/30s","originalDate":"2022-04-06T18:27:45.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"14mm","cameraMake":"Apple","isoEquivalent":1600,"flash":"Flash did not fire","focalLength":"2mm"}},{"path":"IMG_2663.JPG","image":{"path":"slides\/IMG_2663.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2663.JPG","width":256,"height":192},"fileSize":3543223,"name":"IMG_2663.JPG","fileDate":"2022-04-12T23:31:13.543Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/40s","originalDate":"2022-04-06T18:31:49.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":400,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_2679.JPG","image":{"path":"slides\/IMG_2679.JPG","width":1152,"height":1536},"thumb":{"path":"thumbs\/IMG_2679.JPG","width":192,"height":256},"fileSize":2940702,"name":"IMG_2679.JPG","fileDate":"2022-04-12T23:31:13.747Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/30s","originalDate":"2022-04-06T18:36:09.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":320,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_2689.JPG","image":{"path":"slides\/IMG_2689.JPG","width":1152,"height":1536},"thumb":{"path":"thumbs\/IMG_2689.JPG","width":192,"height":256},"fileSize":3331718,"name":"IMG_2689.JPG","fileDate":"2022-04-12T23:31:13.853Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/120s","originalDate":"2022-04-06T19:20:12.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":160,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_2691.JPG","image":{"path":"slides\/IMG_2691.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2691.JPG","width":256,"height":192},"fileSize":2624509,"name":"IMG_2691.JPG","fileDate":"2022-04-12T23:31:13.943Z","category":"image","camera":{"aperture":2.0,"exposureTime":"1\/15s","originalDate":"2022-04-06T19:21:01.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":2000,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_2714.JPG","image":{"path":"slides\/IMG_2714.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2714.JPG","width":256,"height":192},"fileSize":1625320,"name":"IMG_2714.JPG","fileDate":"2022-04-12T23:31:14.120Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/10s","originalDate":"2022-04-06T21:45:04.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"14mm","cameraMake":"Apple","isoEquivalent":3200,"flash":"Flash did not fire","focalLength":"2mm"}},{"path":"IMG_2716.JPG","image":{"path":"slides\/IMG_2716.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2716.JPG","width":256,"height":192},"fileSize":5171393,"name":"IMG_2716.JPG","fileDate":"2022-04-12T23:31:14.234Z","category":"image","camera":{"aperture":2.4,"exposureTime":"0.5s","originalDate":"2022-04-06T21:55:18.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"14mm","cameraMake":"Apple","isoEquivalent":3200,"flash":"Flash did not fire","focalLength":"2mm"}},{"path":"IMG_2720.JPG","image":{"path":"slides\/IMG_2720.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2720.JPG","width":256,"height":192},"fileSize":3639517,"name":"IMG_2720.JPG","fileDate":"2022-04-12T23:31:14.363Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/4s","originalDate":"2022-04-06T22:02:29.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"14mm","cameraMake":"Apple","isoEquivalent":2000,"flash":"Flash did not fire","focalLength":"2mm"}},{"path":"IMG_2751.JPG","image":{"path":"slides\/IMG_2751.JPG","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_2751.JPG","width":256,"height":192},"fileSize":3337833,"name":"IMG_2751.JPG","fileDate":"2022-04-12T23:31:14.492Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/30s","originalDate":"2022-04-07T23:17:50.0Z","cameraModel":"iPhone 12 Pro","focalLength35mm":"14mm","cameraMake":"Apple","isoEquivalent":1600,"flash":"Flash did not fire","focalLength":"2mm"}},{"path":"IMG_1359%20%281%29.jpg","image":{"path":"slides\/IMG_1359%20%281%29.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_1359%20%281%29.jpg","width":256,"height":192},"fileSize":500106,"name":"IMG_1359 (1).jpg","fileDate":"2022-04-12T23:40:19.98Z","category":"image","camera":{"aperture":1.5,"exposureTime":"1\/15s","originalDate":"2022-04-06T21:32:02.0Z","cameraModel":"iPhone 13 Pro Max","focalLength35mm":"53mm","resolution":"4032 x 3024","cameraMake":"Apple","isoEquivalent":1250,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_6593.jpg","image":{"path":"slides\/IMG_6593.jpg","width":1152,"height":1536},"thumb":{"path":"thumbs\/IMG_6593.jpg","width":192,"height":256},"fileSize":3775444,"name":"IMG_6593.jpg","fileDate":"2022-04-13T00:18:35.162Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/30s","originalDate":"2022-04-06T18:17:02.0Z","cameraModel":"iPhone XS Max","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":640,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_6594.jpg","image":{"path":"slides\/IMG_6594.jpg","width":1152,"height":1536},"thumb":{"path":"thumbs\/IMG_6594.jpg","width":192,"height":256},"fileSize":2874156,"name":"IMG_6594.jpg","fileDate":"2022-04-13T00:18:42.326Z","category":"image","camera":{"aperture":2.4,"exposureTime":"1\/30s","originalDate":"2022-04-06T18:17:30.0Z","cameraModel":"iPhone XS Max","focalLength35mm":"52mm","cameraMake":"Apple","isoEquivalent":400,"flash":"Flash did not fire","focalLength":"6mm"}},{"path":"IMG_6596.jpg","image":{"path":"slides\/IMG_6596.jpg","width":1152,"height":1536},"thumb":{"path":"thumbs\/IMG_6596.jpg","width":192,"height":256},"fileSize":4852801,"name":"IMG_6596.jpg","fileDate":"2022-04-13T00:18:51.96Z","category":"image","camera":{"aperture":1.8,"exposureTime":"1\/25s","originalDate":"2022-04-06T18:17:54.0Z","cameraModel":"iPhone XS Max","focalLength35mm":"26mm","cameraMake":"Apple","isoEquivalent":640,"flash":"Flash did not fire","focalLength":"4mm"}},{"path":"IMG_6613.jpg","image":{"path":"slides\/IMG_6613.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/IMG_6613.jpg","width":256,"height":192},"fileSize":4527655,"name":"IMG_6613.jpg","fileDate":"2022-04-13T00:18:59.873Z","category":"image","camera":{"aperture":1.8,"exposureTime":"1\/15s","originalDate":"2022-04-07T23:53:22.0Z","cameraModel":"iPhone XS Max","focalLength35mm":"26mm","cameraMake":"Apple","isoEquivalent":1000,"flash":"Flash did not fire","focalLength":"4mm"}}],"name":"夜景咖啡","fileDate":"2022-04-13T00:52:26.628Z"}; // includes all the album data in a json tree
	var stylePath = ""; 

	var widgetColor = getWidgetColor(); // get suggested color for widget support

	var uniqueId = new Date().getTime();

	/** check if page viewed on mobile device **/
	function isMobile(){
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
	}

	/** check if page viewed online or from file system **/
	function isOnline(){
		switch(window.location.protocol) {
		   case 'http:':
		   		return true;
		   case 'https:':
		     	return true;
		   case 'file:':
		    	return false;
		}
	}

	/** get current url of page **/
	function getURL(){
		var scripts = document.getElementsByTagName('script');
		for (var index = scripts.length-1; index >= 0; --index) {
			if (scripts[index].id == 'jAlbum') {
				var curr = scripts[index].src;
				return curr.substring(0, curr.lastIndexOf("/") + 1);
			}
		}
		return "";
	}

	/** get fidget color according to current style **/
	function getWidgetColor(){
		if(style == styles[0]) return "black";
		else return "white";
	}

	/** returns all the public variables and functions **/
	return {
		mobile: mobile,
		online: online,
		jAlbumURL: jAlbumURL,
		stylePath: stylePath,
		resPath: resPath,
		credits: credits,
		albumTitle: albumTitle,
		contentPath: contentPath,
		imgHoverScaleFactor: imgHoverScaleFactor,
		folderTitleUp: folderTitleUp,
		folderImgCount: folderImgCount,
		maxImgInRow: maxImgInRow,
		imgBorderSize: imgBorderSize,
		imgBoxSize: imgBoxSize,
		showFolderName: showFolderName,
		textSize: textSize,
		showComments: showComments,
		dataTree: dataTree,
		stylePath: stylePath,
		slideBorderSize: slideBorderSize,
		slideBorderColor: slideBorderColor,
		slideMarginSize: slideMarginSize,
		widgetColor: widgetColor,
		uniqueId: uniqueId
	};

})();

/** --- jAlbumInject ---
* jAlbumInject is responsible for copying html code into
* the website. Stylesheet includes will be printed into
* the header, the body will be printed to the position
* of the embed code.
*/
var jAlbumInject = (function () {

	appendToHead(injLink('res/css/normalize.min.css', 'stylesheet')); // normalizes browser specific stylesheet defaults
	appendToHead(injLink('res/css/custom.css', 'stylesheet')); // customized desgin of the skin, will be partly overwritten by style.css
	appendToHead(injLink('res/styles.css', 'stylesheet')); // different styles to the skin which change the appearance

	appendToHead(injMeta("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0")); // viewport handles mobile scaling size

	inj('<div id="Responsive' + jAlbumGlobals1649784512343.uniqueId + '" class="jAlbum Responsive">'); // Responsive id surrounds all code of the body of the skin
	inj('<div id="fullscreen"></div>'); // element where to add fullscreen
	inj('<div id="jAlbum-header"></div>'); // header container
	inj('<div id="jAlbum-content"></div>'); // content container
	inj('<div style="clear: both"></div>');

	inj('<div id="jAlbum-footer">'); // footer
	inj('<div class="left leaveFolder">');
	inj('<p><a onclick="jAlbumController.back();"> &#10096;</a></p>'); // go back button in footer
	inj('</div><div class="center"><p><a href="http://jalbum.net/">jAlbum photography website storage</a> - '); // credits in footer
	inj('<a href="http://jalbum.net/skins/skin/Responsive">Responsive</a></p>'); // skin advertisement in footer
	inj('</div></div></div>'); // close footer

	inj('<script src="' + jAlbumGlobals1649784512343.jAlbumURL + 'res/libs/jquery-2.1.4.min.js"></script>'); // embets jQuery library
	inj('<script type="text/javascript">$(document).bind("mobileinit", function(){$.extend($.mobile , {autoInitializePage: false})});</script>'); // deactivates jQuery unnecessary mobile feature
	inj('<script src="' + jAlbumGlobals1649784512343.jAlbumURL + 'res/libs/jquery.mobile-1.4.5.min.js"></script>'); // includes jQuery Mobile
	inj('<script src="' + jAlbumGlobals1649784512343.jAlbumURL + 'res/libs/jquery.touchswipe.min.js"></script>'); // jQuery touchswipe plugin
	inj('<script src="' + jAlbumGlobals1649784512343.jAlbumURL + 'main.js" type="text/javascript"></script>'); // includes skin controller
	
	/** injects html code at embedded position **/
	function inj(html){
		document.write(html);
	}

	/** injects html code in header **/
	function appendToHead(elem){
		document.getElementsByTagName('head').item(0).appendChild(elem);
	}

	/** injects header of embedded page with stylesheet includes **/
	function injLink(path, rel){
		var elem = document.createElement("link");
		elem.href = jAlbumGlobals1649784512343.jAlbumURL + path;
		elem.rel = rel;

		return elem;
	}

	function injMeta(name, content){
		var elem = document.createElement("meta");
		elem.name = name;
		elem.content = content;

		return elem;
	}

})();


/** --- Widget Support---
* provides JavaScript code for jAlbum widget support
*/
window._jaWidgetBarColor = jAlbumGlobals1649784512343.widgetColor;

if(!document.getElementById('non-embedded')){ // check if embedded
	window._jaUrl = jAlbumGlobals1649784512343.jAlbumURL;
	_jaSkin = "Responsive";
_jaStyle = "dark.css";
_jaVersion = "27.0.7";
_jaGeneratorType = "desktop";
_jaLanguage = "en";
_jaPageType = "index";
_jaRootPath = ".";
_jaGuid = "1649772478030";
var jalbumWidgetContainer = document.createElement('div');
jalbumWidgetContainer.setAttribute('id','jalbumwidgetcontainer');
var jalbumWidgetScript = document.createElement("script");
jalbumWidgetScript.type = "text/javascript";
jalbumWidgetScript.src = "http"+("https:"==document.location.protocol?"s":"")+"://jalbum.net/widgetapi/load.js";
jalbumWidgetScript.async = true;
jalbumWidgetContainer.appendChild(jalbumWidgetScript);
document.body.appendChild(jalbumWidgetContainer);
 // get JavaScript code for widget
}
