/*SiteWit Connect v2.0.1*/
var map;
var marker;
var gotDirections = false;
var FBLoggedIn = false;
var __validPhone = false;
var position;
var runInit = true;
var questionModal, waitingModal, errorModal;
//stop errors in browsers that don't support console
var console = console || { log: function () { } };
function SendMSG() {
    if (window['postMessage']) {
        parent.postMessage("CloseWindow", "*");
    }
}
if (window['postMessage']) {
    if (window.addEventListener) {
        window.addEventListener("message", GetMsg, false);
    }
    else {
        window.attachEvent("onmessage", GetMsg);
    }
}
function GetMsg(evnt) {
    if (typeof (evnt.data) == "object") {
        console.log("V2 Message Event");
        console.log(evnt);
        if (typeof (evnt.data.colordata) == "object") {
            if (typeof (evnt.data.colordata.bgcolor) != "undefined") {
                SetColors(evnt.data.colordata.bgcolor, evnt.data.colordata.fgcolor, evnt.data.colordata.fontvalue);
            }
        }
        if (evnt.data.swaction == "resize") {
            resizeWindow(null,100);
        }
        if (evnt.data.swaction == "openmodal") {
			switch(evnt.data.modaltype){
			case 2:
			    sw.set_goal(2604); 
				sw.register_page_view();
				break;
			case 1:
			    sw.set_goal(1865); 
				sw.register_page_view();
				break;
			}
       }
    }
}
function resizeWindow(height, delay){
	var newheight = (height>0 ? height : $('form').height() + iframeBuffer);
	if (delay>0){
            setTimeout("parent.postMessage('ResizeWindow" + newheight + "', '*')", delay);
	}else{
	    parent.postMessage('ResizeWindow' + newheight, '*')
	}
	
}
function setupWindow() {
   
    if ($('body').width() > 730) {
        $('.txtQuestion').width(300);
       // $('.QuestionButtons').width(300);
        $('.tabHolder').width($('body').width() - $('#sectionQuestion').width() - 50);
        $('#codeOffer').width($('.tabContent').width() - 90);
    } else {
        $('.txtQuestion').width($('body').width() - 50);
      //  $('.QuestionButtons').width($('body').width() - 50);
        $('.tabHolder').width($('body').width() - 30);
        $('#codeOffer').width($('.tabContent').width() - 90);
    }
    
}

window.fbAsyncInit = function() {
    FB.Event.subscribe('auth.statusChange', function (response) {
        if (response.status == 'connected') {
            FBLoggedIn = true;
        } else {
            FBLoggedIn = false;
        }
    });
    FB.Event.subscribe('edge.create', function (response) {
        if (response == likeURL){
		FBCoupon();	
	}else{
	console.log(response);
	console.log(likeURL);
	
	}
	
    });    
    FB.init({
        appId      : fbappId,
        xfbml      : true,
        version    : 'v2.3',
	status     : true
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/" + LangCode + "/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$(window).on("resize",function () {
    setupWindow();
});
$(window).on("focus",function () {
	if (runInit){
	    if (window['postMessage']) {
		resizeWindow(null,100);
	    }
		runInit = false;
	}
});
$(document).ready(function () {
    if (window.name != $('#swmaid').val() && isNumber(window.name)) {
        console.log("Updating Master Account ID");
        reloadPage(window.name);
    }
    setupWindow();
	if(!isPremium){$('.premium').fadeOut();}
	$('.ui.dropdown').dropdown({
	    onChange: function(value){
	        $(".error").hide();
	        $("input").css("background-color", 'white');
	        if (value=="sms"){
		        $('#fieldEmail').hide();
		        $('.preSubmit .intl-tel-input.pretty.inside').css('display', 'inline-flex');
		        $('#fieldPhone').show()
		        isSMSType = true;
	        } else {
	            $('.preSubmit .intl-tel-input.pretty.inside').hide();
		        $('#fieldEmail').show();
		        isSMSType = false;
	        }
		}
	});
	$("#fieldEmail").focus();
	$("input").focus(function(){
	    $(".error").hide();
	    $("input").css("background-color", 'white');
	});
	$("#txtQuestion").focus(function(){$("#txtQuestion").css("background-color", 'white');});
    if (window['postMessage']) {
	resizeWindow(null,100);
    }    
    //Phone Check
    if (merchPhone.trim().length < 1) {
        $('.phonenumberContact').hide();
        $('.phonenumberAddr').hide();
    }
    //Phone Lookups
    $("#fieldPhone").intlTelInput({ defaultCountry: merchantCountry });
    $("#fieldPhone").blur(function () {
        // Get the country data for the currently selected flag
        var isValid = $(this).intlTelInput("isValidNumber");
        if (!isValid) {
            $(this).css('background', 'rgb(247, 204, 204)');
            __validPhone = false;
        } else {
            $(this).css('background', 'rgb(213, 247, 204)');
            __validPhone = true;
        }
    })
    $("#fieldPhone").keyup(function () {
        var isValid = $(this).intlTelInput("isValidNumber");
        if (isValid) {
            $(this).css('background', 'rgb(213, 247, 204)');
            __validPhone = false;
        } else {
            $(this).css('background', 'none');
        }
    })
    $("#fieldPhoneQ").intlTelInput({ defaultCountry: merchantCountry });
    $("#fieldPhoneQ").blur(function () {
        // Get the country data for the currently selected flag
        var isValid = $(this).intlTelInput("isValidNumber");
        if (!isValid) {
            $(this).css('background', 'rgb(247, 204, 204)');
            __validPhone = false;
        } else {
            $(this).css('background', 'rgb(213, 247, 204)');
            __validPhone = true;
        }
    })
    $("#fieldPhoneQ").keyup(function () {
        var isValid = $(this).intlTelInput("isValidNumber");
        if (isValid) {
            $(this).css('background', 'rgb(213, 247, 204)');
            __validPhone = false;
        } else {
            $(this).css('background', 'none');
        }
    })
    $('#fieldEmail').keypress(function (e) { (((e.keyCode || e.which) == 13) ? $('.submit').click() : '') })
    $('#fieldPhone').keypress(function (e) { (((e.keyCode || e.which) == 13) ? $('.submit').click() : '') })
    autocomplete();
    questionModal = $('#questionModal').plainModal({ open: fitModal, close: closeModal });
    waitingModal = $('#waitingModal').plainModal({open: fitModal, close: closeModal, force: true });
    errorModal = $('#errorModal').plainModal({ open: fitModal, close: closeModal, force: true });

});
function selectTab(tabIdx) {
    $('.tabHolder ul li').removeClass('selected');
    $($('.tabHolder ul li')[tabIdx]).addClass('selected');
    $('.tabContent').hide();
    $($('.tabContent')[tabIdx]).show();
    if (tabIdx == 1) {
        if (coordinates[0] == 0 && coordinates[1] == 0) {
            //Skip Maps
        } else {
            //Init Maps
            initialize();
            position = new google.maps.LatLng(coordinates[0], coordinates[1]);
            handleLocation(coordinates);
        }
    }
    if(tabIdx==0){
	    setupWindow();
    }
	resizeWindow(null,100);
}
function FBCoupon() {

    if (FBLoggedIn) {
        FB.api('/me', { fields: 'name,email' }, function (r) {
            RequestCoupon(r.name, r.email, "", "", false, 0);
			sw.set_goal(1867); 
			sw.register_page_view();
        });
    } else {
        FB.login(function (r) { if (r.status === 'connected') { FBLoggedIn = true; } }, { scope: 'email' });
    }
}

function openContactModal() {
	var isSMS = true; 
	var isEmail = true; 
	var isName = true;
	var isQuestion = true;
    if(isQuestion && $('#txtQuestion').val().trim() == ''){
        $('#sectionQuestion').animate({opacity: 0.1}, 400).animate({opacity: 1}, 400);
	    $('#txtQuestion').css('background', 'rgb(247, 204, 204)');

    	return false;
    }
    $('.modalView').hide();
    $('.ModalRow').hide();
    isSMSType = false;
    if (isSMS) {
        isSMSType = true;
       $('.requestPhone').show();
    }
    if (isEmail) {
        $('.requestEmail').show();
    }
    if (isName) {
        $('.requestName').show();
    }
    if (isQuestion) {
        $('#QuestionRequests').show();
        $('#requestYourQ').show();
        $('#QuestionTxt').text($('#txtQuestion').val());
    }
    questionModal.plainModal('open');
   

}
var fitModal = function(e){
	if ($('.modal:visible').height() > $('form').height()){
		resizeWindow($('.modal:visible').height()  + iframeBuffer*2);
	}else{
		resizeWindow();
	}
};
var closeModal = function(e){
	resizeWindow();
};

function RequestCoupon(Name, Email, Phone, Question, isSMS, callBackTime) {
    if (Name === "") { Name = Email }
    if (Name === "") { Name = Phone }
    if (!callBackTime) { callBackTime = 0 }
    if (isSMS) {
        if ($('#fieldPhone').intlTelInput("isValidNumber")) {
            $('.contactMethodDetails').text(Phone);
            $('#fieldPhone').css('background', 'none');
        }
        else {
            $('#requestPhone').animate({opacity: 0.1}, 400).animate({opacity: 1}, 400);
            $('#fieldPhone').css('background', 'rgb(247, 204, 204)');
            $(".error").text(phoneformaterror).show();
	        fitModal();
            return false;
        }
    } else {
        if (Email.indexOf("@") > 0) {
            $('.contactMethodDetails').text(Email);
            $('#fieldEmail').css('background', 'none');
        }
        else {
            $('#requestEmail').animate({opacity: 0.1}, 400).animate({opacity: 1}, 400);
            $('#fieldEmail').css('background', 'rgb(247, 204, 204)');
             $(".error").text(emailformaterror).show();
	        fitModal();
             return false;
        }
    }
    waitingModal.plainModal('open');
    PageMethods.createCustomer(master, true, isSMSType, Name, Email, Phone, Question, callBackTime, function (ret) {
        createActivity(1, ret.leadId, ret.transactionId);
        ret.customerName = Name;
        ret.customerEmail = Email;
        ret.customerPhone = Phone;
        ret.customerQuestion = Question;
        registerHive(ret);
        if (ret.isNewLead == true && ret.leadId > 0) {
            createActivity(2, ret.leadId);
        }
        if (ret.couponCode == "" || ret.leadId == 0) {
            console.log("Error Retrieving Coupon");
            console.log(ret);    
            setTimeout("errorModal.plainModal('open');", 500);
           return false;

        } else {
            setTimeout("waitingModal.plainModal('close')", 400);
            $('.CancelLink').hide();
	        $(".preSubmit").hide();
	        $(".postSubmit").show();
            $('.CouponCodeResult').text(ret.couponCode);
            //Copy Code Function
            $('.CouponCodeResult').zclip({
                path: '/js/ZeroClipboard.swf',
                copy: $('.CouponCodeResult').text(),
                afterCopy: function () {

                    $('.CouponCodeResult').animate({opacity: 0.1}, 400).animate({opacity: 1}, 400);
                }
            });
        }
    });
}
function SendQuestion(Name, Email, Phone, Question, isSMS, callBackTime) {
    if (Name === "") { Name = Email }
    if (Name === "") { Name = Phone }
    if (!callBackTime) { callBackTime = 0 }
    if (isSMS) {
        if ($('#fieldPhoneQ').intlTelInput("isValidNumber")) {
            $('.contactMethodDetails').text(Phone);
            $('#fieldPhoneQ').css('background', 'none');
        }
        else {
            $('#requestPhoneQ').animate({opacity: 0.1}, 400).animate({opacity: 1}, 400);
            $('#fieldPhoneQ').css('background', 'rgb(247, 204, 204)');
            return false;
        }
    } else {
        if (Email.indexOf("@") > 0) {
            $('.contactMethodDetails').text(Email);
            $('#fieldEmailQ').css('background', 'none');
        }
        else {
            $('#requestEmailQ').animate({opacity: 0.1}, 400).animate({opacity: 1}, 400);
            $('#fieldEmailQ').css('background', 'rgb(247, 204, 204)');
            return false;
        }
    }
    waitingModal.plainModal('open');
    PageMethods.createCustomer(master, false, isSMSType, Name, Email, Phone, Question, callBackTime, function (ret) {
        ret.customerName = Name;
        ret.customerEmail = Email;
        ret.customerPhone = Phone;
        ret.customerQuestion = Question;
        registerHive(ret);
		sw.set_goal(1866); 
		sw.register_page_view();
		registerPageView(ret.transactionId);
        if (ret.isNewLead == true && ret.leadId > 0) {

            createActivity(2, ret.leadId);
        }
        if (ret.couponCode == "" || ret.leadId == 0) {
            console.log("Error Retrieving Coupon");
            console.log(ret);
            errorModal.plainModal('open');
            return false;

        } else {
            waitingModal.plainModal('close');
            $('.modalView').hide();
	        $('#txtQuestion').val('');
            $('#QuestionSuccess').show();
            setTimeout("questionModal.plainModal('open');", 400);
            fitModal();

        }
    });
}
var registerPageView = function (transactionId) {
    if (window['postMessage']) {

        parent.postMessage('SetLead' + transactionId, '*')
    }
}
var registerHive = function (cObj) {
    if (isWix && window['postMessage']) {
        parent.postMessage(cObj, document.location.protocol + "//" + document.location.host)
    }

}
var swPreRegister = function () {
    sw.use_connect = false;
}
function createActivity(activityType, leadId, transactionId) {
    if (transactionId) {
        registerPageView(transactionId);
    }
    var activity = { idActivityType: activityType, idLead: leadId };
    PageMethods.createActivity(master, activity, function (ret) { });
	switch(activityType){
		case 1:
		    sw.set_goal(1868); 
			sw.register_page_view();
			break;
		case 2:
		    break;
		case 3:
		    sw.set_goal(1869);  
			sw.register_page_view();
			break;
	}
                                
}
function SetColors(bgColor,invColor,fontInfo){
    if(typeof(bgColor) == "string"){
        var hexColor = rgb2hex(bgColor);
        baseColor = hexColor;
        var menuTextColor = "#FFFFFF";
        $('#baseCSS').attr('href', '/styles/v2/css.aspx?bg=' + encodeURIComponent(hexColor));
    }
}
var reloadPage = function(swid){
    var newURI = location.href.replace('swid','xxxx');
    if (newURI.indexOf('?')>0){newURI= newURI + '&swid=' + swid}else{newURI= newURI + '?swid=' + swid}
    location.href=newURI;
};
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function getViewport() { var a, b; return "undefined" != typeof window.innerWidth ? (a = window.innerWidth, b = window.innerHeight) : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? (a = document.documentElement.clientWidth, b = document.documentElement.clientHeight) : (a = document.getElementsByTagName("body")[0].clientWidth, b = document.getElementsByTagName("body")[0].clientHeight), [a, b] }

//START GEO
function initialize() {
    geocoder = new google.maps.Geocoder();
}
function handleLocation(bizLocation) {
    //var position = new google.maps.LatLng(bizLocation[0], bizLocation[1]);
    var mapOptions = {
        zoom: 15,
        center: position,
        mapTypeId: 'roadmap'
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(45);
        var pinColor = rgb2hex(baseColor).replace("#", "");
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(31, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
            new google.maps.Size(40, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(12, 35))

        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: pinImage,
            shadow: pinShadow,
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function autocomplete() {
    var auto;
    if ($('#directionsFrom').length > 0) {
        auto = new google.maps.places.Autocomplete(document.getElementById('directionsFrom'), { types: ['geocode'] });
        google.maps.event.addListener(auto, 'place_changed', function () {
            $('#dirPanel').show();
            calculateRoute($("#directionsFrom").val(), $('#lblAddress1').text().toString() + " " + $('#lblCity').text().toString());
            gotDirections = true;
            resizeWindow(null,200);

        });
    }

}

function calculateRoute(from, to) {
    if (!gotDirections)
        createActivity(3);

    if ($('#dirPanel').length > 0) {
        handleLocation(coordinates);
        //geo($('#lblAddress1').text().toString() + ", " + $('#lblCity').text().toString(), handleLocation);
        $('#dirPanel').empty();

    }
    toggleBounce();
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var directionsRequest = {
        origin: from,
        destination: to,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    };

    directionsService.route(
      directionsRequest,
      function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay = new google.maps.DirectionsRenderer({
                  map: map,
                  directions: response,
                  panel: document.getElementById('dirPanel'),
                  draggable: true

              });
          }
          else
              $("#error").append("Unable to retrieve your route<br />");
      }
    );

    var e = document.getElementById('dirPanel');
    e.style.display = 'block';

}

function stopPostback() {
    if (window.event.keyCode == 13) {
        event.returnValue = false;
        event.cancel = true;
    }
}



//START Color Math
function rgb2hex(rgborhex){
    rgb = rgborhex.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    if(rgborhex.length == 4){rgborhex=rgborhex.substr(1)}
    return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : (rgborhex.length == 3 ? "#" + rgborhex.substr(0,1) + rgborhex.substr(0,1) + rgborhex.substr(1,1) + rgborhex.substr(1,1) + rgborhex.substr(2,1) + rgborhex.substr(2,1) : rgborhex);
}
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function ColorLuminance(hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
    }
    return rgb;
}
