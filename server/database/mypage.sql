DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
    id SERIAL primary key,
    email VARCHAR(80) NOT NULL,
    message VARCHAR(1000) NOT NULL
);
