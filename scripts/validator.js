function validateId(id) {
  if (!id) {
    throw new Error("공지의 식별자를 입력해주세요.");
  }

  const idRegex = /^[a-z0-9-]+$/;

  if (!idRegex.test(id)) {
    throw new Error(
      "공지의 식별자는 소문자, 숫자, 하이픈만 사용할 수 있습니다."
    );
  }

  if (id.length < 3 || id.length > 100) {
    throw new Error("공지의 식별자는 3자 이상 100자 이하로 입력해주세요.");
  }
}

function validateTitle(title) {
  if (!title) {
    throw new Error("공지의 제목을 입력해주세요.");
  }

  if (title.length < 3 || title.length > 100) {
    throw new Error("공지의 제목은 3자 이상 100자 이하로 입력해주세요.");
  }
}

module.exports = { validateId, validateTitle };
