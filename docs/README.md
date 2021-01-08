## dabeeo web api에 대한 설명
api를 사용하기 위한 간단한 설명입니다. 자세한 내용은 해당 파일을 참고하세요. 

### MapView : 지도그리기 (서버에서 지도파일 가져와서 지도 그리기)
- 다비오 지도서버에서 지도를 다운로드하여 지도를 그리는 방법입니다. 
- https://github.com/dabeeo/web_api/tree/master/docs/MapView
- indoorMapApi.MapView를 이용하여 지도를 그립니다. 
- 이 때 모든 지도 정보를 가져오므로 이 이후에는 반환된 값을 (MapDraw) 이용하여 지도를 제어할 수 있습니다. 
- 초기 option을 지정할 수 있습니다. 

### MapLocal : 지도그리기 (CDN에 저장된 지도파일을 가져와서 지도 그리기 )
- 다비오 지도서버가 아닌 CDN에 저장된 지도를 읽어서 지도를 그리는 방법입니다. MapView와 사용방법은 동일합니다.
- 속도는 MapView를 사용할 때보다 빠르나, 지도가 업데이트될 때마다 CDN으로 복사해줘야 합니다. 
- https://github.com/dabeeo/web_api/tree/master/docs/MapLocal
- indoorMapApi.MapLocal를 이용하여 지도를 그립니다. 
- 초기 option을 지정할 수 있습니다. 

### MapDraw : 지도 속성 가져오기 및 지도 설정 변경하기
- 자세한 설명은 아래 링크에 있습니다. 
- https://github.com/dabeeo/web_api/tree/master/docs/MapDraw
- MapView를 호출시 mapDraw를 반환하며 여기에 여러 지도에 관한 정보들이 담겨있습니다. 이 정보를 이용하여 지도 설정을 변경하거나 필요한 지도정보를 사용자에게 보여줄 수 있습니다.    

### Event : api 호출시 반환되는 event에 대한 설명
- 자세한 설명은 아래 링크에 있습니다. 
- https://github.com/dabeeo/web_api/blob/master/docs/Event.md
