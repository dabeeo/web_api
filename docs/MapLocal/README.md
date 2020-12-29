# MapLocal

MapView와 동일한 기능입니다. 단 로컬에서 지도를 가져오므로 로딩속도가 빠릅니다.
로컬에 있는 지도를 사용하기 위해서는 다음과 같은 과정을 거쳐야 합니다. 
1. https://dabeeomaps.com/ 에서 해당 지도를 다운로드받습니다. 파일이름은 지도의 아이디.json이며 인증시 파일명이 사용되므로 변경해서는 안됩니다.  
2. https://dabeeomaps.com/ 에서 지도의 클라이언트 아이디와 시크릿이 있어야 합니다.  
3. 다운받은지도가 있는 위치를 mapOptions의 url에 지정해줍니다. 
4. 지도의 클라이언트 아이디와 시크릿을 mapOptions의 authorization에 지정해줍니다. 

해당 지도를 다운받거나 클라이언트 아이디와 시크릿 받는 방법을 모르는 경우 문의바랍니다.     

- 기타 옵션은 MapView와 동일합니다. options에 대한 설명은 링크에 있습니다.
  https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md

~~~javascript
    <script>
        window.onload = function () {
            var mapContainer = document.getElementById('map'); // 지도를 표시할 div
        
            // 지도 인증정보
            var authorization = new indoorMapApi.Authorization({
            clientId: "28AXw_veA2YbNKDP6poTpT",
            clientSecret: "70c540c169af62808f4da3709e988e06"
            });
        
            var mapOptions = {
                authorization: authorization,
                url : "./mapData",   //맵데이터화일이 있는 path

            };
        
            // 지도를 표시할 div, 옵션으로 생성 후 로딩이 완료되면 콜백으로 결과를 리턴합니다
            new indoorMapApi.MapLocal(
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
~~~

- example: https://github.com/dabeeo/web_api/blob/master/samples/local.html
- example: https://github.com/dabeeo/web_api/blob/master/samples/mapData