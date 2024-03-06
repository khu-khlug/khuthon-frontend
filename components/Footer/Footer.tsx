import Image from "next/image";

export function Footer() {
  return (
    <div id="footer">
      <address className="sponsor">
        <a href="http://khu.ac.kr/" target="_blank">
          <Image
            src="https://khlug.org/images/khu.png"
            width={20}
            height={14}
            alt="경희대학교 로고"
            className="inline"
          />{" "}
          경희대학교
        </a>
        <a href="https://khlug.org/" target="_blank">
          <Image
            src="https://khlug.org/images/favicon_white.gif"
            width={14}
            height={14}
            alt="쿠러그 로고"
            className="inline"
          />{" "}
          쿠러그
        </a>
        <a href="/judge">
          <Image
            src="/images/favicon.png"
            width={14}
            height={14}
            alt="쿠톤 로고"
            className="inline"
          />{" "}
          khu
          <b>thon</b>
        </a>
      </address>
      <div className="clear"></div>
    </div>
  );
}
