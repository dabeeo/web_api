

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
