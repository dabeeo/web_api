## Release History

### NOTE
- 공식 api 링크는 다비오 사이트에 올라가 있습니다. 
- https://dabeeomaps.com/docs


#
### jsMapAPI_03.02.17_R_2021.01.08

#### change description
- 지도 로딩을 빠르게 하기 위하여 네트워크를 통하지 않고 다운로드받은 지도를 로딩하도록 방법 추가 
- 길찾기시 (getRouteOn()) 총거리 반환하도록 옵션 추가 
#### changed API
- 지도 로딩을 빠르게 하기 위하여 네트워크를 통하지 않고 다운로드받은 지도를 로딩하도록 방법 추가 
https://github.com/dabeeo/web_api/tree/master/docs/MapLocal
- 길찾기시 (getRouteOn()) 총거리 반환하도록 옵션 추가 
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기


#
### jsMapAPI_03.02.16_R_2020.12.24

#### change description
- POI 숨긴 상태에서 드래그시 멈추는 현상 수정
- 지도 로딩시 3d지도에서 항상 poi를 정면으로 보이게 하는 옵션 추가 (isPoiAngle)
#### changed API
- 지도 로딩시 3d지도에서 항상 poi를 정면으로 보이게 하는 옵션 추가 (isPoiAngle)
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#ispoiangle

#
### jsMapAPI_03.02.15_R_2020.12.18

#### change description
- POI 보이기/숨기기에서 같은 기능을 여러번 불렀을 때 나는 오류 수정
- 모의보행시 노드 안내선에 대한 옵션 추가(점선을 실선으로 보일 수 있도록) (lineSpotSize, lineSpotInterval, lineZ)            
- 길찾기 시 거리 소숫점2자리로 제한
- 웹브라우저 기본배율 변경시 좌표 변환 (POI/Object click event)
#### changed API
- 모의보행시 노드 안내선 점선을 실선으로 보일 수 있도록 옵션 추가
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기--옵션

#
### jsMapAPI_03.02.14_R_2020.12.11
#### change description
- touch로 회전기능 끄거나 켤 수 있도록 mapView에 option 추가 (rotationTouch2d)
- 길찾기 기능에서 출발지와 도착지의 아이콘의 z축 좌표를 설정할 수 있도록 option 추가 (originPositionZ, destinationPositionZ)

#### changed API
- touch로 회전기능 끄거나 켤 수 있도록 mapView에 option 추가 
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#rotationtouch2d
- 길찾기 기능에서 출발지와 도착지의 아이콘의 z축 좌표를 설정할 수 있도록 option추가
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기--옵션

#
### jsMapAPI_03.02.13_R_2020.12.04
#### change description
- 내위치 마커표시 기능에 층변경시에도 항상 내 위치를 표시할 수 있도록 option 추가 

#### changed API
- 내위치 마커표시 기능에 층변경시에도 항상 내 위치를 표시할 수 있도록 option 추가 
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#내-위치-마커-표시

#
### jsMapAPI_03.02.12_R_2020.11.27
#### change description
- 길찾기 - 모의보행 시 속도 지정 옵션 추가 

#### changed API
- 길찾기 - 모의보행 시 속도 지정 옵션 추가    
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기--옵션

#
### jsMapAPI_03.02.11_R_2020.11.20
#### change description
- canvasSize 설정시 화면 왜곡 이슈 

#
### jsMapAPI_03.02.10_R_2020.11.13 
#### change description
- 줌 레벨 관계없이 3d에서 마커 사이즈 고정 기능   
- 지도 좌표기준으로 카메라 이동 함수 생성  
- 3D지도 모드 시, POI 타이틀도 같이 회전 및 각도 반영 기능 삭제
- 일부 지도에서 지도 드래그 안되는 현상 수정

#### changed API

- 지도 좌표기준으로 카메라 이동 함수 생성   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#지도-좌표-기준으로-x-y좌표로-이동
#

### jsMapAPI_03.02.09_R_2020.11.06 

#### change description
- internet explorer 11 동작
- 지도 드래그시 캔버스 밖으로 벗어나지 않도록 수정 
- 맵 그릴 때 주는 option 추가 : 
  - 드래그마우스 버튼 
  - 줌마우스 활성화 
  - poi중요도에 따라 지도에 보져울 백분율 설정
- 3D지도 모드 시, POI 타이틀도 같이 회전 및 각도 반영

#### changed API

- 3D지도 모드 시, POI 타이틀도 같이 회전 및 각도 반영   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#3d모드에서-poi-높이값-설정
- 맵 그릴 때 주는 option 추가 : 
  - 드래그마우스 버튼   
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#controldrag
  - 줌마우스 활성화   
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#controlzoom
  - poi중요도에 따라 지도에 보져울 백분율 설정   
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#poilevel

#

### jsMapAPI_03.02.08_R_2020.10.30 

#### change description
- 모바일에서 폰트 align
- 마커 클릭 이벤트 추가
- 마커 클릭시 반환할 정보를 마커그릴 때 주도록 option 추가 
- zoom 최대최소 상태에서 지도 깜빡임 현상 개선
- 슬램용 좌표 변환 api 추가
- 네비게이션 시 좌표 이외에 poi로 지정할 수 있도록 option 추가

#### changed API
- 마커 클릭 이벤트 추가   
https://github.com/dabeeo/web_api/blob/master/docs/Event.md#marker-click
- 마커 클릭시 반환할 정보를 마커그릴 때 주도록 option 추가   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#여러개의-마커표시
- 슬램용 좌표 변환 api 추가   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#좌표-변환
- 네비게이션 시 좌표 이외에 poi로 지정할 수 있도록 option 추가   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기

#

### jsMapAPI_03.02.07_R_2020.10.22
#### change description
- 2d 회전 기능 추가 (두손가락 swipe)
- zoom 최대치/최소치 설정
- 줌 레벨 관계없이 2d에서 마커 사이즈 고정
- object 클릭시 poi 메타데이터 반환

#### changed API
- zoom 최대치/최소치 설정   
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#maxzoom
- object 클릭시 poi 메타데이터 반환   
https://github.com/dabeeo/web_api/blob/master/docs/Event.md#object-click
- 줌 레벨 관계없이 2d에서 마커 사이즈 고정   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#등록된-마커사이즈-실시간-동기화

#

### jsMapAPI_03.02.06_R_2020.10.16
#### change description
- 2d 회전 기능 제거
- 길찾기 시 출발/도착 마커 변경/삭제 기능 추가
- 폰트 수정 - 노트산스 적용, 중국어, 일본어 지원, bold체 
- 속도 개선 
#### changed API
- 길찾기 시 출발/도착 마커 변경/삭제 기능 추가
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기--옵션

#

### jsMapAPI_03.02.05_R_2020.10.08
#### change description
- 3d모드에서 moveCamera 함수 실행 시 지도 기울어짐(같은 위치 연속 호출) 이슈 해결
- 아이콘 사이즈가 미리보기 화면에서 작게 보이는 문제 해결
- 지도회전 구현 - 3 손가락으로 동작 
- 3D지도에서 핀치 줌 아웃 or 드래그 시 초기 각도가 변경되지 않게 지정 - angle option 추가 필요
#### changed API
- MapView의  option 수정 : anlge option 에 fixed 설정 추가 
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#angle  

#

### jsMapAPI_03.02.04_R_2020.09.29
- 2D 모드에서 네비게이션 실행시 지도 돌아감
- 네비게이션 종료후 카메라 목적지에 멈춰야 함

#
### jsMapAPI_03.02.03_R_2020.09.25
- 지도회전(2d상태로 회전) 구현
- 모의주행시 라인 색 및 길안내 애니메이션 아이콘 변경 api 추가 mapDraw.setNavigationOption()
- 모의주행시 카메라 따라 움직임 설정하도록 option 추가 mapDraw.startRouteAnimation()
- poi 좌표 변환 api 추가 mapDraw.getCameraPosition(x, y)
- 길찾기 루트 반환 API 추가 mapDraw.getNavigation()
- 내위치 보기 오류 수정   

#

### jsMapAPI_03.02.02_s_2020.09.18
- 길찾기 메소드에 경유지 옵션 추가 
- 경로 안내시 튀는 문제 해결
- 방위각 설정후 poi 위치 달라지는 문제 해결
- 특정 x,y 좌표로 지도 이동하는 기능 추가
- 지도로딩 전에 콜백 함수 불려지는 이슈 해결
- 3d 기울기 옵션 - 내비실행시 지도 기울어지는 문제 해결
- 경로안내시 줌 확대되어 표시되아가 층바뀌면 줌 아웃되는 문제 해결
#
### javascript_03.02.01_S_2020.09.11
- poi 마커 클릭 이벤트 in 모바일
- zoom 형식을 절대값으로 받을 수 있게, 현재 zoom 정보를 반환하도록
- 마커 사이즈 조정
- 줌레벨에 따른 POI 보여주기 기능
#
### javascript_03.01.10_S_2020.09.04
- 지도 option 추가 : center{x,y} , angle{vertical, horizonatal}
- poi click시 poi 정보 return 해주는 api 추가 
- 모바일에서 drag시 한손가락 touch로 drag, 두손가락 touch로 회전되게 수정
