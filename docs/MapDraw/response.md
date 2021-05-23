## MapDraw.response: 지도 속성 반환
MapView를 호출시 mapDraw를 반환하며 여기에 여러 지도에 관한 정보들이 담겨있습니다. 이 정보를 이용하여 지도 설정을 변경하거나 필요한 지도정보를 사용자에게 보여줄 수 있습니다.   


### 지도이름
지도 이름은 MapDraw의 속성에 담겨 있습니다. 
~~~javascript
MapDraw.response.mapName
~~~
- example: https://github.com/dabeeo/web_api/blob/master/samples/mapName.html   

### 층정보
floorInfo에 층에 대한 정보들이 들어 있습니다. 이를 이용하여 층에 대한 정보를 표시하거나 제어할 수 있습니다. 여러층이 있을 수 있으므로 array 형태입니다.     
- id: 층 고유 아이디
- name : 언어별 층이름
- dafaultYn : 디폴트 여부

~~~javascript
MapDraw.response.floorInfo
[
    {
      "id": "FL-qhndqjlqhu7p3894",
      "name": [
        {
          "lang": "ko",
          "text": "11F"
        }
      ],
      "defaultYn": true
    }
]
~~~

### 테마 정보
themeInfo에 각층의 object를 그리는 테마에 대한 정보가 들어있습니다. 테마에 따라 다른 색감으로 지도를 그리게 됩니다. 하나의 지도에 여러개의 테마가 지정될 수 있으므로 array형태로 되어 있습니다. 

- id: 테마 고유 아이디
- name : 테마 이름
- dafaultYn : 디폴트 여부

~~~javascript
MapDraw.response.themeInfo
[
    {
      "id": 1915,
      "name": "다비오 테마",
      "defaultYn": false
    }
]
~~~

### poi 정보   
poi 정보는 MapDraw의 속성에 담겨 있습니다. 여러개의 poi가 있으므로 array 형태입니다.   
poi 정보에 담긴 타이틀에는 new line 과 같은 특수 문자들이 포함되어 있습니다. 검색을 사용할 경우 이러한 특수문자를 제거한 후 사용하기 바랍니다. 

- id: 고유 아이디
- floorId: poi가 속한 층아이디   
- title : poi 이름
- categoryCode : 카테고리 코드
- iconUrl : icon Url
- position : x,y,z position
- metadatas : 메타데이터 정보
- titleByLanguages: 언어별 타이틀 정보
~~~javascript
MapDraw.response.poiInfo
[{
      "id": "PO-4JvSQCWHC2270",
      "floorId": "FL-qhndqjlqhu7p3894",
      "title": "남자화장실",
      "categoryCode": "",
      "icoUrl": "https://assets.dabeeomaps.com/upload/poiMarker/MansToilet.png",
      "position": {
        "x": 3937.7355807664,
        "y": 756.651784816092,
        "z": 0
      },
      "metadatas": [
        {
          "lang": "ko",
          "metadatas": []
        }
      ],
      "titleByLanguages": [
        {
          "lang": "ko",
          "text": "남자화장실"
        }
      ]
}]
~~~

### poi 카테고리   
poi 카테고리는 poi가 속한 카테고리에 대한 정보가 담겨 있습니다. 카테고리는 총 2 level 까지 가질 수 있습니다. level별로 hierarchy구조로 되어 있습니다. 
- id: 카테고리 고유 아이디
- code: 카테고리 코드 (예: 1-1)
- level: 카테고리 레벨
- title: 타이틀
- childList: 배열. 부모와 동일한 구조로 되어 있음. 

~~~javascript
MapDraw.response.poiCategories

[
  {
    "id":"PC-1hvb0j1qh0bc36692",
    "code":"1",
    "level":1,
    "title":"편의시설",
    "parentId":null,
    "parentCode":null,
    "titleByLanguages":[
      {
        "lang":"ko",
        "text":"편의시설"
      },
      {
        "lang":"en",
        "text":"Convenience"
      }
    ],
    "childList":[
      {
        "id":"PC-vb6bkd9gg8qe0622",
        "code":"1-1",
        "level":2,
        "title":"화장실(여)",
        "parentId":null,
        "parentCode":null,
        "titleByLanguages":[
          {
            "lang":"ko",
            "text":"화장실(여)"
          },
          {
            "lang":"en",
            "text":"Toilet(w)"
          }
        ],
        "childList":[
          
        ]
      },
      {
        "id":"PC-1iv0zx28uyvcn6399",
        "code":"1-2",
        "level":2,
        "title":"화장실(남)",
        "parentId":null,
        "parentCode":null,
        "titleByLanguages":[
          {
            "lang":"ko",
            "text":"화장실(남)"
          },
          {
            "lang":"en",
            "text":"Toilet(m)"
          }
        ],
        "childList":[
          
        ]
      },
      {
        "id":"PC-ubgb2mmh58hl3786",
        "code":"1-3",
        "level":2,
        "title":"엘리베이터",
        "parentId":null,
        "parentCode":null,
        "titleByLanguages":[
          {
            "lang":"ko",
            "text":"엘리베이터"
          },
          {
            "lang":"en",
            "text":"Elevator"
          }
        ],
        "childList":[
          
        ]
      }
    ]
  },
]

~~~

### lang info   
지도에서 사용하는 lang에 대한 정보가 들어 있습니다. 여러 lang를 사용할 수 있으므로 배열형태입니다. 
- lang: 언어  
- name: 언어 이름 
- name_en: 언어 이름 (영어)
- defaultYn: 디폴트 여부 

~~~javascript
MapDraw.response.langInfo
[    {
      "lang":"ko",
      "name":"한국어",
      "name_en":"Korean",
      "defaultYn":true
    }
 ]
~~~


### section 정보
sectionInfo에 섹션 정보가 들어있습니다. 여러개의 section이 있으므로 array 형태입니다.   

- id: 고유 아이디
- floorId: section이 속한 층아이디   
- title : section 이름
- position : x,y,z position
- size : width(x축 넓이), height(y축 넓이) 
- volume : depth (z축 넓이)
- angle : 회전 각도
- style : groupCode 스타일 그룹코드
- passable : 지나 갈 수 있는 section인지 여부
~~~javascript
MapDraw.response.sectionInfo
[{
    {
        "id": "SC-e0F2gHmSGh8957",
        "floorId": "FL-qhndqjlqhu7p3894",
        "title": "ROAD",
        "position": {
            "x": 3398.6336669921893,
            "y": 1365.3215332031261,
            "z": 0
        },
        "size": {
            "width": 3285.38110351562,
            "height": 910.968017578127
        },
        "volume": 0,
        "angle": 0,
        "style": {
            "groupCode": "SC-SECTION|gZ-sl1DlU4079"
        },
        "passable": true
    }
}]
~~~

### mapOption 정보
현재 mapView의 option을 return합니다. 
~~~javascript
MapDraw.response.mapOptions {
    authorization: Authorization {clientId: "", clientSecret: ""}
    camera: "2d"
    canvasSize: {width: 1000, height: 800}
    controlDrag: {3d: "right", 2d: "left"}
    controlZoom: true
    floor: "default"
    isPoiAngle: false
    isPoiSprite: false
    language: "ko"
    panningPercent: 1
    poiLevel: (3) [NaN, NaN, NaN]
    rotationMouse2d: true
    rotationTouch2d: true
    showPoi: true
    theme: "default"
    zoom: 150
}
~~~
