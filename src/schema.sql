CREATE DATABASE jam;

\connect jam;

CREATE TABLE rooms (
  id int NOT NULL,
  session_id VARCHAR(30) NOT NULL,
  session_name VARCHAR(30) NOT NULL,
  people int,
  live boolean,
  PRIMARY KEY (id)
);


-- USERS TABLE DATA
INSERT into rooms (id, session_id, session_name, people, fb_token, live) VALUES (1, 'abc', 'jamin', 0, false);
INSERT into rooms (id, session_id, session_name, people, fb_token, live) VALUES (2, 'acc', 'jamon', 0, false);
INSERT into rooms (id, session_id, session_name, people, fb_token, live) VALUES (3, 'acc', 'jaminnn', 0, false);
INSERT into rooms (id, session_id, session_name, people, fb_token, live) VALUES (4, 'aaa', 'jam', 0, false);
INSERT into rooms (id, session_id, session_name, people, fb_token, live) VALUES (5, 'roomie', 'roll', 0, false);

