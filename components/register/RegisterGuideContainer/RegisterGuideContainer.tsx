import Container from "@khlug/components/Container/Container";

export default function RegisterGuideContainer() {
  return (
    <Container>
      <h4>참가 접수 절차</h4>
      <div className="flow_diagram c4">
        <div className="cell">
          <div className="cell_wrap">
            <div className="date">접수 기간 중</div>
            <div className="event">
              <div className="event_wrap">
                이메일 인증<sup>*0</sup>
              </div>
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="cell_wrap">
            <div className="date">접수 기간 중</div>
            <div className="event">
              <div className="event_wrap">
                참가자 정보 입력<sup>*1</sup>
              </div>
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="cell_wrap">
            <div className="date">접수 기간 중</div>
            <div className="event">
              <div className="event_wrap">
                팀 참가 또는 팀 생성<sup>*2 *3</sup>
              </div>
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="cell_wrap">
            <div className="date">접수 기간 중</div>
            <div className="event">
              <div className="event_wrap">
                참가 접수 완료<sup>*4</sup>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <p className="sup">
        <span className="sup">*0</span> 참가자의 재학 여부를 확인하기 위해 학교
        이메일로 인증 메일이 전송됩니다.
      </p>
      <p className="sup">
        <span className="sup">*1</span> 경희대학교 참가자는{" "}
        <a href="https://jajudy.khu.ac.kr/stuauth" target="_blank">
          중앙동아리연합회 전산 학생 인증 시스템
        </a>
        을 통해 학부생 인증을 하고, 다른 대학교의 참가자는 자신의 정보를 직접
        입력해야 합니다.
      </p>
      <p className="sup">
        <span className="sup">*2</span> 팀원 모두가 재학생이어야 합니다.
        <br />
        팀원은 최소 1명에서 최대 4명까지 등록할 수 있습니다.
      </p>
      <p className="sup">
        <span className="sup">*3</span> 모든 팀원은 접수 마감 전까지 참가 신청을
        마쳐야 합니다.
        <br />
        팀원 중 한 명이라도 신청이 되지 않으면 팀의 참가 등록이 취소됩니다.
      </p>
      <p className="sup">
        <span className="sup">*4</span> 참가 신청이 완료되면 입력된 참가자의
        이메일로 확인 메일이 전송됩니다.
      </p>
    </Container>
  );
}
