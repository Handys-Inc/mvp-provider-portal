export const getToken = () => {
  if (JSON.parse(localStorage.getItem("user"))) {
    return JSON.parse(localStorage.getItem("user")).token;
  }
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getId = () => {
  if (JSON.parse(localStorage.getItem("user"))) {
    return JSON.parse(localStorage.getItem("user"))._id;
  }
};
