import Subject from "./components/Subject";

export default function _2026About() {
  return (
    <>
      <div className="container about">
        <h4>일시</h4>
        <p>
          <strong>
            2026년 5월 8일 금요일 18:00 ~ 2026년 5월 9일 토요일 13:00 (무박 2일)
          </strong>
        </p>

        <h4>장소</h4>
        <p>경희대학교 국제캠퍼스 전자정보대학관 205호, 211-1호, 211-2호</p>
        <p className="text-gray-500">
          오후 5시부터 205호에서 현장 접수, 오후 9시에 접수 마감
        </p>

        <h4>주제</h4>
        <Subject />
        <p>행사 당일 현장에서 3개의 가주제 중 1개의 주제로 확정됩니다.</p>
        <p>
          다양한 분야로 도전할 수 있습니다.
          <br />
          퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게 공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          <strong>
            2026년 4월 24일 금요일 00:00 ~ 2026년 5월 1일 금요일 23:59
          </strong>
        </p>
        <p>
          <a href="https://thon.khlug.org/">https://thon.khlug.org/</a>에서 팀
          단위로 참가 접수
          <br />
          선착순으로 48팀 또는 140명까지만 참가 신청을 받습니다.
          <br />한 팀은 최소 1명부터 최대 4명으로 구성되며, 모든 팀원은 반드시
          재학생이어야 합니다.
        </p>

        <h4>접수 과정</h4>
        <ol className="!ml-0">
          <li>참가자의 정보를 입력하여 계정을 생성한다.</li>
          <li>
            받은 초대가 없다면 팀을 생성하거나 다른 팀원의 초대를 기다린다.
            <ul className="!ml-0">
              <li>
                팀을 생성했다면 팀원의 학번을 모두 입력하여 팀에 초대한다.
              </li>
              <li>받은 초대가 있다면 자동으로 수락된다.</li>
            </ul>
          </li>
          <li>
            초대한 팀원이 모두 수락하면, 팀원 중 한 명이 <b>인원 확정</b>을 할
            수 있다. (팀장 구분 없음)
            <ul className="!ml-0">
              <li>
                인원 확정을 통해 팀의 참가 등록이 완료되며, 인원 확정을 하지
                않은 팀은 <b>대회에 참가할 수 없다.</b>
              </li>
              <li>
                모든 팀원이 초대를 수락하더라도, 인원 확정 시점에 최대 참가자 수
                혹은 최대 팀 수를 초과했다면 대회에 참가할 수 없다.
              </li>
            </ul>
          </li>
        </ol>

        <h4>수상</h4>
        <div>
          <h5>대상 (1팀)</h5>
          <ul className="!m-0">
            <li>상장 및 상금 200만원</li>
          </ul>
          <div className="list" style={{ marginBottom: "50px" }}>
            <ul>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">맥도날드좋아해요</div>
                <div className="idea">
                  장인과 창작자를 잇는 전통문화 마켓 플레이스
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h5>최우수상 (3팀)</h5>
          <ul className="!m-0">
            <li>상장 및 각 상금 100만원</li>
          </ul>
          <div className="list" style={{ marginBottom: "50px" }}>
            <ul>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">소음</div>
                <div className="idea">
                  검색·알고리즘 없이, 모르는 문화가 다가오고 받는 자가 다음
                  매개자가 되는 회로.
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">큐리언트</div>
                <div className="idea">
                  섬 넘네 : 알고리즘 밖으로 떠나는 취향 탐험 서비스
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">최고의 공룡 스피노사우루스</div>
                <div className="idea">
                  인기 지역만 소비되는 구조를 넘어, 사용자의 선택을 기반으로
                  숨겨진 지역 문화를 연결하고 탐험하게 만드는 참여형 문화 발견
                  플랫폼
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h5>우수상 (6팀)</h5>
          <ul className="!m-0">
            <li>상장 및 각 상금 50만원</li>
          </ul>
          <div className="list" style={{ marginBottom: "50px" }}>
            <ul>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">Six Sense</div>
                <div className="idea">
                  편향된 알고리즘을 극복하고 디지털 시대의 B-Side 음악을
                  발굴하기위해서 Side-B 프로젝트가 탄생했습니다.
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">AI-Powered Rangers</div>
                <div className="idea">
                  TrenDo는 빠르게 소비되고 사라지는 대중문화를, 직접 참여하고
                  함께 경험하는 문화로 전환하는 플랫폼이다.
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">쿠카프</div>
                <div className="idea">
                  오디오 레퍼런스 기반 국악 샘플 탐색 도구, DigGak(디각)
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">어쩌려고 그런 말을 해</div>
                <div className="idea">
                  독립영화의 지속적인 창작을 돕는 플랫폼 - MOV:ON
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">취준즈</div>
                <div className="idea">
                  이어줄게 : 3D 체험과 AI 창작으로 전통문화의 단절을 잇다
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">KHUREKA</div>
                <div className="idea">
                  대중문화 접근 불평등을 해소하는 간편 예매 플랫폼
                  &quot;도담&quot;
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h5>인기상 (2팀)</h5>
          <ul className="!m-0">
            <li>상장 및 상품</li>
          </ul>
          <div className="list" style={{ marginBottom: "50px" }}>
            <ul>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">은수 없는 은수팀</div>
                <div className="idea">
                  Spotify Chess : 음원 시장의 승자독식을 뒤집는 스포티파이 연동
                  역밸런싱 오토배틀러
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">멋진돈코츠</div>
                <div className="idea">
                  ReBurn : K-pop 앨범 소비 구조를 디지털 인터렉티브 앨범
                  경험으로 재설계하다.
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h5>격려상 (2팀)</h5>
          <ul className="!m-0">
            <li>상장 및 상품</li>
          </ul>
          <div className="list" style={{ marginBottom: "50px" }}>
            <ul>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">코딩햄</div>
                <div className="idea">
                  취향 책장 : 나의 감상을 바탕으로 취향을 확립하고, 이를 새로운
                  문화 경험으로 연결하는 AI 감상 아카이브
                </div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
              <li className="item" style={{ paddingLeft: "60px" }}>
                <div className="name">FEPSI</div>
                <div className="idea">analyze : AI 기반 광고 분석 솔루션</div>
                <div className="member"></div>
                <div className="clear"></div>
              </li>
            </ul>
          </div>
        </div>

        <h4>진행 일정</h4>
        <h5>
          모든 일정은 오프라인으로 진행되며, 상세 일정은 예고 없이 변경될 수
          있습니다.
        </h5>
        <table className="timetable">
          <tbody>
            <tr>
              <th>시간</th>
              <th>일정</th>
              <th>비고</th>
            </tr>
            <tr>
              <td className="time">17:00</td>
              <td>현장 접수 시작</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">18:00</td>
              <td>개회식 및 개발 시작</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">19:00</td>
              <td>석식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">21:00</td>
              <td>현장 접수 마감</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">23:00</td>
              <td>야식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">06:30</td>
              <td>조식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">08:30</td>
              <td>발표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:40</td>
              <td>심사</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">12:00</td>
              <td>시상 및 폐회</td>
              <td> </td>
            </tr>
          </tbody>
        </table>

        <h4>주최</h4>
        <p>
          <a
            href="https://swedu.khu.ac.kr/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://khlug.org/images/khu.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 <strong>AI·SW 교육단</strong>
          </a>
        </p>
        <p>
          <a
            href="https://software.khu.ac.kr/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://khlug.org/images/khu.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 <strong>소프트웨어융합대학</strong>
          </a>
        </p>

        <h4>주관</h4>
        <p>
          <a href="https://khlug.org/" target="_blank" className="favicon">
            <img
              src="https://khlug.org/images/favicon.gif"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 중앙IT동아리 <strong>쿠러그</strong>
          </a>
        </p>
        <p>
          <a
            href="https://swedu.khu.ac.kr/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://khlug.org/images/khu.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 <strong>SW중심대학사업단</strong>
          </a>
        </p>
        <p>
          <a
            href="https://imcoss.khu.ac.kr/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://khlug.org/images/khu.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 <strong>실감미디어 혁신융합대학 사업단</strong>
          </a>
        </p>
        <p>
          <a
            href="https://swuniv.kyonggi.ac.kr/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://cdn.khlug.org/images/kgu-univ-logo.png"
              className="favicon"
              alt=""
            />{" "}
            경기대학교 <strong>SW중심대학사업단</strong>
          </a>
        </p>
        <p>
          <a
            href="https://swcu.dankook.ac.kr/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://cdn.khlug.org/images/dku-univ-logo.png"
              className="favicon"
              alt=""
            />{" "}
            단국대학교 <strong>SW중심대학</strong>
          </a>
        </p>
        <p>
          <a
            href="https://www.ajou.ac.kr/sw/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://cdn.khlug.org/images/ajou-univ.png"
              className="favicon"
              alt=""
            />{" "}
            아주대학교 <strong>SW중심대학사업</strong>
          </a>
        </p>

        <h4>문의</h4>
        <ul className="!m-0">
          <li>
            쿠러그 공식 이메일:{" "}
            <a href="mailto:we_are@khlug.org">we_are@khlug.org</a>
          </li>
        </ul>
      </div>
    </>
  );
}
