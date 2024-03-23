// 기존 페이지 HTML 렌더링한 걸 그대로 가져와서 문법만 맞춰놓은 것.
// 이후에 여유가 된다면 컴포넌트로 쪼개고 하면 좋을 거 같긴 한데,
// 해당 작업의 메리트가 크게 느껴지진 않음.
export default async function _2023About() {
  return (
    <>
      <div className="container about">
        <h4>일시</h4>
        <p>
          2023년 11월 10일 금요일 18:00 ~ 2023년 11월 11일 토요일 11:45 (무박
          2일)
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>경희대학교 국제캠퍼스 전자정보대학관 205호</p>

        <h4>주제</h4>
        <ul>
          <li>
            <strong>교육의 정보화</strong>: 학생이 생각하는
            &apos;교육&apos;이라는 주제와 연계하여 자유롭게 작품의 주제를 설정
          </li>
        </ul>
        <p>
          다양한 분야로 도전할 수 있습니다.
          <br />
          퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게 공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          2023년 10월 30일 월요일 00:00 ~ 2023년 11월 9일 목요일 23:59
          <br />
          <a href="https://thon.khlug.org/">https://thon.khlug.org/</a>에서 팀
          단위로 참가 접수
          <br />
          선착순으로 48팀 또는 128명까지만 참가 신청을 받습니다.
        </p>

        <h5>팀 단위 접수</h5>
        <ul>
          <li>
            한 팀은 최소 1명부터 최대 4명으로 구성됩니다.
            <br />
            모든 팀원은 반드시 재학생이어야 합니다.
            <br />
          </li>
        </ul>

        <h4>수상</h4>

        <h5>대상 (1팀)</h5>
        <ul>
          <li>상금 200만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">우성아롤좀그만해</div>
              <div className="idea">
                디지털 미술관, 스토리텔링으로 만드는 새로운 시각
              </div>
              <div className="member"></div>
              <div
                id="team99782"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>최우수상 (3팀)</h5>
        <ul>
          <li>각 상금 100만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">소융F4</div>
              <div className="idea">
                공감형 대화를 위한 공감 대화 교육 서비스
              </div>
              <div className="member"></div>
              <div
                id="team99793"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">초면</div>
              <div className="idea">발표 도우미 AI</div>
              <div className="member"></div>
              <div
                id="team99836"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">혼혈컴공</div>
              <div className="idea">
                &quot;너의 이해가 보여&quot;: 머신러닝 기반의 실시간 수업 이해도
                분석 서비스
              </div>
              <div className="member"></div>
              <div
                id="team99753"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>우수상 (5팀)</h5>
        <ul>
          <li>각 상금 50만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">윤서쿵야</div>
              <div className="idea">
                F to A⁺: 망각곡선 활용 문제 추천 및 문제 생성 AI 서비스
              </div>
              <div className="member"></div>
              <div
                id="team99699"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">쿠마쿠마</div>
              <div className="idea">
                게임처럼 즐기는 모션인식, AI 기반 기타 학습 플랫폼
              </div>
              <div className="member"></div>
              <div
                id="team99725"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">KhuT</div>
              <div className="idea">논문 학습 플랫폼</div>
              <div className="member"></div>
              <div
                id="team99770"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">Wally</div>
              <div className="idea">
                로그라이크 장르를 활용한 수학 연산 학습 게임
              </div>
              <div className="member"></div>
              <div
                id="team99787"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">개발새발</div>
              <div className="idea">
                금시초문(&apos;금&apos;쪽이 육아 &apos;시&apos;뮬레이션 -
                &apos;초&apos;보 부모들이 겪는 &apos;문&apos;제 해결 서비스)
              </div>
              <div className="member"></div>
              <div
                id="team99807"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>인기상 (1팀)</h5>
        <ul>
          <li>키보드</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">혼혈컴공</div>
              <div className="idea">
                &quot;너의 이해가 보여&quot;: 머신러닝 기반의 실시간 수업 이해도
                분석 서비스
              </div>
              <div className="member"></div>
              <div
                id="team99753"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>아차상 (1팀)</h5>
        <ul>
          <li>키보드</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">NotAWord</div>
              <div className="idea">Responsive AI Listener</div>
              <div className="member"></div>
              <div
                id="team99763"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>격려상 (1팀)</h5>
        <ul>
          <li>키보드</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item" style={{ paddingLeft: "60px" }}>
              <div className="name">CHOIS</div>
              <div className="idea">상호작용 문제 출제 및 풀이 플랫폼</div>
              <div className="member"></div>
              <div
                id="team99853"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
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
              <td className="time">02:00</td>
              <td>야식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">08:00</td>
              <td>조식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">09:00</td>
              <td>발표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:00</td>
              <td>심사</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:20</td>
              <td>시상</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:30</td>
              <td>폐회</td>
              <td> </td>
            </tr>
          </tbody>
        </table>

        <h4>주최</h4>
        <p>
          <a href="http://sw.khu.ac.kr/" target="_blank" className="favicon">
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
            경희대학교 중앙IT동아리
            <strong>쿠러그</strong>
          </a>
        </p>
        <p>
          <a href="http://swedu.khu.ac.kr/" target="_blank" className="favicon">
            <img
              src="https://khlug.org/images/khu.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 <strong>SW중심대학사업단</strong>
          </a>
        </p>
        <p>
          <a href="http://xr.ac.kr/" target="_blank" className="favicon">
            <img
              src="https://khlug.org/images/khu.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 <strong>실감미디어 혁신공유대학 사업단</strong>
          </a>
        </p>

        <h4>문의</h4>
        <ul>
          <li>
            쿠러그 공식 이메일:{" "}
            <a href="mailto:we_are@khlug.org">we_are@khlug.org</a>
          </li>
        </ul>
      </div>
    </>
  );
}
