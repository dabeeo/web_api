## Release History


### javascript_03.02.03_S_2020.09.25
jsMapAPI_03.02.03_s_2020.09.25.js
- 지도회전(2d상태로 회전) 구현
- 모의주행시 라인 색 및 길안내 애니메이션 아이콘 변경 api 추가 mapDraw.setNavigationOption()
- 모의주행시 카메라 따라 움직임 설정하도록 option 추가 mapDraw.startRouteAnimation()
- poi 좌표 변환 api 추가 mapDraw.getCameraPosition(x, y)
- 길찾기 루트 반환 API 추가 mapDraw.getNavigation()
- 내위치 보기 오류 수정

### jsMapAPI_03.02.02_s_2020.09.18.js
- 길찾기 메소드에 경유지 옵션 추가 
- 경로 안내시 튀는 문제 해결
- 방위각 설정후 poi 위치 달라지는 문제 해결
- 특정 x,y 좌표로 지도 이동하는 기능 추가
- 지도로딩 전에 콜백 함수 불려지는 이슈 해결
- 3d 기울기 옵션 - 내비실행시 지도 기울어지는 문제 해결
- 경로안내시 줌 확대되어 표시되아가 층바뀌면 줌 아웃되는 문제 해결

### javascript_03.02.01_S_2020.09.11
- poi 마커 클릭 이벤트 in 모바일
- zoom 형식을 절대값으로 받을 수 있게, 현재 zoom 정보를 반환하도록
- 마커 사이즈 조정
- 줌레벨에 따른 POI 보여주기 기능

### javascript_03.01.10_S_2020.09.04
- 지도 option 추가 : center{x,y} , angle{vertical, horizonatal}
- poi click시 poi 정보 return 해주는 api 추가 
- 모바일에서 drag시 한손가락 touch로 drag, 두손가락 touch로 회전되게 수정
