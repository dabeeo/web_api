# MapInfo

MapInfo 클래스는 지도 데이터에 대한 정보를 가져오는 기능을 제공합니다. 지도를 그리기전에 먼저 지도의 정보를 확인하기 위해 사용할 수 있습니다.   

- 지도의 Version 가져오기
- 지도의 Poi 정보 가져오기
- 지도의 모든 정보 가져오기

- example: https://github.com/dabeeo/web_api/blob/master/samples/mapInfo.html
- 실행 : https://dabeeo.github.io/web_api/samples/mapInfo.html   

## Version 가져오기
- MapInfo 생성시 옵션으로 지도의 클라이언트아이디와 시크릿 정보를 전달합니다. 
- getVersion(callback_func)을 호출하면 인자로 넘겨진 callback function으로 서버에서 받은 지도의 버전 정보를 전달합니다. 
- 배포된 지도의 Version은 string 타입입니다.  
- response.getPayload()로 반환된 정보는  object로서 다음과 같은 구조를 같습니다. 
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
- response.getPayload()로 반환된 정보는  object로서 다음과 같은 구조를 같습니다.
- [poi정보]는 MapDraw의 response의 poi 정보와 동일합니다.   
    https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/response.md#poi-정보  
~~~
poi: {
    code: "00",
    message: "",
    payload: [poi정보]
}
~~~
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

## 지도의 모든 정보 가져오기
- MapInfo 생성시 옵션으로 지도의 클라이언트아이디와 시크릿 정보를 전달합니다.   
- getAll(callback_func)을 호출하면 인자로 넘겨진 callback function으로 서버에서 받은 지도의 모든 정보를 전달합니다.  
- 지도에 있는 모든 정보를 가져오기 위해서 아래 예제를 참조하시면 됩니다.  
- 정보의 내용은 mapView호출시 반환되는 mapDraw의 response와 동일합니다. 
- [response 정보]는 아래 링크를 확인하세요.    
    https://github.com/dabeeo/web_api/blob/master/docs/MapDraw/response.md

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
            new indoorMapApi.MapInfo(mapOptions).getAll( 
                    function(response) {
                        if (response.code === 200) {
                        console.log(response.getPayload());
                    }
                }
            );
        };
    </script>
~~~
