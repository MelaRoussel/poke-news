const initialState = {
  news: [],
};
const initialAction = () => {};

export default (state = initialState, action= initialAction) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
