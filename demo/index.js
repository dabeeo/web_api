/* globals Chart:false, feather:false */
let mapDraw = null;
let mapView = null;
let mapPoiInfo = null;
let mapPoiCategories = null;
let mapSectionInfo = null;
let mapFloorName = {};

(function () {
    "use strict";
    //icon
    feather.replace();
    // mapSelect 구성 및 parameter로 넘어온 value setting
    initMapIndex();
    // aTest : mapView option API test
    initMapOptionTest();

    // mapView로 지도그리기
    initMap();
    // click event api test
    initClickEvent();
    // sidebar menu event 등록
    initSidebar();
    // toggling
    initMenuToggling();
    // camera api test
    initCameraTest();
    // mouse api test
    initMouseTest();
    // poi api test
    initPoiTest();
    // zoom api test
    initZoomTest();
    // 길찾기 api test
    initNavigationOptionTest();
    // 모의주행 api test
    initAnimationRouteOptionTest();
    // 내위치 api test
    initMyLocationTest();
    // 마커 api 테스트
    initMarkerTest();
})();

function getParam(sname) {

  let params = location.search.substr(location.search.indexOf("?") + 1);
  let sval = "";
  params = params.split("&");
  for (let  i = 0; i < params.length; i++) {
      temp = params[i].split("=");
      if ([temp[0]] == sname) { sval = temp[1]; }
  }
  return sval;
}

//////////////////////////////////////////////////////////////////////////////////
// mapIndex select창 초기화
// mapSelect 구성
// parameter 반영
// event 등록
function initMapIndex() {
    //mapIndex select 구성
    let mapIndexElement = document.querySelector("select#mapIndex");
    if (typeof mapList === "undefined") return;
    for (let index = 0; index < mapList.length; index++) {
        let map = mapList[index];
        let newOption = document.createElement("option");
        newOption.value = index;
        newOption.appendChild(document.createTextNode(map.server + "--" + map.title));

        mapIndexElement.appendChild(newOption);
    }

    let paramVal = getParam("mapIndex");
    if (paramVal !== null) mapIndexElement.value = paramVal;

    //map select change시 page reload
    mapIndexElement.addEventListener("change", function (e) {
        let mapOptionElement = document.querySelector("#mapOptionTest");

        mapOptionElement.querySelector("input[name='clientId']").value = mapList[e.target.value].clientId;
        mapOptionElement.querySelector("input[name='clientSecret']").value = mapList[e.target.value].clientSecret;
        mapOptionElement.querySelector("#submitButton").click();
    });
}

//////////////////////////////////////////////////////////////////////////////////
//MapOption Test 초기화

function initMapOptionTest() {
    let mapOptionElement = document.querySelector("#mapOptionTest");
    let mapOptions = mapOptionElement.querySelectorAll("input, select");
    for (let i = 0; i < mapOptions.length; i++) {
        let paramVal = getParam(mapOptions[i].name);
        mapOptions[i].value = paramVal;
    }

    if (getParam("clientId") === null)
        mapOptionElement.querySelector("input[name='clientId']").value = "6Lwuu9wa4wta0NiHwy1fO5";
    if (getParam("clientSecret") === null)
        mapOptionElement.querySelector("input[name='clientSecret']").value = "93ab5dbaf7fa6c9017cf9cb9ef4dc8fd";

    //mapView Option 적용시 page reload
    mapOptionElement.querySelector("#submitButton").addEventListener("click", function (e) {
        let url = "index.html?";
        let paramVal = document.querySelector("select#mapIndex").value;
        if (paramVal !== "") url += "mapIndex=" + paramVal;

        let mapOptionElement = document.querySelector("#mapOptionTest");

        let mapOptions = mapOptionElement.querySelectorAll("input, select");
        for (let i = 0; i < mapOptions.length; i++) {
            let paramVal = mapOptions[i].value;
            if (paramVal !== "") url += "&" + mapOptions[i].name + "=" + paramVal;
        }
        window.location.href = url;
    });

    //mapView Option reset
    mapOptionElement.querySelector("#resetButton").addEventListener("click", function (e) {
        let mapOptions = mapOptionElement.querySelectorAll("input, select");
        for (let i = 0; i < mapOptions.length; i++) {
            mapOptions[i].value = "";
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////
// mapView로 지도그리기
function initMap() {
    let mapContainer = document.querySelector("#map");

    //mapView option에서 option 가져오기
    let mapOptions = getMapOptions();

    console.log(mapOptions);

    new indoorMapApi.MapView(
        mapContainer, // 컨테이너
        mapOptions, // 옵션
        function (response) {
            // 맵 로드 콜백
            var code = response.getCode();
            if (code === 200) {
                mapDraw = response.getPayload().mapDraw;
                handleResponse(mapDraw.response);
            }
        }
    );
}

//mapView option에서 option 가져오기
function getMapOptions() {
    let mapOptions;
    let mapOptionElement = document.querySelector("#mapOptionTest");

    let clientId = mapOptionElement.querySelector("input[name='clientId']").value;
    let clientSecret = mapOptionElement.querySelector("input[name='clientSecret']").value;

    let authorization = new indoorMapApi.Authorization({
        clientId: clientId,
        clientSecret: clientSecret
    });
    mapOptions = {
        authorization: authorization
    };
    let mapIndexValue = document.querySelector("select#mapIndex").value;
    if (mapIndexValue!=="" && mapList[mapIndexValue].server == "stage") {
      mapOptions["url"]="http://121.131.4.170:16341/v2/map?t=JS";
      mapOptions["oauthUrl"]="http://121.131.4.170:16342/oauth/token";
      }    

    getInputOptions("zoom", mapOptions);
    getInputOptions("minZoom", mapOptions);
    getInputOptions("maxZoom", mapOptions);
    getInputOptions("northReference", mapOptions);
    getInputOptions("panningPercent", mapOptions);

    getSelectBooleanOptions("showPoi", mapOptions);
    getSelectBooleanOptions("isPoiAngle", mapOptions);
    getSelectBooleanOptions("controlZoom", mapOptions);

    getSelectBooleanOptions("rotationTouch2d", mapOptions);
    getSelectBooleanOptions("rotationMouse2d", mapOptions);

    let camera = mapOptionElement.querySelector("select[name='camera'").value;
    if (camera !== "") mapOptions["camera"] = camera;

    let poiLevel1 = mapOptionElement.querySelector("input[name='poiLevel1']").value;
    let poiLevel2 = mapOptionElement.querySelector("input[name='poiLevel2']").value;
    let poiLevel3 = mapOptionElement.querySelector("input[name='poiLevel3']").value;
    if (poiLevel1 !== "" && poiLevel2 !== "" && poiLevel3 !== "")
        mapOptions["poiLevel"] = [Number(poiLevel1), Number(poiLevel2), Number(poiLevel3)];

    let width = mapOptionElement.querySelector("#canvasSize input[name='width']").value;
    let height = mapOptionElement.querySelector("#canvasSize input[name='height']").value;
    if (width !== "" && height !== "") mapOptions["canvasSize"] = {width: Number(width), height: Number(height)};

    let x = mapOptionElement.querySelector("input[name='centerX']").value;
    let y = mapOptionElement.querySelector("input[name='centerY']").value;
    if (x !== "" && y !== "") mapOptions["center"] = {x: Number(x), y: Number(y)};

    let vertical = mapOptionElement.querySelector("input[name='vertical']").value;
    let horizontal = mapOptionElement.querySelector("input[name='horizontal']").value;
    let fixed = mapOptionElement.querySelector("select[name='fixed']").value;
    if (vertical !== "" && horizontal !== "" && fixed !== "")
        mapOptions["angle"] = {
            vertical: Number(vertical),
            horizotal: Number(horizontal),
            fixed: Boolean(Number(fixed))
        };

    let d3 = mapOptionElement.querySelector("select[name='controlDrag3d']").value;
    let d2 = mapOptionElement.querySelector("select[name='controlDrag2d']").value;
    if (d3 !== "" && d2 !== "") mapOptions["controlDrag"] = {"3d": d3, "2d": d2};
    return mapOptions;
}

function getSelectBooleanOptions(param, mapOptions) {
    let mapOptionElement = document.querySelector("#mapOptionTest");
    let paramVal = mapOptionElement.querySelector("select[name='" + param + "']").value;
    if (paramVal !== "") mapOptions[param] = Boolean(Number(paramVal));
}

function getInputOptions(param, mapOptions) {
    let mapOptionElement = document.querySelector("#mapOptionTest");
    let paramVal = mapOptionElement.querySelector("input[name='" + param + "']").value;
    if (paramVal !== "") mapOptions[param] = Number(paramVal);
}

//////////////////////////////////////////////////////////////////////////////////
// response 처리
//
function handleResponse(response) {
    console.log(response);
    handleMapName(response);
    handleMapOptions(response);
    handlePoiCategories(response);
    handleFloorInfo(response);
    handleLanguageInfo(response);
    handleThemeInfo(response);
    handleSectionInfo(response);
    handlePoiInfo(response);
}
//////////////////////////////////////////////////////////////////////////////////
function handlePoiCategories(response) {
    mapPoiCategories = response.poiCategories;

    let categoryElement = document.querySelector("#mapMenu [name='category']");
    let subCategoryElement = document.querySelector("#mapMenu select[name='subCategory']");
    let poiButtonElement = document.querySelector("#poiButton");

    // category select option 만들기
    for (let index = 0; index < mapPoiCategories.length; index++) {
        let option = document.createElement("option");
        option.value = index;
        option.innerHTML = mapPoiCategories[index].title;
        categoryElement.appendChild(option);
    }
    // category event 등록
    categoryElement.addEventListener("change", function (e) {
        mapDraw.clearMarker();
        subCategoryElement.innerHTML = "<option value='' selected>전체</option>";
        poiButtonElement.innerHTML = "";

        if (e.target.value === "") return;
        let category = mapPoiCategories[e.target.value];

        for (let index = 0; index < category.childList.length; index++) {
            let option = document.createElement("option");
            option.value = index;
            option.innerHTML = category.childList[index].title;
            subCategoryElement.appendChild(option);
        }
        if (category.childList.length !== 0) return;
        setMarkers(category);
        setButton(category);
    });

    subCategoryElement.addEventListener("change", function (e) {
        mapDraw.clearMarker();
        poiButtonElement.innerHTML = "";

        if (e.target.value === "") return;
        let subCategory = mapPoiCategories[categoryElement.value].childList[e.target.value];
        setMarkers(subCategory);
        setButton(subCategory);
    });
}

function setMarkers(category) {
    let marker = [];
    for (let i = 0; i < mapPoiInfo.length; i++) {
        let poi = mapPoiInfo[i];
        if (poi.categoryCode == category.code) {
            let option = {};
            option["position"] = {x: poi.position.x, y: poi.position.y, z: 60};
            option["floorId"] = poi.floorId;
            marker.push(option);
        }
    }
    setMarkerTrigger(marker);
}

function setButton(category) {
    for (let i = 0; i < mapPoiInfo.length; i++) {
        let poi = mapPoiInfo[i];
        if (poi.categoryCode == category.code) {
            let btn = document.createElement("button");
            btn.classList.add("btn", "btn-sm", "btn-outline-secondary", "py-0", "my-1", "mx-1");
            btn.style.display = "block";
            btn.style.marginBottom = "5px";
            btn.value = i;
            btn.addEventListener("click", moveMyLocation);
            btn.innerText += mapFloorName[poi.floorId] + " " + poi.title;
            document.querySelector("#poiButton").append(btn);
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////
function handleSectionInfo(response) {
    mapSectionInfo = response.sectionInfo;

    let sectionElement = document.querySelector("#mapMenu [name='section']");
    let floorElement = document.querySelector("#mapMenu [name='floor']");

    for (let index = 0; index < mapSectionInfo.length; index++) {
        let section = mapSectionInfo[index];
        let option = document.createElement("option");
        option.value = index;
        option.innerHTML = mapFloorName[section.floorId] + " " + section.title;
        sectionElement.appendChild(option);
    }

    //section으로 이동
    sectionElement.addEventListener("change", function (e) {
        let index = e.target.value;
        if (index === "") {
            return;
        }
        let section = mapSectionInfo[index];
        if (floorElement.value !== section.floorId) {
            floorElement.value = section.floorId;
            mapDraw.redrawMap({floor: section.floorId});
        }
        mapDraw.mapPositionMoveCamera(section.position.x, section.position.y);
    });
}

//////////////////////////////////////////////////////////////////////////////////
//지도명 처리
function handleMapName(response) {
    let mapMenuElement = document.querySelector("#mapMenu [name='mapName']");
    mapMenuElement.value = response.mapName;
}

//////////////////////////////////////////////////////////////////////////////////
//지도 옵션 처리
//zoom, camera
function handleMapOptions(response) {
    zoomInfo(response.mapOptions.zoom);
    cameraInfo(response.mapOptions.camera);
}

function zoomInfo(zoom) {
    let zoomElement = document.querySelector("#mapMenu [name='zoom']");
    zoomElement.value = zoom;
}

function cameraInfo(camera) {
    let cameraElement = document.querySelector("#mapMenu [name='camera']");
    cameraElement.value = camera;

    cameraElement.addEventListener("change", function (e) {
        mapDraw.changeCamera({camera: e.target.value});
    });
}

//////////////////////////////////////////////////////////////////////////////////
//지도 층 정보 처리
function handleFloorInfo(response) {
    let floorElement = document.querySelector("#mapMenu [name='floor']");
    let floorInfo = response.floorInfo;
    for (let i = 0; i < floorInfo.length; i++) {
        var floor = floorInfo[i];
        mapFloorName[floor.id] = floor.name[0].text;
    }
    // 옵션창에 층 추가하기

    for (let index = 0; index < floorInfo.length; index++) {
        let floor = floorInfo[index];
        let newOption = document.createElement("option");
        newOption.value = floor.id;
        if (floor.defaultYn == true) {
            newOption.selected = true;
        }
        newOption.appendChild(document.createTextNode(floor.name[0].text));
        floorElement.appendChild(newOption);
    }
    floorElement.addEventListener("change", function (e) {
        mapDraw.redrawMap({floor: e.target.value});
    });

    document.addEventListener("floor-changed", function (e) {
        var floorId = e.detail;
        floorElement.value = floorId;
    });
}

//////////////////////////////////////////////////////////////////////////////////
//poi 언어 상태 및 언어 선택
//poi 언어 변경 : changeLanguage
function handleLanguageInfo(response) {
    let langElement = document.querySelector("#mapMenu [name='language']");

    let langInfo = response.langInfo;
    // 언어 추가하기
    for (let index = 0; index < langInfo.length; index++) {
        let lang = langInfo[index];
        let newOption = document.createElement("option");
        newOption.value = lang.lang;
        if (lang.defaultYn == true) {
            newOption.selected = true;
        }
        newOption.appendChild(document.createTextNode(lang.name));
        langElement.appendChild(newOption);
    }

    langElement.addEventListener("change", function (e) {
        mapDraw.changeLanguage(e.target.value);
    });
}

//////////////////////////////////////////////////////////////////////////////////
//테마 상태 및 테마 선택
//테마 변경 다시 그리기 : redrawMap
function handleThemeInfo(response) {
    let themeElement = document.querySelector("#mapMenu [name='theme']");

    let themeInfo = response.themeInfo;
    for (let index = 0; index < themeInfo.length; index++) {
        let theme = themeInfo[index];
        let newOption = document.createElement("option");
        newOption.value = theme.id;
        if (theme.defaultYn) {
            newOption.selected = true;
        }
        newOption.appendChild(document.createTextNode(theme.name));
        themeElement.appendChild(newOption);
    }
    themeElement.addEventListener("change", function (e) {
        mapDraw.redrawMap({theme: e.target.value});
    });
}

//////////////////////////////////////////////////////////////////////////////////
// poi select 만들기
function handlePoiInfo(response) {
    //floor name으로 object 만들기

    mapPoiInfo = response.poiInfo;

    //상단 poi select 만들기
    //side origin, detination 만들기
    //poi select 만들기
    makePoiSelect("poi");
    makePoiSelect("poiOrigin");
    makePoiSelect("poiDestination");
    makePoiSelect("poiWaypoints");

    //poi로 이동
    document.querySelector("#mapMenu select[name='poi']").addEventListener("change", moveMyLocation);
}

function moveMyLocation(e) {
    let floorElement = document.querySelector("#mapMenu [name='floor']");
    let index = e.target.value;
    if (index === "") {
        mapDraw.myLocationOff();
        return;
    }
    let poi = mapPoiInfo[index];
    if (floorElement.value !== poi.floorId) {
        floorElement.value = poi.floorId;
        mapDraw.redrawMap({floor: poi.floorId});
    }
    mapDraw.mapPositionMoveCamera(poi.position.x, poi.position.y);
    myLocationOnTrigger(poi.position.x, poi.position.y, 65);
}

function makePoiSelect(id) {
    let element = document.querySelector("select#" + id);
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
// click event init
function initClickEvent() {
    /* poi 클릭시 poi 정보 전달 */
    let poiModalElement = document.querySelector("#poiEventModal");
    document.querySelector("#map").addEventListener("poi-click", function (e) {
        console.log("poi click ", e.detail);
        if (e.detail === null) return;

        poiModalElement.classList.add("show");
        poiModalElement.style.display = "block";

        let modalTitle = poiModalElement.querySelector(".modal-title");
        let modalBody = poiModalElement.querySelector(".modal-body");

        modalTitle.innerHTML = "Poi Click Event";
        modalBody.innerHTML = "";

        let poiData = e.detail[0];
        parseJsonPoiMeta(poiData, modalBody);
    });

    document.querySelector("#poiModalClose").addEventListener("click", function (e) {
        poiModalElement.classList.remove("show");
        poiModalElement.style.display = "none";
    });

    /* object 클릭시 poi 정보 전달 */
    let objectModalElement = document.querySelector("#objectEventModal");
    document.querySelector("#map").addEventListener("object-click", function (e) {
        console.log("object click ", e.detail);
        if (e.detail === null) return;
        if (e.detail[0].poiDataArr.length === 0) return;

        objectModalElement.classList.add("show");
        objectModalElement.style.display = "block";

        let modalTitle = objectModalElement.querySelector(".modal-title");
        let modalBody = objectModalElement.querySelector(".modal-body");

        modalTitle.innerHTML = "Object Click Event";
        modalBody.innerHTML = "";

        let poiDataArr = e.detail[0].poiDataArr;
        for (let j = 0; j < poiDataArr.length; j++) {
            parseJsonPoiMeta(poiDataArr[j], modalBody);
        }
    });

    function parseJsonPoiMeta(poiData, modalBody) {
        let spanElement = document.createElement("span");
        spanElement.innerHTML = "<h5>title : " + poiData.titleByLanguages[0].text + "</h5>";
        modalBody.append(spanElement);

        let element = document.createElement("p");
        element.innerHTML = "<h6>Metadata</h6>";

        let metadata = poiData.metadatas[0].metadatas;
        for (let i = 0; i < metadata.length; i++) {
            for (let key in metadata[i]) {
                if (metadata[i][key] === "") continue;
                let data = JSON.parse(metadata[i][key]);
                if (Array.isArray(data)) {
                    for (let j = 0; j < data.length; j++) {
                        for (let subkey in data[j]) {
                            if (data[j][subkey] === "") continue;
                            element.innerHTML += subkey + " : ";
                            element.innerHTML += data[j][subkey];
                            element.innerHTML += "<br>";
                        }
                    }
                } else {
                    for (let dataKey in data) {
                        element.innerHTML += dataKey + " : ";
                        element.innerHTML += data[dataKey];
                        element.innerHTML += "<br>";
                    }
                }
            }
        }
        modalBody.append(element);
    }

    document.querySelector("#objectModalClose").addEventListener("click", function (e) {
        objectModalElement.classList.remove("show");
        objectModalElement.style.display = "none";
    });
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
            if (current.dataset.test !== undefined) document.querySelector(current.dataset.test).style.display = "none";
            if (current.dataset.menu !== undefined) document.querySelector(current.dataset.menu).style.display = "none";

            //현재 click된 sidebar nav active로 만들기
            this.className += " active";
            if (this.dataset.test !== undefined) document.querySelector(this.dataset.test).style.display = "";
            if (this.dataset.menu !== undefined) document.querySelector(this.dataset.menu).style.display = "";
        });
    }
}

//////////////////////////////////////////////////////////////////////////////////
// Test menu toggling
function initMenuToggling() {
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
    menu = document.querySelectorAll(".toggling");
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", function (e) {
            if (e.target.nextElementSibling.style.display === "none") {
                e.target.nextElementSibling.style.display = "block";
            } else {
                e.target.nextElementSibling.style.display = "none";
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
    document.querySelector("#changeShowPoiOn").addEventListener("click", function (e) {
        mapDraw.changeShowPoi({showPoi: true});
    });
    document.querySelector("#changeShowPoiOff").addEventListener("click", function (e) {
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
        timerZoomControl();
    });
    document.querySelector("#zoomOut").addEventListener("click", function (e) {
        mapDraw.zoomOut();
        timerZoomControl();
    });
    document.querySelector("#zoomOff").addEventListener("click", function (e) {
        mapDraw.zoomOff();
    });
    document.querySelector("#zoomOn").addEventListener("click", function (e) {
        mapDraw.zoomOn();
    });
    document.querySelector("input#zoomControl").addEventListener("change", function (e) {
        mapDraw.zoomControl(Number(document.querySelector("input#zoomControl").value));
        timerZoomControl();
    });
    document.querySelector("#map").addEventListener("wheel", function (e) {
        zoomInfo(mapDraw.zoomControl());
    });
}
function timerZoomControl() {
    setTimeout(function () {
        zoomInfo(mapDraw.zoomControl());
    }, 200);
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
    // 길찾기
    document.querySelector("select#poiOrigin").addEventListener("change", function (e) {
        getNaviInfoByRoute();
    });
    document.querySelector("select#poiDestination").addEventListener("change", function (e) {
        getNaviInfoByRoute();
    });
    document.querySelector("select#poiWaypoints").addEventListener("change", function (e) {
        getNaviInfoByRoute();
    });

    document.querySelector("#getRouteOn").addEventListener("click", function (e) {
        getRouteOnTrigger();
    });

    document.querySelector("#getRouteOffTest").addEventListener("click", function (e) {
        document.querySelector("#navigationButton").innerHTML = "";
        mapDraw.getRouteOff();
    });
}

function getNaviInfoByRoute() {
    let route;
    let originPoi = getPoi("poiOrigin");
    let destPoi = getPoi("poiDestination");
    let wayPointsPoi = getPoi("poiWaypoints");
    if (originPoi === undefined || destPoi === undefined) return;
    if (wayPointsPoi === undefined) {
        route = mapDraw.getNaviInfoByRoute(originPoi, destPoi);
    } else {
        route = mapDraw.getNaviInfoByRoute(originPoi, destPoi, [wayPointsPoi]);
    }
    document.querySelector("select#routeType").innerHTML = "<option value='' selected>선택안함</option>";

    for (let key in route) {
        let newOption = document.createElement("option");
        newOption.value = key;
        newOption.appendChild(
            document.createTextNode(
                key +
                    "--" +
                    (route[key].totalTime / (1000 * 60)).toFixed(1) +
                    "분/  총거리: " +
                    (route[key].totalDistance / 100).toFixed(0) +
                    "m"
            )
        );
        document.querySelector("select#routeType").appendChild(newOption);
    }
}

function getPoi(id) {
    let index = document.querySelector("select#" + id + " option:checked").value;
    if (index === "") return;
    let poi = {
        poiId: mapPoiInfo[index].id,
        floorId: mapPoiInfo[index].floorId
    };
    return poi;
}

function getNavigation(retResult) {
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

    let transDirectCode = function (type) {
        let result = "";
        switch (type) {
            case "STRAIGHT":
                result = "직진";
                break;
            case "LEFT":
                result = "좌회전";
                break;
            case "RIGHT":
                result = "우회전";
                break;
            default:
                result = "";
                break;
        }
        return result;
    };

    let list = mapDraw.getNavigation();
    document.querySelector("#navigationButton").innerHTML = "";
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-sm", "btn-success", "py-0", "my-1", "mx-1");
    btn.style.display = "block";
    btn.style.marginBottom = "5px";
    if (typeof retResult === "object")
        btn.innerText =
            (retResult.totalTime / (1000 * 60)).toFixed(1) +
            "분, 거리: " +
            (retResult.totalDistance / 100).toFixed(0) +
            "미터";
    else btn.innerText = "도착시간 " + (retResult / (1000 * 60)).toFixed(1) + "분";

    document.querySelector("#navigationButton").append(btn);

    for (let i = 0; i < list.length; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-sm", "btn-outline-secondary", "py-0", "my-1", "mx-1");
        btn.style.display = "block";
        btn.style.marginBottom = "5px";
        btn.addEventListener("click", list[i].move);
        btn.innerText = "";
        if (list[i].isDestination) {
            btn.innerText += list[i].title + " " + list[i].distance / 100 + "m";
            document.querySelector("#navigationButton").append(btn);
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
            if (list[i].direction) {
                btn.innerText += " 후 " + transDirectCode(list[i].direction);
            }
            document.querySelector("#navigationButton").append(btn);
        }
    }
}

function setNavigationOption() {
    let navigationOption = {};
    let navigationOptionElement = document.querySelector("#navigationOption");

    let navigationInputs = navigationOptionElement.querySelectorAll("input");
    for (let i = 0; i < navigationInputs.length; i++) {
        let optionVal = navigationInputs[i].value;
        if (optionVal !== "") navigationOption[navigationInputs[i].id] = Number(optionVal);
    }
    let navigationSelects = navigationOptionElement.querySelectorAll("select");
    for (let i = 0; i < navigationSelects.length; i++) {
        let optionVal = navigationSelects[i].value;
        if (optionVal !== "") navigationOption[navigationSelects[i].id] = Boolean(Number(optionVal));
    }

    let lineColor = document.querySelector("input#lineColor").value;
    if (lineColor !== "") navigationOption["lineColor"] = lineColor;

    let iconUrl = document.querySelector("input#iconUrl[name='animation']").value;
    if (iconUrl !== "") navigationOption["iconUrl"] = iconUrl;

    // origin
    let originOption = {};
    let originIconUrl = document.querySelector("#origin [name='iconUrl']").value;
    if (originIconUrl !== "") originOption["iconUrl"] = originIconUrl;
    let originWidth = document.querySelector("#origin [name='width']").value;
    let originHeight = document.querySelector("#origin [name='height']").value;
    if (originWidth !== "") originOption["width"] = Number(originWidth);
    if (originHeight !== "") originOption["height"] = Number(originHeight);
    if (originIconUrl !== "") navigationOption["origin"] = originOption;

    // destination
    let destOption = {};
    let destIconUrl = document.querySelector("#destination [name='iconUrl']").value;
    if (destIconUrl !== "") destOption["iconUrl"] = destIconUrl;
    let destWidth = document.querySelector("#destination [name='width']").value;
    let destHeight = document.querySelector("#destination [name='height']").value;
    if (destWidth !== "") destOption["width"] = Number(destWidth);
    if (destHeight !== "") destOption["height"] = Number(destHeight);
    if (destIconUrl !== "") navigationOption["destination"] = destOption;
    
    if (Object.keys(navigationOption).length !== 0) mapDraw.setNavigationOption(navigationOption);
}

function getRouteOnTrigger() {
    let result;
    let originPoi = getPoi("poiOrigin");
    let destPoi = getPoi("poiDestination");
    let wayPointsPoi = getPoi("poiWaypoints");

    let type = document.querySelector("select#routeType option:checked").value;
    let retResponse = document.querySelector("select#retReponse option:checked").value;

    mapDraw.getRouteOff();

    if (originPoi === undefined || destPoi === undefined) return;

    // 길찾기 option 설정
    setNavigationOption();
    if (type === "") {
        if (wayPointsPoi === undefined) {
            if (retResponse !== "")
                result = mapDraw.getRouteOn(originPoi, destPoi, "recommendation", [], Boolean(Number(retResponse)));
            else result = mapDraw.getRouteOn(originPoi, destPoi);
        } else {
            if (retResponse !== "")
                result = mapDraw.getRouteOn(
                    originPoi,
                    destPoi,
                    "recommendation",
                    [wayPointsPoi],
                    Boolean(Number(retResponse))
                );
            else result = mapDraw.getRouteOn(originPoi, destPoi, "recommendation", [wayPointsPoi]);
        }
    } else {
        if (wayPointsPoi === undefined) {
            if (retResponse !== "")
                result = mapDraw.getRouteOn(originPoi, destPoi, type, [], Boolean(Number(retResponse)));
            else result = mapDraw.getRouteOn(originPoi, destPoi, type);
        } else {
            if (retResponse !== "")
                result = mapDraw.getRouteOn(originPoi, destPoi, type, [wayPointsPoi], Boolean(Number(retResponse)));
            else result = mapDraw.getRouteOn(originPoi, destPoi, type, [wayPointsPoi]);
        }
    }
    if (result === undefined) alert("요청하신 경로가 존재하지 않습니다.");
    // 길찾기 path 가져오기
    getNavigation(result);
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
    document.querySelector("#myLocationOnCord").addEventListener("click", function (e) {
        myLocationOnCord();
    });
    document.querySelector("#myLocationOnCordOff").addEventListener("click", function (e) {
        mapDraw.myLocationOff();
    });
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

    let image = document.querySelector("input#image[name='myLocationIcon']").value;
    let width = document.querySelector("input#width[name='myLocationIcon']").value;
    let height = document.querySelector("input#height[name='myLocationIcon']").value;
    if (image !== "") iconOption["image"] = image;
    if (width !== "" && height !== "") iconOption["size"] = {width: Number(width), height: Number(height)};
    if (image !== "") option["icon"] = iconOption;

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
            mapDraw.myLocationOn(x, y, z, false, option);
        } else {
            mapDraw.myLocationOn(x, y, z, Boolean(Number(onActive)), option);
        }
    } else {
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
        setMarkerTrigger([
            {
                position: {
                    x: Number(document.querySelector("input#markerX").value),
                    y: Number(document.querySelector("input#markerY").value),
                    z: Number(document.querySelector("input#markerZ").value)
                }
            }
        ]);
    });

    document.querySelector("#clearMarker").addEventListener("click", function (e) {
        mapDraw.clearMarker();
    });

    document.querySelector("select#setAsyncMarker").addEventListener("change", function (e) {
        mapDraw.setAsyncMarker(Number(e.target.value));
    });
}

function setMarkerTrigger(marker) {
    let markers = [];

    for (let i = 0; i < marker.length; i++) {
        let option = {};
        Object.assign(option, {
            position: {
                x: marker[i].position.x,
                y: marker[i].position.y,
                z: marker[i].position.z
            }
        });
        if ("floorId" in marker[i]) option["floorId"] = marker[i].floorId;
        let image = document.querySelector("input#image[name='marker']").value;
        if (image !== "") option["image"] = image;

        let async = document.querySelector("select#async option:checked").value;
        if (async !== "") option["async"] = Boolean(Number(async));

        let width = document.querySelector("input#width[name='marker']").value;
        let height = document.querySelector("input#height[name='marker']").value;
        if (width !== "" && height !== "") option["size"] = {width: Number(width), height: Number(height)};
        markers.push(option);
    }
    if (markers.length > 0) mapDraw.setMarker({marker: markers});
}
