import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountInterface } from "@interfaces/account/AccountInterface";
import { CustomEntityInterface } from "@interfaces/customEntity/CustomEntity.interface";
import { logger } from "@utils/logger";

export interface CustomEntityState {
	isLogged: boolean;
	token: string;
	data?: AccountInterface;
}

const initialState: CustomEntityState = {
	isLogged: false,
	token: "",
};

export const customEntitySlice = createSlice({
	name: "customEntity",
	initialState,
	reducers: {
		fetch: (state, action: PayloadAction<CustomEntityInterface>) => {
			logger.debug(state);
		},
		create: (state) => {
			logger.debug(state);
		},
	},
});

export const { fetch, create } = customEntitySlice.actions;

export default customEntitySlice.reducer;
