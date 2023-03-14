
import * as userService from "./user/userService";
import * as providerService from "./provider/providerService";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...userService,
  ...providerService
};
