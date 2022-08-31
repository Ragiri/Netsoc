## Installation

### Script

In order to initialize the Netsoc ads, script must first be integrated.

In an HTML file, the script may ben called by the following tag, in the `<head></head>` section:

```
<script type="text/javascript"src="https://localhost:3000/script/netsoc-pub.min.js"></script>
```

Otherwise, the script can be injected by the following Javascript functions:

```javascript
const script = document.createElement("script");
script.src = "https://localhost:3000/script/netsoc-pub.min.js";
script.async = true;
document.head.appendChild(script);
```

If not used in your project, the netsoc script injects by itself two other scripts:

- JQuery (https://code.jquery.com/jquery-3.4.1.min.js)

### Ad container

The Ads needs a `<div>` tag with the specific "width_ad" or "height_ad" id in order to be deployed:

```javascript
<div id="width_ad"></div>
<div id="height_ad"></div>
```

### Like Button

The Like button needs a `<div>` tag with the specific "like_add" id in order to be deployed:

```javascript
<div id="like_add"></div>
```

To register your site and add likes, The Like button have to know some information.
To add this information you have to put option tag:

```javascript
<div
  id="like_add"
  netsoc_name="your site/add title"
  netsoc_desc="your description"
  netsoc_img_url="url of an image"
></div>
```
