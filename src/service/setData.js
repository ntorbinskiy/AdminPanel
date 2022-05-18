export const SetItem = (email, password) => {
  console.log("Posted");
  localStorage.setItem(email, password);
};

export const DeleteItem = (email) => {
  console.log("Deleted");
  localStorage.removeItem(email);
};
