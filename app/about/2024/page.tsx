import Image from "next/image";

export default function _2024About() {
  return (
    <>
      <div className="gallery">
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-01.jpeg"
            alt="첫번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-02.jpeg"
            alt="두번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-03.jpeg"
            alt="세번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-04.jpeg"
            alt="네번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-05.jpeg"
            alt="다섯번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-06.jpeg"
            alt="여섯번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-07.jpeg"
            alt="일곱번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-08.jpeg"
            alt="여덟번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="image_wrap image relative">
          <Image
            src="https://cdn.khlug.org/images/khuthon2024/khuthon-2024-09.jpeg"
            alt="아홉번째 이미지"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="clear"></div>
      </div>

      <div className="container about">
        <h4>일시</h4>
        <p>
          <strong>
            2024년 5월 10일 금요일 18:00 ~ 2024년 5월 11일 토요일 12:00 (무박
            2일)
          </strong>
        </p>
        <div className="desc">행사가 끝났습니다.</div>

        <h4>장소</h4>
        <p>경희대학교 국제캠퍼스 전자정보대학관 205호</p>

        <h4>주제</h4>
        <ul className="!m-0">
          <li>
            <strong>환경과 소프트웨어</strong>: 지속가능한 지구와 인간사회를
            위한 ESG 관점의 고찰
          </li>
        </ul>
        <p>
          다양한 분야로 도전할 수 있습니다.
          <br />
          퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게 공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          <strong>
            2024년 4월 29일 월요일 00:00 ~ 2024년 5월 6일 월요일 23:59
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

        <h4>수상</h4>

        <div>
          <h5>대상 (1팀)</h5>
          <ul className="!m-0">
            <li>상장 및 상금 200만원</li>
          </ul>
        </div>

        <div className="mt-16">
          <h5>최우수상 (3팀)</h5>
          <ul className="!m-0">
            <li>상장 및 각 상금 100만원</li>
          </ul>
        </div>

        <div className="mt-16">
          <h5>우수상 (6팀)</h5>
          <ul className="!m-0">
            <li>상장 및 각 상금 50만원</li>
          </ul>
        </div>

        <div className="mt-16">
          <h5>특별상 (4팀)</h5>
          <ul className="!m-0">
            <li>상장 및 상품</li>
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
              <td className="time">23:00</td>
              <td>야식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">06:00</td>
              <td>조식</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">08:30</td>
              <td>발표</td>
              <td> </td>
            </tr>
            <tr>
              <td className="time">11:30</td>
              <td>심사</td>
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
            href="https://www.ajou.ac.kr/sw/"
            target="_blank"
            className="favicon"
          >
            <img
              src="https://cdn.khlug.org/images/ajou-univ.png"
              className="favicon"
              alt=""
            />{" "}
            아주대학교 <strong>SW융합교육원</strong>
          </a>
        </p>
        <p>
          <a href="https://xr.ac.kr/" target="_blank" className="favicon">
            <img
              src="https://cdn.khlug.org/images/coss-logo.png"
              className="favicon"
              alt=""
            />{" "}
            경희대학교 <strong>실감미디어 혁신융합대학 사업단</strong>
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
