# MapInfo

MapInfo 클래스는 지도 데이터에 대한 정보를 가져오는 기능을 제공합니다.

- 지도의 Version 가져오기
- 지도의 Poi 정보 가져오기

## Version 가져오기
- MapInfo 생성시 옵션으로 지도의 클라이언트아이디와 시크릿 정보를 전달합니다. 
- getVersion(callback_func)을 호출하면 인자로 넘겨진 callback function으로 서버에서 받은 지도의 버전 정보를 전달합니다. 
- 배포된 지도의 Version은 string 타입입니다.  
- Response는 object로서 다음과 같은 구조를 같습니다. 
~~~
version: {
    code: "00",
    message: "",
    payload: "3.4"
}
~~~
- 배포된 지도의 최신 Version을 가져오기 위해서 아래 예제와 같이 사용하면 됩니다.  
~~~javascript
        <script>
        window.onload = function () {
        
            // 지도 인증정보
            let authorization = new indoorMapApi.Authorization({
            clientId: "28AXw_veA2YbNKDP6poTpT",
            clientSecret: "70c540c169af62808f4da3709e988e06"
            });
        
            let mapOptions = {
            authorization: authorization
            };
        
            // 서버에서 정보를 가져오면 콜백으로 결과를 리턴합니다
            new indoorMapApi.MapInfo(mapOptions).getVersion( 
                    function(response) {
                        if (response.code === 200) {
                        console.log(response.getPayload());
                    }
                }
            );
        };
    </script>
~~~

## POI 가져오기
- MapInfo 생성시 옵션으로 지도의 클라이언트아이디와 시크릿 정보를 전달합니다. 
- getPoi(callback_func)을 호출하면 인자로 넘겨진 callback function으로 서버에서 받은 지도의 poi 정보를 전달합니다. 
- 지도에 있는 poi 정보를 가져오기 위해서 아래 예제를 참조하시면 됩니다.
- Response의 자세한 정보는 아래 링크로 연결된 파일을 참조하기 바랍니다. 
- https://docs.google.com/spreadsheets/d/1OjBHMOCf3Q0qz_k_QGV-uaC1xRKzdSSqdiwdADLiQdM/edit?usp=sharing
  
~~~javascript
        <script>
        window.onload = function () {
        
            // 지도 인증정보
            let authorization = new indoorMapApi.Authorization({
            clientId: "28AXw_veA2YbNKDP6poTpT",
            clientSecret: "70c540c169af62808f4da3709e988e06"
            });
        
            let mapOptions = {
            authorization: authorization
            };
        
            // 서버에서 정보를 가져오면 콜백으로 결과를 리턴합니다
            new indoorMapApi.MapInfo(mapOptions).getPoi( 
                    function(response) {
                        if (response.code === 200) {
                        console.log(response.getPayload());
                    }
                }
            );
        };
    </script>
~~~
