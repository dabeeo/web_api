

<h1 align="center">
 <img src="https://indoor.dabeeomaps.com/upload/demo/CI.png" />
</h1>

# Release History
https://github.com/dabeeo/web_api/blob/master/release_history.md

# DABEEO MAPS JavaScript API 기능정의서 

다비오맵스 API 는 다비오맵스 실내지도플랫폼 지도를 활용한 서비스를 쉽고 빠르게 구축 할 수 있게 JavaScript 형태로 공개한 기술들입니다.
본 문서에서는 웹 서비스 또는 애플리케이션에 지도 기능을 구현하기 위한 기능에 대한 설명이 담겨 있습니다. 
- [API 문서 링크](https://docs.google.com/spreadsheets/d/1Cg7Qa35L2oIfenVn26J9dEnqe_lWEkFrp0Ix0ctW3aQ/edit?usp=sharing) 

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

## 샘플 실행
[샘플실행](https://demo-preview-rebuild.dabeeomaps.com/sample/)


## api 호출 샘플
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <div id="map"></div>
    <script src="[다비오기술문서의 api 링크]"></script>
    
    <script>
        window.onload = function () {
            var mapContainer = document.getElementById('map'); // 지도를 표시할 div
        
            // 지도 인증정보
            var authorization = new indoorMapApi.Authorization({
            clientId: "28AXw_veA2YbNKDP6poTpT",
            clientSecret: "70c540c169af62808f4da3709e988e06"
            });
        
            var mapOptions = {
            authorization: authorization
            };
        
            // 지도를 표시할 div, 옵션으로 생성 후 로딩이 완료되면 콜백으로 결과를 리턴합니다
            new indoorMapApi.MapView(
            mapContainer, // 컨테이너
            mapOptions, // 옵션
            function (response) { // 맵 로드 콜백
                var code = response.getCode();
        
                if (code === 200) {
                var mapView = response.getPayload().mapView;
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

## API FLOW
<img width="1178" alt="Screen Shot 2020-12-10 at 5 07 22 PM" src="https://user-images.githubusercontent.com/63434357/101739019-4f3c5d80-3b0a-11eb-9cdd-475dc1d178b9.png">

## Support

##### 기능이나 개발에 대한 문의사항이 있으신 경우 이메일[cs.imstudio@dabeeo.com] 로 보내주시면 안내해 드리도록 하겠습니다.
