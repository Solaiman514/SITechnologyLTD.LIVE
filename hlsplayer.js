var url_1 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL0dhemktVFYubTN1OA==';
var url_2 = 'aHR0cDovLzE3Mi4xNi4xMjguMjUwOjgwODEvbGl2ZS9nYXppdHYvY2h1bmtzLm0zdTg=';
var url_3 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL3Qtc3BvcnRzLm0zdTg=';
var url_4 = 'aHR0cHM6Ly9uYm4uY2hvd2RodXJ5LXNoYWhlYi5jb20vbGl2ZS90c3BvcnRzL2NodW5rcy5tM3U4';
var url_5 = 'aHR0cDovLzEwMy4xMzkuMTcxLjU6NTAwMS9qaW90dnBsdXMvbGl2ZS5waHA/Yz1Db2xvcnNfSEQmcT0xMjAwJmU9anVuay5tM3U4';
var url_6 = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS90aXRhc2guc3RyZWFtL2NodW5rcy5tM3U4';

if (Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  hls.loadSource(atob(url_6));
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    video.play();
  });  
}
