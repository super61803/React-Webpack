const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");

fs.rmSync(buildDir, { recursive: true, force: true });
