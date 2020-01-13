import {
  Home,
  Map,
  Group,
  Palette,
  PermContactCalendar,
  Dashboard,
  SupervisedUserCircle,
  Help,
} from "@material-ui/icons";

export type Route = {
  title: string;
  href: string;
  Icon: React.FC;
};

export const routes: Array<Route> = [
  {
    title: "トップページ",
    href: "/top",
    Icon: Home,
  },
  {
    title: "会場情報",
    href: "/map",
    Icon: Map,
  },
  {
    title: "参加者全般",
    href: "/common",
    Icon: Group,
  },
  {
    title: "サークル参加",
    href: "/circle",
    Icon: Palette,
  },
  {
    title: "コスプレ参加",
    href: "/cosplay",
    Icon: Dashboard,
  },
  {
    title: "サークル一覧",
    href: "/circlelist",
    Icon: PermContactCalendar,
  },
  {
    title: "スタッフ一覧",
    href: "/staff",
    Icon: SupervisedUserCircle,
  },
  {
    title: "Q&A",
    href: "/question",
    Icon: Help,
  },
];
