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
                "url('https://thon.khlug.org/images/2020/01.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2020/02.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2020/03.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2020/04.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2020/06.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2020/05.jpg')",
            }}
          ></div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>
          2020년 11월 13일 금요일 18:00 ~ 2020년 11월 14일 토요일 12:00 (무박
          2일)
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>온라인</p>

        <h4>주제</h4>
        <ul>
          <li>AI에 대한 모든 것</li>
        </ul>
        <p>
          다양한 분야로 도전할 수 있습니다.
          <br />
          퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게 공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          2020년 10월 16일 금요일 00:00 ~ 2020년 11월 9일 월요일 23:59
          <br />
          <a href="https://thon.khlug.org/">https://thon.khlug.org/</a>에서 팀
          또는 개인 단위로 참가 접수
        </p>

        <h5>팀 단위 접수</h5>
        <ul>
          <li>
            한 팀은 최소 1명부터 최대 4명으로 구성됩니다.
            <br />
            팀에는 반드시 1명 이상의 재학생이 포함되어야 합니다.
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
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/images/2020/team71454.png')",
                }}
              ></div>
              <div className="name">아이젠</div>
              <div className="idea">
                머신러닝 기법을 활용한 춤 인식 웹어플리케이션
              </div>
              <div className="member"></div>
              <div
                id="team71454"
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
                    "url('https://thon.khlug.org/images/2020/team71646.png')",
                }}
              ></div>
              <div className="name">방가밥죠</div>
              <div className="idea">
                효율적인 웹 서핑을 위한 크롬 확장 앱, 다이빙(Diving)
              </div>
              <div className="member"></div>
              <div
                id="team71646"
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
                    "url('https://thon.khlug.org/images/2020/team71693.png')",
                }}
              ></div>
              <div className="name">육장장이</div>
              <div className="idea">
                AI 화면보호기 : 비인가 사용자로부터 PC 정보보호
              </div>
              <div className="member"></div>
              <div
                id="team71693"
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
                    "url('https://thon.khlug.org/images/2020/team71671.png')",
                }}
              ></div>
              <div className="name">MMOHRPG</div>
              <div className="idea">AI인 척 서로를 속이고 기만하는 게임</div>
              <div className="member"></div>
              <div
                id="team71671"
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
                    "url('https://thon.khlug.org/images/2020/team72159.png')",
                }}
              ></div>
              <div className="name">밀당하는 오브젝트</div>
              <div className="idea">알파KHU와 심리오목</div>
              <div className="member"></div>
              <div
                id="team72159"
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
                    "url('https://thon.khlug.org/images/2020/team71774.png')",
                }}
              ></div>
              <div className="name">쿠쿠루삥뽕</div>
              <div className="idea">AI 미래도시를 체험하는 AR 콘텐츠</div>
              <div className="member"></div>
              <div
                id="team71774"
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
                    "url('https://thon.khlug.org/images/2020/team71590.png')",
                }}
              ></div>
              <div className="name">감감안감감</div>
              <div className="idea">인공지능 BMTI 예측 모델</div>
              <div className="member"></div>
              <div
                id="team71590"
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
                    "url('https://thon.khlug.org/images/2020/team71351.png')",
                }}
              ></div>
              <div className="name">블랙핑크</div>
              <div className="idea">[AI 게임 개발] 버거왕 김AI</div>
              <div className="member"></div>
              <div
                id="team71351"
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
                    "url('https://thon.khlug.org/images/2020/team71578.png')",
                }}
              ></div>
              <div className="name">깍두기들</div>
              <div className="idea">
                코파고 - AI 글자 인식을 통한 코로나 수기 출입 명부 관리자
              </div>
              <div className="member"></div>
              <div
                id="team71578"
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
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/images/2020/team72162.png')",
                }}
              ></div>
              <div className="name">죠스바 누가바 자바</div>
              <div className="idea">한국 교통표지판 분류</div>
              <div className="member"></div>
              <div
                id="team72162"
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
                    "url('https://thon.khlug.org/images/2020/team71413.png')",
                }}
              ></div>
              <div className="name">1등못하면동반입대</div>
              <div className="idea">동영상 내용 요약 서비스</div>
              <div className="member"></div>
              <div
                id="team71413"
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
                    "url('https://thon.khlug.org/images/2020/team71811.png')",
                }}
              ></div>
              <div className="name">계란으로 바위치기</div>
              <div className="idea">
                언택트 시대에서 소융대생이 살아남는 방법
              </div>
              <div className="member"></div>
              <div
                id="team71811"
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
                    "url('https://thon.khlug.org/images/2020/team71262.png')",
                }}
              ></div>
              <div className="name">승민없는 승민팀</div>
              <div className="idea">Xmask - 마스크 미식별자 탐지 AI</div>
              <div className="member"></div>
              <div
                id="team71262"
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
                    "url('https://thon.khlug.org/images/2020/team71377.png')",
                }}
              ></div>
              <div className="name">Maro</div>
              <div className="idea">지하철 혼잡도 측정</div>
              <div className="member"></div>
              <div
                id="team71377"
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
                    "url('https://thon.khlug.org/images/2020/team71382.png')",
                }}
              ></div>
              <div className="name">다비드</div>
              <div className="idea">
                자연어 처리를 이용한 에브리타임 연관 핫 키워드 검색
              </div>
              <div className="member"></div>
              <div
                id="team71382"
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
              <td className="time">09:00</td>
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

        <h4>문의</h4>
        <ul>
          <li>
            SW중심대학사업단 한용구 교수:{" "}
            <a href="mailto:ykhan@khu.ac.kr">ykhan@khu.ac.kr</a>
          </li>
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
