## MapDraw methods : 지도 속성 변경 및 길찾기 등 기능 수행
MapDraw의 메소드를 이용하여 지도에 대한 속성을 변경하거나 특정 기능을 동작시킬 수 있습니다. 

## 지도 다시 그리기
### 층 선택     
mapDraw.redrawMap() 메소드를 이용하여 지도에 그려줄 층을 변경할 수 있습니다. 
~~~javascript
mapDraw.redrawMap({floor: floorId});
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/floor.html   
#

### 테마 선택  
mapDraw.redrawMap() 메소드를 이용하여 테마를 변경할 수 있습니다. 
~~~javascript
mapDraw.redrawMap({theme: themeId});
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/theme.html   

## 카메라 관련

### 카메라 모드 변경
mapDraw.changeCamera() 메소드를 이용하여 2d/3d 지도로 변경할 수 있습니다. 
- "2d": 2d 모드
- "3d": 3d 모드
~~~javascript
mapDraw.changeCamera({camera:"2d"});
~~~
- example:  https://github.com/dabeeo/web_api/blob/master/samples/camera.html   
#

### 카메라 초기화 기능
mapDraw.init2DCameraInfo() 메소드를 이용하여 2d 카메라 상태에서 zoom, position, rotate을  초기화할 수 있습니다.
만약 mapOpions의 초기값에 zoom, center, northReference 값이 있다면 해당 값으로 초기화 됩니다.
~~~javascript
mapDraw.init2DCameraInfo();
~~~
mapDraw.init3DCameraInfo() 메소드를 이용하여 3d 카메라 상태에서 zoom, position, rotate을 초기화할 수 있습니다.
만약 mapOpions의 초기값에 zoom, center, northReference 값이 있다면 해당 값으로 초기화 됩니다.
~~~javascript
mapDraw.init3DCameraInfo();
~~~
#
<!-- 2020-11-10 mapPositionMoveCamera 추가 -->
});
### 지도 좌표 기준 x,y좌표로 카메라 이동  

지도의 좌표 기준으로 x, y좌표로 카메라를 이동합니다. (방위각에 상관없이 이동합니다)    
- x: number 지도내의 좌표를 입력합니다.  
- y: number 지도내의 좌표를 입력합니다.   

~~~javascript
mapDraw.mapPositionMoveCamera(x, y); // 지도 scene 좌표 x, y 
~~~

#
### 카메라 좌표 기준 x,y좌표로 카메라 이동 (방위각이 있는 지도에서 사용시 주의!)
**방위각이 없는 지도**는 상단 위가 중심으로(0, 0) x, y좌표로 카메라를 이동합니다. [지도-좌표계정보](https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#%EC%A7%80%EB%8F%84-%EC%A2%8C%ED%91%9C%EA%B3%84%EC%A0%95%EB%B3%B4)    
**방위각이 있는 지도**의 경우 지도 중앙을 중심으로(0, 0) x, y좌표로 카메라를 이동합니다. 따라서 지도의 좌표를 기준으로 카메라를 이동시키려면 아래 설명에 나와있는 **getCameraPosition()** 을 통해 좌표를 변환한 뒤 부르거나,**mapPositionMoveCamera()** 를 호출해야 합니다.   

- x: number, x 좌표를 입력합니다.  
- y: number, y 좌표를 입력합니다.   

~~~javascript
mapDraw.moveCamera({
    "x": 0,
    "y": 0
});
~~~

- example: https://github.com/dabeeo/web_api/blob/master/samples/moveCamera.html

## 마우스 관련

### drag 기능 마우스로 지정
mapDraw.controlDragLeft()메소드를 이용하여 drag기능을 마우스의 왼쪽 클릭으로 조정하도록 지정합니다.
~~~javascript
mapDraw.controlDragLeft();
~~~
mapDraw.controlDragRight()메소드로 마우르 오른쪽 클릭으로 지정합니다. 
~~~javascript
mapDraw.controlDragRight();
~~~


## POI 관련

### poi 언어변경
mapDraw.changeLanguage()를 이용하여 언어를 변경할 수 있습니다.(_ISO_639-1_codes 참조_) 
    - "ko": 한국어
    - "en": 영어 
~~~javascript
mapDraw.changeLanguage("ko");
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/language.html


#

### poi 보이기/숨기기  
mapDraw.changeShowPoi() 메소드를 이용하여 poi를 보이거 숨길 수 있습니다. 

~~~javascript
mapDraw.changeShowPoi({showPoi: true});
~~~
~~~javascript
mapDraw.changeShowPoi({showPoi: false});
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/showPoi.html   

#         

### poi 중요도에 따라 설정한 지도 확대 백분율에 맞게 보이기
mapDraw.setPoiLevelOn()를 이용하여 POI 에 설정한 중요도에 따라 해당 POI 를 지도 확대/축소시 보이게 합니다.    
- clusterLevel_1: number    
POI 의 clusterLevel이 1인 POI 가 보이게 되는 시점의 지도 확대 비율을 설정합니다.   

- clusterLevel_2: number    
POI 의 clusterLevel이 2인 POI 가 보이게 되는 시점의 지도 확대 비율을 설정합니다.  

- clusterLevel_3: number    
POI 의 clusterLevel이 3인 POI 가 보이게 되는 시점의 지도 확대 비율을 설정합니다.  


~~~javascript
mapDraw.setPoiLevelOn(clusterLevel_1, clusterLevel_2, clusterLevel_3);
~~~



### poi 중요도에 따라 설정한 지도 확대 백분율에 맞게 보이기 상태 해제
mapDraw.setPoiLevelOff()를 이용하여 mapDraw.setPoiLevelOn 설정을 해제 합니다.   

~~~javascript
mapDraw.setPoiLevelOff();
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/poiLevel.html

#

### 3D모드에서 poi 높이값 설정 
mapDraw.setPoiRotateDistance()를 이용하여 poi 객체의 높이값을 추가하거나 낮출수 있습니다.
맵에 적용되어 있는 poi의 높이 값을 0으로 인식 합니다.
setPoiRotateDistance() 의 인자값은 소숫점 2자리 까지 반영 됩니다.

~~~ javasript 
mapDraw.setPoiRotateDistance(5.55);
~~~


## Zoom 

### 지도 확대/축소      
mapDraw.ZoomIn() 메소드를 이용하여 지도를 확대할 수 있습니다. 

~~~javascript
mapDraw.zoomIn();
~~~
mapDraw.ZoomOut() 메소드를 이용하여 지도를 축소할 수 있습니다. 
~~~javascript
mapDraw.zoomOut();
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/zoom.html   

### 지도 비율 지정하여 확대/축소   
mapDraw.ZoomControl() 메소드를 이용하여 지도를 확대나 축소시 그 비율을 지정할 수 있습니다.   
비율은 절대비율이며 백분율을 사용합니다. 예를 들어 120은 현재 대비 120%입니다.   
비율을 지정하지 않고 사용시 현재의 비율을 리턴합니다.   
~~~javascript
mapDraw.zoomControl(120);
// 현재 비율 리턴시 : mapDraw.zoomControl();
~~~

#

### 마우스로 zoom 기능 끄기
mapDraw.zoomOff()를 이용하여 마우스로 zoom기능을 비활성화할 수 있습니다 .
~~~javascript
mapDraw.zoomOff();
~~~
mapDraw.zoomOn()을 이용하여 zoom기능을 활성화할 수 있습니다. 
~~~javascript
mapDraw.zoomOn();
~~~


## 길찾기 

### 이동수단별 길찾기 정보 구하기
mapDraw.getNaviInfoByRoute() 메소드를 이용하여 이동수단별 길찾기 정보를 구할 수 있습니다. 매개변수는 다음과 같습니다.
- origin : 출발지 
 	- 좌표로 입력하는 경우     
 ~~~javascript
    {  // 좌표로 입력하는경우 
        position : { x: 0, y: 0, z: 0 },    
        floorId: "FL-qhndqjlqhu7p3894"
    }  
    
    {  // poi의 id를 입력하는 경우
        poiId : poiId,    
        floorId: "FL-qhndqjlqhu7p3894"
    }
~~~
- destination : 도착지,origin과 동일한 format
- waypoints : 경유지, 배열 형태. 배열 안에는 origin과 destination과 같은 형태의 데이터를 주면 됩니다. 아무값도 주지 않으면 경유지 없이 길찾기 기능이 수행됩니다. 

반환타입은 다음과 같습니다.
- routeMap {map} : 이동수단별 길찾기 정보
~~~javascript
{ 
	elevator: {totalTime: 14123.48266130216, totalDistance: 151441.53594482222},
	escalator: {totalTime: 14723.48266130216, totalDistance: 151441.53594482222},
	recommendation:  {totalDistance: 14723.48266130216, totalTime: 151441.53594482222},
	stairs:  {totalDistance: 14723.48266130216, totalTime: 151441.53594482222
}
~~~
사용 예)
~~~javascript
const routeInfos = mapDraw.getNaviInfoByRoute(origin, destination);
~~~
또는
~~~javascript
const routeInfos = mapDraw.getNaviInfoByRoute(origin, destination, waypoints);
~~~

#

### 길찾기  
mapDraw.getRouteOn() 메소드를 이용하여 길찾기 경로를 표시할 수 있습니다. 매개변수는 다음과 같습니다.    
- origin : 출발지
- destination : 도착지
- type  : 이동수단 (추천, 계단, 에스컬레이더, 엘레베이터) 
- waypoints : 경유지
- retResponse : boolean 반환값을 시간으로 받을지 object로 받을지 선택. default는 false. 
	- false인 경우 도착지까지 가는 데 걸리는 시간을 반환함. (miliseconds)
	- true인 경우 object를 받음 
		- locations : 경유하는 포인트들
		- totalDistance : 도착지까지의 총 거리 (cm)
		- totalTime : 도착지까지 가는 데 걸리는 시간 (miliseconds)     
          
각 매개변수의 자세한 정보는 아래와 같습니다. 

주행경로와 경유지를 option으로 줄 수 있습니다. poi Id와 좌표 둘 중 하나의 포맷으로 전달합니다. 
- origin : 출발지 
 	- 좌표로 입력하는 경우     
    {   
        position : { x: 0, y: 0, z: 0 },    
        floorId:   
    }   
 	- poi의 id를 입력하는 경우    
    {   
        poiId : poiId,    
        floorId:   
    }

- destination : 도착지,origin과 동일한 format   
- type : 주행경로, 네가지 option이 있습니다. 아무값도 주지않으면 자동으로 추천 경로로 반환됩니다.  
    - "recommendation" : 추천
    - "stairs": 계단
    - "escalator"
    - "elevator"
- waypoints : 경유지, 배열 형태. 배열 안에는 origin과 destination과 같은 형태의 데이터를 주면 됩니다. 아무값도 주지 않으면 경유지 없이 길찾기 기능이 수행됩니다. 

- poi ID로 길찾기를 하는 경우 
~~~javascript
         let origin = {
            poiId : "PO-KHfT1VzoG9044",
            floorId: "FL-1jeyt4ubl4awn7429"
         };

         let destination = {
            poiId : "PO-KHfT1Vzo_wfsd",
            floorId: "FL-1jeyt4ubl4awn7429"
         };
~~~

- 좌표로 길찾기를 하는 경우 
~~~javascript
         let origin = {
             position: {
                 x: 1795.07054740437,
                 y: 1519.36098544918,
                 z: 0
             },
             floorId: "FL-qhndqjlqhu7p3894"
         };

         let destination = {
             position: {
                 x: 5001.24376187739,
                 y: 1270.39676054864,
                 z: 0
             },
             floorId: "FL-qhndqjlqhu7p3894"
         };
~~~
-경유지를 설정하는 경우 
~~~javascript
        let waypoint1 = { 
            position: {
                x: 194.9300631234604,
                y: 435.2368257718544,
                z: 60
            },
            floorId: "FL-1jeyt4ubl4awn7429"
        };
        
        let waypoint2 = {
            position: {
                x: 758.6335459859386,
                y: 835.624999999005,
                z: 60
            },
            floorId: "FL-1jeyt4ubl4awn7429"
        };
        let waypoints=[waypoint1, waypoint2]
~~~

경유지 정보가 있으면서 도착지까지의 시간만 알고자 할 때 
~~~javascript
let time = mapDraw.getRouteOn(origin,destination,"elevator",waypoints);
~~~
경유지정보는 없고 도착지까지의 거리를 알고싶을 때
~~~javascript
var naviResponse =  mapDraw.getRouteOn(origin,destination,"elevator",[], true); 
~~~
mapDraw.getRouteOff() 메소드를 이용하여 길찾기 경로를 삭제할 수 있습니다. 
~~~javascript
let a = mapDraw.getRouteOff();
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/navigation.html   

#

### 길찾기 목록
- mapDraw.getNavigation()함수를 이용하여 길찾기 목록을 알 수 있습니다. 
- mapDraw.getRouteOn() 함수 호출 후 mapDraw.getNavigation() 함수를 사용하면 길찾기 목록을 array 로 제공합니다.    
- 길찾기는 지도에 그려진 노드를 기반으로 경로를 안내합니다.   
- 배열의 항목에서 move() 를 사용하면 카메라를 해당위치로 이동시킵니다.   
- **이동수단을 이용한 다음 층이 변경된 경우 항목의 distance가 number 가 아닌 층 object 로 표현됩니다.**   

**이동수단 코드**
* OB-ELEVATOR : 엘리베이터
* OB-ESCALATOR : 에스컬레이터 양방향
* OB-ESCALATOR_UP : 에스컬레이터 상행
* OB-ESCALATOR_DOWN : 에스컬레이터 하행
* OB-STAIRS : 계단
* null : 걷기

#### jsMapAPI_03.02.21_R_2021.02.19에서 추가   
- 경로중에 poi가 연결된 경우 poi 정보가 반환됩니다. 

~~~javascript
let list = mapDraw.getNavigation();


/* list 배열의 항목 object */
// list에서 시작점이거나 경유지, 도착지일 때 : poi object 
{   
    isDestination: true // 시작점이거나 경유지, 도착지
    cameraPostion: { x: 1207.928172, y: 1603.837263 } // mapDraw.moveCamera() 시 사용될 position 
    categoryCode: "" // poi categoryCode
    floorId: "FL-t398273jwhdwef" // poi floorId
    icoUrl: "url"  // poi icoUrl
    id: "PO-00000000000" // poi id
    idx: 0 // array index 
    metadatas: [{…}, {…}, {…}, {…}] // poi metadatas
    move: ƒ () // move() 함수 
    position: {x: 0, y:0, z: 0} // scene에서 사용하는 poi position
    title: "티켓부스" // poi title
    titleByLanguages: [{…}, {…}, {…}, {…}] // poi title ByLanguages
    distance: 0 // cm 단위로 이전 항목과의 거리
};

// list에서 이동경로이면서 연결된 poi가 없을 때 : 노드 object
{
    isDestination: false // false 일 때: 이동경로 
    transCode: null // 이동수단 코드 - 위의 이동수단 코드 목록참고
    cameraPostion: {x: 0, y: 0} // mapDraw.moveCamera() 시 사용될 position 
    floorId: "FL-0000000000000" // 층 id 
    idx: 1 // array index 
    move: ƒ () // move() 함수 
    position: {x: 0, y: 0, z: 0} // scene에서 사용하는 position
    distance: 1003 // cm 단위로 이전 항목과의 거리 또는 층변경시 층 object
};

// list에서 이동경로이면서 연결된 poi가 있을 때 : poi object. 도착지, 경유지, 출발지와 데이터구조가 동일, 단 transcode가 추가되어 있음
{   
    isDestination: false // 이동경로 
    transCode: null // 이동수단 코드 - 위의 이동수단 코드 목록참고
    cameraPostion: { x: 1207.928172, y: 1603.837263 } // mapDraw.moveCamera() 시 사용될 position 
    categoryCode: "" // poi categoryCode
    floorId: "FL-t398273jwhdwef" // poi floorId
    icoUrl: "url"  // poi icoUrl
    id: "PO-00000000000" // poi id
    idx: 3 // array index 
    metadatas: [{…}, {…}, {…}, {…}] // poi metadatas
    move: ƒ () // move() 함수 
    position: {x: 0, y:0, z: 0} // scene에서 사용하는 poi position
    title: "티켓부스" // poi title
    titleByLanguages: [{…}, {…}, {…}, {…}] // poi title ByLanguages
    distance: 1982 // cm 단위로 이전 항목과의 거리
};
~~~

- 해당 경로로 카메라를 이동시키기 위해서는 object안에 있는 move()함수를 호출하면 됩니다. 
~~~javascript
list[0].move(); // 항목에 move() 호출시 해당하는 위치로 카메라가 이동합니다.
~~~

- example: https://github.com/dabeeo/web_api/blob/master/samples/navigation.html   

#

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

- 모의주행 카메라 애니메이션 추가   
함수 파라미터에 { zoom: number } 입력시 모의주행중 카메라 이동이 해당 zoom 입력값으로 됩니다. 카메라 이동중 마우스로 지도위치를 변경할 수 없습니다.
~~~javascript
mapDraw.startRouteAnimation({zoom: 200});
~~~

- example: https://github.com/dabeeo/web_api/blob/master/samples/navigation.html   

#

### 길찾기  옵션
mapDraw.setNavigationOption() 메소드를 이용하여 네비게이션 관련 옵션을 세팅할 수 있습니다.  
주행선은 실선이나 점선으로 그리도록 선택할 수 있습니다. 
- lineColor : 네비게이션 주행 라인의 색상을 지정
- lineSpotSize : 주행선의 점의 굵기를 지정합니다. 주행선의 속성이 점선일 경우 적용됩니다.       
- lineSpotInterval : 주행선의 점간의 간격을 지정합니다. 숫자가 커질수록 실선에 가깝게 보입니다. 주행선의 속성이 점선일 경우 적용됩니다.         
- lineZ : 주행선의 z축값 지정합니다.   
- iconUrl : 모의주행의 icon을 지정
<!-- 2020-11-20 모의주행 속도 옵셪 추가 -->
- speedRate : 모의주행 속도 지정. 예를 들어 1.5로 지정한 경우 default대비 1.5배 속도
<!-- 2020-10-15 길찾기 옵션 추가 -->
- origin : 시작지 아이콘으로 image, width, height를 설정   
- destination : 도착지 아이콘으로 image, width, height를 설정
- visibleIcon : 길찾기 경로를 표시할 때 시작지와 도착지 이미지를 보이거나 없앨 수 있습니다. Default는 true 로 아이콘이 표시됩니다.   
<!-- 2020-12-09 길찾기 옵션 추가 -->
- originPositionZ : 출발지 아이콘의 z축값을 지정합니다. 
- destinationPositionZ :  도착지 아이콘의 z축값을 지정합니다. 

시작지, 도착지 아이콘은 아래의 옵션을 추가로 받습니다.  
 - iconUrl : 아이콘 url을 설정합니다. "" 빈값 일때 아이콘이 사라집니다. 
 - width : 아이콘 width 값을 설정합니다. number를 받습니다.   
 - height : 아이콘 height 값을 설정합니다. number를 받습니다.  
<!-- 2021-02-17 길찾기 옵션 추가 -->
#### jsMapAPI_03.02.21_R_2021.02.19에서 추가
- solidLineEnabled : default는 false. 주행라인의 속성을 결정. false일 때는 점선, true일 때 실선으로 그려짐. 
- solidLineWidth : 실선의 굵기. default는 1.


점선으로 표시되는 예입니다.    
~~~javascript
mapDraw.setNavigationOption ({ 
    lineColor:"#0000ff", 
    lineSpotSize:3,
    lineSpotInterval:3000,
    lineZ : 20,
    iconUrl: "http://localhost:3000/demo/img_marker_blue-3x.png",
    speedRate: 1.5,
    originPositionZ: 100,
    destinationPositionZ: 100,
    origin: { // 시작지 아이콘 
        iconUrl: "origin.png", 
        width: 100,
        height: 100
    },
    destination: { // 도착지 아이콘 
        iconUrl: "destination.png",
        width: 100,
        height: 100
    },
    visibleIcon: false  // 경로 표시할때 시작지, 도착지 아이콘 없애기 / 보이기
});
~~~



## 마커 관련

### 내 위치 마커 표시
mapDraw.myLocationOn()메소드를 이용하여 원하는 좌표에 위치를 표시할 수 있습니다. 
- x,y,z 좌표: z좌표는 object보다 높아야 지도에 표시됩니다. 
- onActive : true/false, default=false 다른 층을 간 이후에 다시 돌아왔을 때에도 내위치표시를 계속 할 것인지 설정.

마커 옵션 추가 (option 없으면 default 옵션 적용)
- icon : 마커 이미지와 사이즈 설정 
- image : 마커 이미지 URL 설정 
- size : 마커 widht, height 값
- animate : 마커 애니메이션 설정, default=false
- color : 애니메이션 color 값 
- opacity : 애니메이션 시작 opacity 값 ( 0으로 animation 됨)
- desireScale : 마커 사이즈 대비 목표 스케일 배수 

~~~javascript
mapDraw.myLocationOn(x, y, z, true); // 층변경 후 함수 호출층 복귀시 다시 내위치 표시함.
mapDraw.myLocationOn(x, y, z, false); // 층변경 후 함수 호출층 복귀시 다시 내위치 표시 안함. 

// default 마커에 default animation 적용
mapDraw.myLocationOn(x, y, z, false, {
    animate : true
});

// 마커 옵션 및 animation 옵션 적용
mapDraw.myLocationOn(x, y, z, false, {
    icon :  {
        image : "https://assets.dabeeomaps.com/image/ico/img_mylocation.png",
        size : {
            width:12, 
            height:12
        }
    },
    animate : {
        color : '#96c4e1',
        opacity : 0.8, // 초기 opacity ( 0 으로 animation 됨)
        desireScale : 3.0 // icon 대비 사이즈 배수
    }
});
~~~

mapDraw.myLocationOff()메소드로 좌표에 표시된 아이콘을 삭제할 수 있습니다. 
~~~javascript
mapDraw.myLocationOff();
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/myLocation.html   

#

### 여러개의 마커표시
mapDraw.setMarker()마커를 한개 또는 여러개 표시할 수 있습니다. 이 때 원하는 아이콘을 지정하여 줄 수 있습니다.
여러개의 마커를 줄 수 있으므로 배열 형태로 지정합니다. 
- position:x, y, z 좌표
- image: optional. icon URL. 지정하지 않을 경우 기본 이미지로 표시 
- floorId: optional. 층 지정시. 지정하지 않는 경우 현재의 층으로 표시 
- size : 마커의 이미지 사이즈를 지정
- data : 마커를 클릭했을 때 반환할 정보 
- async : 마커의 사이즈를 줌 배율에 맞춰서 동기화 할 지 여부.
~~~javascript
mapDraw.setMarker({
    marker: [
        {   position:{
            x: i.position.x,
            y: i.position.y,
            z: 50},
        size: { // size 가 없을 경우 지도 비율에 맞춰 이미지 사이즈가 정의
            width:20, 
            height: 20
        },
	data: i // marker를 클릭했을 때 반환할 정보 
        image: "img_marker_blue-3x.png", // 이미지 지정하지 않을 경우 기본 이미지로 표시
        floorId: "[해당층아이디]", // 층을 지정 할때 : 지정하지 않을 경우 현재 보이는 층
	async: true // 마커의 사이즈를 줌배율에 따라 실시간 동기화 : 지정하지 않을 경우 동기화 하지 않음
        }
    ]
});
~~~
mapDraw.clearMarker로 표시한 마커를 삭제할 수 있습니다. 
~~~javascript
mapDraw.clearMarker();
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/marker.html

### 등록된 마커사이즈 실시간 동기화 
mapDraw.setAsyncMarker (isAsync:boolean) 맵에 표시된 마커의 사이즈를 줌 배율에 맞게 동기화 여부를 설정할 수 있습니다.   
초기값은 비동기화(false) 입니다. 비동기화(false)상태에도 mapDraw.setMarker()에서 개별 marker에 async가 true라면 해당 마커는 동기화됩니다.
- true : 실시간동기화. 줌 배율이 확대되어도 초기에 설정된 마커 사이즈가 동일한 크기로 보입니다. 
- false : 동기화 안함 (default)  줌배율이 확대되거나 축소될 때 마커 사이즈가 같은 비율로 확대되거나 축소됩니다. 
~~~javascript
mapDraw.setAsyncMarker(true); // 실시간 줌배율 동기화 
mapDraw.setAsyncMarker(false); // 실시간 줌배율 동기화 안함.
~~~

## 좌표 관련

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


### 지도 방위각에 따라 poi의 x,y 좌표 변환
<!-- 2020-11-10 설명 수정-->
지도 정보에서 받은 poiInfo 의 좌표 정보는 **방위각이 있는 지도**의 경우 좌표 정보가 다르기 때문에 변환해 주어야 합니다.   
scene의 좌표와 camera 의 좌표가 다르기 때문에 scene 좌표를 camera가 보는 좌표로 변환해주어야 moveCamera 가 원하는 위치로 동작합니다.   

<!-- 지도 방위각이 있을 경우 mapDraw.response.poiInfo 의 좌표 정보( position )는 scene의 좌표이기 때문에 moveCamera시 그대로 입력하면 원하는 위치로 이동하지 않을 수 있습니다.-->
카메라 이동을 원하는 poi 좌표를 그대로 입력하여 moveCamera시 그대로 입력하면 원하는 위치로 이동하지 않을 수 있기 때문에 변환해 주어야 합니다.    

<!-- 2020-11-10 !! moveCamera 에 해당함수를 같이 안쓰는 이유 : 사용자가 moveCamera 를 이용하여 지도에서 받은 poi 위치가 아닌 사용자가 지정한 위치로 이동할 수 있기 때문에 함수 분리 !!  -->

**mapDraw.myLocationOn 으로 만든 마커나 mapDraw.setMarker 의 경우도 scene 좌표에 그려지기 때문에 변환이 필요합니다**

~~~javascript
let position = mapDraw.getCameraPosition(x, y);
console.log(position); // return 값 : {x:x', y:y'}
// moveCamera 사용
mapDraw.moveCamera({
    "x": position.x,
    "y": position.y
});
~~~

- example: https://github.com/dabeeo/web_api/blob/master/samples/moveCamera.html


#
   
## 기타

### 지도 이미지 다운로드
현재 보이는 지도를 이미지로 다운로드 합니다.   
.png 파일로 저장됩니다.

~~~javascript
mapDraw.convert2img();
~~~

### 좌표 변환
고객의 좌표계의 좌표를 다비오 지도(원도) 기준의 좌표로 변환합니다.
- position : 변환하고자 하는 대상 좌표값
- degree : 대상 지도가 다비오 지도(원도)를 기준으로 몇도 틀어져있는지
- ~~meterPerPx : 대상 지도가 1픽셀당 몇 m 인지 (다비오 기본 : 0.1 - 10cm = 1px)~~ 사용하지 않음(고객은 일관된 meter 단위의 좌표를 주면 내부에서 알고 있는 cm/px 로 변환해서 사용 함)
- zeroPoint : 대상 지도의 영점이 다비오 지도(원도)를 기준으로 어떤포인트인지 좌표
- xDirection : 원도와 비교 한 x 축 진행방향
- yDirection : 원도와 비교 한 y 축 진행 방향

* example : https://github.com/dabeeo/web_api/blob/master/samples/convert_position_debug.html

~~~ javascript
let convertOptions = {
	position : {
		x:node.position.x, // 고객이 구하려고 하는 x 좌표 (고객의 위치 수집장치를 통해 수집되는 m 단위의 좌표)
		y:node.position.y // 고객이 구하려고 하는 y 좌표 (고객의 위치 수집장치를 통해 수집되는 m 단위의 좌표)
	},
	degree : -5.27, // 고객의 지도를 기준으로 다비오(원도) 의 회전각도 (시계방향이 +, 시계 반대방향이 -)
	zeroPoint : {
		x : -284,
		y : 286.5
	}, // 고객의 지도를 기준으로 다비오(원도) 의 영점 이동 좌표
	xDirection : 1, // 고객의 지도를 기준으로 다비오지도의 x 축 진행방향 (순방향)
	yDirection : -1 // 고객의 지도를 기준으로 다비오지도의 y 축 진행방향 (역방향)
};
let p = mapDraw.convertPosition(convertOptions); // 좌표 변경 함수 호출
~~~


