// 기존 페이지 HTML 렌더링한 걸 그대로 가져와서 문법만 맞춰놓은 것.
// 이후에 여유가 된다면 컴포넌트로 쪼개고 하면 좋을 거 같긴 한데,
// 해당 작업의 메리트가 크게 느껴지진 않음.
export default async function _2019About() {
  return (
    <>
      <div className="gallery">
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/01.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/02.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/03.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/04.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/05.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/06.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/07.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/08.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/09.jpg')",
            }}
          ></div>
        </div>

        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/10.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/11.jpg')",
            }}
          ></div>
        </div>
        <div className="image_wrap">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://cdn.khlug.org/images/2019/12.jpg')",
            }}
          ></div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>
          2019년 11월 8일 금요일 18:00 ~ 2019년 11월 9일 토요일 12:00 (무박 2일)
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>경희대학교 전자정보대학관 205호 및 일대</p>

        <h4>주제</h4>
        <ul>
          <li>대학생과 여행</li>
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
          2019년 10월 7일 월요일 00:00 ~ 2019년 11월 4일 월요일 23:59
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
          <li>SW융합대학장 상장 및 상금 200만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2019/team61423.png')",
                }}
              ></div>
              <div className="name">Lizard_0209</div>
              <div className="idea">
                하울의 움직이는 대학 - 더 나은 대학이 되기 위한 여행
              </div>
              <div className="member"></div>
              <div
                id="team61423"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>최우수상 (3팀)</h5>
        <ul>
          <li>SW융합대학장 상장 및 상금 100만원</li>
        </ul>
        <div className="list" style={{ marginBottom: "50px" }}>
          <ul>
            <li className="item">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://cdn.khlug.org/images/2019/team60217.png')",
                }}
              ></div>
              <div className="name">환트리♥</div>
              <div className="idea">여행계의 에브리타임, Togevel!</div>
              <div className="member"></div>
              <div
                id="team60217"
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
                    "url('https://cdn.khlug.org/images/2019/team61794.png')",
                }}
              ></div>
              <div className="name">야근빌런</div>
              <div className="idea">
                유니티를 이용한 캐주얼 게임 &quot;새내기 드라이빙&quot; 개발
              </div>
              <div className="member"></div>
              <div
                id="team61794"
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
                    "url('https://cdn.khlug.org/images/2019/team61400.png')",
                }}
              ></div>
              <div className="name">ModuIT</div>
              <div className="idea">
                불여시 (불타는 청춘을 위한 여행 시뮬레이션)
              </div>
              <div className="member"></div>
              <div
                id="team61400"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>우수상 (5팀)</h5>
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
                    "url('https://cdn.khlug.org/images/2019/team60019.png')",
                }}
              ></div>
              <div className="name">20200703</div>
              <div className="idea">
                SO FAR : 즉흥으로 갈 수 있는 관광지, 맛집 정보를 교통정보와 함께
                보여드립니다.
              </div>
              <div className="member"></div>
              <div
                id="team60019"
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
                    "url('https://cdn.khlug.org/images/2019/team60880.png')",
                }}
              ></div>
              <div className="name">초기화되지 않은 팀입니다.</div>
              <div className="idea">
                합성곱 신경망을 활용한 좋아요 예측 어플리케이션
              </div>
              <div className="member"></div>
              <div
                id="team60880"
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
                    "url('https://cdn.khlug.org/images/2019/team60254.png')",
                }}
              ></div>
              <div className="name">띵동</div>
              <div className="idea">VLOG COMPILER</div>
              <div className="member"></div>
              <div
                id="team60254"
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
                    "url('https://cdn.khlug.org/images/2019/team61327.png')",
                }}
              ></div>
              <div className="name">뀨톤</div>
              <div className="idea">
                완벽한 여행을 만들어줄 당신의 여행 가계부
              </div>
              <div className="member"></div>
              <div
                id="team61327"
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
                    "url('https://cdn.khlug.org/images/2019/team61459.png')",
                }}
              ></div>
              <div className="name">학관옆에있는종이울릴까말까</div>
              <div className="idea">주루마블</div>
              <div className="member"></div>
              <div
                id="team61459"
                className="pdf_viewer"
                style={{ display: "none", height: "439.2px" }}
              ></div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>

        <h5>특별상 (5팀)</h5>
        <ul>
          <li>SW융합대학장 상장 및 상금 30만원</li>
        </ul>

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
              <td className="time">? : ?</td>
              <td>식사[0]=석식</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">? : ?</td>
              <td>식사[1]=야식</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">? : ?</td>
              <td>식사[2]=조식</td>
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
              <td className="time">11:50</td>
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
