import { render, screen } from "./test-utils";

import { App } from "../src/App";

test("App component display header", () => {
	render(<App />);

	const heading = screen.getByText(/Landing Page/i);

	expect(heading).toBeInTheDocument();
});
