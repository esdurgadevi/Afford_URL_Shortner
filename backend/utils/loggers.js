import fs from "fs";

export function logger(type,message)
{
    const date = new Date().toLocaleString();

    const write = `[${date}] [${type}] ${message}\n`;

    fs.appendFileSync("./logs/app.log",write);
}