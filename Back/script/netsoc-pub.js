var NJQuery

const _config = {
	likeTag = "",
	adSquareTag = "square_add",
	link = window.location.origin
}

const _css = `
#card_width {max-width: 100%; cursor: default; display: none; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s;background: radial-gradient(#76b2fe, #b69efe);height: 180px;width: 360px;border-radius: 12%;display: flex;}
#card_width:hover {box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);cursor: pointer;}
#container {padding: 2px 16px;}
.img_style {width:40%;padding: 4%;}
`
const netsoc_add_width = (data) => {
	return  `
	<div id='card_width'>
	  <img src=${data.url}
			class="img_style" />
		<div id=''>
		  <h3>${data.name}</h3>
		  <span>${data.desc}</span>
		</div>
	  </div>
	`
};

const netsoc_add_height = () => {
	return `
	  <div class="card">
		<img src={}
			class="img_style" />
		<div id='btu-conStatus'>
		  <h3>truc</h3>
		  <span>not connected</span>
		</div>
	  </div>
	`
}

function _load() {
	
	/* Put style */
	let style = document.createElement('style')
	style.type ='text/css'
    style.appendChild(document.createTextNode(_css))
	document.getElementsByTagName("head")[0].appendChild(style);

	/* Put font */
	let link = document.createElement("link");
  	link.rel = "stylesheet";
  	link.href = "https://fonts.googleapis.com/css?family=Lato&display=swap";
  	document.getElementsByTagName("head")[0].appendChild(link);
	if (NJQuery(`#${_config.adSquareTag}`).length !== 0) {
		NJQuery(`#${_config.adSquareTag}`).html(netsoc_add_width({
			url: "https://pbs.twimg.com/media/FNe-GNSagAozP9D?format=jpg&name=large",
			name: "truc",
			desc: "some desc",
		}));
	}

}  

const _initJQuery = () => {
	NJQuery(() => {
		_load();

		NJQuery(document).on("click", "#card_width", async () => {
			window.fetch('http://localhost:8080/website').then((res) => {
				const truc = await res.json()
				console.log(truc)
			})
		})
	})

}

/* Initialisation of jQuery */
(function(d, s, id){
	let jQueryOk = true
	if (!window.jQuery)
	  jQueryOk = false
	else {
	  const version = jQuery.fn.jquery
	  if (version.split('.')[0] < 3)
		jQueryOk = false
	}
  
	if (jQueryOk) {
		NJQuery = $.noConflict(true)
	  _initJQuery()
	} else {
	  var js, fjs = d.getElementsByTagName(s)[0]
	  if (d.getElementById(id)){ return }
	  js = d.createElement(s); js.id = id
	  js.onload = function(){
		NJQuery = $.noConflict(true);
		_initJQuery()
	  }
	  js.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
	  fjs.parentNode.insertBefore(js, fjs)
	}
  }(document, 'script', 'jquery-netsoc'))