/*
-10 0 $0pct #000000
-9 0.1 $10pct #181305
-8 0.2 $20pct #30270A
-7 0.3 $30pct #483A0F
-6 0.4 $40pct #604E14
-5 0.5 $50pct #786119
-4 0.6 $60pct #91741E
-3 0.7 $70pct #A98823
-2 0.8 $80pct #C19B28
-1 0.9 $90pct #D9AF2D
0 1 $100pct #F1C232
1 1.1 $110pct #FFD537
2 1.2 $120pct #FFE93C
3 1.3 $130pct #FFFC41
4 1.4 $140pct #FFFF46
5 1.5 $150pct #FFFF4B
6 1.6 $160pct #FFFF50
7 1.7 $170pct #FFFF55
8 1.8 $180pct #FFFF5A
9 1.9 $190pct #FFFF5F
10 2 $200pct #FFFF64
Luminance: 194
rgb(241,194,50)
HEX #f132c2
Foreground: #000000
*/    .bgcolor {
        background-color: #f1c232;
     }
    .bgcolorinv {
        background-color: #000000;
     }
    .txtcolor {
        color: #000000;
     }
    .txtcolorinv {
        color: #f1c232;
     }
    .headerfont {
            font-family: 'Lato', sans-serif;;
        }
    .bodyfont {
        }
    body {
        margin:0;
        padding:0;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    line-height: inherit;

    }
h1 {
  margin-bottom: .2em;
  text-align: center;
}
h2, h3 {
    margin-bottom:0;
}
h3{
    margin-bottom:.5em;
    font-size:2em;

}
.ui.bgcolor.button, .button {
    box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset;
}
.ui.bgcolor.button, .ui.bgcolor.buttons .button, .button {
    background-color: #f1c232;
    color: #000000;
    text-shadow: none;
    background-image: none;
}
.ui.bgcolor.button:active, .ui.bgcolor.buttons .button:active, .ui.bgcolor.button:hover, .ui.bgcolor.buttons .button:hover, .ui.bgcolor.button:visited, .ui.bgcolor.buttons .button:visited {
    background-color: #FFFC41;
    color: #000000;
}
.sectionOffer {
    clear:both;
    text-align:center;
}
#sectionQuestion {
  margin-bottom: 15px;}
.modal {
    display:none;
    padding: 1.5em;
    background: #FFF;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px -1px black;
    -moz-box-shadow: 0px 0px 5px -1px black;
    -o-box-shadow: 0px 0px 5px -1px black;
    box-shadow: 0px 0px 5px -1px black;

}
#SendFailure{
	width: 300px;
	font-size: 1.2em;
}
.prompt {
      font-size:1.4em;
      font-weight:bold;

}
.inlinegroup {
          display:inline-block;


}
.icongroup {
    display:inline-block;
  position: relative;
  top: 1px;
  color: #F1C232;
}
.OfferDisclaimer {
  text-align: center;
  font-size: .8em;
  font-style: italic;
  margin: 0 0 10px 0;
  font-weight: bold;

}
.togglebutton {
	    background: #F1C232;
      text-align: center;
      cursor: pointer;
      padding: .2em .45em;
      border: 1px solid #C19B28;
        color: #000000;
      display: block;
      border-radius: 5px;
	    background: #F1C232;
      font-size:1.3em;
      outline: none;
      margin: 2px;
      display:inline-block;
      vertical-align: bottom;
      transition: background 0.4s;
}
    .togglebutton:hover, .togglebutton.selected:hover {
        background-color: #FFFC41;
        color: #000000;
    }
	    .togglebutton.selected {
      background: #FFF;
            color: #C19B28;
	    }
        #openmenu {
            float:left;
            border-color: #181305;
            border-width: 1px;
	        border-style: solid;
	        display: block;
	        position: relative;
	        z-index: 1;
	        margin: 5px;
	        text-decoration: none;
            box-shadow: inset -1px 0 1px 0 rgba(255, 255, 255, 0.2);
            box-shadow: inset -1px 0 1px 0 rgba(255, 255, 255, 0.2);
            padding: 0 10px;
            border-radius: 4px;
            cursor:pointer;
            font-weight:bold;
            transition: all .5s ease;
            display:none;
        }
	    #openmenu:hover {
	        background: #FFD537;
	    }
#directionsFrom {
width: 270px;
padding: 2px;
margin-left:4px;
}
#ModalWait {
text-align:center;
}
.phonenumberAddr {
float:right;
font-weight:bold;
cursor:pointer;
  color: #C19B28;
    margin-top: 6px;
}
.directionsAddr {
float:right;
clear:right;
}
#StoreHours {
    font-size:1.17em;
    margin-bottom: .8em;
}

.hoolabel {
    text-align:right;
    margin-right:10px;
    font-weight:bold;
}
.modalbuttondiv {
    text-align:center;
    margin-top:5px;
}
    .btnClose {
	height: 2em;
	line-height: 2em;
        position: absolute;
        z-index: 1002;
        right: 9px;
        cursor: pointer;
	color: #A1A1A1;
	top: 0;
    	font-size: 16px;
    	margin-right: 1px;    
    }
    .btnClose:hover {
		color: #373737;
    }
.CancelLink{
	position: absolute;
    top: 8px;
    right: 30px;
    color: #A1A1A1;
    cursor: pointer;
    font-size: 13px;
}
.CancelLink:hover{
color:#373737;
}
    
#content {
         font-size: .8em;
   padding-top:1.8em;
    margin-left: .6em;
    
}

#featureQuestions, #featureOffers {
    padding: 0 .5em;
}
.CouponCodeBlock {
    border: 4px dotted #C19B28;
  margin: .9em 0.3em 1.2em .3em;
  border-radius: 5px;
  padding: 5px;
  padding-bottom: 10px;
  font-size: 120%;
  display:inline-block;
  cursor:auto;
  text-align:left;

}
.CouponCode {
  margin: 0 .3em;
  border-radius: 5px;
  background-color: #FFE93C;
  padding: 2px 8px;
  font-size: 120%;
  display:inline-block;
  cursor:auto;
    border: none;
  margin: 0 .3em;
    color: #000000;
}
#codeOffer {
text-align:center;
margin:16px 35px;
font-size:1.4em;
width: 406px;

}
#offerResult {
    display:none;
}
.fa-print, .fa-clipboard, .oneandahalf {
    cursor:pointer;
      font-size: 1.5em;
      padding: 0 .3em 0 0;
        color: #F1C232;
}
.fa-print:hover, .fa-clipboard:hover {
        color: #C19B28;
}
#copyCode.hover .fa-clipboard {
        color: #C19B28;
}

#modalRequest {
}

#CouponCodeCorner {
width: 0;
height: 0;
  border-style: solid;
  border-width: 1.5em 0 0 1.5em;
  border-color: #fff transparent transparent #F1C232;
  float: right;
  margin-left: -1.3em;
  margin-top: -.3em;
  border-top-right-radius:5px;
}

.obscure {
  color: #FFFF5F;
  padding: 0 5px;

}
/*Question Styles*/
.ContactUs {
    font-size:2em;
    margin-left: 0.35em;
    margin-bottom:1px;
    color: #D9AF2D;
    font-weight:bold;
}

.txtQuestion {
  font-family: 'Open Sans', sans-serif;
  border: 1px solid #C19B28;
  border-radius: 5px;
  width: 300px;
  outline: none;
  font-size: 1.3em;
  padding: .5em;
  margin: 0 .4em;
  display: inline-block;
  resize: none;
  vertical-align: bottom;
  overflow:hidden;
}
.QuestionButtons {
  margin: .8em .4em;
  margin-left: .5em;
    text-align:center;
}
.phonenumberContact {
float:left;
margin: 11px 1px;
font-weight: bold;
  cursor: pointer;
  color: #C19B28;
  font-size: 1.22em;
}
.quotearea{
  font-size: 1.22em;
  margin-bottom: .3em;
}
label {
    display:block;
    font-weight:bold;
}
.txtInput {
  border: 1px solid #C19B28;
  border-radius: 5px;
  padding: .5em;
  font-size: 1.2em;
  width: 280px;


}
#fieldPhoneQ {
  width: 280px;
}
.txtInput:focus, .txtQuestion:focus {
  outline:none;
   box-shadow: 0px 0px 5px -1px #786119;

}
 /*Mapping Styles*/
.mapContainer {
    width: 100%;
    padding: 0px;
    margin-top: 10px;
    margin-bottom: 15px;
    height: 230px;
    position: relative;
    background-color: rgb(229, 227, 223);
    overflow: hidden;
    -webkit-transform: translateZ(0);
    -webkit-box-shadow: 0px 0px 5px -1px black;
    -moz-box-shadow: 0px 0px 5px -1px black;
    -o-box-shadow: 0px 0px 5px -1px black;
    box-shadow: 0px 0px 5px -1px black;
}
#inputDirections {
    float:right;
    margin-right:40px;
}
#dirPanel, #storeDetails {
    width: 99%;
    clear:left;
    margin-left :.5em;
    max-height: 150px;
overflow-y: scroll;
overflow-x: hidden;
-webkit-overflow-scrolling: touch;
    scrollbar-base-color: #C19B28;
    scrollbar-arrow-color: #C19B28;
    scrollbar-track-color: #fff;
    scrollbar-shadow-color: #fff;
    scrollbar-darkshadow-color: #fff;
}
::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #C19B28;
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
.adp, .adp table {
      width: 99%;
}
img.adp-marker{
    width:14px;height:25px
}
.adp-listsel{
    background: #FFE93C;
    color: #000000;
}
.adp-text {
    color: #000000;
} 
.adp-placemark{
    background: #FFE93C;
    color: #000000;
    border:1px solid silver;
    cursor:pointer;
    margin:10px 0;vertical-align:middle}
.adp b,.adp-list b{font-weight:400}.adp-warnbox{margin:5px 0 3px}.warnbox-content{background:#fff1a8;padding:5px 6px}.warnbox-c1,.warnbox-c2{background:#fff1a8;font-size:1px;height:1px;overflow:hidden}.warnbox-c1{margin:0 2px}.warnbox-c2{margin:0 1px}.adp-list{background:#fff;border:1px solid #cdcdcd;cursor:pointer;padding:4px;font-family:Roboto,Arial,sans-serif;font-weight:300;color:#2c2c2c}.adp-fullwidth{width:100%}.adp-listheader{padding:4px}.adp-details,.adp-legal{color:#676767}.adp-summary{padding:0 3px 3px}.adp-step,.adp-substep{border-top:1px solid #cdcdcd;margin:0;padding:.3em 3px;vertical-align:top}.adp-list img,.adp-substep img{width:15px;height:15px;position:relative;top:2px;margin-right:3px}.adp-distance{white-space:nowrap}.adp-step,.adp-text{width:100%}.adp-directions{cursor:pointer;border-collapse:collapse}.adp-list .gm-arrow{width:8px;height:9px;margin:5px 0 3px}.adp-agencies{font-size:80%;margin:5px 0}.adp-summary-duration{float:right;margin-left:7px;white-space:nowrap}.adp-substep .gm-line{margin-right:4px}.adp-substep .adp-stepicon{overflow:hidden;position:relative;top:0;left:0;width:16px;height:16px}.adp-substep .adp-stepicon .adp-maneuver{background-size:19px 630px;position:absolute;left:0;width:16px;height:16px}.adp-substep .adp-stepicon .adp-maneuver.adp-ferry{background-position:0 -614px}.adp-substep .adp-stepicon .adp-maneuver.adp-ferry-train{background-position:0 -566px}.adp-substep .adp-stepicon .adp-maneuver.adp-merge{background-position:0 -143px}.adp-substep .adp-stepicon .adp-maneuver.adp-straight{background-position:0 -534px}.adp-substep .adp-stepicon .adp-maneuver.adp-fork-left{background-position:0 -550px}.adp-substep .adp-stepicon .adp-maneuver.adp-ramp-left{background-position:0 -598px}.adp-substep .adp-stepicon .adp-maneuver.adp-roundabout-left{background-position:0 -197px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-left{background-position:0 -413px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-sharp-left{background-position:0 0}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-slight-left{background-position:0 -378px}.adp-substep .adp-stepicon .adp-maneuver.adp-uturn-left{background-position:0 -305px}.adp-substep .adp-stepicon .adp-maneuver.adp-fork-right{background-position:0 -499px}.adp-substep .adp-stepicon .adp-maneuver.adp-ramp-right{background-position:0 -429px}.adp-substep .adp-stepicon .adp-maneuver.adp-roundabout-right{background-position:0 -232px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-right{background-position:0 -483px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-sharp-right{background-position:0 -582px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-slight-right{background-position:0 -51px}.adp-substep .adp-stepicon .adp-maneuver.adp-uturn-right{background-position:0 -35px}.adp-substep .adp-stepicon .adp-maneuver {background-image:url(http://maps.gstatic.com/mapfiles/api-3/images/maneuvers.png);}

.tabHolder {
    width: 518px;
    vertical-align:top;
    padding-top:.5em;
    padding-bottom:.5em;
}
.tabHolder ul.tabs {
    margin:0;
    padding:0 0 0 10px;
    white-space: nowrap;

}
.tabHolder ul.tabs li {
      text-align: center;
      cursor: pointer;
      padding: .2em .45em;
      border: 1px solid #C19B28;
      border-radius: 5px 5px 0 0; 
      -o-border-radius: 5px 5px 0 0; 
      -moz-border-radius: 5px 5px 0 0;
      -webkit-border-radius: 5px 5px 0 0;
      font-size:1.15em;
      outline: none;
      margin: 0;
      margin-bottom: -1px;
      display:inline-block;
      background: #FFF;
      transition: background 0.4s;
      -o-transition: background 0.4s;
      -moz-transition: background 0.4s;
      -webkit-transition: background 0.4s;
}
.tabHolder ul.tabs li:hover {
        background-color: #FFFC41;
        color: #000000;
    }
.tabHolder ul.tabs li.selected {
	    background: #F1C232;
        color: #000000;
	    }
.tabContent {
      display:none;

}
#tabContentBorder {
      border: 1px solid #C19B28;
      border-radius: 5px;
      padding: 0 10px;
      min-height: 320px;
}
#cpFooter_FootItems{
position: absolute;
  bottom: 0;
  margin: 10px 20px;
}


.postSubmit {
  display: none;
}
.codeprefix {
    font-size: 1.4em;
}

#postCoupon {
  font-size: 3em;
  padding: 20px;
  border: 1px solid lightgray;
  color: #786119;
}

.postSubmit p {
  margin-top:20px;
}

.ui.popup {
  background-color: #786119;
  color: white;
  font-weight: bold;
  padding: 5px;
  margin-top:-17px;
}
.ui.toggle.checkbox input:checked~.box:before, .ui.toggle.checkbox input:checked~label:before {
    background-color: #C19B28!important;
}
.ui.default.dropdown:hover>.text, .ui.default.dropdown>.text, .ui.dropdown:hover>.default.text, .ui.dropdown>.default.text {
    color: #000000;
}
.80pctborder {
    border-color: #C19B28!important;
}
.ui.popup::before {
  display:none;
}

.zclip{
padding: 0;
}

        .offerHeading {
  font-size: 5em;
  line-height: 120%;
  font-weight: bold;
}

.offerSubhead {
  font-size: 1.5em;
}

div.input {
  width: 100%;
}

div.input input {
  font-size: 1.25em;
}

div.dropdown.button {
  font-size: 1.25em;
      transition: background 0.4s;
      -o-transition: background 0.4s;
      -moz-transition: background 0.4s;
      -webkit-transition: background 0.4s;
}

div.content {
  padding: 60px 0;
  text-align: center;
  width:75%;
  margin-left: auto;
  margin-right: auto;
}

.ui.button {
      transition: background 0.4s;
      -o-transition: background 0.4s;
      -moz-transition: background 0.4s;
      -webkit-transition: background 0.4s;

}
div.input + div.button {
  margin-top:20px;
  width:100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
}

p.subtext {
  font-size: .8em;
  color: gray;
  margin-top: 10px;
}

.ui .intl-tel-input.pretty.inside{
width:100%;
display:none;
}
li.country {
text-align: left;
}
#fieldPhone{
    border-left: none;
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;

}

.flag-dropdown
{
    -webkit-box-flex: 1;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
	order: 1;
}

div.button.submit {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;

	}
	.error {
  display: none;
  text-align: center;
  color: rgba(255, 0, 0, 0.5);
  margin-top: 10px;
  font-size: 1.2em;
}
.likebutton{
margin:10px auto;
}
        .fblink {
        color: #a1a1a1;
        cursor: pointer;
        }
        .fblink:hover {
        color: #373737;
        }

#codeprefix{
    margin: 35px auto 10px auto;
    font-size: 1.5em;
}
        .fb_iframe_widget iframe {
            overflow: hidden!important;
            height: 22px!important;
            width: 50px!important;
        }
        .sp-container button {
    font-size: 1.8em;
    text-align: center;
    display: inline-block;
 font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0 .25em 0 0;
    padding: .5em;       
 background-color: #F1C232;
    color: #000000;
    text-shadow: none;
    background-image: none;       }
    .sp-container button:hover {
        background: #FFFC41;
        text-shadow: none;
    }
        .sp-cancel {
            font-size: 16px;
            margin-top: 1px;
            padding: 9px;
        }
@media (max-width:440px){
	.ui.input input {
	    max-width: 57%;
	}
	#content {
		margin-left:0;
	}
	ul.tabs {
		padding-left:4px !important;
	}
	body{
    -webkit-overflow-scrolling: touch;	
	}
}
@media (max-width:600px) {
#featureOffers, #featureQuestions {
    padding-top: 2px;
    padding-left: 1em;
}
	#txtQuestion{
		height: 55px;
	}
 
h1 {
  margin-top: .2em;
}
.mapContainer {
    width: 100%;
    padding: 0px;
    height: 320px;
    position: relative;
    background-color: rgb(229, 227, 223);
    overflow: hidden;
    -webkit-transform: translateZ(0);
    -webkit-box-shadow: 0px 0px 5px -1px black;
    -moz-box-shadow: 0px 0px 5px -1px black;
    -o-box-shadow: 0px 0px 5px -1px black;
    box-shadow: 0px 0px 5px -1px black;
    float:none;
}
.togglebutton {
      font-size:1.3em;
}
#dirPanel, #storeDetails {
    display:block;
    clear:left;
    margin:.5em;
    width: auto;
}
#inputDirections {
    top:2em;
	z-index: 0;
    position: fixed;
    padding-left:.5em;
    margin-right:0;
    width:100%;
    color:#000000;
    background-color:#ffffff;
    box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.1),0 0 10px 0 rgba(0, 0, 0, 0.5);
}
#directionsfrom {
width: 210px;
padding: 2px;
margin-left:.5em;
}
#content {
    clear:left;
    margin-top:1.5em;
    margin-bottom:1.5em;
}
#btbClose{
top: 0;
}
.txtQuestion{
	width:90%;
}
.txtInput {

  width: 240px;
}
.tabHolder ul li {
    font-size:1.1em;
}
.clicktocall {

    margin-top: 0.6em;
}.sp-replacer {
  margin-top: .6em;
}

}
@media print {
#tabContentBorder{
position:absolute;
top:0;
width: 100%;
border: none;
}
  #sectionQuestion, .CancelLink {
    visibility: hidden;
  }
 ul { visibility: hidden;}
	#cpFooter_FootItems{
    visibility: hidden;
  }
  	#btnClose{
    visibility: hidden;
  }
#dirPanel {
    width: 99%;
    clear:left;
    margin-left :.5em;
    max-height: none;
	overflow-y: hidden;
	overflow-x: hidden;
	}

}