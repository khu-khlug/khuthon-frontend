# khuthon-backend

본 레포지토리는 경희대학교 중앙 IT 동아리 쿠러그에서 주관하는 해커톤 대회인 [khuthon](https://thon.khlug.org/)의 프론트엔드입니다.

## Prerequirements

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

## License

[MIT License](LICENSE)
