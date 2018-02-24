import { observable } from "mobx";
import { isWorking } from "../views";

export interface Model {
  user: null | {};
  readonly isWorking: boolean;
}

export function createModel() {
  const model: Model = {
    user: null,
    get isWorking() {
      return isWorking(model);
    }
  };

  return observable(model);
}
