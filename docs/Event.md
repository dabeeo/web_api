### floor-changed
네비게이션등을 수행할 때 SDK 내에서 층이 바뀌는 경우가 있습니다.   
이때 층이 바뀐 정보가 event로 내려옵니다.  
바뀐 층에 맞게 화면을 표시해주면 됩니다.   
사용법은 다음과 같습니다.    


~~~javascript
document.addEventListener("floor-changed", (e) => {
    let floorId = e.detail;
    console.log(floorId);
    document.querySelector(".floor-on").classList.remove("floor-on");
    document.getElementById(floorId).classList.add("floor-on");
});

~~~

* example : https://github.com/dabeeo/web_api/blob/master/samples/floor.html
* 실행 : https://dabeeo.github.io/web_api/samples/floor.html   


### navi-complete
네비게이션의 모의주행이 완료된 경우 모의주행이 완료되었다는 이벤트가 발생합니다. 
사용법은 다음과 같습니다. 
~~~javascript
document.addEventListener("navi-complete", (e) => {
                console.log(e.detail);
});
~~~


### will-floor-change 모의주행중 층이 변경되는 시점에 이벤트가 발생합니다. 층 id정보, 층 변경 이동수단을 알 수 있습니다.
**이동수단 코드**
* OB-ELEVATOR : 엘리베이터
* OB-ESCALATOR : 에스컬레이터 양방향
* OB-ESCALATOR_UP : 에스컬레이터 상행
* OB-ESCALATOR_DOWN : 에스컬레이터 하행
* OB-STAIRS : 계단
* OB-OTHER_TRANSPORT : 연결통로 등 기타 이동 수단
~~~javascript
document.addEventListener("will-floor-change", function (e) {
    let currentFloor = e.detail.floor.current;
    let nextFloor = e.detail.floor.next;
    let transCode = e.detail.transCode;
})
~~~
- example: https://dabeeo.github.io/web_api/example/#navigationWillFloorChange
- 실행 : https://dabeeo.github.io/web_api/samples/navigationWillFloorChange.html  

### poi-click
지도에서 poi 클릭 이벤트를 실행하면 poi 정보를 전달합니다.
사용법은 다음과 같습니다. 
~~~javascript
document.querySelector("#map").addEventListener("poi-click", (e) => { // 캔버스가 그려지는 container
        console.log(e.detail); // 해당하는 poi 정보가 array 로 리턴
});
~~~
- return 형태   
~~~
[
  {
    "metadatas": [
      {
        "lang": "ko",
        "metadatas": [
          {
            "text": "{\"unit\": \"3145\"}"
          }
        ]
      }
    ],
  }
]
~~~
* example : https://github.com/dabeeo/web_api/blob/master/samples/clickEvent.html
* 실행 : https://dabeeo.github.io/web_api/samples/clickEvent.html   


### object-click
지도에서 object 클릭 이벤트를 실행하면 obejct의 id, title, type, 연결된 poi 정보를 반환합니다.   
반환되는 정보는 배열형태입니다. 이는 클릭한 좌표에 여러개의 object가 연결될 수 있기 때문입니다.   
한 개의 object에 연결된 poi가 하나인 경우는 poiData로 반환되며 
poi가 여러개인 경우를 위하여 poiDataArr 배열형태로도 반환합니다.  
사용법은 다음과 같습니다.
~~~ javascript 
document.querySelector("#map").addEventListener("object-click", (e) => { // 캔버스가 그려지는 container
        console.log(e.detail); // 해당하는 object의 정보와 해당 object에 연결된 poi 정보가 반환
});
~~~
- return 형태
~~~
[ 
    {
        id:"OB-zzY3qA3NU0830",
        title "object",
        type: "OB-FIXED",
        poiData:{
                    id:"PO--yXbjGjlk6426",
                    metadatas: [{"text": "{\"unit\": \"3145\"}"}],
                    .
                    .
                    .
         },
         poiDataArr : [
                {
                    id:"PO--yXbjGjlk6426",
                    metadatas: [{"text": "{\"unit\": \"3145\"}"}],
                    .
                    .
                    .
                }
         ]
    }
]
~~~
* example : https://github.com/dabeeo/web_api/blob/master/samples/clickEvent.html
* 실행 : https://dabeeo.github.io/web_api/samples/clickEvent.html   



### marker-click
지도에서 marker 클릭시 선택된 marker 정보를 반환합니다.   
반환하는 정보는 setMaker시에 data option으로 지정한 정보입니다. 
사용법은 다음과 같습니다.
~~~ javascript 
document.querySelector("#map").addEventListener("marker-click", (e) => { // 캔버스가 그려지는 container
        console.log(e.detail); // 해당하는 marker 정보 반환
});
~~~

* example : https://github.com/dabeeo/web_api/blob/master/samples/clickEvent.html
* 실행 : https://dabeeo.github.io/web_api/samples/clickEvent.html   

