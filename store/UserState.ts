import { action } from "easy-peasy";
import { Action } from "easy-peasy";

export interface UserStateModel {
  isLoggedIn: boolean;
  setIsLoggedIn: Action<UserStateModel, boolean>;
}

const UserStore = <UserStateModel>{
  isLoggedIn: false,
  setIsLoggedIn: action((state, payload: boolean) => {
    state.isLoggedIn = payload;
  }),
};

export default UserStore;
