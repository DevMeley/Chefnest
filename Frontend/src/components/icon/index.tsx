import { icons } from "./icon";

type IconNames = keyof typeof icons;

interface IconProps {
  name: IconNames;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const Icon = icons[name];
  return <Icon width={24} height={24} className={className} />;
};

export default Icon;
