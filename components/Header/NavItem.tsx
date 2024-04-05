import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function NavItem({ href, className, children }: NavItemProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={classNames(className, { active: path === href })}
    >
      {children}
    </Link>
  );
}
