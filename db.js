const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const pgp = require('pg-promise')();

// อ่านค่า configuration จากไฟล์ YAML
const configPath = path.join(__dirname, 'config.yaml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

// ตั้งค่าเชื่อมต่อกับ PostgreSQL
const dbConfig = {
    host: config.db.host,
    port: parseInt(config.db.port, 10),
    database: config.db.database,
    user: config.db.username,
    password: config.db.password
};

const db = pgp(dbConfig);

module.exports = db;
