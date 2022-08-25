const Form = require("../../models/form/form");

/*exports.findById = (req, res, next, id) => {
    Form.findById(id).exec((err, form) => {
    if (err || !form) {
      return res.status(400).json({
        error: "הפריט לא נמצא",
      });
    }
    req.form = form;
    next();
  });
};*/

exports.read = async(req, res) => {
  const form = await Form.findById(req.params.id);
  if(!form) {
      res.status(500).json({message:'הפיקוד לא נמצא'})
  } else {
    res.status(200).send([form])
  }

}

exports.find = (req, res) => {
    Form.find()
    .then((form) => res.json(form))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const form = new Form(req.body);
  form.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};
exports.update = (req, res) => {
  const form = new Form(req.body);
  Form.updateOne(form)
    .then((form) => res.json(form))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  Form.deleteOne({ _id: req.params.formId })
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
 }
 

exports.updateform = (req, res) => {
  Form.updateOne({_id: req.body[0]},req.body[1])
  .then(orders => res.json(orders))
  .catch(err => res.status(400).json('Error: ' + err));;
}