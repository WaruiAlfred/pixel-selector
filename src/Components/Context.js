import { createContext, useReducer } from "react";

const initialState = {
  bgColor: "lightGrey",
  onChangeBackground: (bgColor) => {},
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_BG":
      return { ...state, bgColor: action.bgColor };
    case "CLEAR_BG":
      return { ...state, bgColor: "lightGrey" };
    default:
      return state;
  }
};

const appContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [color, dispatch] = useReducer(appReducer, initialState);

  const changeBackgroundHandler = (bgColor) => {
    dispatch({ type: "CHANGE_BG", bgColor });
  };

  const clearBackgroundHandler = () => {
    dispatch({ type: "CLEAR_BG" });
  };

  const finalValue = {
    color: color.bgColor,
    onChangeBackground: changeBackgroundHandler,
    clearBackground: clearBackgroundHandler,
  };

  return (
    <appContext.Provider value={finalValue}>{children}</appContext.Provider>
  );
};

export default appContext;
