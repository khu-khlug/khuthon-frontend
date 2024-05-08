"use client";

import SatisfySurveyNoticeContainer from "@khlug/components/manager/SatisfySurveyNoticeContainer";
import TopicOpenNoticeContainer from "@khlug/components/manager/TopicOpenNoticeContainer";

export default function NoticePage() {
  return (
    <>
      <TopicOpenNoticeContainer />
      <SatisfySurveyNoticeContainer />
    </>
  );
}
