import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PersonalMenu from "../PersonalMenu";
import Search from "../Search";
import { Grid, Button } from "@material-ui/core";
import { ResourceCard } from "./ResourceCard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  heading: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

function Resources() {
  const classes = useStyles();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/resources")
      .then(function(response) {
        // handle success
        setResources(response.data);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      {console.log(resources)}

      <Grid container spacing={1}>
        <Grid item lg={3}>
          <PersonalMenu />
        </Grid>
        <Grid item lg={9}>
          <h2 className={classes.heading}>
            Resources{" "}
            <Link to="/submit-resource">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <AddCircleOutlineIcon /> &nbsp; Add new resource
              </Button>
            </Link>
          </h2>
          <Search label="Search resources" />

          <br />
          <Grid container spacing={1}>
            {resources.map(resource => {
              return (
                <Grid
                  item
                  lg={3}
                  key={resource.id}
                  style={{ marginRight: "10px" }}
                >
                  <ResourceCard {...resource} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resources;
