declare module "next-page-transitions" {
  export type PageTransitionProps = {
    timeout: number;
    classNames: string;
  };
  export const PageTransition: React.FC<PageTransitionProps>;
}
