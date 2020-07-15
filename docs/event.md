네비게이션등을 수행할 때 SDK 내에서 층이 바뀌는 경우가 있습니다. 
이때 층이 바뀐 정보가 event로 내려옵니다. 
바뀐 층에 맞게 화면을 표시해주면 됩니다. 
사용법은 다음과 같습니다. 


~~~html
  document.addEventListener("floor-changed", (e) => {
      let floorId = e.detail;
      console.log(floorId);
      document.querySelector(".floor-on").classList.remove("floor-on");
      document.getElementById(floorId).classList.add("floor-on");
  });

~~~