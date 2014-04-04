/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready',this.onDeviceReady, false);
		document.addEventListener('deviceready',this.scan, false);
        document.getElementById('scan').addEventListener('click', this.scan, false);
        document.getElementById('encode').addEventListener('click', this.encode, false);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    scan: function() {
        console.log('scanning');
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) { 
/*            alert("We got a barcode\n" + 
            "Result: " + result.text + "\n" + 
            "Format: " + result.format + "\n" + 
            "Cancelled: " + result.cancelled);  
*/
			result = result.text
			var res = result.split("http://technit.com.mx/gasoperez.php?qwerasdfzxcvqwerasdfzxcv=");
			var permitidos = new Array(
				"GasoPerez1"		, 
				"GasoPerez2"		, 
				"GasoPerez3"		, 
				"GasoPerez4"		, 
				"GasoPerez5"		, 
				"GasoPerez6"		, 
				"GasoPerez7"		, 
				"GasoPerez8"		, 
				"GasoPerez9"		, 
				"GasoPerez10"		, 
				
				"GasoPerez11"		, 
				"GasoPerez12"		, 
				"GasoPerez13"		, 
				"GasoPerez14"		, 
				"GasoPerez15"		, 
				"GasoPerez16"		, 
				"GasoPerez17"		, 
				"GasoPerez18"		, 
				"GasoPerez19"		, 
				"GasoPerez20"		, 
				
				"GasoPerez21"		, 
				"GasoPerez22"		, 
				"GasoPerez23"		, 
				"GasoPerez24"		, 
				"GasoPerez25"		, 
				"GasoPerez26"		, 
				"GasoPerez27"		, 
				"GasoPerez28"		, 
				"GasoPerez29"		, 
				"GasoPerez30"		, 
				
				"GasoPerez31"		, 
				"GasoPerez32"		, 
				"GasoPerez33"		, 
				"GasoPerez34"		, 
				"GasoPerez35"		, 
				"GasoPerez36"		, 
				"GasoPerez37"		, 
				"GasoPerez38"		, 
				"GasoPerez39"		, 
				"GasoPerez40"		, 
				
				"GasoPerez41"		, 
				"GasoPerez42"		, 
				"GasoPerez43"		, 
				"GasoPerez44"		, 
				"GasoPerez45"		, 
				"GasoPerez46"		, 
				"GasoPerez47"		, 
				"GasoPerez48"		, 
				"GasoPerez49"		, 
				"GasoPerez50"		, 
				
				"GasoPerez51"		, 
				"GasoPerez52"		, 
				"GasoPerez53"		, 
				"GasoPerez54"		, 
				"GasoPerez55"		, 
				"GasoPerez56"		, 
				"GasoPerez57"		, 
				"GasoPerez58"		, 
				"GasoPerez59"		, 
				"GasoPerez60"		, 
				
				"GasoPerez61"		, 
				"GasoPerez62"		, 
				"GasoPerez63"		, 
				"GasoPerez64"		, 
				"GasoPerez65"		, 
				"GasoPerez66"		, 
				"GasoPerez67"		, 
				"GasoPerez68"		, 
				"GasoPerez69"		, 
				"GasoPerez70"		, 
				
				"GasoPerez71"		, 
				"GasoPerez72"		, 
				"GasoPerez73"		, 
				"GasoPerez74"		, 
				"GasoPerez75"		, 
				"GasoPerez76"		, 
				"GasoPerez77"		, 
				"GasoPerez78"		, 
				"GasoPerez79"		, 
				"GasoPerez80"		, 
				
				"GasoPerez81"		, 
				"GasoPerez82"		, 
				"GasoPerez83"		, 
				"GasoPerez84"		, 
				"GasoPerez85"		, 
				"GasoPerez86"		, 
				"GasoPerez87"		, 
				"GasoPerez88"		, 
				"GasoPerez89"		, 
				"GasoPerez90"		, 
				
				"GasoPerez91"		, 
				"GasoPerez92"		, 
				"GasoPerez93"		, 
				"GasoPerez94"		, 
				"GasoPerez95"		, 
				"GasoPerez96"		, 
				"GasoPerez97"		, 
				"GasoPerez98"		, 
				"GasoPerez99"		, 
				"GasoPerez100"
			);
			navigator.notification.vibrate();
			if(res[1]!=undefined){
				for (var i = 0; i < permitidos.length; i++) {
					if (permitidos[i] == res[1]) {
						document.getElementById("info").innerHTML = "PERMITIDO";
						navigator.notification.vibrate(2000);
						break;
					}else{
						document.getElementById("info").innerHTML = "NO PERMITIDO";
					}
				}
			}else{
				document.getElementById("info").innerHTML = "No existe en BD";
			}
            console.log(result);

/*            if (args.format == "QR_CODE") {
                window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
            }*/

        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
    },

    encode: function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.encode(scanner.Encode.TEXT_TYPE, "http://www.nhl.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );

    }

};
