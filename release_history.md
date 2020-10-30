## Release History

### NOTE
jsMapApi.js와 같이 version 없이 사용할 경우 최신 version을 부르게 되어 있습니다.
특정 version을 부를 경우 아래 버전별 파일명을 참고하세요.

#

### jsMapAPI_03.02.08_R_2020.10.30 
jsMapAPI_03.02.08_R_2020.10.30 

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
jsMapAPI_03.02.07_R_2020.10.22.js
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
jsMapAPI_03.02.06_R_2020.10.16.js
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
jsMapAPI_03.02.05_R_2020.10.08.js
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
jsMapAPI_03.02.04_R_2020.09.29.js
- 2D 모드에서 네비게이션 실행시 지도 돌아감
- 네비게이션 종료후 카메라 목적지에 멈춰야 함

#
### jsMapAPI_03.02.03_R_2020.09.25
jsMapAPI_03.02.03_R_2020.09.25.js
- 지도회전(2d상태로 회전) 구현
- 모의주행시 라인 색 및 길안내 애니메이션 아이콘 변경 api 추가 mapDraw.setNavigationOption()
- 모의주행시 카메라 따라 움직임 설정하도록 option 추가 mapDraw.startRouteAnimation()
- poi 좌표 변환 api 추가 mapDraw.getCameraPosition(x, y)
- 길찾기 루트 반환 API 추가 mapDraw.getNavigation()
- 내위치 보기 오류 수정
#
### jsMapAPI_03.02.02_s_2020.09.18.js
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
