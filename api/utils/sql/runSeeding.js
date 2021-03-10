const { createTables, insertIntoTables } = require("./sqlFunctions");

(async () => {
  try {
    await createTables();
    await insertIntoTables();
    console.log("success created tables and inserted data");
  } catch (err) {
    console.log(err);
  }
})();
