export const logIn = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setUser());
    }, 2000);
  };
};

export const logOut = () => {
  return {
    type: 'auth/logOut',
  };
};

export const setUser = () => {
  return {
    type: 'auth/setUser',
    payload: {
      name: 'Carol',
      surname: 'Carolson',
    },
  };
};
