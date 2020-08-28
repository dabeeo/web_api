

<h1 align="center">
	<img src="https://indoor.dabeeomaps.com/upload/demo/CI.png" />
</h1>

### DABEEO MAPS JavaScript API

다비오맵스 API 는 다비오맵스 실내지도플랫폼 지도를 활용한 서비스를 쉽고 빠르게 구축 할 수 있게 JavaScript 형태로 공개한 기술들입니다.
본 문서에서는 웹 서비스 또는 애플리케이션에 지도 기능을 구현하기 위한 기본 개발환경 구성 및 설치방법을 포함하여 개발을 시작하기 전에 준비해야할 기본사항들을 담고 있습니다.





## Issue Client ID / Secret

##### 다비오맵스 API는 Client ID / Secret 발급을 받아야 사용할 수 있습니다. 아래의 절차에 따라 키 발급을 진행하세요.

~~~
1. 다비오맵스 실내지도플랫폼 > 실내지도 > 지도관리에서 지도를 생성 합니다.
2. 지도관리 목록에서 지도 정보를 클릭합니다.
3. 상세 지도 정보에서 인증접근 정보를 확인합니다.
~~~



## Getting Started

~~~javascript
 <script type="text/javascript" src="[다비오기술문서의 api 링크]" ></script>
~~~

* API 를 로딩하는 스크립트의 위치는 head, body등 어디에 위치해도 상관없으나 실행코드보다 항상 먼저 선언되어야 합니다.



## Sample
https://dabeeo.github.io/web_api/samples   
https://dabeeo.github.io/web_api/samples/mapName.html   
https://dabeeo.github.io/web_api/samples/floor.html   
https://dabeeo.github.io/web_api/samples/theme.html   
https://dabeeo.github.io/web_api/samples/camera.html   
https://dabeeo.github.io/web_api/samples/showPoi.html   
https://dabeeo.github.io/web_api/samples/navigation.html   
https://dabeeo.github.io/web_api/samples/zoom.html   
https://dabeeo.github.io/web_api/samples/language.html
https://dabeeo.github.io/web_api/samples/myLocation.html
https://dabeeo.github.io/web_api/samples/marker.html

## api 호출 샘플
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
                let mapView = response.getPayload().mapView;
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

## Support

##### 기능이나 개발에 대한 문의사항이 있으신 경우 이메일[Platform.cs@dabeeo.com] 로 보내주시면 안내해 드리도록 하겠습니다.
