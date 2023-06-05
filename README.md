<h1 style="color:aqua"> URL Shortener </h1>

## **This is a full-stack project where users can easily create shortened and encrypted URLs.**

### API Explanation at the end.

<br/>
<br/>

https://github.com/bkizilkayaa/url-shortener/assets/88281419/d3bf286b-2187-4e24-89d2-998dd109e2e0

<br/>
<img src='./img/expl1.png'/>
<br/>
<img src='./img/expl2.png'/>
<br/>
<br/>

<h2 style="color:aqua"> If there is no valid domain input:</h2>
<br/>

<img src='./img/expl3.png'/>

<br/>

_<h1 style="color:green"> **API Explanation** </h1>_

<h2 style="color:yellow"> 1-) Get All Shortened URLs </h2>

### Method: GET

### Param: No Param

### Result: Gets All Records

### Status: 200

```diff
+ localhost:8080/api/v1/url
```

<img src='./img/getMethodExample.png'/>
<br/> <br/>

<h2 style="color:yellow"> 2-) Generate Shortened URL </h2>

### Method: POST

### Param: Original Link Required (json form)

### Result: Creates a record

### Status: 201 Created

```diff
+ localhost:8080/api/v1/url
```

<br/>

<h2 style="color:yellow"> 3-) Get Original URL </h2>

### Method: GET

### Param: Shortened Link

### Result: Redirects original link

### Status: 200

```diff
+ localhost:8080/api/v1/url/{shortLink}
```

<br/>

<h2 style="color:yellow"> 4-) Delete Shortened URL </h2>

### Method: DELETE

### Param: Shortened Link

### Result: Removes the record from the database

### Status: 200 (Everything is OK)

```diff
+ localhost:8080/api/v1/url/{shortLink}
```

<br/>
