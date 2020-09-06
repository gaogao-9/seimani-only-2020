/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";
import { Grid, Paper, Avatar, Button } from "@material-ui/core";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";
import PaperSection from "@/components/Atoms/PaperSection";
import PaperBody from "@/components/Atoms/PaperBody";
import PaperSpacer from "@/components/Atoms/PaperSpacer";

const StyledAvatar = styled(Avatar)`
  width: 100% !important;
  height: 100% !important;
  border-radius: 0 !important;
`;

const Page: React.FC = () => {
  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>サークル一覧</PaperTitle>
            <PaperBody>
              <Button
                href="/assets/img/circle/list.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar src="/assets/img/circle/list.png" />
              </Button>
            </PaperBody>
          </Paper>
          <PaperSpacer />
          <Paper>
            <PaperTitle>会場マップ</PaperTitle>
            <PaperBody>
              <Button
                href="/assets/img/circle/map.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar src="/assets/img/circle/map.png" />
              </Button>
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
