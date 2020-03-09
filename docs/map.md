# MapView

~~~
지도 사용 인증, 지도 버전, 지도 zoom level, UI 사용 여부 등 해당 페이지에서는 지도 뷰어를 나타내기 위한 기능들을 제공합니다.
~~~



예제를 보면서 다비오 맵스 JavaScript API 설명합니다. 아래는 다비오 사무실을 API으로 이용하여 지도를 생성하는 예입니다.

~~~html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dabeeo Map</title>
    <script type="text/javascript" src="https://indoor.dabeeomaps.com/upload/JS/indoorMapApi.v0.9.4.js"></script>
    <style>
        body {
            margin: 0;
        }
    </style>
</head>
<body>
<div id="map"></div>
</body>
<script>
    let mapContainer = document.getElementById('map'); // 지를 표시할 div

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
                let mapView = response.getPayload().mapView;
              	// do Something ...
            }
        }
    );
</script>
</html>
~~~



## Options

| **Option**       | **Type**      | **Default**         | **Description**                                             |
| ---------------- | ------------- | ------------------- | ----------------------------------------------------------- |
| authorization    | Authorization | null                | 인증 객체                                                   |
| version          | Number        | 1                   | 지도 버전                                                   |
| center           | Point         | 화면 중앙 자동 계산 | 실내지도 초기화 이후 최초 화면 중앙에 위치할 좌표 설정      |
| zoom             | Number        | 5                   | 실내지도 초기화 이후 최초 zoom level 설정                   |
| minZoom          | Number        | 1                   | 확대/축소 변경 시 최소 zoom level 설정                      |
| maxZoom          | Number        | 10                  | 확대/축소 변경 시 최대 zoom level 설정                      |
| floorlevel       | Number        | 0                   | 실내지도 초기화 이후 최초 표시할 층 설정                    |
| tilt             | Number        | 90                  | 실내지도 초기화 이후 최초 (카메라) 경사도 설정              |
| rotate           | Number        | 0                   | 실내지도 초기화 이후 최초 지도 회전 정도 설정               |
| mapMode          | String        | NORMAL              | 실내지도 초기화시 지도 모드 설정                            |
| moveAnimation    | Boolean       | TRUE                | 지도 이동 애니메이션 표현 여부                              |
| zoomAnimation    | Boolean       | TRUE                | 줌 애니메이션 표현 여부                                     |
| panningAnimation | Boolean       | TRUE                | 지도 Drag 이동 종료 시 관성 애니메이션 표현 여부            |
| zoomEnabled      | Boolean       | TRUE                | 확대/축소 동작 여부 설정                                    |
| moveEnabled      | Boolean       | TRUE                | Drag 액션을 통해 지도 이동 동작 여부 설정                   |
| rotateEnabled    | Boolean       | TRUE                | 두 손가락 조작을 통해 지도 회전 동작 여부 설정              |
| tiltEnabled      | Boolean       | TRUE                | 두 손가락 조작을 통해 지도 경사도 동작 여부 설정            |
| wheelZoomEnabled | Boolean       | TRUE                | 마우스 휠 스크롤을 통해 지도 zoom level 변경 가능 여부 설정 |
| clustering       | Boolean       | TRUE                | 마커 기준 클러스터링 적용 여부 설정                         |
| showObjectId     | Boolean       | FALSE               | 객체 ID 표시 여부 설정                                      |
| uiZoomControls   | Boolean       | TRUE                | 지도 화면 확대/축소 UI 사용 여부 설정                       |
| uiFloorControls  | Boolean       | TRUE                | 지도 층간 이동 UI 사용 여부 설정                            |
| languageCode     | String        | 기본 설정 언어 코드 | 지도 언어 코드 지정                                         |

~~~javascript
let authorization = new indoorMapApi.Authorization({
  clientId: "28AXw_veA2YbNKDP6poTpT",
  clientSecret: "70c540c169af62808f4da3709e988e06"
});

let mapOptions = {
  authorization: authorization, // 인증
  center: new indoorMapApi.Point({ // 지도의 중심좌표
    x: 3000,
    y: 1500
  }),
  clustering: false // 클러스터링 적용 여부
};
~~~





## Events

| **Event**     | **Returns** | **Data**          | **Description**                    |
| ------------- | ----------- | ----------------- | ---------------------------------- |
| ready         | Response    | 응답 객체         | 지도 초기화 완료 시 이벤트 전달    |
| click         | Point       | Touch한 Map Point | 지도에서 클릭(터치) 이벤트 전달    |
| longClick     | Point       | Touch한 Map Point | 지도에서 롱 클릭(터치) 이벤트 전달 |
| zoomBegin     | Number      | ZoomLevel         | 확대/축소 전에 이벤트 전달         |
| zoom          | Number      | ZoomLevel         | 확대/축소 중에 이벤트 전달         |
| zoomEnd       | Number      | ZoomLevel         | 확대/축소 종료 시에 이벤트 전달    |
| moveBegin     |             |                   | 지도 이동 시작 전에 이벤트 전달    |
| move          |             |                   | 지도 이동 중에 이벤트 전달         |
| moveEnd       |             |                   | 지도 이동 종료 시에 이벤트 전달    |
| rotateBegin   | Number      | Rotate            | 지도 회전 시작 전에 이벤트 전달    |
| rotate        | Number      | Rotate            | 지도 회전 중에 이벤트 전달         |
| rotateEnd     | Number      | Rotate            | 지도 회전 종료 시에 이벤트 전달    |
| floorBegin    | Floor       | FloorInfo 객체    | 층 변경 전에 이벤트 전달           |
| floorEnd      | Floor       | FloorInfo 객체    | 층 변경 후에 이벤트 전달           |
| languageBegin | String      | LanguageCode      | 언어 변경 전 이벤트 전달           |
| languageEnd   | String      | LanguageCode      | 언어 변경 후 이벤트 전달           |

~~~javascript
mapView.addEventListener('click', e => {
	let point = e.point; // 클릭한 좌표
});
~~~



## Methods

| **Method**      | **Parameter** | **Parameter** Description | **Returns**   | **Returns**  **Description** | **Description**                             |
| --------------- | ------------- | ------------------------- | ------------- | ---------------------------- | ------------------------------------------- |
| setCenter       | Point         | 지도 중심 좌표            |               |                              | 지도의 중심 좌표 변경                       |
| setView         | Point         | 지도 중심 좌표            |               |                              | 옵션 설정을 통한 지도 중심 좌표 변경        |
|                 | Number        | 줌 레벨                   |               |                              |                                             |
|                 | Boolean       | 애니메이션 적용 여부      |               |                              |                                             |
| getCenter       |               |                           | Point         | 지도 중심 좌표               | 지도의 중심 좌표 리턴                       |
| setZoom         | Number        | 줌 레벨                   |               |                              | 지정된 zoom level로 확대/축소 화면 변경     |
| getZoom         |               |                           | Number        | 줌 레벨                      | 지도의 zoom level 리턴                      |
| setBounds       | Bounds        | 좌표 영역 정보            |               |                              | 좌표 영역 정보를 이용한 확대/축소 화면 변경 |
| getBounds       |               |                           | Bounds        | 지도 화면의  영역 정보       | 지도 화면의 영역 정보 리턴                  |
| setFloor        | Number        | 층 레벨                   |               |                              | 지정된 floor level로 층 화면 변경           |
| getFloor        |               |                           | Floor         | 층 기본 정보                 | 현재 층에 대한 FloorInfo 리턴               |
| setTilt         | Number        | 경사도                    |               |                              | (카메라) 경사도 변경                        |
| getTilt         |               |                           | Number        | 경사도                       | (카메라) 경사도 정보 리턴                   |
| setRotate       | Number        | 회전 정도                 |               |                              | 지도 회전 정도 변경                         |
| getRotate       |               |                           | Number        | 회전 정도                    | 지도 회전 정도 리턴                         |
| setClustering   | Boolean       | 클러스터링 적용 여부      |               |                              | 클러스터링 적용 여부 변경                   |
| setShowObjectId | Boolean       | 객체 ID 표시 여부         |               |                              | 객체 ID 표시 여부 변경                      |
| addMarker       | Marker        | Marker 객체               |               |                              | Marker를 지도 화면에 추가                   |
| removeMarker    | Marker        | Marker 객체               |               |                              | 지정된 Marker 객체를 지도에서 삭제          |
| addPolyline     | Polyline      | Polyline 객체             |               |                              | Polyline을 지도 화면에 추가                 |
| removePolyline  | Polyline      | Polyline 객체             |               |                              | 지정된 Polyline 객체를 지도에서 삭제        |
| addPolygon      | Polygon       | Polygon 객체              |               |                              | Polygon을 지도 화면에 추가                  |
| removePolygon   | Polygon       | Polygon 객체              |               |                              | 지정된 Polygon 객체를 지도에서 삭제         |
| addCircle       | Circle        | Circle 객체               |               |                              | Circle을 지도 화면에 추가                   |
| removeCircle    | Circle        | Circle 객체               |               |                              | 지정된 Circle 객체를 지도에서 삭제          |
| getPoiData      |               |                           | Array<Marker> | Poi 마커 리스트              | POI 데이터 리턴                             |
| getObjectById   | String        | Object ID                 | Draw Object   | 해당 ID의  Draw객체          | 지정된 객체 ID에 해당하는 Draw 객체 리턴    |
| setLanguageCode | String        | 언어 코드                 |               |                              | 지정 언어 코드로 언어 변경                  |
| getLanguageCode |               |                           | String        | 언어 코드                    | 현재 설정된 언어 코드 리턴                  |
| getMapInfo      |               |                           | MapInfo       | 지도 기본 정보               | Map 정보를 리턴                             |
| getPoiInfoList  |               |                           | PoiInfo       | POI 기본정보  리스트         | POI 리스트 정보를 리턴                      |
| getScaleValue   |               |                           | Number        | 줌 스케일                    | 줌 스케일 값을 리턴                         |
| addControl      | Control       | Control 객체              |               |                              | UI Control 추가                             |
|                 | String        | 위치 값                   |               |                              |                                             |
| removeControl   | Control       | Control 객체              |               |                              | UI Control 삭제                             |

~~~javascript
mapView.setRotate(45); // 지도 회전 설정
let poiData = mapView.getPoiData(); // 현재 그려진 피오아이 객체 리턴
mapView.setTilt(40); // 경사도 설정
~~~

