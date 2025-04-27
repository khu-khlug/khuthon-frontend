import Image from "next/image";
import Link from "next/link";

import Banner from "@khlug/app/components/Banner";

import { createEvent } from "@khlug/util/createEvent";
import { fetchNoticeList } from "@khlug/util/fetchNoticeList";
import { formatDate } from "@khlug/util/formaDate";

export const revalidate = 60;

export default async function Home() {
  const event = await createEvent();
  const notices = await fetchNoticeList();

  const eventYear = event.eventStartAt.getFullYear();
  const thisYear = new Date().getFullYear();

  return (
    <div id="index">
      <Banner event={event} />
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
            <Link href="/notice">공지사항</Link>
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
      </div>
      <div className="clear"></div>
    </div>
  );
}
