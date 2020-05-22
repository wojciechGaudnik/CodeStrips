const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS Strip;`);
    db.run(`CREATE TABLE IF NOT EXISTS Strip
            (
                id          integer primary key,
                head        text not null,
                body        text not null,
                background  text not null,
                bubble_type text not null,
                bubble_text text not null,
                caption     text not null default ''
            )`);
})