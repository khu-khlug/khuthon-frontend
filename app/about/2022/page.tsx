// 기존 페이지 HTML 렌더링한 걸 그대로 가져와서 문법만 맞춰놓은 것.
// 이후에 여유가 된다면 컴포넌트로 쪼개고 하면 좋을 거 같긴 한데,
// 해당 작업의 메리트가 크게 느껴지진 않음.
export default async function _2022About() {
  return (
    <>
      <div className="gallery">
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/01.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/07.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/11.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/05.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/12.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/06.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/02.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/08.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/04.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/10.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/03.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2022/09.jpg')",
            }}
          ></div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>
          2022년 9월 30일 금요일 18:00 ~ 2022년 10월 1일 토요일 11:30 (무박 2일)
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>경희대학교 국제캠퍼스 글로벌관 405호</p>

        <h4>주제</h4>
        <ul>
          <li>대학생의 메타버스</li>
        </ul>
        <p>
          다양한 분야로 도전할 수 있습니다.
          <br />
          퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게 공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          2022년 9월 19일 월요일 00:00 ~ 2022년 9월 29일 목요일 23:59
          <br />
          <a href="https://cdn.khlug.org/">https://cdn.khlug.org/</a>에서 팀
          단위로 참가 접수
          <br />
          선착순으로 32팀 또는 128명까지만 참가 신청을 받습니다.
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
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96367.png')",
                }}
              ></div>
              <div className="name">응애 나 23학번</div>
              <div className="idea">
                강화학습과 물리 인터랙션을 포함한 대학생 메타버스 VR
                술타버스게임
              </div>
              <div className="member"></div>
              <div
                id="team96367"
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
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96607.png')",
                }}
              ></div>
              <div className="name">LizardSmoothie</div>
              <div className="idea">
                Trapped In Metaverse: 세계를 넘나드는 대학생의 메타버스 탈출기
              </div>
              <div className="member"></div>
              <div
                id="team96607"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96574.png')",
                }}
              ></div>
              <div className="name">전기먹는하마</div>
              <div className="idea">
                포트폴리오 공유 메타버스 플랫폼, Portfolia
              </div>
              <div className="member"></div>
              <div
                id="team96574"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96487.png')",
                }}
              ></div>
              <div className="name">First early bird</div>
              <div className="idea">요즘 대학생은 어떻게 살고 있을까?</div>
              <div className="member"></div>
              <div
                id="team96487"
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
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96497.png')",
                }}
              ></div>
              <div className="name">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>
              <div className="idea">
                메타버스를 중심으로 한 새로운 방식의 참여형 텍스트 어드벤처 게임
              </div>
              <div className="member"></div>
              <div
                id="team96497"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96370.png')",
                }}
              ></div>
              <div className="name">헬스장3주차</div>
              <div className="idea">
                모션 인식을 이용한 메타버스 게임 컨트롤
              </div>
              <div className="member"></div>
              <div
                id="team96370"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96620.png')",
                }}
              ></div>
              <div className="name">혼합</div>
              <div className="idea">학교를 다니면서 겪었던 불편했던 점</div>
              <div className="member"></div>
              <div
                id="team96620"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96533.png')",
                }}
              ></div>
              <div className="name">정건맥날지박령</div>
              <div className="idea">메타버스를 활용한 동아리 홍보 웹서비스</div>
              <div className="member"></div>
              <div
                id="team96533"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96564.png')",
                }}
              ></div>
              <div className="name">병호야돌아와조</div>
              <div className="idea">수강신청 RPG</div>
              <div className="member"></div>
              <div
                id="team96564"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>다우기술상(특별상, 2팀)</h5>
        <ul>
          <li>100만원 상당의 상품 + 신입 공채 우대</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96574.png')",
                }}
              ></div>
              <div className="name">전기먹는하마</div>
              <div className="idea">
                포트폴리오 공유 메타버스 플랫폼, Portfolia
              </div>
              <div className="member"></div>
              <div
                id="team96574"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2022/team96386.png')",
                }}
              ></div>
              <div className="name">studyIn</div>
              <div className="idea">
                AR과 모션센서를 활용한 자세 교정 도우미
              </div>
              <div className="member"></div>
              <div
                id="team96386"
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
            경희대학교 중앙IT동아리 <strong>쿠러그</strong>
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

        <h4>후원</h4>
        <p>
          <a href="https://daou.co.kr/" target="_blank" className="favicon">
            <img
              src="https://cdn.khlug.org/images/daou.png"
              className="favicon"
              alt="다우기술"
            />
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
