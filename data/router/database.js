const express = require("express");

const router = express.Router();
const project = require("../helpers/projectModel");
const action = require("../helpers/actionModel");

// custom shortcuts
const error = (status, message, res) => {
  res.status(status).json({ error: message });
};
//******* Project *********//
router.get("/projects/", (req, res) => {
//   const { id } = req.params;
  project
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      return error(500, "error", res);
    });
});

router.get("/projects/:id", (req, res) => {
  project
    .getProjectActions(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      return error(500, "no project by that id", res);
    });
});
router.post("/projects/", (req, res) => {
  project
    .insert(req.body)
    .then(add => {
      res.json(add);
    })
    .catch(err => {
      return error(500, "error posting project", res);
    });
});

router.put("/projects/:id", (req, res) => {
const id = req.params.id
const change = req.body
  project
    .update(id, change)
    .then(response => {
      if (response === 0) {
        return error(404, "no project by that id", res);
      } else {
        res.status(202).json(response)
      }
    })
    .catch(err => {
      return error(500, "error making changes to project", res);
    });
});

router.delete("/projects/:id", (req, res) => {
  project
    .remove(req.params.id)
    .then(del => {
    
        res.json({ success: `deleting project ` }).end;
      
    })
    .catch(err => {
      return error(500, "could not delete", res);
    });
});

//*********action *********//
router.get("/projects/:id/", (req, res) => {
//   const { id } = req.params;
  action
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      return error(500, "error", res);
    });
});

router.post("/projects/actions", (req, res) => {
    action
    .insert(req.body)
    .then(add => {
      res.json(add);
    })
    .catch(err => {
      return error(500, "error posting project", res);
    });
});

router.put("/projects/actions/:id", (req, res) => {
    const id = req.params.id
    const change = req.body
      action
        .update(req.params.id, req.body)
        .then(response => {
            if (response === 0) {
              return error(404, "no project by that id", res);
            } else {
              res.status(202).json(response)
            }
          })
    .catch(err => {
      return error(500, "error making changes to actions", res);
    });
});

router.delete("/projects/action/:id", (req, res) => {
    action
    .remove(req.params.id)
    .then(del => {
      if (del === 0) {
        return error(404, " no project by that id");
      } else {
        res.json({ success: `deleting action` }).del();
      }
    }) 
    .catch(err => {
      return error(500, "could not delete", res);
    });
});
module.exports = router;
