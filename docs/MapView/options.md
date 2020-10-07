

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
Default : angle 이 지정되지 않으면 3D 지도일 때 마우스로 3D앵글을 움직일 수 있지만     
angle이 설정되면 마우스로 3D앵글을 움직일 수 없습니다.     
입력 예:      
angle.vertical : angle 입력     
angle.horizontal : angle 입력

~~~javascript
angle: {
    vertical : 20, 
    horizontal : 0 
}    
~~~
