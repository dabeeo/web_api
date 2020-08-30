## MapDraw methods : 지도 속성 변경
MapView의 메소드를 이용하여 지도에 대한 속성을 변경할 수 있습니다. 


### 층 선택하기     
mapDraw.redrawMap() 메소드를 이용하여 지도에 그려줄 층을 변경할 수 있습니다. 
~~~javascript
mapDraw.redrawMap({floor: floorId});
~~~
- example: https://dabeeo.github.io/web_api/samples/floor.html   

### 테마 선택하기  
mapDraw.redrawMap() 메소드를 이용하여 테마를 변경할 수 있습니다. 
~~~javascript
mapDraw.redrawMap({theme: themeId});
~~~
- example: https://dabeeo.github.io/web_api/samples/theme.html   

### 카메라 모드 변경하기
mapDraw.changeCamera() 메소드를 이용하여 2d/3d 지도로 변경할 수 있습니다. 
- "2d": 2d 모드
- "3d": 3d 모드
~~~javascript
mapDraw.changeCamera("2d");
~~~
- example:  https://dabeeo.github.io/web_api/samples/camera.html   

### 언어변경
mapDraw.changeLanguage()를 이용하여 언어를 변경할 수 있습니다.(_ISO_639-1_codes 참조_) 
    - "ko": 한국어
    - "en": 영어 
~~~javascript
mapDraw.chanageLanguage("ko");
~~~
- example: https://dabeeo.github.io/web_api/samples/language.html


### poi 보이기/숨기기  
mapDraw.changeShowPoi() 메소드를 이용하여 poi를 보이거 숨길 수 있습니다. 

~~~javascript
mapDraw.changeShowPoi({showPoi: true});
~~~
~~~javascript
mapDraw.changeShowPoi({showPoi: false});
~~~
- example: https://dabeeo.github.io/web_api/samples/showPoi.html   

### 확대/축소   
mapDraw.ZoomIn() 메소드를 이용하여 지도를 확대할 수 있습니다. 

~~~javascript
mapDraw.zoomIn();
~~~
mapDraw.ZoomOut() 메소드를 이용하여 지도를 축소할 수 있습니다. 
~~~javascript
mapDraw.zoomOut();
~~~
- example: https://dabeeo.github.io/web_api/samples/zoom.html   


### 길찾기  
mapDraw.getRouteOn() 메소드를 이용하여 길찾기 경로를 표시할 수 있습니다.
이 때 목적지까지 가는데 걸리는 시간이 반환됩니다. (miliseconds)
- startPoint: 출발지, x,y,z 좌표
- destPoint : 도착지, x,y,z 좌표
- navigationType : 주행경로, 네가지 option이 있습니다. 
    - "recommendation : 추천
    - "stairs": 계단
    - "escalator"
    - "elevator"

~~~javascript
let time = mapDraw.getRouteOn(startPoint, destPoint);
~~~
mapDraw.getRouteOff() 메소드를 이용하여 길찾기 경로를 삭제할 수 있습니다. 
~~~javascript
let a = mapDraw.getRouteOff();
~~~
- example: https://dabeeo.github.io/web_api/samples/navigation.html   


### 모의주행  
mapDraw.startRouteAnimation() 메소드를 이용하여 모의주행을 표시할 수 있습니다.
이 때 목적지까지 가는데 층이 변경되는 경우 층변경에 대하여 "floor-changed" 이벤트가 반환됩니다. 이벤트가 발생한 경우 클라이언트는 해당층을 가리키는 ui를 변경해줘야 합니다. 
~~~javascript
mapDraw.startRouteAnimation();
~~~
mapDraw.stopRouteAnimation() 메소드를 이용하여 모의주행을 멈출 수 있습니다. 
~~~javascript
mapDraw.stopRouteAnimation();
~~~
모의주행이 완료되면 "navi-complete" 이벤트가 반환됩니다. 

### 내 위치 표시
mapDraw.myLocationOn()메소드를 이용하여 원하는 좌표에 위치를 표시할 수 있습니다. 
- position: x,y,z 좌표. z좌표는 object보다 높아야 지도에 표시됩니다. 
~~~javascript
mapDraw.myLocationOn();
~~~
mapDraw.myLocationOff()메소드로 좌표에 표시된 아이콘을 삭제할 수 있습니다. 
~~~javascript
mapDraw.myLocationOff();
~~~
- example: https://dabeeo.github.io/web_api/samples/myLocation.html   


### 여러개의 마커표시
mapDraw.setMarker()마커를 한개 또는 여러개 표시할 수 있습니다. 이 때 원하는 아이콘을 지정하여 줄 수 있습니다. 여러개의 마커를 줄 수 있으므로 배열 형태로 지정합니다. 
- position:x, y, z 좌표
- image: optional. icon URL. 지정하지 않을 경우 기본 이미지로 표시 
- floorId: optional. 층 지정시. 지정하지 않는 경우 현재의 층으로 표시 
~~~javascript
mapDraw.setMarker([
    {position:{
        x: i.position.x,
        y: i.position.y,
        z: 58,},
    image: "img_marker_blue-3x.png", // 이미지 지정하지 않을 경우 기본 이미지로 표시
    floorId: "[해당층아이디]" // 층을 지정 할때 : 지정하지 않을 경우 현재 보이는 층
    }]);
~~~
mapDraw.clearMarker로 표시한 마커를 삭제할 수 있습니다. 
~~~javascript
mapDraw.clearMarker();
~~~
- example: https://dabeeo.github.io/web_api/samples/marker.html


### 마우스로 zoom 기능 끄기
mapDraw.zoomOff()를 이용하여 마우스로 zoom기능을 비활성화할 수 있습니다 .
~~~javascript
mapDraw.zoomOff();
~~~
mapDraw.zoomOn()을 이용하여 zoom기능을 활성화할 수 있습니다. 
~~~javascript
mapDraw.zoomOn();
~~~


### drag 기능 마우스로 지정
mapDraw.controlDragLeft()메소드를 이용하여 drag기능을 마우스의 왼쪽 클릭으로 조정하도록 지정합니다 .
~~~javascript
mapDraw.controlDragLeft();
~~~
mapDraw.controlDragRight()메소드로 마우르 오른쪽 클릭으로 지정합니다. 
~~~javascript
mapDraw.controlDragRight();
~~~



### 지도 좌표계정보
mapDraw.mapCordinfo()는 지도좌표계를 매핑하기 위한 기본 정보를 제공합니다. 
~~~javascript
// mapDraw.mapCordInfo() 호출시 보여지는 지도 정보 값 
{ 
    "fixedPosition": { // 지도 영점
        "x": 0,
        "y": 0,
        "z": 0
    },    
    "scaleCm": 10, // 지도 축척비
    "xaxisDirection": 1, // x 증가방향
    "yaxisDirection": 1, // y 증가방향
    "size": { // 지도 사이즈 
        "width": 1600,
        "height": 2200
    }
} 
~~~
좌표계 그림 설명 

<img width="517" alt="Screen Shot 2020-08-18 at 5 43 51 PM" src="https://user-images.githubusercontent.com/63434357/90492700-71395b00-e17c-11ea-8190-d64607b35e24.png">



