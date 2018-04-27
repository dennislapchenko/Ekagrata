# piti
Piti - access concentration

## Components
Restful API
MongoDB
Static audio & image files

## Endpoints

* GET: `/api/sound/grid/:soundGridCode`
```
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

* POST: `/api/sound/create`
```
{
	"name": soundName,
	"code": soundCode,
	"description": soundDescription,
	"iconPath": soundIconPath,
	"dataPath": [soundDataPath1, soundDataPath2]
}
```

* POST: `/api/sound/grid/create`
```
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
