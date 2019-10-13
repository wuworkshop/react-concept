import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";

const Main = () => (
	<>
		<CssBaseline />
		<App />
	</>
);

ReactDOM.render(<Main />, document.getElementById("root"));
