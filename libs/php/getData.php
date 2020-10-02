<?php

    $executionStartTime = microtime(true) / 1000;

    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    include('../openCage/AbstractGeocoder.php');
    include('../openCage/Geocoder.php');

    // Open Cage
    $geocoder = new \OpenCage\Geocoder\Geocoder('f26ac59a2db64250bf2e522929464fa8');
    
    if ($_REQUEST['iso'] == "") {
        $openCageInitialResult = $geocoder->geocode($_REQUEST['lat'].",".$_REQUEST['lng']);
        $country = substr(json_encode($openCageInitialResult["results"][0]["components"]["country"]), 1, -1);
        $iso2 = json_encode($openCageInitialResult["results"][0]["components"]["ISO_3166-1_alpha-2"]);
    }  else {
        $country = $_REQUEST['country'];
        $iso2 = json_encode($_REQUEST['iso']);
    }

    $openCageResult = $geocoder->geocode($country,['countrycode'=> $iso2]);

    $lat = json_encode($openCageResult["results"][0]["geometry"]["lat"]);
    $lng = json_encode($openCageResult["results"][0]["geometry"]["lng"]);
    $iso2 = substr($iso2,1,2);
    $iso3 = substr(json_encode($openCageResult["results"][0]["components"]["ISO_3166-1_alpha-3"]),1, 3);

    //cURL

    $ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Open Weather 
    $openWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=".$lat."&lon=".$lng."&exclude=hourly&appid=9156facf0fd5df52b6f594e0bd14cec1#";
    curl_setopt($ch, CURLOPT_URL,$openWeatherUrl);
    $openWeatherResult=curl_exec($ch);

    // REST Countries
    $restCountriesUrl = "https://restcountries.eu/rest/v2/alpha/$iso3";
    curl_setopt($ch, CURLOPT_URL,$restCountriesUrl);
    $restCountriesResult=curl_exec($ch);

    // Search
    $searchUrl = 'http://www.mapquestapi.com/search/v2/radius?key=rGK4YYgSuImCtc5p7NRtEaasfGj1UNGZ&maxMatches=10&units=m&radius=200&origin='.$lat.','.$lng;
    curl_setopt($ch, CURLOPT_URL,$searchUrl);
    $searchResult=curl_exec($ch);

    // GeoNames Country Info
    $geoNamesUrl = "http://api.geonames.org/countryInfoJSON?country=".$iso2."&username=samstoppani";
    curl_setopt($ch, CURLOPT_URL,$geoNamesUrl);
    $geoNamesResult=curl_exec($ch);

    // GeoNames Wiki Info
    $geoNamesWikiUrl = "http://api.geonames.org/wikipediaSearchJSON?q=".urlencode($country)."&maxRows=10&username=samstoppani";
    curl_setopt($ch, CURLOPT_URL,$geoNamesWikiUrl);
    $geoNamesWikiResult=curl_exec($ch);


    if ($lng[0] != '-') {
        $lng = '%2B'.strval($lng);
    }

    curl_setopt_array($ch, array(
        CURLOPT_URL => "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&countryIds=".$iso2."&sort=-population&types=CITY",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "x-rapidapi-host: wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key: ab434f9d3emsh47dfc8849c14190p1d38c6jsn8aefd3d1bed3"
        ),
    ));              

    $geoDBResult = curl_exec($ch);

    curl_close($ch);

    $openWeatherResult = json_decode($openWeatherResult,true);	
    $restCountriesResult = json_decode($restCountriesResult,true);	
    $searchResult = json_decode($searchResult,true);
    $geoNamesResult = json_decode($geoNamesResult,true);
    $geoNamesWikiResult = json_decode($geoNamesWikiResult,true);
    $geoDBResult = json_decode($geoDBResult,true);

    // Final Output
	$output['status']['code'] = "200";
    $output['status']['name'] = "OK";
    $output['openCage'] = $openCageResult;
    $output['openWeather'] = $openWeatherResult;
    $output['restCountries'] = $restCountriesResult;
    $output['search'] = $searchResult;
    $output['geoNames'] = $geoNamesResult;
    $output['geoNames']['wiki'] = $geoNamesWikiResult;
    $output['geoDB'] = $geoDBResult;
    $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000000 . " ms";

	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output);

?>