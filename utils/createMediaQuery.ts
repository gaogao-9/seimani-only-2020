export const createMediaQuery = <TBreakpoint extends { [k in string]: number }>(
  bp: TBreakpoint,
) => (config: {
  screen?: boolean;
  orientation?: "landscape" | "portrait";
  lt?: keyof TBreakpoint;
  gt?: keyof TBreakpoint;
}): string => {
  const query = [
    config.screen !== false && "screen",
    config.orientation && `(orientation: ${config.orientation})`,
    config.lt && `(max-width: ${bp[config.lt]}px)`,
    config.gt && `(min-width: ${bp[config.gt]}px)`,
  ]
    .filter(x => x)
    .join(" and ");

  return `@media ${query}`;
};

export default createMediaQuery;
