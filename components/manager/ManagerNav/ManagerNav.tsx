import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import { NavItem } from "@khlug/components/Header/NavItem";

export default function ManagerNav() {
  const [token] = useToken();

  return (
    token && (
      <div className="navigation">
        <NavItem href="/manager" className="mx-2">
          홈
        </NavItem>
        <NavItem href="/manager/statistics" className="mx-2">
          현황
        </NavItem>
        <NavItem href="/manager/members" className="mx-2">
          참가자
        </NavItem>
        <NavItem href="/manager/teams" className="mx-2">
          팀
        </NavItem>
        <NavItem href="/manager/managers" className="mx-2">
          운영진
        </NavItem>
        <NavItem href="/manager/examiners" className="mx-2">
          심사위원
        </NavItem>
        <NavItem href="/manager/ranking" className="mx-2">
          순위
        </NavItem>
        <NavItem href="/manager/logs" className="mx-2">
          로그
        </NavItem>
        <NavItem href="/manager/files" className="mx-2">
          파일 등록
        </NavItem>
      </div>
    )
  );
}
