import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export function NavItem({ href, children }: NavItemProps) {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={classNames({ active: path.startsWith(href) })}
      >
        {children}
      </Link>
    </li>
  );
}
