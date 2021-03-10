const pool = require("./../db/index");
const createTableSql = require("./createSql");
const insertDataSql = require("./insertSql");
const dropTableSql = require("./dropSql");

const executeQueryArray = async (arr) =>
  new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      try {
        await pool.query(q);
        if (index + 1 === stop) {
          resolve();
        }
      } catch (err) {
        console.log(err);
      }
    });
  });

const dropTables = () => executeQueryArray(dropTableSql);
const createTables = () => executeQueryArray(createTableSql);
const insertIntoTables = () => executeQueryArray(insertDataSql);

module.exports = {
  dropTables,
  createTables,
  insertIntoTables,
};
