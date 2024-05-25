const Joi = require('joi');
const User = require('../model/userModel');

const userSchema = Joi.object({
  uniqueId: Joi.string().guid({ version: ['uuidv4'] }).required(),
  title: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phonenumber: Joi.number().integer().required(),
  isGraduate: Joi.boolean().required(),
});

const createForm = async (req, res) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { uniqueId, title, name, email, phonenumber, isGraduate } = req.body;
    const newUser = await User.create({ uniqueId, title, name, email, phonenumber, isGraduate });
    
    return res.status(201).json({
      success: true,
      message: "Form created created Successfully",
      data: newUser})
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(400).json({ error: err.message });
  }
};

const fillData = async(req,res)=>{
  const { form_title } = req.query;

  
  if (!form_title || form_title !== "user") {
    return res.status(400).json({ error: "Invalid or missing form_title query parameter" });
  }


  const { error } = userSchema.validate({
    ...req.body,
    title: 'user' 
  });

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { uniqueId, name, email, phonenumber, isGraduate } = req.body;
    const newUser = await User.create({ uniqueId, title: 'user', name, email, phonenumber, isGraduate });

    return res.status(201).json({
      success: true,
      message: "User data filled successfully",
      data: newUser
    });
  } catch (err) {
    console.error('Error filling user data:', err);
    res.status(500).json({ error: err.message });
  }
};

const getAllData = async(req,res)=>{
  try {
    
    const {title} = req.query;  

    if (!title || title !== "user") {
      return res.status(400).json({ error: "Invalid or missing form_title query parameter" });
    }  
  
    

    const getAllUsers  = await User.findAll({ where:{title} });
    


    return res.status(200).json({
      success: true,
      message: "Get All Users successfully",
      data: getAllUsers
    });

  } catch (error) {
    console.error('Error filling user data:',error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createForm,fillData,getAllData };
