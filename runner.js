#!/usr/bin/env node

import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM doesn't support __dirname and __filename by default
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const { qdrantBinary } = packageJson;
const { name, directory } = qdrantBinary;

const commandArgs = process.argv.slice(2);
const exeName = ["win32", "cygwin"].includes(process.platform)
  ? `${name}.exe`
  : name;
const cwd = path.join(__dirname, directory);
const binPath = path.join(cwd, exeName);

// Start qdrant and capture the child process
const child = spawn(binPath, commandArgs, { stdio: "inherit", cwd });

// Exit handler for the child process
const exitHandler = (code) => {
  // If QDRANT_ALLOW_RECOVERY_MODE is set to "true" and the exit code is 137 (OOM)
  if (process.env.QDRANT_ALLOW_RECOVERY_MODE === "true" && code === 137) {
    const recoveryMessage =
      "Qdrant was killed during initialization. Most likely it's Out-of-Memory.\n" +
      "Please check memory consumption, increase memory limit, or remove some collections and restart";

    // Set QDRANT_STORAGE_RECOVERY_MODE with the recovery message
    process.env.QDRANT_STORAGE_RECOVERY_MODE = recoveryMessage;

    // Restart qdrant in recovery mode
    const recoveryChild = spawn(binPath, commandArgs, {
      stdio: "inherit",
      cwd,
    });

    // Exit with the exit code of the recovery child process
    recoveryChild.on("exit", (recoveryCode) => {
      process.exit(recoveryCode ?? 1);
    });
  } else {
    // Exit with the original exit code
    process.exit(code ?? 1);
  }
};

// Set up the exit handler for the child process
child.on("exit", exitHandler);
