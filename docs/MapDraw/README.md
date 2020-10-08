# MapDraw

~~~
MapDraw는 MapView API를 호출시 Response로 반환되며 여기에 맵이름, 층정보, poi정보, 테마정보 등이 들어있습니다.    
지도의 설정 변경시 MapDraw의 response에 있는 정보를 사용하여 Mapdraw의 메소드를 호출합니다.     
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
        initMapName(mapDraw.response.mapName); 
      }
   }
)
~~~

- mapDraw의 reponse에 대한 설명은 링크에 있습니다. 
- https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Options.md

- mapDraw의 method에 대한 설명은 링크에 있습니다. 
- https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md
