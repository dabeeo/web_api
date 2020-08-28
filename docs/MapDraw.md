# MapDraw

~~~
MapDraw를 활용하여 지도보기의  모드를 변경할 수 있습니다. 
MapDraw는 MapView API를 호출시 Response로 반환되며 여기에 맵이름, 층정보, poi정보, 테마정보 등이 들어있습니다.    
메소드 호출시 이들 정보를 이용합니다. 
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


## MapDraw Options

| **Option**      | **Parameter** | **Parameter** | **Type**   | **Values**           | **Description**                             |
| --------------- | ------------- | ----------- | ------------- | ------------------- | ------------------------------------------- |
| floorInfo       |               |             | array         |                     | 지도의 층정보                      |
|                 | id            |             | string        |                     | 층 아이디                         |
|                 | name          |             | array         |                     | 층 이름                           |
|                 |               | lang        | string        |  "ko"               | 언어                             |
|                 |               | text        | string        |                     | 층이름                            |
|                 | defaultYn     |             | boolean       |                     | 디폴트여부                         |
| themeInfo       |               |             | array         |                     | 지도의 테마 정보                       |
|                 | id            |             | number        |                     | 테마 아이디                          |
|                 | name          |             | string        |                     | 테마 이름                           |
|                 | defaultYn     |             | boolean       |                     | 디폴트여부                         |
| poiInfo         |               |             | array         |                     | 지도의 poi정보                       |
|                 | id            |             | string        |                     | poi 아이디                          |
|                 | floorId       |             | string        |                     | 층 아이디                           |
|                 | title         |             | string        |                     | poi 이름                         |
|                 | categoryCode  |             | string        |                     | category code                   |
|                 | iconUrl       |             | string        |                     | url String                   |
|                 | position      |             | object        |                     | poi의 위치,x,y z으로 구성              |
|                 |               |  x          | number        |                     | x좌표              |
|                 |               |  y          | number        |                     | y좌표              |
|                 |               |  z          | number        |                     | z좌표  |
|                 | metadatas     |             | object        |                     | poi의 메타데이터            |
|                 | titleByLanguages |          | object        |                     | poi의 언어 별 타이틀 정보           |
| mapName         |               |             | string        |                     | 지도의 이름                       |
| poiCategories   |               |             | array         |                     | 카테고리 정보 (레벨별로 hierarhy 구조로 존재함)              |
|                 | id            |             | string        |                     | 카테고리 아이디                         |
|                 | code          |             | string        |                     | 카테고리 코드 (예: "1-1")             |
|                 | level         |             | number        |                     | 카테고리 레벨                        |
|                 | title         |             | string        |                     | 타이틀                          |
|                 | childList     |             | array        |                      | 부모와 동일한 구조로 구성              |



## Methods

| **Method**      | **Parameter** | **Type** | **Value**   | **return value**  |  **Description**    |
| --------------- | ------------- | -------- | ----------- | ----------------- | -------------------- |
| changeShowPoi   | showPoi       | boolean |              |                   | poi 보여주기 모드 변경   |
| changeCamera    | camera        | string  | "2d", "3d"   |                   | 카메라 모드 변경        |
| redrawMap       | floor         | string  |  층아이디      |                   | 층 변경               |
|                 | theme         | string  |  테마아이디     |                   | 테마 변경             |
| zoomIn          |               |         |              |                   | 지도확대               |
| zoomOut         |               |         |              |                   | 지도축소              |
| getRouteOn      |               |         |              |                   | 네비게이션 보여주기          |
|                 | startPoint    | position| x,y,z        |                   | 출발점 좌표          |
|                 |               | floorId |              |                   | 출발점 층아이디        |
|                 | endPoint      | position|x,y,z        |                   | 도착점 좌표          |      
|                 |               | floorId |              |                   | 도착점 층아이디        |
|                 | navigationType | sting  | "recommendation" |               | 네비게이션 옵션 ( 추천 ) |
|                 |               | sting  | "stairs" |                        | 네비게이션 옵션 ( 계단 ) |
|                 |               | sting  | "escalator" |                     | 네비게이션 옵션 ( 에스컬레이터 ) |
|                 |               | sting  | "elevator" |                      | 네비게이션 옵션 ( 엘리베이터 ) |
|                 |               |         |              | 소요시간            |                     |
| getRouteOff     |               |         |              |                   | 네비게이션               |
| startRouteAnimation   |               |         |              |                   | 모의주행 시작              |
| stopRouteAnimation   |               |         |              |                   | 모의주행 멈춤              |
| changeLanguage  | languageCode  | string  | "ko", "en" ... |                   | poi 언어변경 (_ISO_639-1_codes 참조_)  |
| mapCordInfo     |               |          |             |   하단 참조        |  지도 좌표 정보         |
| myLocationOn    | point         | position | x, y, z     |                  |  내 위치 표시         |
| myLocationOff   |               |          |             |                  |  내 위치 삭제         |
| myLocationOn    | point         | position | x, y, z     |                  |  내 위치 표시         |
| controlDragLeft |               |          |             |                  |  Left mouse로 drag         |
| controlDragRight |               |          |             |                  |  Right mouse로 drag  |
| zoomOn |               |          |             |                  |  mouse로 zoom 기능 활성화      |
| zoomOff |               |          |             |                  |  mouse로 zoom 기능 비활성화  |
| setMarker       | marker Array  | position [, image] [, floorId] | Array[{ position: {x, y, z}, image: url, floorId: string}] |       | 마커 표시(여러개 가능) |
| clearMarker     |               |          |             |                  |  마커 삭제         |


~~~javascript
// mapDraw.mapCordInfo() 호출시 보여지는 지도 정보 값 
{ 
    "fixedPosition": { // 지도 영점
        "x": 0,
        "y": 0,
        "z": 0
    },    
    "scaleCm": 10, // 지도 축척비
    "xaxisDirection": 1, // x 증가방향
    "yaxisDirection": 1, // y 증가방향
    "size": { // 지도 사이즈 
        "width": 1600,
        "height": 2200
    }
} 
~~~
좌표계 그림 설명 

<img width="517" alt="Screen Shot 2020-08-18 at 5 43 51 PM" src="https://user-images.githubusercontent.com/63434357/90492700-71395b00-e17c-11ea-8190-d64607b35e24.png">
