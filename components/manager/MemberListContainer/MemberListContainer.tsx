import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import { ListMemberRequestDto } from "@khlug/transport/ListMemberRequestDto";
import { ListMemberResponseDto } from "@khlug/transport/ListMemberResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import MemberListItem from "../MemberListItem/MemberListItem";
import Divider from "@khlug/components/Divider/Divider";
import Pager from "@khlug/components/Pager/Pager";
import {
  MemberSearchBar,
  SearchParams,
} from "../MemberSearchBar/MemberSearchBar";

type MemberListReloader = () => void;
const MemberListReloaderContext = createContext<MemberListReloader>(() => {});

export function useMemberListReloader(): MemberListReloader {
  return useContext(MemberListReloaderContext);
}

export default function MemberListContainer() {
  const client = useClient();
  const limit = 20;

  const [message, setMessage] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [memberList, setMemberList] = useState<ListMemberResponseDto | null>(
    null
  );

  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const fetchMemberList = useCallback(async () => {
    try {
      const dto: ListMemberRequestDto = {
        limit,
        offset: (page - 1) * limit,
        ...searchParams,
      };
      const response = await client.get<ListMemberResponseDto>(
        "/manager/members",
        { params: dto }
      );
      setMemberList(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client, page, searchParams]);

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setPage(1);
  };

  useEffect(() => {
    fetchMemberList();
  }, [fetchMemberList]);

  return (
    <MemberListReloaderContext.Provider value={fetchMemberList}>
      <Container className="!bg-white !bg-none">
        {message && <div className="error">{message}</div>}
        <MemberSearchBar onSearch={handleSearch} />
        {memberList && (
          <>
            {memberList.members.map((member, idx) => (
              <Fragment key={member.id}>
                <MemberListItem member={member} />
                {idx < memberList.members.length - 1 && (
                  <Divider className="!bg-black/10" />
                )}
              </Fragment>
            ))}
            <Pager
              current={page}
              maxPage={Math.ceil(memberList.count / limit)}
              onSelect={setPage}
            />
          </>
        )}
      </Container>
    </MemberListReloaderContext.Provider>
  );
}
