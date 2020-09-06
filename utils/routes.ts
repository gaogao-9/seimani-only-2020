import { SvgIconProps } from "@material-ui/core";
import {
  Home,
  Map,
  Group,
  Palette,
  PermContactCalendar,
  Dashboard,
  SupervisedUserCircle,
  Help,
  LocalHospital,
  Web,
} from "@material-ui/icons";

export type Route = {
  title: string;
  pathname: string;
  Icon: React.FC<SvgIconProps>;
};

export const routes: Array<Route> = [
  {
    title: "トップページ",
    pathname: "/top",
    Icon: Home,
  },
  {
    title: "会場情報",
    pathname: "/map",
    Icon: Map,
  },
  {
    title: "参加者全般",
    pathname: "/common",
    Icon: Group,
  },
  {
    title: "サークル参加",
    pathname: "/circle",
    Icon: Palette,
  },
  {
    title: "コスプレ参加",
    pathname: "/cosplay",
    Icon: Dashboard,
  },
  {
    title: "サークル一覧",
    pathname: "/circlelist",
    Icon: PermContactCalendar,
  },
  {
    title: "エアイベント",
    pathname: "/online_event",
    Icon: Web,
  },
  {
    title: "感染症対策",
    pathname: "/infection",
    Icon: LocalHospital,
  },
  {
    title: "スタッフ一覧",
    pathname: "/staff",
    Icon: SupervisedUserCircle,
  },
  /*
  {
    title: "Q&A",
    pathname: "/question",
    Icon: Help,
  },
  */
];
