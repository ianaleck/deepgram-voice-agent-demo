import type { FC } from "react";

interface Props {
  href: string;
}

const LogoLink: FC<Props> = ({ href }) => (
  <a className="flex items-center" href={href}>
    <span className="text-xl font-bold text-gray-25 font-favorit">
      Agent Demo
    </span>
  </a>
);

export default LogoLink;
