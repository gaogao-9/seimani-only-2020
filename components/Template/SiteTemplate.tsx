import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DefaultTemplate from "@/components/Template/DefaultTemplate";

const SideList: React.FC = () => (
  <div>
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
);

const SiteTemplate: React.FC = ({ children, ...props }) => {
  const [drawerOpened, setDrawerOpened] = React.useState(false);

  const toggleDrawer = <T extends HTMLButtonElement>(state: boolean) => (
    event: React.MouseEvent<T, MouseEvent> | KeyboardEvent,
  ): void => {
    if (
      event instanceof KeyboardEvent &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpened(state);
  };

  return (
    <DefaultTemplate {...props}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">
                政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
      <Drawer anchor="right" open={drawerOpened} onClose={toggleDrawer(false)}>
        <SideList />
      </Drawer>
    </DefaultTemplate>
  );
};

export default SiteTemplate;
