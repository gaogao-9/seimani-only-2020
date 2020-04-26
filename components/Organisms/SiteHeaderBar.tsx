import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { SideDrawerContext } from "@/hooks/contexts/SideDrawerContext";
import { theme } from "@/utils/theme";
import styled from "@emotion/styled";

const Wrapper = styled(AppBar)`
  position: relative !important;
  color: #ffffff !important;
  background-color: #000000 !important;
`;

const StyledIconButton = styled(IconButton)`
  ${theme.breakpoints.up("md")} {
    display: none !important;
  }
`;

const StyledTitle = styled.span`
  font-family: "Kosugi", sans-serif;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const SiteBar: React.FC = () => {
  const router = useRouter();
  const { setVisibility } = React.useContext(SideDrawerContext);
  const onClick = React.useCallback((): void => setVisibility(true), []);
  const titleVariant = useMediaQuery(theme.breakpoints.up("sm"))
    ? "h6"
    : "subtitle1";
  const TopLink = React.useMemo(() => {
    const isTop = router.pathname === "/top";
    const title = "政剣マニフェスティアオンリー同人誌即売会 緊急交流イベント";

    if (isTop) {
      return <StyledTitle>{title}</StyledTitle>;
    } else {
      return (
        <Link href="/top" passHref>
          <StyledLink>
            <StyledTitle>{title}</StyledTitle>
          </StyledLink>
        </Link>
      );
    }
  }, [router.pathname]);

  return (
    <Wrapper position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Typography variant={titleVariant} component="h1">
              {TopLink}
            </Typography>
          </Grid>
          <Grid item>
            <StyledIconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onClick}
            >
              <MenuIcon />
            </StyledIconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </Wrapper>
  );
};

export default SiteBar;
