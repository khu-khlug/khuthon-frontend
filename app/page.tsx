import Image from "next/image";

export default function Home() {
  return (
    <div id="index">
      <div className="banner">
        경희대학교 소프트웨어 해커톤 khu<b>thon</b>,<br />
        {/* @if($event && $event->isRegistering()==0 && $event->isEventing()==-1)
      잠시 후에 시작됩니다!
    @elseif($event && $event->isRegistering()==1)
      지금 참가 접수 하세요!
    @elseif($event && $event->isEventing()==1)
      모두가 개발에 빠져있습니다!
    @elseif($event && $event->isEventing()==0)
      내년에 또 만나요!
    @else */}
        여러분과 함께 하고 싶습니다!
        {/* @endif */}
      </div>

      <div className="registering">
        {/* @if($event)
      <h5>참가 접수 @if($event->isRegistering()==1) <span>접수 중</span> @endif </h5>
      <p><span className="nowrap">{{$event->getRegisterStartAt('kor')}}</span> <span className="nowrap">~ {{$event->getRegisterEndAt('kor')}}</span></p>
      <p className="description">
        @if($event->individual)
          재학생으로 구성된 1~4명의 팀으로 접수하거나, 행사 당일 다른 팀에 포함될 수 있는 개인 단위로 접수할 수 있습니다.
        @else
          재학생으로 구성된 1~4명의 팀으로<br />접수할 수 있습니다.
        @endif
      </p>
      <h5>해커톤 행사 @if($event->isEventing()==1) <span>진행 중</span> @endif </h5>
      <p><span className="nowrap">{{$event->getEventStartAt('kor')}}</span> <span className="nowrap">~ {{$event->getEventEndAt('kor')}}</span></p>
    @else */}
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
          <span className="nowrap">아직 행사가 기획 중에 있습니다!</span>
        </p>
        {/* @endif */}
      </div>
      <div className="clear"></div>

      <div className="relative">
        <div className="notice">
          <h4>
            <a href="{{url('/notice')}}">공지사항</a>
          </h4>
          <ul>
            {/* @foreach($documents['notice'] as $doc)
          <li><a href="{{url('/'.$doc->board.'/'.$doc->id)}}"><span className="title">{{$doc->title}}</span></a></li>
        @endforeach */}
          </ul>
        </div>
        <div className="gallery">
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2018/01.jpg"
              alt="첫번째 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2017/01.jpg"
              alt="두번째 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2018/06.jpg"
              alt="세번째 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2018/07.jpg"
              alt="네번째 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2017/04.jpg"
              alt="다섯번째 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2018/08.jpg"
              alt="여섯번째 이미지"
              fill
              className="object-cover"
            />
          </div>

          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2018/03.jpg"
              alt="일곱번째 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2017/09.jpg"
              alt="여덟번째 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="image_wrap image relative">
            <Image
              src="https://thon.khlug.org/images/2018/10.jpg"
              alt="아홉번째 이미지"
              fill
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
