// mockDataStore.js

const USERS_KEY = 'users';

export const getUsersFromStorage = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];

export const saveUserToStorage = (user) => {
  const users = getUsersFromStorage();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const findUserByEmailAndPassword = (email, password) => {
  const users = getUsersFromStorage();
  return users.find(user => user.email === email && user.password === password);
};
