export const SetItem = (email, password) => {
  localStorage.setItem(email, password);
  console.log(`${email}:${password} posted`);
};

export const DeleteItem = (email) => {
  console.log("Deleted");
  localStorage.removeItem(email);
};
