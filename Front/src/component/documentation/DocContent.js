export const DocContent = [
  {
    id: 1,
    title: "How to run the app",
    summary: "This ticket can help you to run the app",
    text: ``,
    date: new Date("2022, 03, 01"),
  },
  {
    id: 2,
    title: "Back-end documentation",
    summary: "Back-End | API documentation",
    text: `
		<h2 style="text-align: inherit;"><strong>Version</strong></h2><p>v1.0.0</p>
		
		
		
		<h2><strong><u>Routes</u></strong></h2><br /><br />
		
		<h3><strong>User Route:</strong></h3>
		
		<p>| Action | Method | Route |<br />
		| ---- | ---- | ---- |<br />
		| Auth | <code>POST</code> | <code>/user/auth</code> |<br />
		| Add a new user | <code>POST</code> | <code>/user</code> |<br />
		| Get user | <code>POST</code>| <code>/user/:userId</code>|</p><br />
		
		<h3><strong>Websites Routes:</strong></h3>
		
		<p>| Action | Method | Route |<br />
		| ---- | ---- | ---- |<br />
		| Get websites | <code>GET</code> | <code>/website</code> |<br />
		| Add a new website | <code>POST</code> | <code>/website</code> |<br />
		| Get a website | <code>GET</code> | <code>/website/:websiteId</code>|<br />
		| ---- | ---- | ---- |<br />
		| Change like of a website | <code>PATCH</code>| <code>/website/like</code>|<br />
		| Add a view | <code>PATCH</code>| <code>/website/view</code>|</p><br />
		
		<h3><strong>Developpement Url:</strong></h3>
		
		<a href="http://localhost:8080"><ul><li>http://localhost:8080</li></ul></a><br />
		
		<h2><strong><u>Routes description</u></strong></h2><br /><br />
		
		<h3><strong>Auth:</strong></h3>
		
		<p>Request type: <code>POST</code>.</p>
		
		<p>URL: <code>/user/auth</code>.</p>
		
		<p>Body: 
		<code><br />
		{
			&quot;mail&quot;: &quot;string&quot;,
			&quot;pass&quot;: &quot;string&quot;,
		}
		</code></p>
		
		<p>Here is an example of <strong>response</strong>:
		<code><br />
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
					&quot;user&quot;: &quot;json object&quot;,
				}
			]
		}
		</code></p>
		
		<p><code><br />
		{
			&quot;status&quot;: &quot;error&quot;,
			&quot;code&quot;: 403,
			&quot;message&quot;: &quot;string&quot;,
		}
		</code></p><br />
		
		<h3><strong>Add a new user:</strong></h3>
		
		<p>Request type: <code>POST</code>.</p>
		
		<p>URL: <code>/user</code>.</p>
		
		<p>Body: 
		<code><br />
		{
			&quot;name&quot;: &quot;string&quot;,
			&quot;mail&quot;: &quot;string&quot;,
			&quot;pass&quot;: &quot;string&quot;,
		}
		</code></p><br />
		
		<p>Here is an example of <strong>response</strong>: <br />
		<code>
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
				}
			]
		}
		</code></p>
		
		<p><code>
		{
			&quot;status&quot;: &quot;error&quot;,
			&quot;code&quot;: 403,
			&quot;message&quot;: &quot;string&quot;,
		}
		</code></p><br />
		
		<h3><strong>Get user:</strong></h3>
		
		<p>Request type: <code>GET</code>.</p>
		
		<p>URL: <code>/user/:userId</code>.</p>
		
		<p>Here is an example of <strong>response</strong>:<br />
		<code>
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
					&quot;user&quot;: &quot;json object&quot;,
				}
			]
		}
		</code></p>
		
		<p><code>
		{
			&quot;status&quot;: &quot;error&quot;,
			&quot;code&quot;: 403,
			&quot;message&quot;: &quot;string&quot;,
		}
		</code></p><br />
		
		<h3><strong>Get Websites:</strong></h3>
		
		<p>Request type: <code>GET</code>.</p>
		
		<p>URL: <code>/website</code>.</p>
		
		<p>Here is an example of a <strong>response</strong>:<br />
		<code>
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
					&quot;website&quot;: &quot;array&quot;
				}
			]
		}
		</code></p><br />
		
		<h3><strong>Add website:</strong></h3>
		
		<p>Request type: <code>POST</code>.</p>
		
		<p>URL: <code>/website</code>.</p>
		
		<p>Body: <br />
		<code>
		{
			&quot;name&quot;: &quot;string&quot;,
			&quot;description&quot;: &quot;string&quot;,
			&quot;link&quot;: &quot;string&quot;,
			&quot;img_url&quot;: &quot;string&quot;,
		}
		</code></p>
		
		<p>Here is an example of a <strong>response</strong>:<br />
		<code>
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
				}
			]
		}
		</code></p><br />
		
		<h3><strong>Get a Website:</strong></h3>
		
		<p>Request type: <code>GET</code>.</p>
		
		<p>URL: <code>/website/:websiteId</code>.</p>
		
		<p>Here is an example of a <strong>response</strong>:<br />
		<code>
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
					&quot;website&quot;: &quot;json object&quot;
				}
			]
		}
		</code></p><br />
		
		<h3><strong>Change Like:</strong></h3>
		
		<p>Request type: <code>PATCH</code>.</p>
		
		<p>URL: <code>/website/like</code>.</p>
		
		<p>Body: <br />
		<code>
		{
			&quot;id&quot;: &quot;int&quot;,
			&quot;like&quot;: &quot;int&quot;,
		}
		</code></p>
		
		<p>Here is an example of a <strong>response</strong>:<br />
		<code>
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
				}
			]
		}
		</code></p><br />
		
		<h3><strong>Add View:</strong></h3>
		
		<p>Request type: <code>PATCH</code>.</p>
		
		<p>URL: <code>/website/view</code>.</p>
		
		<p>Body: <br />
		<code>
		{
			&quot;id&quot;: &quot;int&quot;,
		}
		</code></p>
		
		<p>Here is an example of a <strong>response</strong>:<br />
		<code>
		{
			&quot;status&quot;: &quot;success&quot;,
			&quot;code&quot;: 200,
			&quot;data&quot;: [
				{
					&quot;status&quot;: 200,
				}
			]
		}
		</code></p>
		`,
    date: new Date("2022, 03, 10"),
  },
  {
    id: 3,
    title: "SQL Tables",
    summary: "How is make database",
    text: `<h2><strong>MSQL</strong></h2>

	<p>We have the Dockerfile and initialisation file of the database</p>
	
	<h3><strong>Database</strong></h3>
	
	<p>Database have 3 table</p>
	
	<p> Tables | Number of Parameter  | Params |<br />
	| ---- | ---- | ---- |<br />
	| USER | 6 params | ID <code>INT</code>, DATE_INSCRIT <code>VARCHAR(200)</code>, NAME <code>VARCHAR(300)</code>, EMAIL <code>VARCHAR(300)</code>, PASSWORD <code>VARCHAR(300)</code>, VISITED_LINK <code>JSON</code>|<br />
	| WEBSITE | 2 params | ID_LINK <code>INT</code> , NAME <code>VARCHAR(300)</code>, DESCRIPTION <code>VARCHAR(3000)</code>, IMGURL <code>VARCHAR(3000)</code>, LINK <code>VARCHAR(3000)</code>, NB_LIKE<code>INT</code>, NB_VIEW <code>INT</code>, LIKED_IP <code>JSON</code> |</p><br />
	`,
    date: new Date("2022, 03, 10"),
  },
  {
    id: 4,
    title: "Script",
    summary:
      "Comment injecter des pub n'importe où, ou mettre un boutton like sur son site",
    text: `
	<h2><u>Installation</u></h2><br />

		<h3>Script</h3>

		<p>In order to initialize the Netsoc ads, script must first be integrated.</p>

		<p>In an HTML file, the script may ben called by the following tag, in the <code>&lt;head&gt;&lt;/head&gt;</code> section:</p>

		<p><code>
		&lt;script type=&quot;text/javascript&quot;src=&quot;https://localhost:3000/script/netsoc-pub.min.js&quot;&gt;&lt;/script&gt;
		</code></p>

		<p>Otherwise, the script can be injected by the following Javascript functions:</p>

		<p><code>
		const script = document.createElement(&quot;script&quot;);<br />
		script.src = &quot;https://localhost:3000/script/netsoc-pub.min.js&quot;<br />
		script.async = true;<br />
		document.head.appendChild(script);<br />
		</code></p>

		<p>If not used in your project, the netsoc script injects by itself two other scripts:</p>

		<ul><li><p>JQuery (https://code.jquery.com/jquery-3.4.1.min.js)</p></li></ul><br /><br />

		<h3>Ad container</h3>

		<p>The Ads needs a <code>&lt;div&gt;</code> tag with the specific &quot;width_ad&quot; or &quot;height_ad&quot; id in order to be deployed:</p>

		<p><code>
		&lt;div id=&quot;width_ad&quot;&gt;&lt;/div&gt;
		&lt;div id=&quot;height_ad&quot;&gt;&lt;/div&gt;
		</code></p><br />

		<h3>Like Button</h3>

		<p>The Like button needs a <code>&lt;div&gt;</code> tag with the specific &quot;like_add&quot; id in order to be deployed:</p>

		<p><code>
		&lt;div id=&quot;like_add&quot;&gt;&lt;/div&gt;
		</code></p>

		<p>To register your site and add likes, The Like button have to know some information.
		To add this information you have to put option tag:</p>

		<p><code>
		&lt;div
		  id=&quot;like_add&quot;
		  netsoc_name=&quot;your site/add title&quot;
		  netsoc_desc=&quot;your description&quot;
		  netsoc_img_url=&quot;url of an image&quot;&gt;&lt;/div&gt;
		<code></p>
	`,
    date: new Date("2022, 03, 11"),
  },
];
