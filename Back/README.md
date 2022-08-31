# **Back-End Documentation**

## **Version**

v1.0.0

## **Routes**

### **User Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Auth | `POST` | `/user/auth` |
| Add a new user | `POST` | `/user` |
| Get user | `POST`| `/user/:userId`|

### **Websites Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get websites | `GET` | `/website` |
| Add a new website | `POST` | `/website` |
| Get a website | `GET` | `/website/:websiteId`|
| ---- | ---- | ---- |
| Change like of a website | `PATCH`| `/website/like`|
| Add a view | `PATCH`| `/website/view`|

### **Developpement Url**

- http://localhost:8080

## **Routes description**

### **Auth**

Request type: `POST`.

URL: `/user/auth`.

Body: 
```json
{
    "mail": "string",
    "pass": "string",
}
```

Here is an example of **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
            "user": "json object",
        }
    ]
}
```

```json
{
    "status": "error",
    "code": 403,
	"message": "string",
}
```

### **Add a new user**

Request type: `POST`.

URL: `/user`.

Body: 
```json
{
	"name": "string",
    "mail": "string",
    "pass": "string",
}
```

Here is an example of **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
        }
    ]
}
```


```json
{
    "status": "error",
    "code": 403,
	"message": "string",
}
```

### **Get user**

Request type: `GET`.

URL: `/user/:userId`.


Here is an example of **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
			"user": "json object",
        }
    ]
}
```


```json
{
    "status": "error",
    "code": 403,
	"message": "string",
}
```
### **Get Websites**

Request type: `GET`.

URL: `/website`.


Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
			"website": "array"
        }
    ]
}
```

### **Add website**

Request type: `POST`.

URL: `/website`.

Body: 
```json
{
	"name": "string",
    "description": "string",
    "link": "string",
    "img_url": "string",
}
```

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
        }
    ]
}
```
### **Get a Website**

Request type: `GET`.

URL: `/website/:websiteId`.

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
			"website": "json object"
        }
    ]
}
```
### **Change Like**

Request type: `PATCH`.

URL: `/website/like`.


Body: 
```json
{
	"id": "int",
    "like": "int",
}
```

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
        }
    ]
}
```

### **Add View**

Request type: `PATCH`.

URL: `/website/view`.

Body: 
```json
{
	"id": "int",
}
```

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "status": 200,
        }
    ]
}
```

## **Database**

We uses a MySQL database for this API. See the doc here ([documentation](../Sql/README.md))
