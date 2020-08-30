# MapDraw

~~~
MapDraw는 MapView API를 호출시 Response로 반환되며 여기에 맵이름, 층정보, poi정보, 테마정보 등이 들어있습니다.    
메소드 호출시 이들 정보를 이용합니다.    
mapDraw의 정보와 메소드는 해당문서에 자세히 설명되어 있습니다. 
~~~



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
                initFloorBtn(mapDraw.response.floorInfo)//층변경
                initThemeBtn(mapDraw.response.themeInfo)//테마변경
                initCameraBtn();//카메라모드변경
                initShowPoiBtn();//poi 보여주기모드 변경
                initMapName(mapDraw.response.mapName); //지도이름 표기
                initNavigation(mapDraw.response.poiInfo); //네비게이션 모드 
                initZoom(); //줌 


                }
            }
            );
        };
    </script>
</body>
</html>
~~~
