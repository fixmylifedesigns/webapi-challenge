const express = require("express");

const router = express.Router();
const project = require("../helpers/projectModel");
const action = require("../helpers/actionModel");

// custom shortcuts
const error = (status, message, res) => {
  res.status(status).json({ error: message });
};
//******* Project *********//
router.get("/project", (req, res) => {
  const { id } = req.params;
  project
    .get(id)
    .then(res => {
      res.json(res);
    })
    .catch(err => {
      return error(500, "error", res);
    });
});

router.get("/project/:id", (req, res) => {
  project
    .getProjectActions(req.params)
    .then(res => {
      res.json(res);
    })
    .catch(err => {
      return error(500, "no project by that id", res);
    });
});
router.post("project/", (req, res) => {
  project
    .instert(req.body)
    .then(add => {
      res.json(add);
    })
    .catch(err => {
      return error(500, "error posting project", res);
    });
});

router.put("/project/:id", (req, res) => {
  project
    .update(req.params, req.body)
    .then(res => {
      if (res === 0) {
        return error(404, "no project by that id");
      } else {
        db.find(id).then(project => {
          res.json(project);
        });
      }
    })
    .catch(err => {
      return error(500, "error making changes", res);
    });
});

router.delete("/project/:id", (req, res) => {
  project
    .remove(req.params)
    .then(del => {
      if (del === 0) {
        return error(404, " no project by that id");
      } else {
        res.json({ success: `deleting project : ${id}` });
      }
    })
    .catch(err => {
      return error(500, "could not delete", res);
    });
});

//*********action *********//
router.get("/project", (req, res) => {
  const { id } = req.params;
  project
    .get(id)
    .then(res => {
      res.json(res);
    })
    .catch(err => {
      return error(500, "error", res);
    });
});

router.post("project/", (req, res) => {
  project
    .instert(req.body)
    .then(add => {
      res.json(add);
    })
    .catch(err => {
      return error(500, "error posting project", res);
    });
});

router.put("/project/:id", (req, res) => {
  project
    .update(req.params, req.body)
    .then(res => {
      if (res === 0) {
        return error(404, "no project by that id");
      } else {
        db.find(id).then(project => {
          res.json(project);
        });
      }
    })
    .catch(err => {
      return error(500, "error making changes", res);
    });
});

router.delete("/project/:id", (req, res) => {
  project
    .remove(req.params)
    .then(del => {
      if (del === 0) {
        return error(404, " no project by that id");
      } else {
        res.json({ success: `deleting project : ${id}` });
      }
    })
    .catch(err => {
      return error(500, "could not delete", res);
    });
});
module.exports = router;
