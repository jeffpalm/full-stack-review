CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password TEXT
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  content VARCHAR(500),
  created_at TIMESTAMP DEFAULT now()
);