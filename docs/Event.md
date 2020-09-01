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

### navi-complete
네비게이션의 모의주행이 완료된 경우 모의주행이 완료되었다는 이벤트가 발생합니다. 
사용법은 다음과 같습니다. 
~~~javascript
document.addEventListener("navi-complete", (e) => {
                console.log(e.detail);
});
~~~

### poi-click
지도에서 poi 클릭 이벤트를 실행하면 poi 정보를 전달합니다.
사용법은 다음과 같습니다. 
~~~javascript
document.querySelector("#map").addEventListener("poi-click", (e) => { // 캔버스가 그려지는 container
        console.log(e.detail); // 해당하는 poi 정보가 array 로 리턴
});
~~~
