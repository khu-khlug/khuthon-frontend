export const MemberState = {
  NEED_VERIFICATION: "NEED_VERIFICATION",
  NEED_STUDENT_INFO: "NEED_STUDENT_INFO",
  NEED_TEAM: "NEED_TEAM",
  ACTIVE: "ACTIVE",
} as const;
export type MemberState = (typeof MemberState)[keyof typeof MemberState];

export const MemberStateLabel: Record<MemberState, string> = {
  NEED_VERIFICATION: "이메일 인증 필요",
  NEED_STUDENT_INFO: "정보 입력 필요",
  NEED_TEAM: "팀 가입 필요",
  ACTIVE: "대회 참가자",
};

export const University = {
  KYUNGHEE_UNIV: "KYUNGHEE_UNIV",
  AJOU_UNIV: "AJOU_UNIV",
  SOONCHUNHYANG_UNIV: "SOONCHUNHYANG_UNIV",
  KYUNGNAM_UNIV: "KYUNGNAM_UNIV",
  KOREA_UNIV: "KOREA_UNIV",
  KUNSAN_UNIV: "KUNSAN_UNIV",
  DONGGUK_UNIV: "DONGGUK_UNIV",
  DONGA_UNIV: "DONGA_UNIV",
  PUSAN_UNIV: "PUSAN_UNIV",
  YONSEI_UNIV: "YONSEI_UNIV",
  YEUNGNAM_UNIV: "YEUNGNAM_UNIV",
  HANDONG_GLOBAL_UNIV: "HANDONG_GLOBAL_UNIV",
  SHINHAN_UNIV: "SHINHAN_UNIV",
  HALLA_UNIV: "HALLA_UNIV",
  INJE_UNIV: "INJE_UNIV",
  KYUNGWOON_UNIV: "KYUNGWOON_UNIV",
  HANBAT_UNIV: "HANBAT_UNIV",
  KAIST: "KAIST",
  JEONBUK_UNIV: "JEONBUK_UNIV",
  INHA_UNIV: "INHA_UNIV",
  SOOKMYUNG_WOMENS_UNIV: "SOOKMYUNG_WOMENS_UNIV",
  KOOKMIN_UNIV: "KOOKMIN_UNIV",
  KOREA_AERO_UNIV: "KOREA_AERO_UNIV",
  SAHMYOOK_UNIV: "SAHMYOOK_UNIV",
  CHUNGNAM_UNIV: "CHUNGNAM_UNIV",
  CHONNAM_UNIV: "CHONNAM_UNIV",
  SUNGKYUNKWAN_UNIV: "SUNGKYUNKWAN_UNIV",
  KYUNGPOOK_UNIV: "KYUNGPOOK_UNIV",
  KYONGGI_UNIV: "KYONGGI_UNIV",
  GACHON_UNIV: "GACHON_UNIV",
  HOSEO_UNIV: "HOSEO_UNIV",
  HANKUK_UNIV_FOREIGN_STUDIES: "HANKUK_UNIV_FOREIGN_STUDIES",
  SANGMYUNG_UNIV: "SANGMYUNG_UNIV",
  PAICHAI_UNIV: "PAICHAI_UNIV",
  DONGSEO_UNIV: "DONGSEO_UNIV",
  CHUNGBUK_UNIV: "CHUNGBUK_UNIV",
  EWHA_WOMENS_UNIV: "EWHA_WOMENS_UNIV",
  YONSEI_MIRAE_UNIV: "YONSEI_MIRAE_UNIV",
  ANDONG_UNIV: "ANDONG_UNIV",
  DAEGU_CATHOLIC_UNIV: "DAEGU_CATHOLIC_UNIV",
} as const;
export type University = (typeof University)[keyof typeof University];

export const UniversityName: Record<University, string> = {
  KYUNGHEE_UNIV: "경희대학교",
  AJOU_UNIV: "아주대학교",
  SOONCHUNHYANG_UNIV: "순천향대학교",
  KYUNGNAM_UNIV: "경남대학교",
  KOREA_UNIV: "고려대학교",
  KUNSAN_UNIV: "군산대학교",
  DONGGUK_UNIV: "동국대학교",
  DONGA_UNIV: "동아대학교",
  PUSAN_UNIV: "부산대학교",
  YONSEI_UNIV: "연세대학교",
  YEUNGNAM_UNIV: "영남대학교",
  HANDONG_GLOBAL_UNIV: "한동대학교",
  SHINHAN_UNIV: "신한대학교",
  HALLA_UNIV: "한라대학교",
  INJE_UNIV: "인제대학교",
  KYUNGWOON_UNIV: "경운대학교",
  HANBAT_UNIV: "한밭대학교",
  KAIST: "한국과학기술원",
  JEONBUK_UNIV: "전북대학교",
  INHA_UNIV: "인하대학교",
  SOOKMYUNG_WOMENS_UNIV: "숙명여자대학교",
  KOOKMIN_UNIV: "국민대학교",
  KOREA_AERO_UNIV: "한국항공대학교",
  SAHMYOOK_UNIV: "삼육대학교",
  CHUNGNAM_UNIV: "충남대학교",
  CHONNAM_UNIV: "전남대학교",
  SUNGKYUNKWAN_UNIV: "성균관대학교",
  KYUNGPOOK_UNIV: "경북대학교",
  KYONGGI_UNIV: "경기대학교",
  GACHON_UNIV: "가천대학교",
  HOSEO_UNIV: "호서대학교",
  HANKUK_UNIV_FOREIGN_STUDIES: "한국외국어대학교",
  SANGMYUNG_UNIV: "상명대학교",
  PAICHAI_UNIV: "배재대학교",
  DONGSEO_UNIV: "동서대학교",
  CHUNGBUK_UNIV: "충북대학교",
  EWHA_WOMENS_UNIV: "이화여자대학교",
  YONSEI_MIRAE_UNIV: "연세대학교 미래",
  ANDONG_UNIV: "안동대학교",
  DAEGU_CATHOLIC_UNIV: "대구가톨릭대학교",
};

export const EmailDomain: Record<University, string[]> = {
  [University.KYUNGHEE_UNIV]: ["khu.ac.kr"],
  [University.AJOU_UNIV]: ["ajou.ac.kr"],
  [University.SOONCHUNHYANG_UNIV]: ["sch.ac.kr"],
  [University.KYUNGNAM_UNIV]: ["kyungnam.ac.kr"],
  [University.KOREA_UNIV]: ["korea.ac.kr"],
  [University.KUNSAN_UNIV]: ["kunsan.ac.kr"],
  [University.DONGGUK_UNIV]: ["dongguk.edu"],
  [University.DONGA_UNIV]: ["donga.ac.kr"],
  [University.PUSAN_UNIV]: ["pusan.ac.kr"],
  [University.YONSEI_UNIV]: ["yonsei.ac.kr"],
  [University.YEUNGNAM_UNIV]: ["yu.ac.kr", "ynu.ac.kr"],
  [University.HANDONG_GLOBAL_UNIV]: ["handong.edu"],
  [University.SHINHAN_UNIV]: ["shinhan.ac.kr"],
  [University.HALLA_UNIV]: ["halla.ac.kr"],
  [University.INJE_UNIV]: ["inje.ac.kr", "oasis.inje.ac.kr"],
  [University.KYUNGWOON_UNIV]: ["ikw.ac.kr"],
  [University.HANBAT_UNIV]: ["hanbat.ac.kr"],
  [University.KAIST]: ["kaist.ac.kr"],
  [University.JEONBUK_UNIV]: ["jbnu.ac.kr"],
  [University.INHA_UNIV]: ["inha.ac.kr", "inha.edu"],
  [University.SOOKMYUNG_WOMENS_UNIV]: ["sookmyung.ac.kr"],
  [University.KOOKMIN_UNIV]: ["kookmin.ac.kr"],
  [University.KOREA_AERO_UNIV]: ["kau.ac.kr"],
  [University.SAHMYOOK_UNIV]: ["syu.ac.kr"],
  [University.CHUNGNAM_UNIV]: ["cnu.ac.kr"],
  [University.CHONNAM_UNIV]: ["jnu.ac.kr"],
  [University.SUNGKYUNKWAN_UNIV]: ["skku.edu"],
  [University.KYUNGPOOK_UNIV]: ["knu.ac.kr"],
  [University.KYONGGI_UNIV]: ["kyonggi.ac.kr"],
  [University.GACHON_UNIV]: ["gachon.ac.kr"],
  [University.HOSEO_UNIV]: ["hoseo.ac.kr"],
  [University.HANKUK_UNIV_FOREIGN_STUDIES]: ["hufs.ac.kr"],
  [University.SANGMYUNG_UNIV]: ["smu.ac.kr"],
  [University.PAICHAI_UNIV]: ["pcu.ac.kr"],
  [University.DONGSEO_UNIV]: ["dongseo.ac.kr", "kowon.dongseo.ac.kr"],
  [University.CHUNGBUK_UNIV]: ["cbnu.ac.kr", "chungbuk.ac.kr"],
  [University.EWHA_WOMENS_UNIV]: ["ewha.ac.kr"],
  [University.YONSEI_MIRAE_UNIV]: ["yonsei.ac.kr"],
  [University.ANDONG_UNIV]: ["anu.ac.kr", "student.anu.ac.kr"],
  [University.DAEGU_CATHOLIC_UNIV]: ["cu.ac.kr"],
};

export const TimeRange = {
  BEFORE: "BEFORE",
  BETWEEN: "BETWEEN",
  AFTER: "AFTER",
} as const;
export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange];

export const LogType = {
  // 참가자 관련 로그
  MEMBER_ATTEND_CHECKED: "MEMBER_ATTEND_CHECKED",
  MEMBER_EMAIL_VERIFICATION_STARTED: "MEMBER_EMAIL_VERIFICATION_STARTED",
  MEMBER_EMAIL_VERIFIED: "MEMBER_EMAIL_VERIFIED",
  MEMBER_STUDENT_INFO_SUBMITTED: "MEMBER_STUDENT_INFO_SUBMITTED",
  MEMBER_PASSWORD_CHANGE_REQUESTED: "MEMBER_PASSWORD_CHANGE_REQUESTED",
  MEMBER_PASSWORD_CHANGED: "MEMBER_PASSWORD_CHANGED",
  MEMBER_REGISTER_COMPLETED: "MEMBER_REGISTER_COMPLETED",
  MEMBER_INVITATION_CREATED: "MEMBER_INVITATION_CREATED",
  MEMBER_INVITATION_CANCELLED: "MEMBER_INVITATION_CANCELLED",
  MEMBER_JOINED_TEAM: "MEMBER_JOINED_TEAM",
  MEMBER_REMOVED_FROM_TEAM: "MEMBER_REMOVED_FROM_TEAM",
  TEAM_CREATED: "TEAM_CREATED",
  TEAM_DELETED: "TEAM_DELETED",
  TEAM_NAME_UPDATED: "TEAM_NAME_UPDATED",
  TEAM_IDEA_UPDATED: "TEAM_IDEA_UPDATED",
  TEAM_PRODUCT_URL_UPDATED: "TEAM_PRODUCT_URL_UPDATED",
  TEAM_ATTACHMENT_UPLOADED: "TEAM_ATTACHMENT_UPLOADED",
  TEAM_ATTACHMENT_DELETED: "TEAM_ATTACHMENT_DELETED",
  TEAM_VOTED: "TEAM_VOTED",

  // 심사위원 관련 로그
  EXAMINER_CREATED: "EXAMINER_CREATED",
  EXAMINER_REMOVED: "EXAMINER_REMOVED",
  EXAMINER_JUDGED: "EXAMINER_JUDGED",
  EXAMINER_REJUDGED: "EXAMINER_REJUDGED",
  EXAMINER_LOGIN: "EXAMINER_LOGIN",

  // 운영진 관련 로그
  MANAGER_TRIED_LOGIN: "MANAGER_TRIED_LOGIN",
  MANAGER_LOGIN: "MANAGER_LOGIN",
  MANAGER_INVITATION_CREATED: "MANAGER_INVITATION_CREATED",
  MANAGER_INVITATION_ACCEPTED: "MANAGER_INVITATION_ACCEPTED",
  MANAGER_INVITATION_CANCELED: "MANAGER_INVITATION_CANCELED",
  NOTICE_CREATED: "NOTICE_CREATED",
  NOTICE_UPDATED: "NOTICE_UPDATED",
  NOTICE_DELETED: "NOTICE_DELETED",
  MANAGER_SENT_SMS: "MANAGER_SENT_SMS",
  MANAGER_CHANGE_TEAM_IDEA: "MANAGER_CHANGE_TEAM_IDEA",
  MANAGER_SET_TEAM_PRIZE: "MANAGER_SET_TEAM_PRIZE",
  MANAGER_DELETED_TEAM: "MANAGER_DELETED_TEAM",
} as const;
export type LogType = (typeof LogType)[keyof typeof LogType];
