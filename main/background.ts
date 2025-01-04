import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow;

const createWindow = () => {
    console.log("Creating main window...");
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    mainWindow.loadURL("http://localhost:3000")
        .then(() => {
            console.log("Main window created and content loaded.");
        })
        .catch((err) => {
            console.error("Failed to load content:", err);
        });
};

app.on("ready", () => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});