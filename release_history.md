## Release History

### NOTE
- 공식 api 링크는 다비오 사이트에 올라가 있습니다. 
- https://dabeeomaps.com/docs


#
### jsMapAPI_03.12.01_R_2021.08.20

#### change description  
- mapView 호출시 할당된 메모리를 해제하는 dispose()메소드 추가
- 길찾기에서 엘레베이터등의 이동수단 사용후 바로 도착지가 나오는 경우 층이동경로가 누락되는 버그 수정
- 길찾기에서 에스컬레이터 양방향으로 설정되어 있는 경우 생기는 버그 수정

#### changed API
- mapView시 할당된 메모리를 해제하는 dispose()메소드 추가    
- https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#지도-메모리이벤트-해제



#
### jsMapAPI_03.11.01_R_2021.07.23

#### change description  
- 모의주행 옵션에서 도착지의 poi의 object의 색상,투명도를 변경 가능하며 색상애니메이션 효과를 줄 수 있도록 옵션 추가
- Poi에 연결된 특정 object의 색상 및 오브젝트의 색상, 투명도를 변경 가능하며 색상애니메이션 효과를 줄 수 있는 메소드 추가

#### changed API
- 모의주행 옵션에서 도착지의 poi의 object의 색상,투명도를 변경 가능하며 색상애니메이션 효과를 줄 수 있도록 옵션 추가    
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#특정-오브젝트-속성-변경
- Poi에 연결된 특정 object의 색상, 투명도를 변경 가능하며 색상애니메이션 효과를 줄 수 있는 메소드 추가    
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#모의주행-옵션

#
### jsMapAPI_03.06.01_R_2021.05.28

#### change description  
- 길찾기 목록 함수 (mapDraw.getNavigation())호출시 경로에 대하여 simplify 적용 및 방향에 대한 정보 추가 
- poi title의 행간 간격 조정 반영

#### changed API
- 길찾기 목록 함수 (mapDraw.getNavigation())호출시 경로에 대하여 simplify 적용 및 방향에 대한 정보 추가 
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기-목록

#
### jsMapAPI_03.05.01_R_2021.05.21
#### change description  
- mapView 호출시 response에 현재 MapDraw option return
#### changed API
- mapView 호출시 response에 현재 MapDraw option return
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/response.md#mapoption-정보


#
### jsMapAPI_03.02.27_R_2021.04.16
#### change description  
- iFrame밖에서의 드래그 마우스 이벤트 처리하도록 카메라컨트롤 모듈 업데이트
- mapDraw 클래스의 response에 section 정보 추가 - sectionInfo
- mapInfo 클래스에서 mapView.response와 동일한 모든 map에 관련된 정보 반환하는 메소드 추가 - mapInfo.getAll()
- mapDraw.setMarker()에 각 마커의 사이즈를 줌 배율에 맞춰서 동기화 할 지 여부를 결정할 수 있는 option 추가 
- mapDraw.init2DCameraInfo()와 mapDraw.init3DCameraInfo() 호출시 카메라 회전상태 초기상태로 가도록 수정
#### changed API
- mapDraw 클래스의 response에 section 정보 추가   
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/response.md#section-정보
- mapInfo 클래스에서 mapView.response와 동일한 모든 map에 관련된 정보 반환하는 메소드 추가
  https://github.com/dabeeo/web_api/tree/master/docs/MapInfo#모든-response-가져오기  
- mapDraw.setMarker()에 각 마커의 사이즈를 줌 배율에 맞춰서 동기화 할 지 여부를 결정할 수 있는 option추가 
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#여러개의-마커표시
- mapDraw.init2DCameraInfo()와 mapDraw.init3DCameraInfo() 호출시 카메라 회전상태 초기상태로 가도록 수정
  https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#카메라-초기화-기능
  
 
#
### jsMapAPI_03.02.26_R_2021.04.09
#### change description  
- mapView 클래스에 카메라가 최대 움직 일 수 있는 영역을 설정하는 옵션 추가 - 드래그시 보여주는 공백 조정

#### changed API
- mapView 클래스에 카메라가 최대 움직 일 수 있는 영역을 설정하는 옵션 추가
  https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#panningpercent

#
### jsMapAPI_03.02.25_R_2021.03.26
#### change description  
- mapDraw.myLocationOn()에 animate option 추가
- 미리보기 처음 화면에서 폰트 굵게 나오는 현상 해결

#### changed API
- mapDraw.myLocationOn()에 animate option 추가    
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#내-위치-마커-옵션


#
### jsMapAPI_03.02.24_R_2021.03.19
#### change description  
- POI font 8pt에서도 선명하게 보이도록 개선
- object click시 object에 연결된 poi가 여러개인 경우를 처리할 수 있도록 배열형태로도 poi를 반환하도록 반환속성 추가 
- rest API 무응답시 S3에서 데이터 가져오도록 예외처리  

#### changed API
- object click시 배열형태로 poi 반환 추가     
  https://github.com/dabeeo/web_api/blob/master/docs/Event.md#object-click

#
### jsMapAPI_03.02.23_R_2021.03.12
#### change description  
- 사용자가 2d상에서 마우스로 회전기능을 활성화 / 비활성화 할 것인지 결정할 수 있는 옵션 추가 
- poi click event 동작 이상 해결
- MapLocal class 삭제
- 경로별 시간과 총거리 알 수 있는 메소드 추가   
- MapInfo로 poi 가져올 때 속도 느려지는 현상 수정    
- 지도 object line이 일부 모바일 브라우저에서 깨져보이는 현상 수정 
 
#### changed API
- 사용자가 2d상에서 마우스로 회전기능을 활성화 / 비활성화 할 것인지 결정할 수 있는 옵션 추가    
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#rotationmouse2d
- 경로별 시간과 총거리 알 수 있는 메소드 추가   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#이동수단별-길찾기-정보-구하기


#
### jsMapAPI_03.02.22_R_2021.02.26 

#### change description
- 바닥판 poi 들의 아이콘이 바닥판 아래로 뭍히는 에러 해결
- 옵션없이 default로 길찾기 기능 실행시 주행아이콘이 높이 뜨는 문제 해결

#
### jsMapAPI_03.02.21_R_2021.02.19 

#### change description
- 모의 보행 시, 길 안내 정보를 POI 타이틀로 가져오는 기능
- 모의 보행 시 실선으로 주행선 그릴 수 있도록 옵션 추가
- 멀티뷰상태에서 터치 동작 오류
- 같은 층에 경로가 여러개일 때 생기는 길찾기 오류 해결

#### changed API
- 모의 보행 시, 길 안내 정보를 POI 타이틀로 가져오는 기능   
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기-목록
- 모의 보행 시 실선으로 주행선 그릴 수 있도록 옵션 추가 (solidLineEnabled, solidLineWidth 추가)    
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#길찾기--옵션

#
### jsMapAPI_03.02.20_R_2021.02.05 

#### change description
- 여러개의 map을 동시에 사용할 수 있도록 수정
- 카메라의 설정 (zoom과 rotation)을 초기화할 수 있도록 메소드 제공

#### changed API
- 카메라의 설정 (zoom과 rotation)을 초기화할 수 있도록 메소드 제공
https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/Methods.md#카메라-모드-변경

#
### jsMapAPI_03.02.19_R_2021.01.29
- 중문폰트 동일한 굵기로 보이지 않는 문제 해결

#
### jsMapAPI_03.02.18_R_2021.01.26

#### change description
- 지도 정보를 불러오는 새로운 클래스 추가 (MapInfo)- 버전, poi
- 지도 방위각 설정하는 MapView option 추가
- 지도 렌더링시 poi 안보이는 문제 해결

#### changed API
- 지도 정보를 불러오는 새로운 클래스 추가 (MapInfo)  
https://github.com/dabeeo/web_api/tree/master/docs/MapInfo
- 지도 방위각 설정하는 MapView option 추가   
https://github.com/dabeeo/web_api/blob/master/docs/MapView/options.md#northreference

#
### jsMapAPI_03.02.17_R_2021.01.08

#### change description
- 지도 로딩을 빠르게 하는 새로운 클래스 추가 (MapLocal)
- 길찾기시 (getRouteOn()) 총거리 반환하도록 옵션 추가 
- 마커 클릭시 이벤트 안올라오는 버그 수정

#### changed API
- 지도 로딩을 빠르게 하는 새로운 인터페이스 추가 (MapLocal)
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
