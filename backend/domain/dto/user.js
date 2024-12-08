const UserDto = (user) => {
  return {
    id: user._id,
    email: user.email,
    role: user.role,
    token: user.token || null,
  };
};

module.exports = UserDto;
