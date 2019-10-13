import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

function App() {
	return (
		<Container style={{ height: "100vh" }}>
			<Grid
				container
				spacing={2}
				alignContent="center"
				style={{ height: "100%" }}
			>
				<Grid item xs={12} sm={6}>
					<Typography component="h1" variant="h5" gutterBottom>
						CodeBuddies
					</Typography>
					<Typography component="h2" variant="h4" gutterBottom>
						We're a global community of people helping each other become better
						with software development through organized study-groups and virtual
						hangouts.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Join the conversations - <a href="/">Sign Up</a>.
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}></Grid>
			</Grid>
		</Container>
	);
}

export default App;
