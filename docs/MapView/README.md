# MapView

~~~
지도 사용 인증, 지도 버전, 지도 zoom level, UI 사용 여부 등 해당 페이지에서는 지도 뷰어를 나타내기 위한 기능들을 제공합니다.
~~~


~~~javascript
new indoorMapApi.MapView(
mapContainer, // 컨테이너
mapOptions, // 옵션
callbackFunc // callback 함수)
)
~~~
options에 대한 설명은 링크에 있습니다.
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md




예제를 보면서 다비오 맵스 JavaScript API 설명합니다. 아래는 다비오 사무실을 API으로 이용하여 지도를 생성하는 예입니다.

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>map</title>
    
</head>
<body>
    <div id="map"></div>
    <script type="module" src="[다비오기술문서의 api 링크]"></script>
    <script>
        window.onload = function () {
            let mapContainer = document.getElementById('map'); // 지도를 표시할 div
        
            // 지도 인증정보
            let authorization = new indoorMapApi.Authorization({
            clientId: "28AXw_veA2YbNKDP6poTpT",
            clientSecret: "70c540c169af62808f4da3709e988e06"
            });
        
            let mapOptions = {
            authorization: authorization
            };
        
            // 지도를 표시할 div, 옵션으로 생성 후 로딩이 완료되면 콜백으로 결과를 리턴합니다
            new indoorMapApi.MapView(
            mapContainer, // 컨테이너
            mapOptions, // 옵션
            function (response) { // 맵 로드 콜백
                let code = response.getCode();
        
                if (code === 200) {
                mapView = response.getPayload().mapView;
                mapDraw = response.getPayload().mapDraw;
                // do something
                console.log("map view success!")
                }
            }
            );
        };
    </script>
</body>
</html>
~~~

