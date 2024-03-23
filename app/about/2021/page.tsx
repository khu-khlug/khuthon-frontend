// 기존 페이지 HTML 렌더링한 걸 그대로 가져와서 문법만 맞춰놓은 것.
// 이후에 여유가 된다면 컴포넌트로 쪼개고 하면 좋을 거 같긴 한데,
// 해당 작업의 메리트가 크게 느껴지진 않음.
export default async function _2020About() {
  return (
    <>
      <div className="gallery">
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/01.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/02.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/03.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/05.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/12.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/06.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/07.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/08.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/04.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/10.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/11.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2021/09.jpg')",
            }}
          ></div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>
          2021년 11월 12일 금요일 18:00 ~ 2021년 11월 13일 토요일 11:00 (무박
          2일)
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>온라인</p>

        <h4>주제</h4>
        <ul>
          <li>AI로 극복하는 재난</li>
        </ul>
        <p>
          다양한 분야로 도전할 수 있습니다.
          <br />
          퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게 공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          2021년 10월 22일 금요일 00:00 ~ 2021년 11월 7일 일요일 23:59
          <br />
          <a href="https://thon.khlug.org/">https://thon.khlug.org/</a>에서 팀
          또는 개인 단위로 참가 접수
        </p>

        <h5>팀 단위 접수</h5>
        <ul>
          <li>
            한 팀은 최소 1명부터 최대 4명으로 구성됩니다.
            <br />
            모든 팀원은 반드시 재학생이어야 합니다.
            <br />
            행사 당일 각 팀에는 개인 참가자가 포함될 수 있습니다.
            <br />
          </li>
        </ul>
        <h5>개인 단위 접수</h5>
        <ul>
          <li>
            팀을 구성하지 않은 참가자는 개인 단위로 참가 신청을 할 수도
            있습니다.
            <br />
            개인 참가자는 행사 초반에 다른 팀에 포함되거나 다른 개인 참가자들과
            한 팀이 될 수 있습니다.
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
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78747.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">박민재</div>
              <div className="idea">AI를 활용한 졸음운전 방지 서비스</div>
              <div className="member"></div>
              <div
                id="team78747"
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
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78664.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">반물질</div>
              <div className="idea">소방차의 효율적 배치</div>
              <div className="member"></div>
              <div
                id="team78664"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78869.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">Void</div>
              <div className="idea">재난 안전 AI 스피커 폼페이</div>
              <div className="member"></div>
              <div
                id="team78869"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78921.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">H&amp;J</div>
              <div className="idea">수신호 분석을 통한 범죄 예방 AI</div>
              <div className="member"></div>
              <div
                id="team78921"
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
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78964.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">김나장최</div>
              <div className="idea">
                미학습 AI로봇과 고독한 박사의 재난 생존 RPG 게임
              </div>
              <div className="member"></div>
              <div
                id="team78964"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78974.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">모아이</div>
              <div className="idea">스마트 SNS 재난 감지 시스템</div>
              <div className="member"></div>
              <div
                id="team78974"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78813.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">헬스장3주차</div>
              <div className="idea">딥러닝 기반 화재 감지 시스템</div>
              <div className="member"></div>
              <div
                id="team78813"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78803.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">우리 팀원 중에 버스 기사 있나요?</div>
              <div className="idea">AI 면접 도우미</div>
              <div className="member"></div>
              <div
                id="team78803"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78783.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">쿠정물</div>
              <div className="idea">wichu - 우리는 아무나 동행하지 않는다.</div>
              <div className="member"></div>
              <div
                id="team78783"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>특별상</h5>
        <ul>
          <li>각 상금 30만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78601.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">해보봉</div>
              <div className="idea">AI를 활용한 좀비게임</div>
              <div className="member"></div>
              <div
                id="team78601"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78793.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">놀러온사람들</div>
              <div className="idea">AI와 살아남기</div>
              <div className="member"></div>
              <div
                id="team78793"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
            <li className="item">
              <a
                href="#"
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2021/team78605.png')",
                }}
              >
                <span>발표 자료 보기</span>
              </a>
              <div className="name">Space_M</div>
              <div className="idea">
                태양 이미지를 활용한 우주전파재난 예측 (부제 : SDO 위성 데이터와
                인공지능 알고리즘)
              </div>
              <div className="member"></div>
              <div
                id="team78605"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h4>진행 일정</h4>
        <h5>
          모든 일정은 온라인으로 진행되며, 상세 일정은 추후 변경될 수 있습니다.
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
              <td>개회식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">18:30</td>
              <td>개발 시작</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">06:30</td>
              <td>발표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">10:30</td>
              <td>투표 및 심사</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">10:50</td>
              <td>시상</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:00</td>
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

        <h4>문의</h4>
        <ul>
          <li>
            쿠러그 공식 이메일:{" "}
            <a href="mailto:we_are@khlug.org">we_are@khlug.org</a>
          </li>
          <li>
            쿠러그 페이스북 페이지:{" "}
            <a href="https://www.facebook.com/khlug" target="_blank">
              쿠러그 KHLUG
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
