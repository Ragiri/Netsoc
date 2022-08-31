const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const lib = require("./lib/lib");
var ip = require("ip");

const app = express();
const port = 8080;
const router = express.Router();

router.get("/", (req, res) =>
  res.json(`> API is running on port ${port} 🚀🚀`)
);

router.get("/user/:userId", async (req, res, next) => {
  const userID = req.params.userId;
  //console.log(userID)
  await lib
    .getUser(userID)
    .then(async (response) => {
      if (response === "Not exist") {
        res.status(403).send("User not exist");
      }
      res.response = {
        status: 200,
        user: response,
      };
      next();
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});

router.post("/user/auth", async (req, res, next) => {
  let params = req.body;
  lib
    .auth(params)
    .then((response) => {
      console.log(response);
      if (response === "Not exist") {
        res.response = {
          status: "Not Exist",
        };
        next();
      } else {
        res.response = {
          status: 200,
          user: response,
        };
        next();
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});

router.post("/user", async (req, res, next) => {
  let params = req.body;
  await lib.createUser(params).then((response) => {
    if (response === "Success") {
      res.response = {
        status: 200,
      };
      next();
    }
  });
});

router.get("/website", async (req, res, next) => {
	let params = req.body;
	await lib.getWebsites(params).then((response) => {
	  if (response) {
		res.response = {
		  status: 200,
		  websites: response,
		};
		next();
	  }
	});
});


router.get("/websiteName/:websiteId", async (req, res, next) => {
	const websiteID = req.params.websiteId;
	await lib
	  .getWebsitebyName(websiteID)
	  .then(async (response) => {
		if (response === "Not exist") {
			res.response = {
			  status: 403,
			  message: response,
			};
		  next();
		}
		res.response = {
		  status: 200,
		  websites: response,
		};
		next();
	  })
	  .catch((err) => {
		console.error(err.message);
		res.status(500).send("Server Error");
	  });
  });

router.get("/website/:websiteId", async (req, res, next) => {
  const websiteID = req.params.websiteId;
  await lib
    .getOneWebsite(websiteID)
    .then(async (response) => {
      if (response === "Not exist") {
        res.status(403).send("Website not exist");
      }
      res.response = {
        status: 200,
        websites: response,
      };
      next();
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});


router.post("/website", async (req, res, next) => {
  let params = req.body;
  await lib.addWebsite(params).then((response) => {
    if (response === "Success") {
      res.response = {
        status: 200,
      };
      next();
    }
  });
});

router.patch("/website/like", async (req, res, next) => {
  let params = req.body;
  await lib.updateLike(params).then((response) => {
    if (response === "Success") {
      res.response = {
        status: 200,
      };
      next();
    }
  });
});

router.patch("/website/view", async (req, res, next) => {
  let params = req.body;
  await lib.addView(params).then((response) => {
    if (response === "Success") {
      res.response = {
        status: 200,
      };
      next();
    }
  });
});

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(compression());

app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
  app.options("*", (req, res) => {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});

app.use(cookieParser());

app.use(router);

app.use(lib.response.handleResponse);

app.use(lib.errorManager.handleError);

app.listen(port, () => {
  console.log(`> API is running on port ${port} 🚀🚀`);
});
