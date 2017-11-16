# Piti - access concentration

## Components:
* Restful API
* MongoDB
* Static audio & image files

## Endpoints:
#### GET: /api/sound/grid/:soundGridCode
 Request:
```javascript
{
    "name": String,
    "code": String,
    "description": String,
    "sounds": [
        {
            "name": String,
            "code": String,
            "description": String,
            "iconPath": String,
            "dataPath": [String]
        }
    ]
}
```
---
#### POST: /api/sound/create
 Body:
```javascript
{
	"name": String,
	"code": String,
	"description": String,
	"iconPath": String,
	"dataPath": [String]
}
```
---
#### POST: /api/sound/grid/create
 Body:
```javascript
{
	"name": String,
	"code": String,
	"description": String,
	"sounds": [String]
}
```
