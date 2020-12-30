# MapLocal

MapView와 동일한 기능이며 사용방법도 동일합니다. 단 지도파일을 다비오의 지도배포서버가 아닌 다비오의 내부 서버 CDN에서 가져옵니다. MapView보다 속도는 향상되나, 실시간 업데이트가 자동으로 안되므로 수동으로 업데이트를 해줘야 합니다. url option을 사용하여 사용자가 지도위치를 지정할 수도 있습니다. (지도다운로드 위해 다비오 문의 필요)
해당 지도를 CDN으로 올리기 위해서는 다비오에 문의바랍니다.  

- 옵션은 MapView와 동일합니다. options에 대한 설명은 링크에 있습니다.
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
