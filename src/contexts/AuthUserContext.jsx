import { createContext, useContext, useReducer } from "react";

const initialState = {
  user: null,
  isLoginPopupVisible: false,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "toggleLoginPopup":
      return { ...state, isLoginPopupVisible: !state.isLoginPopupVisible };
    case "logout":
      return { ...initialState };
    default:
      return state;
  }
}
const AuthUserContext = createContext();
function AuthUserProvider({ children }) {
  const [{ user, isLoginPopupVisible, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(isLoginPopupVisible);
  return (
    <AuthUserContext.Provider
      value={{ user, isLoginPopupVisible, isAuthenticated, dispatch }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthUserContext);
  if (context === undefined)
    throw new Error("provider was used outside of the context");
  return context;
}
export { AuthUserProvider, useAuth };
