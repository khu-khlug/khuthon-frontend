export const MemberState = {
  NEED_VERIFICATION: "NEED_VERIFICATION",
  NEED_TEAM: "NEED_TEAM",
  ACTIVE: "ACTIVE",
} as const;
export type MemberState = (typeof MemberState)[keyof typeof MemberState];

export const University = {
  KYUNGHEE_UNIV: "KYUNGHEE_UNIV",
  AJOU_UNIV: "AJOU_UNIV",
  KYONGGI_UNIV: "KYONGGI_UNIV",
  DANKOOK_UNIV: "DANKOOK_UNIV",
} as const;
export type University = (typeof University)[keyof typeof University];

export const UniversityName: Record<University, string> = {
  KYUNGHEE_UNIV: "경희대학교",
  AJOU_UNIV: "아주대학교",
  KYONGGI_UNIV: "경기대학교",
  DANKOOK_UNIV: "단국대학교",
};

export const EmailDomain: Record<University, string[]> = {
  [University.KYUNGHEE_UNIV]: ["khu.ac.kr"],
  [University.AJOU_UNIV]: ["ajou.ac.kr"],
  [University.KYONGGI_UNIV]: ["kyonggi.ac.kr"],
  [University.DANKOOK_UNIV]: ["dankook.ac.kr"],
};

export const TimeRange = {
  BEFORE: "BEFORE",
  BETWEEN: "BETWEEN",
  AFTER: "AFTER",
} as const;
export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange];

export const Group = {
  A: "A",
  B: "B",
} as const;
export type Group = (typeof Group)[keyof typeof Group];

export const UserRole = {
  MEMBER: "MEMBER",
  EXAMINER: "EXAMINER",
  MANAGER: "MANAGER",
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
