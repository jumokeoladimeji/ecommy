import { createUser, verifyTokenAndCompleteSignup, signinUser, getUserDetails, updateUser, initiatePasswordReset, validatePasswordResetToken, updatePassword } from '../controllers/user.js';

const userHandler = {
    signup: async(req, res) => {
        try {
            const createdUserResponse = await createUser(req.body, req.headers.host);
            return res.status(createdUserResponse.status).json(createdUserResponse);
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    verify: async(req, res) => {
        try {
            const verifiedUser = await verifyTokenAndCompleteSignup(req.params.token);
            return res.status(verifiedUser.status).json(verifiedUser);
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    signin: async(req, res) => {
      try {
          const signedInUser = await signinUser(req.body);
          return res.status(signedInUser.status).json(signedInUser);
        } catch (error) {
          return res.status(500).json({
            error: 'Internal server error'
          });
      }
  },
  get: async(req, res) => {
    try {
      const existingUser = await getUserDetails(req.params.userId);
      return res.status(existingUser.status).json(existingUser);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  },
  update: async(req, res) => {
    try {
      const updatedUser = await updateUser(req.params.userId, req.body);
      if (updatedUser.error) {
        return res.json({ status: updatedUser.status || 500, error: updatedUser.error });
      }
      return res.json({ status: 200, message: 'User Updated Successfully', data: updatedUser });
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  },
  forgotPassword: async(req, res) => {
    try {
      const forgotPasswordResponse = await initiatePasswordReset(req.body, req.headers.host);
      return res.status(forgotPasswordResponse.status).json(forgotPasswordResponse);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  },
  validateResetToken: async(req, res) => {
    try {
      const resetResponse = await validatePasswordResetToken(req.params.token, req.headers.host);
      return res.status(resetResponse.status).json(resetResponse);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  },
  changePassword: async(req, res) => {
    try {
      const newPassword = await updatePassword(req.body, req.params.token);
      return res.status(newPassword.status).json(newPassword);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal server error'
      });
    }
  }
}

export default userHandler;
