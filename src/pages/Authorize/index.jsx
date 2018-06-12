import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import authStyle from "./authorizeStyles";
import { Typography, Card, Icon, IconButton } from "@material-ui/core";

const image =
  "https://cdn.pixabay.com/photo/2017/08/08/15/43/nature-2611771_960_720.jpg";
class Authorize extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Grid
                container
                spacing={16}
                className={classes.demo}
                alignItems="center"
                direction="row"
                justify="center"
              >
                <Grid item>
                  {/* <Card className={classes.content}> */}
                  <Paper
                    className={classes.content}
                    style={{
                      paddingTop: 10,
                      paddingBottom: 20
                    }}
                  >
                    <Card raised className={classes.brand}>
                      <Typography
                        className={classes.brandTitle}
                        variant="headline"
                        color="inherit"
                        justify="center"
                      >
                        Mail Talon
                      </Typography>
                    </Card>

                    <div className={classes.salutation}>
                      <Typography
                        variant="subheading"
                        color="inherit"
                        align="center"
                      >
                        Continue with
                      </Typography>
                      <div className={classes.socialLine}>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-twitter"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-facebook"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={
                              classes.socialIcons + " fab fa-google-plus-g"
                            }
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={
                              classes.socialIcons + " fab fa-microsoft"
                            }
                          />
                        </IconButton>
                      </div>
                      <Typography
                        variant="subheading"
                        color="inherit"
                        align="center"
                      >
                        {/* Or */}
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Authorize.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(authStyle, { withTheme: true })(Authorize);
