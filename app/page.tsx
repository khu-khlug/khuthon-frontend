import Image from "next/image";

import { createEvent } from "@khlug/util/createEvent";
import { fetchNoticeList } from "@khlug/util/fetchNoticeList";
import { formatDate } from "@khlug/util/formaDate";

export default async function Home() {
  const event = await createEvent();
  const notices = await fetchNoticeList();

  const eventYear = event.eventStartAt.getFullYear();
  const thisYear = new Date().getFullYear();

  return (
    <div id="index">
      <div className="banner">
        경희대학교 소프트웨어 해커톤 khu<b>thon</b>,<br />
        {eventYear === thisYear
          ? event.registerRange === "BETWEEN"
            ? "지금 참가 접수 하세요!"
            : event.registerRange === "AFTER" && event.eventRange === "BEFORE"
            ? "잠시 후에 시작됩니다!"
            : event.eventRange === "BETWEEN"
            ? "모두가 개발에 빠져있습니다!"
            : event.eventRange === "AFTER"
            ? "내년에 또 만나요!"
            : "여러분과 함께 하고 싶습니다!"
          : "여러분과 함께 하고 싶습니다!"}
      </div>

      <div className="registering">
        {eventYear === thisYear ? (
          <>
            <h5>
              참가 접수{" "}
              {event.registerRange === "BETWEEN" && <span>접수 중</span>}
            </h5>
            <p>
              <span className="whitespace-nowrap">
                {formatDate(event.registerStartAt)}
              </span>{" "}
              <span className="whitespace-nowrap">
                ~ {formatDate(event.registerEndAt)}
              </span>
            </p>
            <p className="description">
              재학생으로 구성된 1~4명의 팀으로
              <br />
              접수할 수 있습니다.
            </p>
            <h5>
              해커톤 행사{" "}
              {event.eventRange === "BETWEEN" && <span>진행 중</span>}
            </h5>
            <p>
              <span className="whitespace-nowrap">
                {formatDate(event.eventStartAt)}
              </span>{" "}
              <span className="whitespace-nowrap">
                ~ {formatDate(event.eventEndAt)}
              </span>
            </p>
          </>
        ) : (
          <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h5>기대해주세요!</h5>
            <p>
              <span className="whitespace-nowrap">
                아직 행사가 기획 중에 있습니다!
              </span>
            </p>
          </>
        )}
      </div>
      <div className="clear"></div>

      <div className="relative">
        <div className="notice">
          <h4 className="m-0">
            <a href="{{url('/notice')}}">공지사항</a>
          </h4>
          <ul className="m-0">
            {notices.slice(0, 5).map((notice) => (
              <li key={notice.id}>
                <a href={`/notice/${notice.id}`}>
                  <span className="title">{notice.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="gallery">
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2018/01.jpg"
              alt="첫번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2017/01.jpg"
              alt="두번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2018/06.jpg"
              alt="세번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2018/07.jpg"
              alt="네번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2017/04.jpg"
              alt="다섯번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2018/08.jpg"
              alt="여섯번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2018/03.jpg"
              alt="일곱번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2017/09.jpg"
              alt="여덟번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://cdn.khlug.org/images/2018/10.jpg"
              alt="아홉번째 이미지"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="clear"></div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}
