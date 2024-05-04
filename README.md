# khuthon-backend

본 레포지토리는 경희대학교 중앙 IT 동아리 쿠러그에서 주관하는 해커톤 대회인 [khuthon](https://thon.khlug.org/)의 프론트엔드입니다.

## Prerequisite

- Node.js v20.11.1

## Installation

```shell
git clone https://github.com/khu-khlug/khuthon-backend.git
npm install
```

Toast UI가 `react@^17.0.1`에 대해 peer deps를 갖고 있습니다. 하지만 `next@^13`부터는 `react@^18`에 대해 peer deps를 갖고 있기 때문에, `--legacy-peer-deps` 옵션 없이 설치하는 경우 resolve 시점에 오류가 발생하게 됩니다.

따라서 Toast UI가 react 18을 지원하도록 수정하거나, 혹은 다른 에디터로 대체하기 전까지는 `--legacy-peer-deps` 옵션과 함께 설치해주셔야 합니다.

이후 레포지토리에 마크다운 문서를 작성하면 빌드하여 올리는 방식으로 수정할 예정입니다.

## Run

```shell
npm run dev
```

## 공지 관리

khuthon의 공지글은 `/notices` 디렉토리 하위에서 모두 관리됩니다.

```
/notices
- _list.json      : 공지 목록 및 순서를 결정하는 메타데이터가 저장된 파일
- [noticeId]      : 각 공지의 데이터가 들어있는 디렉토리
  - metadata.json : 각 공지의 메타데이터가 저장된 파일
  - content.md    : 공지의 실제 내용
```

> [!CAUTION]
>
> `/notices` 하위에 있는 모든 `*.json` 파일은 스크립트를 통해 관리됩니다. 따라서 특별한 경우를 제외하고는 절대 직접 수정하지 마세요.
> 특히, `id` 값은 어떠한 경우에라도 직접 수정하지 마세요.

### 새 공지 생성

```shell
npm run create-notice <공지 식별자> <공지 제목>
```

- `<공지 식별자>`: 각 공지를 유일하게 식별할 수 있는 문자열입니다. 영어 소문자, 숫자, 하이픈(-)만 사용할 수 있으며, 3자 이상 100자 이하여야 합니다.
- `<공지 제목>`: 공지의 제목입니다. 3자 이상 100자 이하여야 합니다.

새 공지를 생성합니다. 아래와 같이 사용할 수 있습니다.

```shell
npm run create-notice hello-world "안녕, khuthon!"
```

### 공지 제거

```shell
npm run delete-notice <공지 식별자>
```

- `<공지 식별자>`: 삭제할 공지의 식별자를 입력합니다.

기존 공지를 제거합니다. 공지를 제거할 때는 파일로 직접 제거하지 마시고, 해당 명령어를 사용해서 제거해주세요.

## License

[MIT License](LICENSE)
