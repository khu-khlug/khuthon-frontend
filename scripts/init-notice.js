const fs = require("fs/promises");

async function initNotice() {
  const rootNoticePath = "./notices";
  const listFilePath = `${rootNoticePath}/_list.json`;

  try {
    await fs.access(rootNoticePath);
  } catch (error) {
    await fs.mkdir(rootNoticePath);
  }

  try {
    await fs.access(listFilePath);
  } catch (error) {
    await fs.writeFile(listFilePath, "[]");
  }
}

initNotice();
