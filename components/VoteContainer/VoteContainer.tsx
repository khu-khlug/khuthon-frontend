import classNames from "classnames";
import Container from "../Container/Container";

type Props = {
  event: {
    judgeRange: "BETWEEN" | "BEFORE" | "AFTER";
    judgeEndAt: string;
  };
  myTeam: {
    id: string;
    isVoted: boolean;
  };
};

export default function VoteContainer({ event, myTeam }: Props) {
  // TODO[lery]: 두 팀 이상 투표하면 안되도록 로직 추가

  const mockTeams = [
    {
      id: "teamId1",
      name: "teamName",
      idea: "teamIdea",
      fileUrl: "teamFileUrl",
    },
    {
      id: "teamId2",
      name: "teamName",
      idea: "teamIdea",
      fileUrl: "teamFileUrl",
    },
    {
      id: "teamId3",
      name: "teamName",
      idea: "teamIdea",
      fileUrl: "teamFileUrl",
    },
  ];
  const votedFor = ["teamId1"];

  return (
    <Container>
      <h4>투표</h4>

      <ul>
        <li>팀 이름을 눌러 팀을 선택합니다.</li>
        <li>
          각 팀은 자기 자신을 제외한 두 팀에게 투표할 수 있으며, 한 팀에 두 표를
          모두 줄 수는 없습니다.
        </li>
        <li>
          한 번에 두 표를 모두 행사해야하며, 먼저 투표한 팀원의 표만 인정됩니다.
        </li>
        <li>
          팀을 선택한 후 하단의{" "}
          <span className="bg-gray-700 text-white px-2 py-1">투표하기</span>{" "}
          버튼을 눌러주세요.
        </li>
        <li>이미 한 투표는 되돌릴 수 없습니다.</li>
        <li>최종 순위는 투표 기간이 끝난 후({event.judgeEndAt}) 공개됩니다.</li>
      </ul>

      {event.judgeRange === "BETWEEN" ? (
        <>
          {myTeam.isVoted && (
            <div className="error">투표가 완료되었습니다.</div>
          )}
          <form className="vote" method="post" action="/page/vote">
            <table>
              <tbody>
                {mockTeams
                  .filter((team) => team.id !== myTeam.id)
                  .map((team) => (
                    <tr
                      className={classNames({
                        active: votedFor.includes(team.id),
                      })}
                      key={team.id}
                    >
                      <th>
                        <a href="#" className="wrap">
                          <h4>{team.name}</h4>
                          <p>
                            {team.idea && team.idea.length > 0 ? (
                              team.idea
                            ) : (
                              <span className="text-gray-400">
                                (등록한 주제 없음)
                              </span>
                            )}
                          </p>
                          <input type="hidden" name="team" value="{{$t->id}}" />
                          <i className="xi-check"></i>
                        </a>

                        <a href={team.fileUrl} className="pdf_button">
                          발표 자료 보기
                        </a>

                        <div className="clear"></div>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>

            {!myTeam.isVoted && (
              <div
                className="btnArea"
                style={{ margin: "15px 0 10px -3px !important" }}
              >
                <button type="submit" className="black w-full">
                  <span className="p-4 text-lg">투표하기</span>
                </button>
              </div>
            )}
          </form>
        </>
      ) : (
        <div className="error">투표 기간이 아닙니다.</div>
      )}
    </Container>
  );
}
