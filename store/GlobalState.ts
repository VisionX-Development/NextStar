import { createStore, action } from "easy-peasy";
import { Action } from "easy-peasy";
import { createTypedHooks } from "easy-peasy";
import UserStore from "./UserState";
import { UserStateModel } from "./UserState";

interface GlobalStateModel {
  //Auth State
  isLoggedIn: boolean;
  setIsLoggedIn: Action<GlobalStateModel, boolean>;

  // User State
  user: UserStateModel;
  // Cookie Consent
  cookieConsent: boolean;
  showCookieBanner: boolean;
  setCookieConsent: Action<GlobalStateModel, boolean>;
  setCookieBanner: Action<GlobalStateModel, boolean>;
  // Alert Banner
  alert: { message: string; type: string };
  setAlert: Action<GlobalStateModel, { message: string; type: string }>;
}

const GlobalState = createStore<GlobalStateModel>({
  //Auth State
  isLoggedIn: false,
  setIsLoggedIn: action((state, payload: boolean) => {
    state.isLoggedIn = payload;
  }),
  // User State
  user: UserStore,

  // Cookie Consent
  cookieConsent: false,
  setCookieConsent: action((state, payload: boolean) => {
    state.cookieConsent = payload;
  }),
  showCookieBanner: false,
  setCookieBanner: action((state, payload: boolean) => {
    state.showCookieBanner = payload;
  }),

  // Alert Banner
  alert: { message: "no alert", type: "none" },
  setAlert: action((state, payload: { message: string; type: string }) => {
    state.alert = payload;
  }),
});

export default GlobalState;

const typedHooks = createTypedHooks<GlobalStateModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
