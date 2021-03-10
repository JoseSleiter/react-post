const defaultState = {
  posts: [],
  comments: [],
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: { ...action.payload },
      };
    case "REMOVE_POST":
      return {
        ...state,
        posts: [],
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: { ...action.payload },
      };
    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};

export default postReducer;
