import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import { SideDrawerContext } from "@/hooks/contexts/SideDrawerContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { theme } from "@/utils/theme";

const SiteBar: React.FC = () => {
  const { setVisibility } = React.useContext(SideDrawerContext);
  const onClick = React.useCallback((): void => setVisibility(true), []);
  const titleVariant = useMediaQuery(theme.breakpoints.up("sm"))
    ? "h6"
    : "subtitle1";

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Typography variant={titleVariant}>
              政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onClick}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SiteBar;
