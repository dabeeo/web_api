

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
<!-- 2020-10-21 추가 -->
### maxZoom
실내 지도 최대 zoom level 설정   
Type: Number   
Default: Infinity   

~~~javascript
let mapOptions = {
    maxZoom: 300
}
~~~   

<!-- 2020-10-21 추가 -->
### minZoom
실내 지도 최소 zoom level 설정   
Type: Number   
Default: 0   

~~~javascript
let mapOptions = {
    minZoom: 30
}
~~~
  

### floor
실내지도 초기화시 최초 표시할 층 설정. 설정 안하는 경우 default로 지도의 default층으로 설정   
Type : String
~~~javascript
floor : "default"
~~~

### theme
실내지도 초기화시 최초 표시할 테마  설정. 설정안하는 경우 지도의 default theme으로 설정    
Type: String
~~~javascript
theme : "default"
~~~

### camera
실내지도 초기시 최초 표시할 카메라 모드  설정. "2d", "3d" 중 하나로 설정.  default는 "3d"입니다.      
Type : String     
Default : "3d"    
~~~javascript
camera : "2d"
~~~

### showPoi
실내지도 초기화시 poi 표시 여부 설정   
Type: Boolean   
Default : true   
~~~javascript
showPoi : false
~~~

### isPoiAngle
실내지도 3d 모드에서 지도의 각을 변화시켜도 poi를 항상 정면을 바라보게 할 지 여부 결정.   
true로 지정하면 poi가 항상 정면을 바라봄. 
Type: Boolean   
Default : false
~~~javascript
isPoiAngle: true
~~~
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
지도가 처음 로드되었을 때 중심으로 표시될 좌표를 설정합니다.
Type: 객체   
Default : 아무것도 지정하지 않으면 지도의 사이즈의 중심으로 지정됩니다.

~~~javascript
center: {
    x : 100, // 지도 내 좌표 x 
    y : 200 // 지도 내 좌표 y
}    
~~~


### angle
3D 지도 설정일 때 화면의 angle을 설정합니다        
Type: 객체     
<!-- 2020-10-08 수정
Default : angle 이 지정되지 않으면 3D 지도일 때 마우스로 3D앵글을 움직일 수 있지만     
angle이 설정되면 마우스로 3D앵글을 움직일 수 없습니다.     
-->
Default : 위에서 본 정면이 초기화면 입니다. ( vertical: 0, horizontal: 0 )    
마우스로 3D앵글을 움직이고 싶지 않을 경우 fixed 옵션을 사용합니다.  

- vertical : number 타입으로 angle 값을 입력합니다.
- horizontal : number 타입으로 angle 값을 입력합니다.
- fixed : Boolean 타입으로 true 일시 각도가 고정되며 마우스로 3D앵글을 움직일 수 없습니다. false 일때에는 초기 각만 지정됩니다. Default는 false 입니다.

~~~javascript
angle: {
    vertical : 20, 
    horizontal : 0,
    fixed : true
}    
~~~

<!-- 2020-11-03 드래그마우스버튼설정/줌마우스 활성화 설정/poi 중요도에 따라 설정한 지도 확대 백분율에 맞게 보이기 -->

### controlDrag
지도이동할 때 사용자의 마우스 버튼을 설정합니다.           
Type: 객체       
Default : 아무것도 지정하지 않으면 3d는 "right" 2d는 "left" 마우스 버튼으로 지도이동이 됩니다.      
- 3d : "left" 왼쪽 클릭으로 지도이동 or "right" 오른쪽 클릭으로 지도이동
- 2d : "left" 왼쪽 클릭으로 지도이동 or "right" 오른쪽 클릭으로 지도이동

~~~javascript
controlDrag: {
    "3d" : "left", // 왼쪽 클릭으로 지도이동
    "2d" : "right" // 오른쪽 클릭으로 지도이동
}    
~~~

    
### controlZoom
사용자가 마우스 휠로 지도 줌을 활성화 / 비활성화 할 것인지 결정합니다.      
Type: Boolean     
Default : true

~~~javascript
controlZoom: false // 마우스 휠로 지도가 확대 / 축소 되지 않습니다.
~~~

### rotationTouch2d
사용자가 2d상에서 touch로 회전기능을 활성화 / 비활성화 할 것인지 결정합니다.  
Type : Boolean
Default : true
~~~javascript
rotationTouch2d : false // touch로 회전되지 않습니다. 
~~~

   
### poiLevel
poi 중요도에 따라 설정한 지도 확대 백분율에 맞게 보이게 설정합니다.     
관련 메서드 : https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#poi-중요도에-따라-설정한-지도-확대-백분율에-맞게-보이기     


Type: 배열    
Default : 아무것도 지정하지 않으면 실행되지 않습니다. 배열모두 숫자를 받아야 하고 -1보다 커야합니다.
만약 Level1에 대하여 항상 보이게 하려면 0을 설정하면 됩니다. 


~~~javascript
poiLevel: [50, 100, 200] // 상(level1), 중(level2), 하(level3)

/*
 위의 예제는
 cluster Level 1 : 줌 50 이상부터 보이게 설정
 cluster Level 2 : 줌 100 이상부터 보이게 설정
 cluster Level 3 : 줌 200 이상부터 보이게 설정
 합니다.
*/

~~~

 ### northReference
 지도의 방위각을 변경하여 지도가 회전하여 보이게 설정합니다.
 이 옵션을 사용하면 원 지도의 방위각 설정을 무시합니다. 
 Type: 각도. 예를 들어 -90인 경우 90도 만큼 왼쪽으로 회전함. 
~~~javascript
northReference: -90

~~~
 
