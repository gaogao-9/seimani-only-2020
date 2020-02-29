/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";
import {
  Grid,
  Paper,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import {
  Train as TrainIcon,
  LocationOn as LocationOnIcon,
  Event as EventIcon,
} from "@material-ui/icons";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";

const Map: React.FC = () => {
  const StyledIframe = React.useMemo(
    () => styled.iframe`
      width: 100%;
      height: 640px;
      border: 0;
      padding: 10px;
    `,
    [],
  );

  return (
    <StyledIframe
      frameBorder="0"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-b2eFpuSGGARhXQEd8OE4R0&zoom=17&key=AIzaSyAAaCUU3jjAQggZTpe8AE_6DQxQ6TP8cLA"
      allowFullScreen
    />
  );
};

const DateAndTime: React.FC = () => (
  <List subheader={<ListSubheader disableSticky>イベント情報</ListSubheader>}>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <LocationOnIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="会場: ハイライフプラザいたばし" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <EventIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="日程: 2020年09月21日(月)" />
    </ListItem>
  </List>
);

const Access: React.FC = () => (
  <List subheader={<ListSubheader disableSticky>交通手段</ListSubheader>}>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <TrainIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="JR埼京線 板橋駅 徒歩1分" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <TrainIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="都営三田線 新板橋駅 徒歩3分" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <TrainIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="東武東上線 下板橋駅 徒歩7分" />
    </ListItem>
  </List>
);

const Page: React.FC = () => {
  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>会場情報</PaperTitle>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} lg={8} xl={9}>
                <Map />
              </Grid>
              <Grid item xs={12} lg={4} xl={3}>
                <DateAndTime />
                <Access />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
