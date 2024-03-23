// 기존 페이지 HTML 렌더링한 걸 그대로 가져와서 문법만 맞춰놓은 것.
// 이후에 여유가 된다면 컴포넌트로 쪼개고 하면 좋을 거 같긴 한데,
// 해당 작업의 메리트가 크게 느껴지진 않음.
export default async function _2018About() {
  return (
    <>
      <div className="gallery">
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/06.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/01.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/11.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/02.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/03.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/12.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/05.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/07.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/08.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/09.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/10.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2018/04.jpg')",
            }}
          ></div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>
          2018년 11월 23일 금요일 18:00 ~ 2018년 11월 24일 토요일 12:00 (무박
          2일)
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>경희대학교 전자정보대학관 205호, 211-1호</p>

        <h4>주제</h4>
        <ul>
          <li>대학교와 지역상권</li>
          <li style={{ color: "#999", listStyle: "none" }}>
            사전 제작 방지를 위해 당일 공개
          </li>
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
          2018년 9월 10일 월요일 00:00 ~ 2018년 11월 9일 금요일 23:59
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
        <p>당일 인기 투표를 통해 수상자를 결정합니다.</p>
        <h5>대상 (1팀)</h5>
        <ul>
          <li>SW융합대학장 상장 및 상금 50만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2018/team43525.png')",
                }}
              ></div>
              <div className="name">민재; 76</div>
              <div className="idea">
                휴가나오면 뭐먹을까?(딥러닝을 이용한 맛집 리뷰 분석)
              </div>
              <div className="member"></div>
              <div
                id="team43525"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>최우수상 (2팀)</h5>
        <ul>
          <li>SW융합대학장 상장 및 상금 30만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2018/team43737.png')",
                }}
              ></div>
              <div className="name">광휘</div>
              <div className="idea">
                대학교와 지역상권을 배경으로 한 레포트의 모험
              </div>
              <div className="member"></div>
              <div
                id="team43737"
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
                    "url('https://cdn.khlug.org/images/2018/team43489.png')",
                }}
              ></div>
              <div className="name">동방점프</div>
              <div className="idea">네 알바냐?</div>
              <div className="member"></div>
              <div
                id="team43489"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>우수상 (3팀)</h5>
        <ul>
          <li>SW융합대학장 상장 및 상금 20만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2018/team43692.png')",
                }}
              ></div>
              <div className="name">Watch M.E.</div>
              <div className="idea">
                거기 자리 있KHU? ( 대학교 및 지역상권 실시간 자리 찾기
                어플리케이션)
              </div>
              <div className="member"></div>
              <div
                id="team43692"
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
                    "url('https://cdn.khlug.org/images/2018/team43848.png')",
                }}
              ></div>
              <div className="name">세훈이와 아이들</div>
              <div className="idea">
                [C++ only] 신입생을 위한 대학 주변 맛집 검색 프로그램
              </div>
              <div className="member"></div>
              <div
                id="team43848"
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
                    "url('https://cdn.khlug.org/images/2018/team43662.png')",
                }}
              ></div>
              <div className="name">일개미</div>
              <div className="idea">
                사용자 취향을 반영한 맛집 추천 프로그램(KHU키네이터)
              </div>
              <div className="member"></div>
              <div
                id="team43662"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <p>
          수상을 하지 못했더라도 다양한 간식과 기념품이 주어지니 많은 참여
          부탁드립니다.
        </p>

        <h4>진행 일정</h4>
        <table className="timetable">
          <tbody>
            <tr>
              <th>시간</th>
              <th>일정</th>
              <th>비고</th>
            </tr>
            <tr>
              <td className="time">15:00</td>
              <td>
                입장 시작
                <br />
                주제 배부 (개발 시작)
              </td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">18:00</td>
              <td>개회식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">18:30</td>
              <td>진행 방식 소개</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">? : ?</td>
              <td>야식[0]</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">? : ?</td>
              <td>야식[1]</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">? : ?</td>
              <td>조식</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">09:00</td>
              <td>발표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:30</td>
              <td>투표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:40</td>
              <td>시상</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">12:00</td>
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
