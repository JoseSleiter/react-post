const insertUsers = `
INSERT INTO users (name, email, password, social_google_id, social_facebook_id)
VALUES ('sleiter', 'sleiter@gmail.com', 'aa', '', ''),
      ('rios', 'rios@gmail.com', 'aa', '', '');
`;

const insertPosts = `
INSERT INTO posts (id_user, name, description)
VALUES (1, 'chidimo', 'first message'),
      (1, 'orji', 'second message'),
      (2, 'chidimo', 'first message'),
      (2, 'orji', 'second message');
`;

module.exports = [insertUsers, insertPosts];
