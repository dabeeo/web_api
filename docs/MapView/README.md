# MapView

지도 사용 인증, 지도 zoom level 등 지도를 그리기 위한 기능들을 제공합니다.
MapView API를 호출시 MapDraw가 Response로 반환되며 여기에 맵이름, 층정보, poi정보, 테마정보 등이 들어있습니다.
지도에 대한 제어를 할 때 MapDraw의 response에  있는 정보를 사용하여 Mapdraw의 메소드를 호출합니다.
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
      let mapContainer = document.getElementById('map'); // 지도를 표시할 div

      // 지도 인증정보
      let authorization = new indoorMapApi.Authorization({
        clientId: "6Lwuu9wa4wta0NiHwy1fO5",
        clientSecret: "93ab5dbaf7fa6c9017cf9cb9ef4dc8fd"
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
            mapDraw = response.getPayload().mapDraw;
            // do something
            console.log("map view success!")
          }
        }
      );
    }
  </script>
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/index.html
- 실행 : https://dabeeo.github.io/web_api/samples/index.html
