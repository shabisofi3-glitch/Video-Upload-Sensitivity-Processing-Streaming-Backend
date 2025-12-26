const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req,res) => {
  const hash = await bcrypt.hash(req.body.password,10);
  const user = await User.create({...req.body,password:hash});
  res.json(user);
};

exports.login = async (req,res) => {
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(400).json({msg:'Invalid credentials'});

  const ok = await bcrypt.compare(req.body.password,user.password);
  if(!ok) return res.status(400).json({msg:'Invalid credentials'});

  const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET);
  res.json({token});
};