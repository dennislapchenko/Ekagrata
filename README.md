# Piti - access concentration

## Components:
Restful API
MongoDB
Static audio & image files

## Endpoints:
#### GET: /api/sound/grid/:soundGridCode
_ Request:
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
#### POST: /api/sound/create
_ Body:
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
#### POST: /api/sound/grid/create
_ Body:
```javascript
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
