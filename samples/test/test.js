/* globals Chart:false, feather:false */
let mapDraw = null;
let mapView = null;
let mapPoiInfo = null;
let mapFloorName = {};

(function () {
    "use strict";

    feather.replace();
    initMap();
    initSidebar();
    initTestMenu();
    initCameraTest();
    initMouseTest();
    initPoiTest();
    initZoomTest();
    initNavigationOptionTest();
    initAnimationRouteOptionTest();
    initMyLocationTest();
    initMarkerTest();
})();

//////////////////////////////////////////////////////////////////////////////////
// mapView로 지도그리기
function initMap() {
    let mapContainer = document.querySelector("#map");

    //지도 표시할 div
    let authorization = new indoorMapApi.Authorization({
        clientId: "6Lwuu9wa4wta0NiHwy1fO5",
        clientSecret: "93ab5dbaf7fa6c9017cf9cb9ef4dc8fd"
    });

    let mapOptions = {
        authorization: authorization
    };

    new indoorMapApi.MapView(
        mapContainer, // 컨테이너
        mapOptions, // 옵션
        function (response) {
            // 맵 로드 콜백
            var code = response.getCode();
            if (code === 200) {
                mapView = response.getPayload().mapView;
                mapDraw = response.getPayload().mapDraw;
                // do something
                console.log(mapDraw.response);
                console.log("map view success!");
                initFloorSelect();
                initCameraSelect();
                initLanguageSelect();
                initThemeSelect();
                initPoiSelect();
            }
        }
    );
}

//////////////////////////////////////////////////////////////////////////////////
//층 상태 및 층 선택
//층변경 다시 그리기:  redrawMap
function initFloorSelect() {
    let floorInfo = mapDraw.response.floorInfo;
    for (let i = 0; i < floorInfo.length; i++) {
        var floor = floorInfo[i];
        mapFloorName[floor.id] = floor.name[0].text;
    }
    // 옵션창에 층 추가하기
    let selectElement = document.querySelector("select#floor");

    for (let index = 0; index < floorInfo.length; index++) {
        let floor = floorInfo[index];
        let newOption = document.createElement("option");
        newOption.value = floor.id;
        if (floor.defaultYn == true) {
            newOption.selected = true;
        }
        newOption.appendChild(document.createTextNode(floor.name[0].text));
        selectElement.appendChild(newOption);
    }
    selectElement.addEventListener("change", function (e) {
        mapDraw.redrawMap({floor: e.target.value});
    });

    document.addEventListener("floor-changed", function (e) {
        var floorId = e.detail;
        document.querySelector('select#floor [value="' + floorId + '"]').selected = true;
    });
}

//////////////////////////////////////////////////////////////////////////////////
//카메라 상태 및 카메라 선택
//카메라 변경 : changeCamera
function initCameraSelect() {
    let selectElement = document.querySelector("select#camera");
    selectElement.addEventListener("change", function (e) {
        mapDraw.changeCamera({camera: e.target.value});
    });
}

//////////////////////////////////////////////////////////////////////////////////
//poi 언어 상태 및 언어 선택
//poi 언어 변경 : changeLanguage
function initLanguageSelect() {
    let langInfo = mapDraw.response.langInfo;
    // 언어 추가하기
    let selectElement = document.querySelector("select#language");
    for (let index = 0; index < langInfo.length; index++) {
        let lang = langInfo[index];
        let newOption = document.createElement("option");
        newOption.value = lang.lang;
        if (lang.defaultYn == true) {
            newOption.selected = true;
        }
        newOption.appendChild(document.createTextNode(lang.name));
        selectElement.appendChild(newOption);
    }

    selectElement.addEventListener("change", function (e) {
        mapDraw.changeLanguage(e.target.value);
    });
}

//////////////////////////////////////////////////////////////////////////////////
//테마 상태 및 테마 선택
//테마 변경 다시 그리기 : redrawMap
function initThemeSelect() {
    let themeInfo = mapDraw.response.themeInfo;
    let selectElement = document.querySelector("select#theme");
    for (let index = 0; index < themeInfo.length; index++) {
        let theme = themeInfo[index];
        let newOption = document.createElement("option");
        newOption.value = theme.id;
        if (theme.defaultYn) {
            newOption.selected = true;
        }
        newOption.appendChild(document.createTextNode(theme.name));
        selectElement.appendChild(newOption);
    }
    selectElement.addEventListener("change", function (e) {
        mapDraw.redrawMap({theme: e.target.value});
    });
}

//////////////////////////////////////////////////////////////////////////////////
// poi select 만들기
function initPoiSelect() {
    //floor name으로 object 만들기

    mapPoiInfo = mapDraw.response.poiInfo;

    //상단 poi select 만들기
    //side origin, detination 만들기
    let poiStartElement = document.querySelector("select#poiOrigin");
    let poiDestElement = document.querySelector("select#poiDestination");
    let myLocationElement = document.querySelector("select#poiMyLocation");
    let markerElement = document.querySelector("select#poiMarker");

    //poi select 만들기
    makePoiSelect(poiStartElement);
    makePoiSelect(poiDestElement);
    makePoiSelect(myLocationElement);
    makePoiSelect(markerElement);

    //myLocation
    myLocationElement.addEventListener("change", function (e) {
        myLocationOnPoi();
    });

    // 길찾기
    poiStartElement.addEventListener("change", function (e) {
        setNavigationOption();
        getRouteOnTrigger();
    });
    poiDestElement.addEventListener("change", function (e) {
        setNavigationOption();
        getRouteOnTrigger();
    });
}

function makePoiSelect(element) {
    for (let index = 0; index < mapPoiInfo.length; index++) {
        let poi = mapPoiInfo[index];
        if (poi.title === "") continue;

        let option = document.createElement("option");
        option.value = index;
        option.innerHTML = mapFloorName[poi.floorId] + "&nbsp;&nbsp;&nbsp;" + poi.title;
        element.appendChild(option);
    }
}

//////////////////////////////////////////////////////////////////////////////////
// 사이드바 네비 메뉴와 테스트버튼 연동
function initSidebar() {
    let navMenu = document.querySelectorAll("#sidebarMenu .nav-link");
    for (let i = 0; i < navMenu.length; i++) {
        navMenu[i].addEventListener("click", function (e) {
            //현재 active되어 있는 sidebar nav의 class 지우기
            let current = document.querySelector("#sidebarMenu .active");
            current.className = current.className.replace(" active", "");
            document.querySelector(current.dataset.test).style.display = "none";
            if (document.querySelector(current.dataset.menu) !== null) {
                document.querySelector(current.dataset.menu).style.display = "none";
            }

            //현재 click된 sidebar nav active로 만들기
            this.className += " active";
            document.querySelector(this.dataset.test).style.display = "";
            if (document.querySelector(this.dataset.menu) !== null) {
                document.querySelector(this.dataset.menu).style.display = "";
            }
            //navigationTest 와 animationTest에 따라 button toggle
            if (this.dataset.test === "#navigationTest") {
                document.querySelector("#getNavigation").style.display = "";
                document.querySelector("#getRouteOn").style.display = "";
                document.querySelector("#getRouteOff").style.display = "";
                document.querySelector("#startRouteAnimation").style.display = "none";
                document.querySelector("#stopRouteAnimation").style.display = "none";
            }
            if (this.dataset.test === "#animationTest") {
                document.querySelector("#getNavigation").style.display = "none";
                document.querySelector("#getRouteOn").style.display = "none";
                document.querySelector("#getRouteOff").style.display = "none";
                document.querySelector("#startRouteAnimation").style.display = "";
                document.querySelector("#stopRouteAnimation").style.display = "";
            }
        });
    }
}

//////////////////////////////////////////////////////////////////////////////////
// Test menu toggling
function initTestMenu() {
    let menu = document.querySelectorAll(".toggle-menu");
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", function (e) {
            if (e.target.nextElementSibling.classList.contains("show")) {
                e.target.nextElementSibling.classList.remove("show");
            } else {
                e.target.nextElementSibling.classList.add("show");
            }
        });
    }
}

//////////////////////////////////////////////////////////////////////////////////
//카메라 API 테스트
//카메라 초기화 2d : init2DCameraInfo
//카메라 초기화 3d : init3DCameraInfo
//지도좌표로 카메라 이동 : mapPositionMoveCamera
//카메라좌표로 카메라 이동 : moveCamera (아직 구현안되어 있음 )
function initCameraTest() {
    document.querySelector("#init2DCameraInfo").addEventListener("click", function (e) {
        mapDraw.init2DCameraInfo();
    });
    document.querySelector("#init3DCameraInfo").addEventListener("click", function (e) {
        mapDraw.init3DCameraInfo();
    });
    document.querySelector("#moveCamera").addEventListener("change", function (e) {
        mapDraw.mapPositionMoveCamera(
            Number(document.querySelector("input#moveX").value),
            Number(document.querySelector("input#moveY").value)
        );
    });
}

//////////////////////////////////////////////////////////////////////////////////
//마우스 API 테스트
//drag 기능 마우스 왼쪽 버튼 지정 : controlDragLeft
//drag 기능 마우스 오른쪽 버튼 지정 : controlDragRight
//
function initMouseTest() {
    document.querySelector("#controlDragLeft").addEventListener("click", function (e) {
        mapDraw.controlDragLeft();
    });
    document.querySelector("#controlDragRight").addEventListener("click", function (e) {
        mapDraw.controlDragRight();
    });
}

//////////////////////////////////////////////////////////////////////////////////
//POI API 테스트
//poi 보이기/숨기기 : changeShowPoi
//3D모드에서 poi 높이값 설정 : setPoiRotateDistance
//중요도에 따라 POI 노출할 줌 설정 : setPoiLevelOn
//중요도에 따라 POI 노출할 줌 해재 : setPoiLevelOff
function initPoiTest() {
    document.querySelector("#showPoi").addEventListener("click", function (e) {
        mapDraw.changeShowPoi({showPoi: true});
    });
    document.querySelector("#hidePoi").addEventListener("click", function (e) {
        mapDraw.changeShowPoi({showPoi: false});
    });
    document.querySelector("input#poiDistance").addEventListener("change", function (e) {
        mapDraw.setPoiRotateDistance(Number(document.querySelector("input#poiDistance").value));
    });

    document.querySelector("#setPoiLevelOn").addEventListener("change", function (e) {
        mapDraw.setPoiLevelOn(
            Number(document.querySelector("input#poiLevel1").value),
            Number(document.querySelector("input#poiLevel2").value),
            Number(document.querySelector("input#poiLevel3").value)
        );
    });
    document.querySelector("#poiLevelOff").addEventListener("click", function (e) {
        mapDraw.setPoiLevelOff();
    });
}

//////////////////////////////////////////////////////////////////////////////////
//Zoom API 테스트
//지도 확대 : ZoomIn
//지도 축소 : ZoomOut
//지도 비율 지정 및 현재 비율 반환 : ZoomControl
//마우스로 zoom 기능 끄기 : zoomOff
//마우스로 zoom 기능 켜기 : zoomOn
function initZoomTest() {
    document.querySelector("#zoomIn").addEventListener("click", function (e) {
        mapDraw.zoomIn();
    });
    document.querySelector("#zoomOut").addEventListener("click", function (e) {
        mapDraw.zoomOut();
    });
    document.querySelector("#zoomOff").addEventListener("click", function (e) {
        mapDraw.zoomOff();
    });
    document.querySelector("#zoomOn").addEventListener("click", function (e) {
        mapDraw.zoomOn();
    });
    document.querySelector("input#zoomControl").addEventListener("change", function (e) {
        mapDraw.zoomControl(Number(document.querySelector("input#zoomControl").value));
    });
    document.querySelector("#zoomTest").addEventListener("mousemove", function (e) {
        document.querySelector("#zoomVal").value = mapDraw.zoomControl();
    });
}

//////////////////////////////////////////////////////////////////////////////////
//길찾기 API 테스트
//길찾기 옵션 설정: setNavigationOption
//이동수단별 길찾기 정보 구하기 : getNaviInfoByRoute
//길찾기 경로 그리기 : getRouteOn
//길찾기 경로 삭제 : getRouteOff
//길찾기 목록 : getNavigation
//모의주행 그리기: startRouteAnimation
//모의주행 멈추기: stopRouteAnimation
function initNavigationOptionTest() {
    //
    document.querySelector("#getRouteOn").addEventListener("click", function (e) {
        setNavigationOption();
        getRouteOnTrigger();
    });

    document.querySelector("#getRouteOff").addEventListener("click", function (e) {
        mapDraw.getRouteOff();
    });

    document.querySelector("#getNavigation").addEventListener("click", function (e) {
        getNavigation();
    });
}

function getNavigation() {
    let transCode = function (type) {
        let result = "걷기";
        /*
         * transCode: 이동수단 코드
         * OB-ELEVATOR : 엘리베이터
         * OB-ESCALATOR : 에스컬레이터 양방향
         * OB-ESCALATOR_UP : 에스컬레이터 상행
         * OB-ESCALATOR_DOWN : 에스컬레이터 하행
         * OB-STAIRS : 계단
         */
        switch (type) {
            case "OB-STAIRS":
                result = "계단";
                break;
            case "OB-ELEVATOR":
                result = "엘리베이터";
                break;
            case "OB-ESCALATOR":
                result = "에스컬레이터 양방향";
                break;
            case "OB-ESCALATOR_UP":
                result = "에스컬레이터 상행";
                break;
            case "OB-ESCALATOR_DOWN":
                result = "에스컬레이터 하행";
                break;
            default:
                result = "걷기";
                break;
        }
        return result;
    };

    let list = mapDraw.getNavigation();
    document.querySelector("#navigationPath").innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-sm", "btn-outline-secondary", "py-0", "my-1");
        btn.style.display = "block";
        btn.style.marginBottom = "5px";
        btn.addEventListener("click", list[i].move);
        btn.innerText = "";
        if (list[i].isDestination) {
            btn.innerText += list[i].title + " " + list[i].distance / 100 + "m";
            document.getElementById("navigationPath").append(btn);
        } else {
            if (list[i].title) {
                btn.innerText += list[i].title + " ";
            }
            if (typeof list[i].distance === "object") {
                // 이동수단 진입 후 층변경시 distance: 이동된 floor object
                btn.innerText += transCode(list[i].transCode) + " " + list[i].distance.name[0].text + " 으로 이동";
            } else {
                btn.innerText += transCode(list[i].transCode) + " " + list[i].distance / 100 + "m";
            }
            document.querySelector("#navigationPath").append(btn);
        }
    }
}

function setNavigationOption() {
    let navigationOption = {};
    let solidLineEnabled = document.querySelector("select#solidLineEnabled option:checked").value;
    let solidLineWidth = document.querySelector("input#solidLineWidth").value;
    let lineSpotSize = document.querySelector("input#lineSpotSize").value;
    let lineSpotInterval = document.querySelector("input#lineSpotInterval").value;
    let lineColor = document.querySelector("input#lineColor").value;
    let lineZ = document.querySelector("input#lineZ").value;
    let originPositionZ = document.querySelector("input#originPositionZ").value;
    let destinationPositionZ = document.querySelector("input#destinationPositionZ").value;
    let visibleIcon = document.querySelector("select#visibleIcon option:checked").value;
    let speedRate = document.querySelector("input#speedRate").value;
    let iconUrl = document.querySelector("input#iconUrl[name='animation']").value;

    let option = {};
    if (solidLineEnabled !== "") option["solidLineEnabled"] = Boolean(Number(solidLineEnabled));
    if (solidLineWidth !== "") option["solidLineWidth"] = Number(solidLineWidth);
    if (lineSpotSize !== "") option["lineSpotSize"] = Number(lineSpotSize);
    if (lineSpotInterval !== "") option["lineSpotInterval"] = Number(lineSpotInterval);
    if (lineColor !== "") option["lineColor"] = lineColor;
    if (lineZ !== "") option["lineZ"] = Number(lineZ);
    if (originPositionZ !== "") option["originPositionZ"] = Number(originPositionZ);
    if (destinationPositionZ !== "") option["destinationPositionZ"] = Number(destinationPositionZ);
    if (visibleIcon !== "") option["visibleIcon"] = Boolean(Number(visibleIcon));
    if (speedRate !== "") option["speedRate"] = Number(speedRate);
    if (iconUrl !== "") option["iconUrl"] = iconUrl;
    if (Object.keys(option).length !== 0) Object.assign(navigationOption, option);

    iconUrl = document.querySelector("input#iconUrl[name='origin']").value;
    let width = document.querySelector("input#width[name='origin']").value;
    let height = document.querySelector("input#height[name='origin']").value;
    option = {};
    if (iconUrl !== "") option["iconUrl"] = iconUrl;
    if (width !== "") option["width"] = Number(width);
    if (height !== "") option["height"] = Number(height);
    if (Object.keys(option).length !== 0) Object.assign(navigationOption, {origin: option});

    iconUrl = document.querySelector("input#iconUrl[name='destination']").value;
    width = document.querySelector("input#width[name='destination']").value;
    height = document.querySelector("input#height[name='destination']").value;
    option = {};
    if (iconUrl !== "") option["iconUrl"] = iconUrl;
    if (width !== "") option["width"] = Number(width);
    if (height !== "") option["height"] = Number(height);
    if (Object.keys(option).length !== 0) Object.assign(navigationOption, {destination: option});

    if (Object.keys(navigationOption).length !== 0) mapDraw.setNavigationOption(navigationOption);
}

function getRouteOnTrigger() {
    mapDraw.getRouteOff();
    let indexOrigin = document.querySelector("select#poiOrigin option:checked").value;
    let indexDestination = document.querySelector("select#poiDestination option:checked").value;
    if (indexOrigin === "" || indexDestination === "") return;
    let type = document.querySelector("select#routeType option:checked").value;

    startPoi = {
        poiId: mapPoiInfo[indexOrigin].id,
        floorId: mapPoiInfo[indexOrigin].floorId
    };
    destPoi = {
        poiId: mapPoiInfo[indexDestination].id,
        floorId: mapPoiInfo[indexDestination].floorId
    };
    let result;
    if (type === "") {
        result = mapDraw.getRouteOn(startPoi, destPoi);
    } else {
        result = mapDraw.getRouteOn(startPoi, destPoi, type);
    }
    if (result === undefined) alert("요청하신 경로가 존재하지 않습니다.");
}

//////////////////////////////////////////////////////////////////////////////////
//모의주행 API 테스트

function initAnimationRouteOptionTest() {
    document.querySelector("#startRouteAnimation").addEventListener("click", function (e) {
        setNavigationOption();
        startRouteAnimationTrigger();
    });

    document.querySelector("#stopRouteAnimation").addEventListener("click", function (e) {
        mapDraw.stopRouteAnimation();
    });
}
function startRouteAnimationTrigger() {
    let zoom = document.querySelector("input#animationZoom").value;
    if (zoom !== "") {
        mapDraw.startRouteAnimation({zoom: Number(zoom)});
    } else {
        mapDraw.startRouteAnimation();
    }
}

//////////////////////////////////////////////////////////////////////////////////
//내 위치 API 테스트
//내 위치 마커 : myLocationOn
//내 위치 마커 삭제: myLocationOff
function initMyLocationTest() {
    document.querySelector("#myLocationOnPoi").addEventListener("click", function (e) {
        myLocationOnPoi();
    });
    document.querySelector("#myLocationOff").addEventListener("click", function (e) {
        mapDraw.myLocationOff();
    });
    document.querySelector("#myLocationOnCord").addEventListener("click", function (e) {
        myLocationOnCord();
    });

    document.querySelector("#myLocationOffTest").addEventListener("click", function (e) {
        mapDraw.myLocationOff();
    });
}
function myLocationOnPoi() {
    let currentFloor = document.querySelector("select#floor > option:checked").value;
    let indexPoi = document.querySelector("select#poiMyLocation option:checked").value;
    if (indexPoi === "") return;

    if (currentFloor !== mapPoiInfo[indexPoi].floorId) {
        document.querySelector('select#floor [value="' + mapPoiInfo[indexPoi].floorId + '"]').selected = true;
        mapDraw.redrawMap({floor: mapPoiInfo[indexPoi].floorId});
    }
    //mapDraw.mapPositionMoveCamera(mapPoiInfo[indexPoi].position.x, mapPoiInfo[indexPoi].position.y);
    myLocationOnTrigger(mapPoiInfo[indexPoi].position.x, mapPoiInfo[indexPoi].position.y, 60);
}

function myLocationOnCord() {
    myLocationOnTrigger(
        Number(document.querySelector("input#myLocationX").value),
        Number(document.querySelector("input#myLocationY").value),
        Number(document.querySelector("input#myLocationZ").value)
    );
}

function myLocationOnTrigger(x, y, z) {
    let onActive = document.querySelector("select#onActive option:checked").value;

    let option = {};

    let iconOption = {};
    let sizeOption = {};
    let image = document.querySelector("input#image[name='myLocationIcon']").value;
    let width = document.querySelector("input#width[name='myLocationIcon']").value;
    let height = document.querySelector("input#height[name='myLocationIcon']").value;
    if (image !== "") Object.assign(iconOption, {image: image});
    if (width !== "") sizeOption["width"] = Number(width);
    if (height !== "") sizeOption["height"] = Number(height);
    if (Object.keys(sizeOption).length !== 0) Object.assign(iconOption, {size: sizeOption});
    if (Object.keys(iconOption).length !== 0) Object.assign(option, {icon: iconOption});

    let animateOption = {};
    let animate = document.querySelector("select#animate option:checked").value;
    if (animate !== "") {
        option["animate"] = Boolean(Number(animate));
    } else {
        let color = document.querySelector("input#color[name='animate']").value;
        let opacity = document.querySelector("input#opacity[name='animate']").value;
        let desireScale = document.querySelector("input#desireScale[name='animate']").value;
        if (color !== "") animateOption["color"] = color;
        if (opacity !== "") animateOption["opacity"] = Number(opacity);
        if (desireScale !== "") animateOption["desireScale"] = Number(desireScale);
        if (Object.keys(animateOption).length !== 0) Object.assign(option, {animate: animateOption});
    }

    if (Object.keys(option).length !== 0) {
        if (onActive === "") {
            mapDraw.myLocationOn(x, y, z, true, option);
        } else {
            mapDraw.myLocationOn(x, y, z, Boolean(Number(onActive)), option);
        }
    }
    else {
        if (onActive === "") {
            mapDraw.myLocationOn(x, y, z);
        } else {
            mapDraw.myLocationOn(x, y, z, Boolean(Number(onActive)));
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////
//마커 API 테스트
//여러개 마커 표시 : setMarker
//여러개 마커 삭제 : clearMarker
//실시간 마커 크기 동기화 : setAsyncMarker
function initMarkerTest() {
    document.querySelector("#setMarker").addEventListener("click", function (e) {
        setMarkerTrigger();
    });
    document.querySelector("#clearMarker").addEventListener("click", function (e) {
        mapDraw.clearMarker();
    });
    document.querySelector("select#setAsyncMarker").addEventListener("change", function (e) {
        mapDraw.setAsyncMarker(Number(e.target.value));
    });
}
function setMarkerTrigger() {
    let marker = [];
    let pois = document.querySelectorAll("select#poiMarker option:checked");

    let image = document.querySelector("input#image[name='marker']").value;
    let width = document.querySelector("input#width[name='marker']").value;
    let height = document.querySelector("input#height[name='marker']").value;
    let async = document.querySelector("select#async option:checked").value;

    for (let i = 0; i < pois.length; i++) {
        let index = pois[i].value;
        let option = {};
        Object.assign(option, {
            position: {
                x: mapPoiInfo[index].position.x,
                y: mapPoiInfo[index].position.y,
                z: 65
            }
        });
        Object.assign(option, {floorId: mapPoiInfo[index].floorId});
        Object.assign(option, {
            data: {title: mapPoiInfo[index].titleByLanguages[0].text}
        });
        if (image !== "") Object.assign(option, {image: image});
        if (async !== "") Object.assign(option, {async: Boolean(Number(async))});
        let sizeOption = {};
        if (width !== "") Object.assign(sizeOption, {width: Number(width)});
        if (height !== "") Object.assign(sizeOption, {height: Number(height)});
        if (Object.keys(sizeOption).length !== 0) Object.assign(option, {size: sizeOption});
        marker.push(option);
    }
    console.log(marker);
    if (marker.length > 0) mapDraw.setMarker({marker: marker});
}
