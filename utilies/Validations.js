//validation username
export const isValidUserName = stringUserName => {
  return /^[a-zA-Z0-9]+$/.test(stringUserName);
};

//validation password
export const isValidPassword = stringPass => stringPass.length >= 6;
