# MapView

~~~
지도 사용 인증, 지도 버전, 지도 zoom level, UI 사용 여부 등 해당 페이지에서는 지도 뷰어를 나타내기 위한 기능들을 제공합니다.
~~~


~~~javascript
new indoorMapApi.MapView(
mapContainer, // 컨테이너
mapOptions, // 옵션
callbackFunc // callback 함수)
)
~~~


예제를 보면서 다비오 맵스 JavaScript API 설명합니다. 아래는 다비오 사무실을 API으로 이용하여 지도를 생성하는 예입니다.

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>map</title>
    
</head>
<body>
    <div id="map"></div>
    <script type="module" src="[다비오기술문서의 api 링크]"></script>
    <script>
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
                mapView = response.getPayload().mapView;
                mapDraw = response.getPayload().mapDraw;
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



## MapView Options
### authorization
다비오 지도를 사용하기 위한 인증 정보    
Type: 인증 객체      
~~~javascript
authorization:        
{
clientId: "28AXw_veA2YbNKDP6poTpT",
clientSecret: "70c540c169af62808f4da3709e988e06"
}
~~~
### zoom
실내 지도 초기화시 zoom level 설정   
Type: Number   
Default: 100   
~~~javascript
let mapOptions = {
    zoom: 120
}
~~~


### floor
실내지도 초기화시 최초 표시할 층 설정. 설정 안하는 경우 default로 지도의 default층으로 설정   
Type : String
### theme
실내지도 초기화시 최초 표시할 테마  설정. 설정안하는 경우 지도의 default theme으로 설정    
Type: String

### camera
실내지도 초기시 최초 표시할 카메라 모드  설정. "2d", "3d" 중 하나로 설정.  
Type : String     
Default : "3d"    

### showPoi
실내지도 초기화시 poi 표시 여부 설정   
Type: Boolean   
Default : true   

### canvasSize
지도의 크기를 결정하기 위한 넓이와 높이    
Type: 객체    
Default : 아무것도 지정하지 않으면 화면 전체 사이즈로 지정됩니다. 

~~~javascript
canvasSize: {
    width : 1000,
    height : 800
}    
~~~

### center
지도가 그려질 중심 좌표를 설정합니다.  
Type: 객체   
Default : 아무것도 지정하지 않으면 지도사이즈의 중심로 지정됩니다.

~~~javascript
center: {
    x : 100, // 지도 내 좌표 x 
    y : 200 // 지도 내 좌표 y
}    
~~~


### angle
3D 카메라 설정일 때 화면의 angle을 설정합니다        
Type: 객체     
Default : angle 이 지정되지 않으면 3D 지도일 때 마우스로 rotation 을 움직일 수 있지만     
angle이 설정되면 rotation 을 움직일 수 없습니다.     
입력 예:      
angle.vertical : angle 입력     
angle.horizontal : angle 입력

~~~javascript
angle: {
    vertical : 20, 
    horizontal : 0 
}    
~~~