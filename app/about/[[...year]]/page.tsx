"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";

import { AwardResult } from "@khlug/components/AwardResult/AwardResult";
import { WinnerTeam } from "@khlug/components/WinnerTeam/WinnerTeam";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.locale("ko");

type Props = {
  params: {
    year: string;
  };
};

const data = {
  eventRange: {
    start: dayjs.tz("2023-11-10 18:00:00", "Asia/Seoul"),
    end: dayjs.tz("2023-11-11 11:45:00", "Asia/Seoul"),
  },
  registerRange: {
    start: dayjs.tz("2023-10-30 00:00:00", "Asia/Seoul"),
    end: dayjs.tz("2023-11-09 23:59:59", "Asia/Seoul"),
  },
  place: "경희대학교 국제캠퍼스 전자정보대학관 205호",
};

type CurrentTimeStatus = "BEFORE" | "DURING" | "AFTER";
type TimeRange = { start: dayjs.Dayjs; end: dayjs.Dayjs };

function calcCurrentTimeStatus(range: TimeRange): CurrentTimeStatus {
  const { start, end } = range;
  const now = dayjs();

  if (now.isBefore(start)) {
    return "BEFORE";
  } else if (now.isAfter(end)) {
    return "AFTER";
  } else {
    return "DURING";
  }
}

function formatDate(date: dayjs.Dayjs): string {
  return date.format("YYYY년 MM월 DD일 ddd요일 HH:mm");
}

function formatDateRange(range: TimeRange): string {
  return `${formatDate(range.start)} ~ ${formatDate(range.end)}`;
}

export default function YearAbout({ params }: Props) {
  const thisYear = new Date().getFullYear();
  const year = parseInt(params.year, 10) || thisYear;

  const thumbnail = "/images/favicon.png";

  return (
    <>
      {/* <div className="gallery">
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/01.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/07.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/11.jpg')"></div></div>
    
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/05.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/12.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/06.jpg')"></div></div>
    
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/02.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/08.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/04.jpg')"></div></div>
    
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/10.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/03.jpg')"></div></div>
    <div className="image_wrap"><div className="image" style="background-image:url('/images/2022/09.jpg')"></div></div>
    <div className="clear"></div>
</div> */}

      <div className="container about">
        <h4>일시</h4>
        <p>{formatDateRange(data.eventRange)} (무박 2일)</p>
        {
          {
            BEFORE: null,
            DURING: <div className="desc">행사가 진행 중입니다!</div>,
            AFTER: <div className="desc">행사가 끝났습니다.</div>,
          }[calcCurrentTimeStatus(data.eventRange)]
        }

        <h4>장소</h4>
        <p>{data.place}</p>

        <h4>주제</h4>
        <ul>
          <li className="text-gray-400">행사 D-3 때 공개</li>
        </ul>
        <p>
          다양한 분야로 도전할 수 있습니다.
          <br />
          퀄리티가 좋지 않아도 괜찮습니다. 재미있게 만들고 즐겁게 공유해봐요!
        </p>

        <h4>참가 접수</h4>
        <p>
          {formatDateRange(data.registerRange)}
          <br />
          <a href="https://thon.khlug.org/">https://thon.khlug.org/</a>에서 팀
          단위로 참가 접수
          <br />
          선착순으로 48팀 또는 128명까지만 참가 신청을 받습니다.
        </p>

        {calcCurrentTimeStatus(data.registerRange) === "BEFORE" && (
          <div className="desc mb-5">아직 접수 기간이 아닙니다.</div>
        )}
        {calcCurrentTimeStatus(data.registerRange) === "AFTER" &&
          calcCurrentTimeStatus(data.eventRange) === "BEFORE" && (
            <div className="desc mb-5">접수가 끝났습니다.</div>
          )}

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
        <AwardResult prizeName="대상 (1팀)" prize="상금 200만원">
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
        </AwardResult>
        <AwardResult prizeName="최우수상 (3팀)" prize="각 상금 100만원">
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
        </AwardResult>
        <AwardResult prizeName="우수상 (5팀)" prize="각 상금 50만원">
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
        </AwardResult>
        <AwardResult prizeName="인기상 (1팀)" prize="키보드">
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
        </AwardResult>
        <AwardResult prizeName="아차상 (1팀)" prize="키보드">
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
        </AwardResult>
        <AwardResult prizeName="격려상 (1팀)" prize="키보드">
          <WinnerTeam thumbnailUrl={thumbnail} name="이름" idea="아이디어" />
        </AwardResult>

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
