const Data = require("../../models/data/data");

/*exports.findById = (req, res, next, id) => {
    Data.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        error: "הפריט לא נמצא",
      });
    }
    req.data = data;
    next();
  });
};*/

exports.read = async(req, res) => {
  const data = await Data.findById(req.params.id);
  if(!data) {
      res.status(500).json({message:'הפיקוד לא נמצא'})
  } else {
    res.status(200).send([data])
  }

}

exports.find = (req, res) => {
    Data.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const data = new Data(req.body);
  data.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};
exports.update = (req, res) => {
  const data = new Data(req.body);
  Data.updateOne(data)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  Data.deleteOne({ _id: req.params.dataId })
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
 }
 

exports.updatedata = (req, res) => {
  Data.updateOne({_id: req.body[0]},req.body[1])
  .then(orders => res.json(orders))
  .catch(err => res.status(400).json('Error: ' + err));;
}