# MapView

지도 사용 인증, 지도 zoom level 등 지도를 그리기 위한 기능들을 제공합니다.


- options에 대한 설명은 링크에 있습니다.
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
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/index.html
