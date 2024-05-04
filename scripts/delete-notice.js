const fs = require("fs/promises");
const validator = require("./validator");

const LIST_FILE_PATH = "./notices/_list.json";

async function deleteMetadata(id) {
  const idList = await fs.readFile(LIST_FILE_PATH, "utf-8");
  const idListJson = Array.from(JSON.parse(idList));

  if (!idListJson.some((notice) => notice.id === id)) {
    throw new Error("존재하지 않는 공지의 식별자입니다.");
  }

  const newIdListJson = idListJson.filter((notice) => notice.id !== id);

  await fs.writeFile(LIST_FILE_PATH, JSON.stringify(newIdListJson, null, 2));
}

async function deleteNoticeDirectory(id) {
  const dirPath = `./notices/${id}`;

  await fs.rm(dirPath, { recursive: true });
}

async function deleteNotice() {
  const id = process.argv[2];

  validator.validateId(id);

  await deleteMetadata(id);
  await deleteNoticeDirectory(id);

  console.log("\x1b[32m공지가 성공적으로 제거되었습니다!\x1b[0m");
  console.log(`- 식별자: ${id}`);
}

deleteNotice().catch((error) => {
  console.error("\x1b[31m공지를 제거하던 중 에러가 발생했습니다!\x1b[0m");
  console.error(error.message);
});
