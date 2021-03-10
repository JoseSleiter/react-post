const dropUsersTable = "DROP TABLE IF EXISTS  users";
const dropPostsTable = "DROP TABLE IF EXISTS  posts";
const dropCommentsTable = "DROP TABLE IF EXISTS  comments";

module.exports = [dropCommentsTable, dropPostsTable, dropUsersTable];
