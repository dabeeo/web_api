# MapDraw

~~~
MapDraw를 활용하여 지도 모드를 변경할 수 있습니다. 
MapDraw는 MapView API를 호출시 Response로 반환되며 여기에 들어있는 맵이름, 층정보, poi정보, 테마정보 등의 정보를 변경값으로 사용하면 됩니다. 
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
    <script type="module" src="https://demo-preview-rebuild.dabeeomaps.com/jsMapAPI.js"></script>
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

                }
            }
            );
        };
    </script>
</body>
</html>
~~~


## MapDraw Options

| **Option**      | **Parameter** | **Type** | **Returns**   | **Returns**  **Description** | **Description**                             |
| --------------- | ------------- | ------------------------- | ------------- | ---------------------------- | ------------------------------------------- |
| floorInfo       | array         |             |               |                              | 지도의 중심 좌표 변경                       |
|                 | id         | string            |               |                              | 옵션 설정을 통한 지도 중심 좌표 변경        |
|                 | name         | array           |               |                              | 옵션 설정을 통한 지도 중심 좌표 변경        |
|                 | defaultYn        | boolean                   |               |                              |                                             |
| mapName         |               |                           | Point         | 지도 중심 좌표               | 지도의 중심 좌표 리턴                       |
| themeInfo       | array        | 줌 레벨                   |               |                              | 지정된 zoom level로 확대/축소 화면 변경     |
| getZoom         |               |                           | Number        | 줌 레벨                      | 지도의 zoom level 리턴                      |
| setBounds       | Bounds        | 좌표 영역 정보            |               |                              | 좌표 영역 정보를 이용한 확대/축소 화면 변경 |
| getBounds       |               |                           | Bounds        | 지도 화면의  영역 정보       | 지도 화면의 영역 정보 리턴                  |

