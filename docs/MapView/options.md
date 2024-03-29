

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


### language
실내 지도 poi를 표기할 언어 설정
Default : "ko"

~~~javascript
let mapOptions = {
    language: "ko",
}
~~~

### camera
실내지도 초기시 최초 표시할 카메라 모드  설정. "2d", "3d" 중 하나로 설정.  default는 "3d"입니다.      
Type : String     
Default : "3d"    
~~~javascript
camera : "2d"
~~~

#
## zoom 관련
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
  
#
## poi 관련
### showPoi
실내지도 초기화시 poi 표시 여부 설정   
Type: Boolean   
Default : true   
~~~javascript
showPoi : false
~~~

### isPoiSprite
실내지도 3d 모드에서 지도의 각을 변화시켜도 poi를 항상 정면을 바라보게 할 지 여부 결정.   
true로 지정하면 poi가 항상 정면을 바라봄. 
Type: Boolean   
Default : false
~~~javascript
isPoiSprite: true
~~~

### isPoiAngle (Deprecated)
poi 정면 바라보는 기능을 사용하기 위해 isPoiAngle 대신 isPoiSprite를 사용하기 바랍니다. 
실내지도 3d 모드에서 지도의 각을 변화시켜도 poi를 항상 정면을 바라보게 할 지 여부 결정.   
true로 지정하면 poi가 항상 정면을 바라봄. 
Type: Boolean   
Default : false
~~~javascript
isPoiAngle: true
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

#
### canvasSize
지도의 크기를 결정하기 위한 넓이와 높이로 container dom element의 사이즈(width, height)와 동일하게 설정되어야 합니다. 
Type: 객체    
Default : 아무것도 지정하지 않으면 화면 전체 사이즈로 지정됩니다. 

~~~javascript
canvasSize: {
    width : 1000,
    height : 800
}    
~~~
#
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

#
### angle
3D 지도 설정일 때 화면의 초기 angle을 설정합니다        
Type: 객체     
<!-- 2020-10-08 수정
Default : angle 이 지정되지 않으면 3D 지도일 때 마우스로 3D앵글을 움직일 수 있지만     
angle이 설정되면 마우스로 3D앵글을 움직일 수 없습니다.     
-->
Default : 위에서 본 정면이 초기화면 입니다. ( vertical: 0, horizontal: 0 )    
마우스로 3D앵글을 움직이고 싶지 않을 경우 fixed 옵션을 사용합니다.  

- vertical : number 타입으로 angle 값을 입력합니다. 0에서 35까지 가능합니다. 
- horizontal : number 타입으로 angle 값을 입력합니다. (아직은 0으로 고정되어 있습니다. 향후 구현 예정) 
- fixed : Boolean 타입으로 true로 설정시  각도가 고정되며 마우스로 3D앵글을 움직일 수 없습니다. false 일때에는 초기 각만 지정됩니다. Default는 false 입니다.

~~~javascript
angle: {
    vertical : 20, 
    horizontal : 0,
    fixed : true
}    
~~~

#
### limit angle
3D 지도 설정일 때 화면의 (vertical)angle limit을 설정합니다.
Type : number
Default : 80

- tiltLimitAngle : number 타입으로 (vertical)angle limit 값을 입력합니다. 0에서 80까지 가능합니다.

~~~javascript
tiltLimitAngle: 80   
~~~


<!-- 2020-11-03 드래그마우스버튼설정/줌마우스 활성화 설정/poi 중요도에 따라 설정한 지도 확대 백분율에 맞게 보이기 -->
#
## 마우스 관련
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


## rotation 관련
### rotationTouch2d
사용자가 2d상에서 touch로 회전기능을 활성화 / 비활성화 할 것인지 결정합니다.  
Type : Boolean   
Default : true
~~~javascript
rotationTouch2d : false // touch로 지도가 회전되는 기능을 비활성화합니다.  
~~~

### rotationMouse2d
사용자가 2d상에서 마우스로 회전기능을 활성화 / 비활성화 할 것인지 결정합니다.  
Type : Boolean   
Default : true
~~~javascript
rotationMouse2d : false // 마우스로 지도가 회전되는 기능을 비활성화합니다.  
~~~
   

 ### northReference
 지도의 방위각을 변경하여 지도가 회전하여 보이게 설정합니다.  
 이 옵션을 사용하면 원 지도의 방위각 설정을 무시합니다.   
 Type: 각도. 예를 들어 -90인 경우 90도 만큼 왼쪽으로 회전함.   
~~~javascript
northReference: -90

~~~


 ### panningPercent
 카메라가 최대 움직 일 수 있는 영역을 설정합니다.
 전체 오브젝트의 사이즈 대비 카메라가 움직일 수 있는 비율입니다.
 
 Type: Number, 최대값: 1.0 최소값: 0.05   
 Default: 1.0
 
~~~javascript
panningPercent: 1.0
~~~

#### 설명 
 빨간색 영역이 카메라가 최대로 움직 일 수 있는 영역입니다.  
 최소값은 0.05로서 전체 오브젝트의 사이즈의 5% 까지만 이동 할 수 있습니다.
 
 <img width="919" alt="camera_panning_box_0 05" src="https://user-images.githubusercontent.com/79128769/114351050-0b835e80-9ba5-11eb-98b5-7befcb92f006.png">
 
 0.5일 경우 카메라는 전체 오브젝트의 사이즈의 50% 까지만 이동 할 수 있습니다.
 <img width="924" alt="camera_panning_box_0 5" src="https://user-images.githubusercontent.com/79128769/114351043-08886e00-9ba5-11eb-8743-20dc89609944.png">
 
 1.0일 경우 카메라는 전체 오브젝트 영역의 각 꼭지점까지 이동 할 수 있습니다.
 <img width="919" alt="camera_panning_box_1 0" src="https://user-images.githubusercontent.com/79128769/114351066-12aa6c80-9ba5-11eb-8472-4a1a463101b9.png">
 
 panningPercent를 1.0이하로 설정 후, zoom을 변경하여 카메라의 뷰 사이즈가 오브젝트의 사이즈보다 작아질 경우 
 카메라가 움직일 수 있는영역(빨강색 영역)이 오브젝트 사이즈에서 카메라 뷰 사이즈를 뺀 만큼 dynamic하게 늘어나고 줄어듭니다.
 결국 zoomIn을 하다보면 panningBox는 처음에 1.0으로 설정한 것 과 같이 오브젝트의 최대 사이즈까지 늘어나게 됩니다.    
 참고 영상 : https://user-images.githubusercontent.com/79128769/114359397-df6cdb00-9bae-11eb-9ff6-7380496c4761.mov

## 기타
### isUseTag
Type : Boolean   
Default : false
~~~javascript
isUseTag : false // marker, poi와 연동되는 tag를 생성을 원할 경우 true값으로 전환하여 사용합니다. 태그를 사용할 경우 map위에 또다른 component를 적용하신다면 필히 zIndex값을 주세요.
~~~
사용 관련 메소드 - setMarker, setPOITag 메소드 참조
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md

