const pool = require("./../utils/db/index");

class Model {
  constructor(table = "") {
    this.pool = pool;
    this.table = table;
    this.fillable = [];
    this.pool.on(
      "error",
      (err, client) => `Error, ${err}, on idle client${client}`
    );
  }

  async select(columns, clause) {
    let query = `SELECT ${columns} FROM ${this.table} `;
    if (clause) query += clause;
    return this.pool.query(query);
  }
  async hasOne(columns, innerTable, foreignkey, localKey, clause) {
    let query = `SELECT ${columns} FROM ${this.table} INNER JOIN ${innerTable} ON ${innerTable}.${foreignkey} = ${this.table}.${localKey} `;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  async hasMany(columns, innerTable, foreignkey, localKey, clause) {
    let query = `SELECT ${columns} FROM ${this.table} INNER JOIN ${innerTable} ON ${innerTable}.${foreignkey} = ${this.table}.${localKey} `;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  async insert(data) {
    let columns = this.fillable.map((column) => `"${column}"`);
    let column_values = this.fillable.map((column, key) => `$${key + 1}`);
    let values = this.fillable.map((column) => data[column]);
    columns = columns.join();
    column_values = column_values.join();
    let query = ` INSERT INTO ${this.table}( ${columns} ) VALUES ( ${column_values} ) RETURNING id, ${columns}`;
    console.log(values);
    if (!data) throw new Error(`your data is null ${data}`);
    return this.pool.query(query, values);
  }

  async delete(clause) {
    let query = `DELETE FROM ${this.table} WHERE `;
    if (!clause) throw new Error(`your clause is null ${clause}`);
    query += clause;
    return this.pool.query(query);
  }
}

module.exports = Model;
