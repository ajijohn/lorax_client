exports.plant_template = function(req,res){
  res.render('plant.html'); 
};

exports.new_plant_template = function(req, res){
  res.render('new_plant.html');
};

exports.plant_detail_template = function(req, res){
  res.render('plant_detail.html');
};