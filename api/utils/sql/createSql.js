const createUsersTable = `
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  email VARCHAR NOT NULL unique,
  password VARCHAR NOT NULL,
  social_google_id VARCHAR DEFAULT NULL,
  social_facebook_id VARCHAR DEFAULT NULL
  );
  `;

const createPostsTable = `
  DROP TABLE IF EXISTS posts;
  CREATE TABLE IF NOT EXISTS posts (
    id_user INT,
    id SERIAL PRIMARY KEY,
    name VARCHAR DEFAULT '',
    description VARCHAR NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user
      FOREIGN KEY(id_user) 
	  REFERENCES users(id)
    );
    `;

module.exports = [createUsersTable, createPostsTable];
