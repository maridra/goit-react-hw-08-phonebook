export const selectIsLoggedIn = state => state.authData.isLoggedIn;

export const selectUserName = state => state.authData.user.name;

export const selectIsRefreshing = state => state.authData.isRefreshing;
