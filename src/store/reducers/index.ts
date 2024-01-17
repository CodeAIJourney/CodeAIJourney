import accountReducer from "./accountReducer";
import appSettingReducer from "./appSettingReducer";
import customEntityReducer from "./customEntityReducer";

export const reducer = {
	appSetting: appSettingReducer,
	account: accountReducer,
  customEntityReducer: customEntityReducer,
};
