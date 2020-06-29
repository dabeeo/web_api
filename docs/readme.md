# MapView

~~~
지도 사용 인증, 지도 버전, 지도 zoom level, UI 사용 여부 등 해당 페이지에서는 지도 뷰어를 나타내기 위한 기능들을 제공합니다.
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
                }
            }
            );
        };
    </script>
</body>
</html>
~~~



## MapView Options
| **Option**       | **Type**      | **Default**         | **Description**                          | **Value**                          |
| ---------------- | ------------- | ------------------- | ---------------------------------- | -------------------------------- |
| authorization    | Authorization | null                | 인증 객체                           | |
| zoom             | Number        | 100                 | 실내 지도 초기화시 zoom level 설정  | | 
| floor       | String        | "default"           | 실내지도 초기화시 최초 표시할 층 설정       | |
| theme       | String        | "default"           | 실내지도 초기화시 최초 표시할 테마  설정      | |
| camera       | String        | "3d"           | 실내지도 초기시 최초 표시할 카메라 모드  설정  | "2d", "3d"|
| showPoi     | Boolean       | true               | 실내지도 초기화시 poi 표시 여부 설정    | true, false |

## MapDraw Options


