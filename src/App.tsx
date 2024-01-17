import "./index.scss";

import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { saveState, store } from "./store";

store.subscribe(() => saveState(store.getState()));

export function App() {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</React.StrictMode>
	)
}
