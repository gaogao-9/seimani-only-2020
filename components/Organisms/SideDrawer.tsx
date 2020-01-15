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
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const SideDrawerWidth = 220;

const paperStyle = css`
  width: ${SideDrawerWidth}px;
`;

const StyledDrawer = styled(Drawer)`
  width: ${SideDrawerWidth}px;

  .${paperStyle.name} {
    ${paperStyle.styles}
  }
`;

type SideListProps = {
  route: string;
  children?: React.ReactNode;
};

const SideList: React.FC<SideListProps> = (props: SideListProps) => (
  <div>
    <List>
      {routes.map(({ title, pathname, Icon }, index) => {
        const canButton = pathname !== props.route;

        return (
          <Link href={pathname} key={index}>
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
                  <Icon htmlColor="#0576c5" />
                </ListItemIcon>
                <ListItemText>
                  <Typography>
                    <Box component="span" color="#0576c5" fontWeight="bold">
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
    <StyledDrawer
      variant={variant}
      anchor="right"
      classes={{
        paper: paperStyle.name,
      }}
      open={visibility}
      onClose={onClose}
    >
      <SideList route={router.pathname} />
    </StyledDrawer>
  );
};

export default SideDrawer;
