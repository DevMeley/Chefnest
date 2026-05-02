import { icons } from "./icon";

type IconNames = keyof typeof icons;

interface IconProps {
  name: IconNames;
  className?: string;
  size?: number;
}

const Icon = ({ name, className }: IconProps) => {
  const Icon = icons[name];
  return <Icon width={24} height={24} className={`size-6 ${className}`} />;
};

export default Icon;
