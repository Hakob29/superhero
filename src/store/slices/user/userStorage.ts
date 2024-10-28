//get user from local storage
export const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  return user ? user : null;
};

//get user token from local storage
export const getUserTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};
