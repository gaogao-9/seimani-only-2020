/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Drawer,
  useMediaQuery,
} from "@material-ui/core";
import { SideDrawerContext } from "@/hooks/contexts/SideDrawerContext";
import { theme } from "@/utils/theme";
import { routes } from "@/utils/routes";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const SideDrawerWidth = 220;

const paperStyle = css`
  width: ${SideDrawerWidth}px;
  color: #ffffff;
  background-color: #23252b;
`;

const StyledDrawer = styled(Drawer)`
  width: ${SideDrawerWidth}px;

  .paper-${paperStyle.name} {
    ${paperStyle.styles}
  }
`;

const ListItemWrapperStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  color: inherit;
`;

type SideListProps = {
  route: string;
  children?: React.ReactNode;
};

const SideList: React.FC<SideListProps> = (props: SideListProps) => (
  <List>
    {routes.map(({ title, pathname, Icon }, index) => {
      const canButton = pathname !== props.route;

      return canButton ? (
        <ListItem button key={index}>
          <Link href={pathname}>
            <a css={ListItemWrapperStyle}>
              <ListItemIcon>
                <Icon htmlColor="#ffffff" />
              </ListItemIcon>
              <ListItemText primary={title} />
            </a>
          </Link>
        </ListItem>
      ) : (
        <ListItem key={index}>
          <span css={ListItemWrapperStyle}>
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
          </span>
        </ListItem>
      );
    })}
  </List>
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
        paper: `paper-${paperStyle.name}`,
      }}
      open={visibility}
      onClose={onClose}
    >
      <SideList route={router.pathname} />
    </StyledDrawer>
  );
};

export default SideDrawer;
