import { Model } from "../model";

export function isWorking(model: Model) {
  return !!model.user;
}
