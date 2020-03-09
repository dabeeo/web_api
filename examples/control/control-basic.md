# MapView

~~~
지도에서 사용 할 컨트롤러를 추가하는 방법을 설명합니다.
컨트롤러란, 줌인/아웃 혹은 층 이동 버튼 등 지도위에 올라가는 버튼 형태의 컴퍼넌트를 말합니다.
~~~

## Code
<pre>
    new indoorMapApi.MapView(
        mapContainer, 
        mapOptions, 
        function (response) { 
            let code = response.getCode();

            if (code === 200) {
                let mapView = response.getPayload().mapView;

                let floorControl = new indoorMapApi.FloorControl(); // 층 컨트롤 생성
                mapView.addControl(floorControl, "CENTER_RIGHT"); // 우측 중단에 배치

                let zoomControl = new indoorMapApi.ZoomControl();
                mapView.addControl(zoomControl, "TOP_LEFT"); // 좌측 상단에 배치
            }
        }
    );
    
</pre>


## Position
~~~
컨트롤러는 지도가 보이는 화면을 기준으로 각각 8방향에 배치가 가능합니다.
위치를 지칭하는 키워드는 아래와 같으며 해당 키워드 별 실제 배치되는 위치는 아래 이미지를 참고하세요.
TOP_LEFT
TOP_CENTER
TOP_RIGHT
CENTER_LEFT
CENTER_RIGHT
BOTTOM_LEFT
BOTTOM_CENTER
BOTTOM_RIGHT
~~~
<img src="https://indoor.dabeeomaps.com/upload/demo/controller_1.png" />

## Controller 종류
~~~
javascript API 에서 기본 제공하는 Controller 는 다음 두 가지입니다.
FloorControl : 층 이동 컨트롤러 
ZoomControl : 줌 컨트롤러
~~~
## 예제
<pre>
                let floorControl = new indoorMapApi.FloorControl(); // 층 컨트롤 생성
                mapView.addControl(floorControl, "CENTER_RIGHT"); // 우측 중단에 배치

                let zoomControl = new indoorMapApi.ZoomControl();
                mapView.addControl(zoomControl, "TOP_LEFT"); // 좌측 상단에 배치
</pre>