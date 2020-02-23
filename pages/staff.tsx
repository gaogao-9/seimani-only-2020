/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";
import { Grid, Paper, Avatar, IconButton } from "@material-ui/core";
import { staffs } from "@/utils/staffs";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";

const StyledAvatar = styled(Avatar)`
  width: 100% !important;
  max-width: 300px;
  height: 100% !important;
  max-height: 300px;
`;

const Page: React.FC = () => {
  const ListItem: JSX.Element[] = staffs.map((staff, index) => (
    <Grid
      container
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      key={index}
      justify="space-around"
      alignItems="center"
    >
      <Grid item>
        <IconButton
          href={`https://twitter.com/${staff.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledAvatar src={`/assets/img/staff/${staff.name}.${staff.ext}`} />
        </IconButton>
      </Grid>
    </Grid>
  ));

  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>スタッフ一覧</PaperTitle>
            <Grid container spacing={5} justify="center">
              {ListItem}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
