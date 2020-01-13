import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { SideDrawerContext } from "@/hooks/contexts/SideDrawerContext";
import { theme } from "@/utils/theme";
import { routes } from "@/utils/routes";

type SideListProps = {
  route: string;
  children?: React.ReactNode;
};

const SideList: React.FC<SideListProps> = (props: SideListProps) => (
  <div>
    <List>
      {routes.map(({ title, href, Icon }, index) => {
        const canButton = href !== props.route;

        return (
          <Link href={href} key={index}>
            {canButton ? (
              <ListItem button={true}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            ) : (
              <ListItem button={false as true}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText>
                  <Typography>
                    <Box color="#0576c5" fontWeight="bold">
                      {title}
                    </Box>
                  </Typography>
                </ListItemText>
              </ListItem>
            )}
          </Link>
        );
      })}
    </List>
  </div>
);

const SideDrawer: React.FC = () => {
  const { visibility, setVisibility } = React.useContext(SideDrawerContext);
  const onClose = React.useCallback((event: KeyboardEvent): void => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setVisibility(false);
  }, []);
  const variant = useMediaQuery(theme.breakpoints.up("md"))
    ? "permanent"
    : "temporary";
  const router = useRouter();

  return (
    <Drawer
      variant={variant}
      anchor="right"
      open={visibility}
      onClose={onClose}
    >
      <SideList route={router.route} />
    </Drawer>
  );
};

export default SideDrawer;
