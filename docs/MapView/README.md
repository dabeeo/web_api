# MapView

지도 사용 인증, 지도 zoom level 등 지도를 그리기 위한 기능들을 제공합니다.
MapView API를 호출시 MapDraw가 Response로 반환되며 여기에 맵이름, 층정보, poi정보, 테마정보 등이 들어있습니다.
지도의 설정 변경시 MapDraw에 있는 정보를 사용하여 Mapdraw의 메소드를 호출합니다.
mapDraw의 정보와 메소드는 해당문서에 자세히 설명되어 있습니다.

- MapView호출시 사용가능한 options에 대한 설명은 링크에 있습니다.
  https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md
- MapDraw.response에 대한 설명은 아래 링크에 있습니다.    
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/response.md

~~~javascript
       <script>

            window.addEventListener("load", function () {  
                initMap();
            });

            function initMap() {
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
                        console.log(response)
                        var code = response.getCode();
            
                        if (code === 200) {
                            mapView = response.getPayload().mapView;
                            mapDraw = response.getPayload().mapDraw;
                            // do something
                            console.log("map view success!")
                            initMapName(mapDraw.response.mapName);
                        }
                    } 
                );
            };
            function initMapName(name) {
                var mapNameContainer = document.createElement("DIV")
                mapNameContainer.classList.add('map-name-container');
                var mapElement = document.querySelector("#map");
                mapElement.insertAdjacentElement("afterbegin", mapNameContainer);
                mapNameContainer.innerText = name; 
            }
        </script>	
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/index.html
- example: https://github.com/dabeeo/web_api/blob/master/samples/mapName.html
