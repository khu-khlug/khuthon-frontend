const fs = require("fs/promises");
const validator = require("./validator");

const LIST_FILE_PATH = "./notices/_list.json";

async function appendMetadata(id, title, createdAt) {
  const idList = await fs.readFile(LIST_FILE_PATH, "utf-8");
  const idListJson = Array.from(JSON.parse(idList));

  if (idListJson.includes(id)) {
    throw new Error("이미 존재하는 공지의 식별자입니다.");
  }

  idListJson.unshift({ id, title, createdAt });

  await fs.writeFile(LIST_FILE_PATH, JSON.stringify(idListJson, null, 2));
}

async function createNoticeDirectory(id) {
  await fs.mkdir(`./notices/${id}`);
}

async function createNoticeMarkdown(id) {
  const content = [
    "공지 내용을 마크다운으로 작성해주세요.",
    "이미지가 필요하다면, 운영진 페이지의 파일 등록을 통해 이미지를 CDN에 올려서 사용해주세요.",
  ].join("\n");

  await fs.writeFile(`./notices/${id}/content.md`, content);
}

async function createNoticeMetadata(id, title, createdAt) {
  await fs.writeFile(
    `./notices/${id}/metadata.json`,
    JSON.stringify({ id, title, createdAt }, null, 2)
  );
}

async function createNotice() {
  const id = process.argv[2];
  const title = process.argv[3];
  const createdAt = new Date().toISOString();

  validator.validateId(id);
  validator.validateTitle(title);

  await appendMetadata(id, title, createdAt);
  await createNoticeDirectory(id);
  await createNoticeMarkdown(id);
  await createNoticeMetadata(id, title, createdAt);

  console.log("\x1b[32m공지가 성공적으로 생성되었습니다!\x1b[0m");
  console.log(`- 식별자: ${id}`);
  console.log(`- 제목: ${title}`);
  console.log(`- 생성일: ${createdAt}`);
}

createNotice().catch((error) => {
  console.error("\x1b[31m공지를 생성하던 중 에러가 발생했습니다!\x1b[0m");
  console.error(error.message);
});
