-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('syauqi', 'syauqi@alterra.id');
INSERT INTO Person (name, email) values ('salis', 'salis@bukalapak.com');

INSERT INTO Vehicle (brand, model, ownerId) values ('united', 'miami 2.0', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('honda', 'jazz', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('honda', 'genio', 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;
