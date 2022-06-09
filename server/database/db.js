const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:postgres:postgres@localhost:5432/mypage`
);

module.exports.newMessage = (email, message) => {
    return db.query(
        `
        INSERT INTO messages (email, message)
        VALUES ($1, $2)
        RETURNING messages.email, messages.message
        `,
        [email, message]
    );
};
