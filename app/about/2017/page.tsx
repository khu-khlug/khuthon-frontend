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
                "url('https://thon.khlug.org/images/2017/06.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/01.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/02.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/03.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/04.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/05.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/07.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/08.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/09.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/10.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/11.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://thon.khlug.org/images/2017/12.jpg')",
            }}
          ></div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>
          2017년 11월 10일 금요일 19:00 ~ 2017년 11월 11일 토요일 09:00 (무박
          2일)
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>경희대학교 전자정보대학관 205호</p>

        <h4>주제</h4>
        <ul>
          <li>학교와 일상 생활 속에서: 자유 주제</li>
        </ul>
        <p>
          웹 서비스, 어플리케이션, IoT(사물인터넷) 등 다양한 분야로 도전할 수
          있습니다.
          <br />
          너무 퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게
          공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          2017년 10월 20일 금요일 12:00 ~ 2017년 11월 5일 일요일 23:59
          <br />
          <a href="https://thon.khlug.org/">https://thon.khlug.org/</a>에서 팀
          단위로 참가 접수
        </p>

        <p>
          한 팀에는 최소 1명부터 최대 4명으로 구성됩니다.
          <br />
          2~3명 팀을 권장합니다.
        </p>
        <p>
          접수를 할 때 팀 이름과 함께 아이디어를 함께 접수 받습니다.
          <br />
          행사 당일 전부 구현이 힘들 경우에는 사전에 어느 정도 구현해올 수
          있으며, 발표할 때 어디까지 만들어왔는지 반드시 알려야 합니다.
        </p>

        <h4>참여 동아리</h4>
        <p>
          해커톤을 함께 주관하는 학과 소속 동아리와 함께 합니다.
          <br />
          모든 팀원은 재·휴학 여부와 관계 없이 아래 동아리 중 하나 이상에
          소속되어있어야 하며, 반드시 같은 동아리원끼리 팀을 구성하실 필요는
          없습니다.
        </p>
        <ul>
          <li>쿠러그</li>
        </ul>
        <h5>컴퓨터공학과 소속</h5>
        <ul>
          <li>Dasom</li>
          <li>D.com</li>
          <li>Hacker</li>
          <li>Return</li>
          <li>NET</li>
          <li>Include</li>
          <li>T.G.WinG</li>
        </ul>
        <h5>산업경영공학과 소속</h5>
        <ul>
          <li>산사회</li>
          <li>CAPTIMA</li>
          <li>언론지대</li>
        </ul>
        <h5>소프트웨어융합학과 소속</h5>
        <ul>
          <li>레트로</li>
        </ul>
        <p className="sub">
          이외에도 함께 하고자 하는 동아리는 중앙동아리 쿠러그(이메일{" "}
          <a href="mailto:we_are@khlug.org">we_are@khlug.org</a>, 페이스북
          페이지{" "}
          <a href="https://www.facebook.com/khlug" target="_blank">
            쿠러그 KHLUG
          </a>
          )로 연락주세요.
        </p>

        <h4>수상</h4>
        <p>
          당일 심사와 인기 투표를 통해 수상자를 결정합니다.
          <br />
          모든 수상자에게는{" "}
          <strong style={{ color: "#3eaf0e" }}>네이버 본사 투어</strong>의
          기회가 주어집니다.
        </p>
        <h5>대상 (주제 별 1팀)</h5>
        <ul>
          <li>모든 팀원에게 기계식 키보드, 게이밍 마우스, 스타벅스 카드</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/images/2017/team28092.png')",
                }}
              ></div>
              <div className="name">O2ObyDASOM</div>
              <div className="idea">렌즈 가상 시착용 웹서비스 와 판매예측</div>
              <div className="member"></div>
              <div
                id="team28092"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>최우수상 (주제 별 2팀)</h5>
        <ul>
          <li>기계식 키보드, 게이밍 마우스, 스타벅스 카드</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/images/2017/team28176.png')",
                }}
              ></div>
              <div className="name">연애하고싶습니다</div>
              <div className="idea">모바일 학생증</div>
              <div className="member"></div>
              <div
                id="team28176"
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
                    "url('https://thon.khlug.org/images/2017/team28085.png')",
                }}
              ></div>
              <div className="name">ziginet</div>
              <div className="idea">VR을 이용한 사격게임</div>
              <div className="member"></div>
              <div
                id="team28085"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>우수상 (주제 별 3팀)</h5>
        <ul>
          <li>스타벅스 카드</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://thon.khlug.org/images/2017/team28265.png')",
                }}
              ></div>
              <div className="name">average 80kg</div>
              <div className="idea">
                아두이노를 활용한 변기 내의 이물질 여부 확인
              </div>
              <div className="member"></div>
              <div
                id="team28265"
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
                    "url('https://thon.khlug.org/images/2017/team28321.png')",
                }}
              ></div>
              <div className="name">치팀</div>
              <div className="idea">카톡분석프로그램</div>
              <div className="member"></div>
              <div
                id="team28321"
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
                    "url('https://thon.khlug.org/images/2017/team28296.png')",
                }}
              ></div>
              <div className="name">화목건우의 그녀는 누굴까?</div>
              <div className="idea">일상을 중심으로 한 텍스트 중심의 게임</div>
              <div className="member"></div>
              <div
                id="team28296"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>최다 참가 동아리 (1개 동아리)</h5>
        <ul>
          <li>
            !!! 가장 많은 인원이 참가한 동아리에게는 삼성 27인치 커브드 모니터를
            드립니다 !!!
          </li>
        </ul>
        <div className="list" style={{ margin: "-20px 0 20px 0" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage: "url('https://khlug.org/images/khu.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div className="name" style={{ padding: "30px 0" }}>
                D.com
              </div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <p>수상을 하지 못했더라도 기념품이 주어지니 많은 참여 부탁드립니다.</p>

        <h4>진행 일정</h4>
        <p>일정은 행사 진행 상황에 따라 다소 변경될 수 있습니다.</p>
        <table className="timetable">
          <tbody>
            <tr>
              <th>시간</th>
              <th>일정</th>
              <th>비고</th>
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
              <td>행사 진행 방식 소개</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">19:30</td>
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
              <td className="time">05:30</td>
              <td>발표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">07:30</td>
              <td>심사 및 인기 투표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">07:45</td>
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
            쿠러그
          </a>
        </p>

        <h4>주관</h4>
        <ul>
          <li>
            <a href="http://ce.khu.ac.kr/" target="_blank" className="favicon">
              경희대학교 컴퓨터공학과 학생회
            </a>
          </li>
          <li>
            <a href="http://ie.khu.ac.kr/" target="_blank" className="favicon">
              경희대학교 산업경영공학과 학생회
            </a>
          </li>
          <li>
            <a
              href="http://swcon.khu.ac.kr/"
              target="_blank"
              className="favicon"
            >
              경희대학교 소프트웨어융합학과 학생회
            </a>
          </li>
        </ul>

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
