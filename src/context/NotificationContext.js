import React, { createContext, useReducer, useEffect } from "react";

export const NotificationContext = createContext();

const initialState = {
  message: "",
  type: null, // 'success', 'warning', 'danger'
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        message: action.payload.message,
        type: action.payload.type,
      };
    case "CLEAR_NOTIFICATION":
      return {
        message: "",
        type: null,
      };
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timeout;

    if (state.message) {
      timeout = setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [state.message]);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};
