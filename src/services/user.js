import db from '../models';

const { Users } = db;

const auth = require('../middleware/authentication.js');
import { hashPassword  } from '../middleware/authentication.js';

export const userServiceCreate = async (userDetails) => {
  try {
    const hashedPassword = await hashPassword(userDetails.password);
    userDetails.password = hashedPassword;
    const newUser = await Users.create(userDetails);
    return newUser.toJSON();
  } catch(error) {
    console.log('error in create', error)
  }
}

export const updateUser = async (userId, userDetails) => {
  const user = await Users.findOne({ where: { id: userId} })
  if (!user) {
    return res.json({
      message: 'User does not exist',
    });
  }
  let hashedPassword;
  if (userDetails.password) {
    hashedPassword = await hashPassword(userDetails.password);
  }

  const hashedPasswordToSave = userDetails.password ? hashedPassword : user.Password
  user.name = userDetails.name || user.name;
  user.username = userDetails.username || user.username;
  user.email = userDetails.email || user.email;
  user.phoneNumber = userDetails.phone_number || user.phone_number;
  user.image = userDetails.image_url || user.image_url;
  user. password = hashedPasswordToSave;

  await user.save();
  return user;
};

export const getUser = async (condition) => {
  try{
  console.log('get user', condition)
  const user = await Users.findOne({ where: condition })
  return user ? user.toJSON(): user;
  } catch (err) {
    console.log('erer:', err)
  }
};


export const saveUser = (user, condition) => {
  return Users.update(user, {
    where: condition
  });
}
