export const selectIsLoggedIn = state => state.authData.isLoggedIn;

export const selectUserName = state => {
  console.log(state);
  return state.authData.user.name;
};
