# piti
Piti - access concentration

Components:
Restful API
MongoDB
Static audio & image files

#Endpoints:
GET: /api/sound/grid/:soundGridCode
->
```javascript
{
    "name": gridName,
    "code": gridCode,
    "description": gridDescription,
    "sounds": [
        {
            "name": soundName,
            "code": soundCode,
            "description": soundDescription,
            "iconPath": soundIconPath,
            "dataPath": [
                soundDataPath1,
                soundDataPath2
            ]
        }
    ]
}
```
---
POST: /api/sound/create
Body:
```javascript
{
	"name": soundName,
	"code": soundCode,
	"description": soundDescription,
	"iconPath": soundIconPath,
	"dataPath": [soundDataPath1, soundDataPath2]
}
```
---
POST: /api/sound/grid/create
```json
Body:
{
	"name": soundGridName,
	"code": soundGridCode,
	"description": soundGridDescription,
	"sounds": [
		soundObject1,
    soundObject2
	]
}
```
