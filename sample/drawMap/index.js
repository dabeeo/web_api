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
