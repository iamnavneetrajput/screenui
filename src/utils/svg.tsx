export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const defaultStroke = 2;
const defaultSize = 24;

export const Next = ({ size = defaultSize, title = "Next", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={defaultStroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);
