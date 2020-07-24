### dabeeo web api에 대한 설명
api를 사용학 위한 간단한 설명입니다. 자세한 내용은 해당 파일을 참고하세요. 

## 지도그리기
indoorMapApi.MapView를 이용하여 지도를 그릴 수 있습니다. 
MapView를 호출시 mapDraw를 반환하며 여기에 여러 지도에 관한 정보들이 담겨있습니다. 지도 설정변경시 이러한 값들을 사용합니다. 

#### mapDraw에 담긴 정보
floorInfo : 층 정보  
themeInfo : 테마 정보
mapName  : 지도 이름
poiInfo  : poi 정보 
~~~javascript
new indoorMapApi.MapView(
mapContainer, // 컨테이너
mapOptions, // 옵션
callbackFunc // callback 함수)
~~~


## 지도이름 가져오기  
지도 이름은 MapDraw의 속성에 담겨 있습니다. 
~~~javascript
MapDraw.response.mapName
~~~

## poi 정보 가져오기   
poi 정보는 MapDraw의 속성에 담겨 있습니다. 
~~~javascript
MapDraw.response.poiInfo
~~~



## 층 선택하기     
mapDraw.redrawMap() 메소드를 이용하여 층을 변경할 수 있습니다. 
~~~javascript
mapDraw.redrawMap({floor: floorId});
~~~

## 테마 선택하기  
mapDraw.redrawMap() 메소드를 이용하여 테마를 변경할 수 있습니다. 
~~~javascript
mapDraw.redrawMap({theme: themeId});
~~~
## poi 보이기/숨기기  
mapDraw.changeShowPoi() 메소드를 이용하여 poi를 보이거 숨길 수 있습니다. 

~~~javascript
mapDraw.changeShowPoi({showPoi: true});
~~~
~~~javascript
mapDraw.changeShowPoi({showPoi: false});
~~~

## 확대/축소   
mapDraw.ZoomIn() 메소드를 이용하여 지도를 확대할 수 있습니다. 

~~~javascript
mapDraw.zoomIn();
~~~
mapDraw.ZoomOut() 메소드를 이용하여 지도를 축소할 수 있습니다. 
~~~javascript
mapDraw.zoomOut();
~~~

## 길찾기  
mapDraw.getRouteOn() 메소드를 이용하여 길찾기 경로를 표시할 수 있습니다.
이 때 목적지까지 가는데 걸리는 시간이 반환됩니다. (miliseconds)
~~~javascript
let a = mapDraw.getRouteOn(startPoint, destPoint);
~~~
mapDraw.getRouteOff() 메소드를 이용하여 길찾기 경로를 삭제할 수 있습니다. 
~~~javascript
let a = mapDraw.getRouteOff();
~~~

## 모의주행  
mapDraw.startRouteAnimation() 메소드를 이용하여 모의주행을 표시할 수 있습니다.
이 때 목적지까지 가는데 층이 변경되는 경우 층변경에 대하여 "floor-changed" 이벤트가 반환됩니다. 
~~~javascript
mapDraw.startRouteAnimation();
~~~
mapDraw.stopRouteAnimation() 메소드를 이용하여 모의주행을 멈출 수 있습니다. 
~~~javascript
mapDraw.stopRouteAnimation();
~~~
모의주행이 완료되면 "navi-complete" 이벤트가 반환됩니다. 


