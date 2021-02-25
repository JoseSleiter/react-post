const { dropTables } = require("./sqlFunctions");

(async () => {
  try {
    await dropTables();
    console.log("success drop tables");
  } catch (err) {
    console.log(err);
  }
})();
