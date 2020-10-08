# MapDraw

~~~
MapDraw는 MapView API를 호출시 Response로 반환되며 여기에 맵이름, 층정보, poi정보, 테마정보 등이 들어있습니다.    
메소드 호출시 이들 정보를 이용합니다.    
mapDraw의 정보와 메소드는 해당문서에 자세히 설명되어 있습니다. 
~~~



~~~
            // 지도를 표시할 div, 옵션으로 생성 후 로딩이 완료되면 콜백으로 결과를 리턴합니다
            new indoorMapApi.MapView(
            mapContainer, // 컨테이너
            mapOptions, // 옵션
            function (response) { // 맵 로드 콜백
                let code = response.getCode();
        
                if (code === 200) {
                    mapDraw = response.getPayload().mapDraw;
                    // do something
                }
            })
~~~
