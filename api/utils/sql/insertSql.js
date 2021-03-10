const insertUsers = `
INSERT INTO users (name, img, email, password, social_google_id, social_facebook_id)
VALUES ('sleiter', 'http://localhost:3000/assets/img/person_default.png' ,'sleiter@gmail.com', '$2b$10$5Qeho8epo5aTN0TckHYcpu.6bpsK/RCupFfGqWrxrChMY0R5e2oE2', '', ''),
      ('rios', 'http://localhost:3000/assets/img/person_default.png' ,'rios@gmail.com', '$2b$10$5Qeho8epo5aTN0TckHYcpu.6bpsK/RCupFfGqWrxrChMY0R5e2oE2', '', '');
`;

const insertPosts = `
INSERT INTO posts (id_user, title, description)
VALUES (1, 'post1', 'first message first messagefirst messagefirst messagefirst messagefirst messagefirst messagefirst messagefirst messagefirst messagefirst message'),
      (1, 'post2', 'second messagesecond messagesecond messagesecond messagesecond messagesecond messagesecond messagesecond messagesecond messagesecond messagesecond message'),
      (2, 'post3', 'first messageecond messagefirst messageecond messagefirst messageecond messagefirst messageecond messagefirst messageecond messagefirst messageecond message'),
      (2, 'post4', 'second messagefirst messageecond messagefirst messageecond messagefirst messageecond messagefirst messageecond messagefirst messageecond messagefirst message');
`;

module.exports = [insertUsers, insertPosts];
