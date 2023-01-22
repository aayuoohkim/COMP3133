const fs = require("fs");
const csv = require("csv-parser");

try {
    fs.unlinkSync("canada.txt");
    fs.unlinkSync("usa.txt");
} catch (err) {}

const readData = fs.createReadStream("input_countries.csv");
readData.pipe(csv()).on("data", (data) => {
    if (data.country === "Canada") {
        fs.appendFileSync(
            "canada.txt",
            `${data.country}, ${data.year}, ${data.population}\n`
        );
    }
    if (data.country === "United States") {
        fs.appendFileSync(
            "usa.txt",
            `${data.country}, ${data.year}, ${data.population}\n`
        );
    }
});
