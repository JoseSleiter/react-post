const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  img VARCHAR DEFAULT '',
  email VARCHAR NOT NULL unique,
  password VARCHAR NOT NULL,
  social_google_id VARCHAR DEFAULT NULL,
  social_facebook_id VARCHAR DEFAULT NULL
  );
  `;

const createPostsTable = `
  CREATE TABLE IF NOT EXISTS posts (
    id_user INT,
    id SERIAL PRIMARY KEY,
    title VARCHAR DEFAULT '',
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_post
      FOREIGN KEY(id_user) 
	  REFERENCES users(id)
    );
    `;

const createCommentsTable = `
  CREATE TABLE IF NOT EXISTS comments (
    id_user INT,
    id_post INT,
    id SERIAL PRIMARY KEY,
    comment VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_comment
      FOREIGN KEY(id_user)
	  REFERENCES users(id),
    CONSTRAINT fk_post_comment
      FOREIGN KEY(id_post) 
	  REFERENCES posts(id)
    );
    `;

module.exports = [createUsersTable, createPostsTable, createCommentsTable];
