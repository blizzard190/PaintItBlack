function ajax(action, data) {
  let debug = false;
  let jsonFile = "preload.json";
  let jsonWriter = "jsonWrite.php"
  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (action == "getJson") {
    let httpString = jsonFile;
    if (debug) console.log(httpString); //debug
    xmlhttp.open("POST", httpString, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(jsonString) {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if (debug) console.log("http response = " + xmlhttp.responseText); //debug
        jsonString = xmlhttp.responseText; // read the string from the server
        readJson(jsonString);
      }
    }
  }
  if(action == "putJson"){
    let httpString = jsonWriter + "?put=" + data;
    console.log(data);
    xmlhttp.open("GET", httpString, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {}
  }
}
