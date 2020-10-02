

var countryISOMapping = {
    AFG: "AF",ALA: "AX",ALB: "AL",DZA: "DZ",ASM: "AS",AND: "AD",AGO: "AO",AIA: "AI",ATA: "AQ",ATG: "AG",ARG: "AR",ARM: "AM",ABW: "AW",AUS: "AU",AUT: "AT",AZE: "AZ",BHS: "BS",BHR: "BH",BGD: "BD",BRB: "BB",BLR: "BY",BEL: "BE",BLZ: "BZ",BEN: "BJ",BMU: "BM",BTN: "BT",BOL: "BO",BIH: "BA",BWA: "BW",BVT: "BV",BRA: "BR",VGB: "VG",IOT: "IO",BRN: "BN",BGR: "BG",BFA: "BF",BDI: "BI",KHM: "KH",CMR: "CM",CAN: "CA",CPV: "CV",CYM: "KY",CAF: "CF",TCD: "TD",CHL: "CL",CHN: "CN",HKG: "HK",MAC: "MO",CXR: "CX",CCK: "CC",COL: "CO",COM: "KM",COG: "CG",COD: "CD",COK: "CK",CRI: "CR",CIV: "CI",HRV: "HR",CUB: "CU",CYP: "CY",CZE: "CZ",DNK: "DK",DJI: "DJ",DMA: "DM",DOM: "DO",ECU: "EC",EGY: "EG",SLV: "SV",GNQ: "GQ",ERI: "ER",EST: "EE",ETH: "ET",FLK: "FK",FRO: "FO",FJI: "FJ",FIN: "FI",FRA: "FR",GUF: "GF",PYF: "PF",ATF: "TF",GAB: "GA",GMB: "GM",GEO: "GE",DEU: "DE",GHA: "GH",GIB: "GI",GRC: "GR",GRL: "GL",GRD: "GD",GLP: "GP",GUM: "GU",GTM: "GT",GGY: "GG",GIN: "GN",GNB: "GW",GUY: "GY",HTI: "HT",HMD: "HM",VAT: "VA",HND: "HN",HUN: "HU",ISL: "IS",IND: "IN",IDN: "ID",IRN: "IR",IRQ: "IQ",IRL: "IE",IMN: "IM",ISR: "IL",ITA: "IT",JAM: "JM",JPN: "JP",JEY: "JE",JOR: "JO",KAZ: "KZ",KEN: "KE",KIR: "KI",PRK: "KP",KOR: "KR",KWT: "KW",KGZ: "KG",LAO: "LA",LVA: "LV",LBN: "LB",LSO: "LS",LBR: "LR",LBY: "LY",LIE: "LI",LTU: "LT",LUX: "LU",MKD: "MK",MDG: "MG",MWI: "MW",MYS: "MY",MDV: "MV",MLI: "ML",MLT: "MT",MHL: "MH",MTQ: "MQ",MRT: "MR",MUS: "MU",MYT: "YT",MEX: "MX",FSM: "FM",MDA: "MD",MCO: "MC",MNG: "MN",MNE: "ME",MSR: "MS",MAR: "MA",MOZ: "MZ",MMR: "MM",NAM: "NA",NRU: "NR",NPL: "NP",NLD: "NL",ANT: "AN",NCL: "NC",NZL: "NZ",NIC: "NI",NER: "NE",NGA: "NG",NIU: "NU",NFK: "NF",MNP: "MP",NOR: "NO",OMN: "OM",PAK: "PK",PLW: "PW",PSE: "PS",PAN: "PA",PNG: "PG",PRY: "PY",PER: "PE",PHL: "PH",PCN: "PN",POL: "PL",PRT: "PT",PRI: "PR",QAT: "QA",REU: "RE",ROU: "RO",RUS: "RU",RWA: "RW",BLM: "BL",SHN: "SH",KNA: "KN",LCA: "LC",MAF: "MF",SPM: "PM",VCT: "VC",WSM: "WS",SMR: "SM",STP: "ST",SAU: "SA",SEN: "SN",SRB: "RS",SYC: "SC",SLE: "SL",SGP: "SG",SVK: "SK",SVN: "SI",SLB: "SB",SOM: "SO",ZAF: "ZA",SGS: "GS",SSD: "SS",ESP: "ES",LKA: "LK",SDN: "SD",SUR: "SR",SJM: "SJ",SWZ: "SZ",SWE: "SE",CHE: "CH",SYR: "SY",TWN: "TW",TJK: "TJ",TZA: "TZ",THA: "TH",TLS: "TL",TGO: "TG",TKL: "TK",TON: "TO",TTO: "TT",TUN: "TN",TUR: "TR",TKM: "TM",TCA: "TC",TUV: "TV",UGA: "UG",UKR: "UA",ARE: "AE",GBR: "GB",USA: "US",UMI: "UM",URY: "UY",UZB: "UZ",VUT: "VU",VEN: "VE",VNM: "VN",VIR: "VI",WLF: "WF",ESH: "EH",YEM: "YE",ZMB: "ZM",ZWE: "ZW",XKX: "XK"
}
  
function getCountryISO2(countryCode) {
    return countryISOMapping[countryCode]
}

// Build Map

document.getElementById('mymap').innerHTML = "<div id='map'></div>";

osmLayer = new L.TileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2Ftc3RvcHBhbmkiLCJhIjoiY2tlZm9jd3hqMDhmNjJ5dGJ5NGJjaGc2bCJ9.sSoz0DiwQdH3xrPLgWGChw'
});
var map = new L.Map('map');
map.addLayer(osmLayer);

var markers;
var countryBorders;

// Markers
var cityIcon = L.icon({
    iconUrl: 'images/mapMarker.svg',
    iconSize:[28.5, 38.25],
    iconAnchor:[14.25, 38.25]
})

var interestPointIcon = L.icon({
    iconUrl: 'images/interestPointIcon.svg',
    iconSize:[28.5, 38.25],
    iconAnchor:[14.25, 38.25],
    popupAnchor: [0, -40]
})

// Populate country <select> options

let countryDropdown = $('#chooseCountry');

countryDropdown.empty();
countryDropdown.append('<option selected="true" disabled>Choose a Country</option>');
countryDropdown.prop('selectedIndex', 0);

$.getJSON("libs/geoJSON/countries.geojson", function (countries) {
    $.each(countries.features, function (key, entry) {
        var country = entry.properties.ADMIN;
        var iso2 = getCountryISO2(entry.properties.ISO_A3);
        countryDropdown.append($('<option></option>').attr('value', iso2).text(country));
    })
});

// Populate currency <select> options

let currencyDropdown = $('.currencyDropdown');

currencyDropdown.empty();
currencyDropdown.append('<option selected="true" disabled>Choose Currency</option>');
currencyDropdown.prop('selectedIndex', 0);

$.getJSON("libs/JSON/currencies.json", function (currencies) {
    $.each(currencies, function (key, entry) {
        currencyDropdown.append($('<option></option>').attr('value', entry.code).text(`${entry.name} (${entry.symbol})`));
    })
});



$(document).ready(function() {
    getData()
})

function getPosition() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej)
    })
}

$('#chooseCountry').on('change', function() {
    getData()
})

$('#convertBtn').click(function() {
    processExchange()
})

function getData() {

    // Loading screen on search
    $("#loader-wrapper").attr("style", "display: flex !important");

    getPosition().then((res) => {

        var formData = {
            'country': $('#chooseCountry option:selected').text(),
            'iso': $('#chooseCountry').val(),
            'lat': res.coords.latitude,
            'lng': res.coords.longitude
        }

        $.ajax({
            type: 'GET',
            url: 'libs/php/getData.php', 
            data: formData,
            dataType: 'json',
            success: function(data) {
                console.log(data)
                
                $('#statusMessage').html(data.openCage.status.message);
                $('#statusCode').html(data.openCage.status.code);
    
                if (data.status.name == "OK") {
    
                    // Open Cage Data
                    var openCage = data.openCage.results[0];
                    $('.country').html(openCage.components.country);
                    $('#flag').html(openCage.annotations.flag);

                    var currency = openCage.annotations.currency;
                    $('#currencyName').html((typeof currency !== "undefined") ? currency.name : "Undefined");
                    $('#currencySymbol').html((typeof currency !== "undefined") ? `(${currency.symbol})` : "");
                    
                    // Rest Countries Data
                    var restCountries = data.restCountries;
                    $('#flag').attr("src", restCountries.flag);
                    // $('#population').html(numberWithCommas(restCountries.population));
                    // $('#city').html(restCountries.capital);

                    // GeoNames Data
                    var geoNamesInfo = data.geoNames.geonames[0];
                    $('#population').html(numberWithCommas(geoNamesInfo.population));
                    $('#city').html(geoNamesInfo.capital);
                    $('#area').html(geoNamesInfo.areaInSqKm);

                    var geoNamesWiki = data.geoNames.wiki.geonames.filter(item => item.title.includes(openCage.components.country) || item.feature == "country")[0];
                    $('#countrySummary').html(geoNamesWiki.summary);
                    $('#wikiLink').html(geoNamesWiki.wikipediaUrl).attr("href", "https://" + geoNamesWiki.wikipediaUrl);;

    
                    // Dynamic Weather Headers
                    var date = data.openCage.timestamp.created_http;
                    $('#thirdDay').html(getForecastDay(2, date));
                    $('#fourthDay').html(getForecastDay(3, date));
    
                    // Open Weather Data
                    var openWeather = data.openWeather.daily;
                    for (let i = 0; i < 4; i++) {
                        $('#day'+(i+1)).children().eq(1).children().attr('src', `http://openweathermap.org/img/wn/${openWeather[i].weather[0].icon}@2x.png`);
                        $('#day'+(i+1)).children().eq(2).html(String(kelvinToCelsius(openWeather[i].temp.max))+ "℃") 
                        $('#day'+(i+1)).children().eq(3).html(String(kelvinToCelsius(openWeather[i].temp.min))+ "℃") 
                    }
    
                    // Currency Exchange
                    (typeof currency !== "undefined") ? (document.getElementById("toCurrency").value = currency.iso_code) : currencyDropdown.prop('selectedIndex', 0);

                    // Leaflet Mapping 

                    if (geoNamesInfo) {
                        var bounds = [
                            [geoNamesInfo.north, geoNamesInfo.west],
                            [geoNamesInfo.south, geoNamesInfo.east]
                        ];
                    }   else if (openCage.bounds) {
                        var bounds = [
                            [openCage.bounds.northeast.lat, openCage.bounds.northeast.lng],
                            [openCage.bounds.southwest.lat, openCage.bounds.southwest.lng]
                        ];
                    }   else {
                        var bounds = null;
                    }

                    buildMap(
                        openCage.geometry.lat,
                        openCage.geometry.lng,
                        bounds,
                        openCage.components["ISO_3166-1_alpha-3"],
                        data.search,
                        data.geoDB.data
                    )

                    // Remove screen loader
                    
                    if ($("#loader-wrapper:hidden").length == 0) {
                        $("#loader-wrapper").attr("style", "display: none !important");
                    }
    
    
                }   
            }
            // error: function(jqXHR, textStatus, errorThrown) {
            // 	console.log("no ocean")
            // }
    
        })

    })

}

function buildMap(lat, lng, bounds, isoCountryCode, pointsOfInterest, cities)  {

    // Clear map
    if(markers || countryBorders) {
        markers.clearLayers()
        countryBorders.clearLayers()
    } 

    // Size map
    map.setView(new L.LatLng(lat,lng), 13);

    if (bounds){
        map.fitBounds(bounds);
    }

    // Country borders
    $.getJSON('libs/geoJSON/countries.geojson', function(countries) {   
        geojsonFeature = countries.features.filter(country => country.properties["ISO_A3"] === isoCountryCode)
        countryBorders = L.geoJSON(geojsonFeature, {
            color: '#2A9D8F'
        }).addTo(map);
    });


    markers = L.markerClusterGroup();

    // Points of interest
    for (let i in pointsOfInterest.searchResults) {
        markers.addLayer(
            L.marker(pointsOfInterest.searchResults[i].shapePoints, {
                icon: interestPointIcon
            }).bindTooltip(`${pointsOfInterest.searchResults[i].fields.group_sic_code_name}: ${pointsOfInterest.searchResults[i].name}`)
        )
    }

    // Cities
    for (let i in cities) {
        if (cities[i].countryCode == getCountryISO2(isoCountryCode)) {
            markers.addLayer(
                L.marker([cities[i].latitude, cities[i].longitude], {
                    icon: cityIcon
                }).bindTooltip(cities[i].name)
            )
        }
    }

    map.addLayer(markers);
}

function processExchange() {

    $.ajax({
        type: 'GET',
        url: 'libs/php/getExchange.php', 
        dataType: 'json',
        success: function(data) {
            console.log(data)
            
            if (data.status.name == "OK") {

                // Open Exchange Rates Data
                var openExchangeRates = data.openExchangeRates.rates;

                var exchangeAmount = parseFloat($('#exchangeAmount').val());
                var fromCurrency = $('#fromCurrency option:selected').val()
                var toCurrency = $('#toCurrency option:selected').val()

                var exchangeRate = openExchangeRates[toCurrency] / openExchangeRates[fromCurrency]
                var exchangeRecieved = exchangeAmount*exchangeRate

                $.getJSON('libs/JSON/currencies.json', function(currencies) {
                    $('#toCurrencySymbol').html(currencies[toCurrency].symbol);
                })

                $('#exchangeRecieved').html(round(exchangeRecieved, 2));
                
            }   
        }
        // error: function(jqXHR, textStatus, errorThrown) {
        // 	console.log("no ocean")
        // }

    })
}

// Open and close tabs

function openTab(evt, section) {
    
    document.getElementById('footer').className = 'col-12 col-md-5 col-lg-4 p-0 expandFooter';


    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += " active";
}

function closeTab() {
    if ($('#footer').hasClass("expandFooter")) {
        document.getElementById('footer').className = 'col-12 col-md-5 col-lg-4 p-0 collapseFooter';
    }
}

$( window ).resize(function() {
    document.getElementById('footer').className = 'col-12 col-md-5 col-lg-4 p-0';
});

// Misc functions

function round(value, decimals) {
    return +(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function numberWithCommas(x) {
    if (x.toString().length >= 7) {
        return Math.abs(x) > 999999 ? Math.sign(x)*((Math.abs(x)/1000000).toFixed(2)) + 'M' : Math.sign(x)*Math.abs(x)
    } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function getForecastDay(daysAhead, date) {
    var date = new Date(date);
    var forecastDate = new Date(date.getTime() + (daysAhead * 24 * 60 * 60 * 1000));
    var day = forecastDate.getDate().toString();
    switch (day) {
        case "1":
        case "21":
        case "31":
            return day + "st";
        case "2":
        case "22":
            return day + "nd";
        case "3":
        case "23":
            return day + "rd";
        default:
            return day + "th";
    }
}


function kelvinToCelsius(k) {
    return Math.round(k - 273.15);
}
