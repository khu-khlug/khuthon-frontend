// 기존 페이지 HTML 렌더링한 걸 그대로 가져와서 문법만 맞춰놓은 것.
// 이후에 여유가 된다면 컴포넌트로 쪼개고 하면 좋을 거 같긴 한데,
// 해당 작업의 메리트가 크게 느껴지진 않음.
export default async function _2016About() {
  return (
    <>
      <div className="gallery">
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_01.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_02.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_03.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_04.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_05.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_06.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_07.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_08.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_09.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_10.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_11.jpg")',
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                'url("https://cdn.khlug.org/images/2016_12.jpg")',
            }}
          ></div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>2016년 10월 7일 금요일 19:00 ~ 익일 09:00 (무박 2일)</p>
        <div className="desc">행사가 끝났습니다!</div>

        <h4>장소</h4>
        <p>경희대학교 전자정보대학 205호</p>

        <h4>주제</h4>
        <p>
          요즘의 이슈 (사실 상 자유주제)
          <br />
          너무 퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게
          공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          2016년 9월 28일 수요일 ~ 10월 5일 수요일
          <br />
          <a href="http://thon.khlug.org/">http://thon.khlug.org/</a>에서 팀
          단위로 참가 접수
          <br />
          <span style={{ color: "#999", fontSize: "12px" }}>
            팀 매칭 게시판이 추가되어 접수 기한이 하루 연장되었습니다.
          </span>
        </p>

        <p>
          한 팀에는 최소 1명부터 최대 4명으로 구성됩니다.
          <br />
          2~3명 팀을 권장합니다.
        </p>

        <h4>참여 동아리</h4>
        <p>
          모든 팀원은 아래 8개 동아리 중 하나 이상에 소속되어있어야 하며, 반드시
          같은 동아리원끼리 팀을 구성하실 필요는 없습니다.
        </p>
        <ul>
          <li>
            KHLUG <span className="sub">경희대학교 중앙 동아리</span>
          </li>
          <li>
            T.G.WinG <span className="sub">경희대학교 컴퓨터공학과</span>
          </li>
          <li>
            Include <span className="sub">경희대학교 컴퓨터공학과</span>
          </li>
          <li>
            NET <span className="sub">경희대학교 컴퓨터공학과</span>
          </li>
          <li>
            Return <span className="sub">경희대학교 컴퓨터공학과</span>
          </li>
          <li>
            Hacker <span className="sub">경희대학교 컴퓨터공학과</span>
          </li>
          <li>
            D.com <span className="sub">경희대학교 컴퓨터공학과</span>
          </li>
          <li>
            Dasom <span className="sub">경희대학교 컴퓨터공학과</span>
          </li>
        </ul>
        <p>
          재학생 뿐만 아니라 휴학생과 대학원생(본교 대학원에 재학 중이어야 함)
          누구나 참석하실 수 있습니다.
          <br />
          참가 접수 후에 각 동아리 대표자에게 소속 여부를 확인합니다.
        </p>

        <h4>수상</h4>
        <p>
          심사 없이 인기 투표로 진행됩니다.
          <br />
          본인의 팀을 제외한 나머지 팀에 1팀 당 1표 씩 투표하여 가장 많은 점수를
          받은 상위 5팀에게는...
        </p>
        <ul>
          <li>기계식 키보드</li>
          <li>게이밍 마우스</li>
          <li>카페 상품권</li>
        </ul>
        <p>수상을 하지 못했더라도 기념품이 주어지니 많은 참여 부탁드립니다.</p>

        <h4>2016 수상작</h4>

        <div className="list">
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/thumbnail/16551')",
                }}
              ></div>
              <div className="name">토리덴</div>
              <div className="idea">
                KLAS와 연동해 현재 수강 중인 강의의 사람들과 익명으로 실시간
                대화가 가능하도록 하는 채팅 어플리케이션
              </div>
              <div className="member">
                <span className="m">
                  성준영 <span className="club">T.G.WinG</span>
                </span>
                <span className="m">
                  이세구 <span className="club">T.G.WinG</span>
                </span>
                <span className="m">
                  김성수 <span className="club">T.G.WinG</span>
                </span>
              </div>
              <div className="clear"></div>
            </li>

            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/thumbnail/16552')",
                }}
              ></div>
              <div className="name">khlean</div>
              <div className="idea">
                국제캠퍼스의 버스에 대한 정보를 보여주고 실시간으로 신고할 수
                있게 하는 서비스
              </div>
              <div className="member">
                <span className="m">
                  민재기 <span className="club">NET</span>
                </span>
                <span className="m">
                  서승완 <span className="club">KHLUG</span>{" "}
                  <span className="club">NET</span>
                </span>
                <span className="m">
                  최정민 <span className="club">NET</span>
                </span>
              </div>
              <div className="clear"></div>
            </li>

            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/thumbnail/16573')",
                }}
              ></div>
              <div className="name">컴공15정태환여친급구</div>
              <div className="idea">
                스마트폰을 이용한 Overwatch 동작 인식 컨트롤러
              </div>
              <div className="member">
                <span className="m">
                  정태환 <span className="club">KHLUG</span>{" "}
                  <span className="club">D.com</span>
                </span>
                <span className="m">
                  이준오 <span className="club">KHLUG</span>
                </span>
              </div>
              <div className="clear"></div>
            </li>

            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/thumbnail/16524')",
                }}
              ></div>
              <div className="name">ZigiNet</div>
              <div className="idea">경희대 익명 채팅 웹 어플리케이션</div>
              <div className="member">
                <span className="m">
                  김문원 <span className="club">NET</span>
                </span>
                <span className="m">
                  김동현 <span className="club">NET</span>
                </span>
                <span className="m">
                  정석현 <span className="club">NET</span>
                </span>
              </div>
              <div className="clear"></div>
            </li>

            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/thumbnail/16561')",
                }}
              ></div>
              <div className="name">PPAP</div>
              <div className="idea">
                다양한 엔딩이 존재하는 콘솔 기반 미소녀 연예 시뮬레이션 게임
              </div>
              <div className="member">
                <span className="m">
                  김재현 <span className="club">D.com</span>
                </span>
                <span className="m">
                  강준후 <span className="club">D.com</span>
                </span>
                <span className="m">
                  이수인 <span className="club">D.com</span>
                </span>
                <span className="m">
                  정지윤 <span className="club">D.com</span>
                </span>
              </div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h4>진행 일정</h4>
        <table className="timetable">
          <tbody>
            <tr>
              <th>시간</th>
              <th>일정</th>
              <th>후원</th>
            </tr>
            <tr>
              <td className="time">18:00</td>
              <td>입장 시작</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">19:00</td>
              <td>개회식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">19:20</td>
              <td>네이버 엔지니어링 소개 발표 세션</td>
              <td className="time">Naver D2</td>
            </tr>
            <tr>
              <td className="time">19:50</td>
              <td>행사 진행 방식 소개</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">20:00</td>
              <td>개발 시작</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">? : ?</td>
              <td>간식[0]</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">? : ?</td>
              <td>간식[1]</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">06:00</td>
              <td>발표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">07:30</td>
              <td>인기 투표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">07:50</td>
              <td>시상</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">08:00</td>
              <td>폐회</td>
              <td> </td>
            </tr>
          </tbody>
        </table>

        <h4>주최</h4>
        <p>
          <a href="https://khlug.org/" target="_blank" className="favicon">
            <img
              src="https://khlug.org/images/favicon.gif"
              className="favicon"
              alt=""
            />{" "}
            KHLUG
          </a>
        </p>

        <h4>주관</h4>
        <p>
          <a href="http://ce.khu.ac.kr/" target="_blank" className="favicon">
            <img
              src="https://khlug.org/images/khu.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 컴퓨터공학과 학생회
          </a>
        </p>

        <h4>후원</h4>
        <p>
          <a href="http://d2.naver.com/" target="_blank" className="favicon">
            <img
              src="https://khlug.org/images/d2.png"
              className="favicon"
              alt=""
            />{" "}
            NAVER D2
          </a>
        </p>
      </div>
    </>
  );
}
