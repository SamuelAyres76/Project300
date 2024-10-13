// Imports
const {
    app,
    BrowserWindow
} = require('electron')

// Properties
let appWindow;

// Event listeners
app.on('ready', createWindow);

app.on('activate', () => {
    if (appWindow === null) {
        createWindow()
    }
});

// Methods
function createWindow() {
    // Format window
    appWindow = new BrowserWindow();
    appWindow.maximize(); // Set application to fullscreen on start up

    // Load angular app into window
    appWindow.loadFile('./dist/timetable-application/browser/index.html')

    // Handle closing
    appWindow.on('closed', () => {
        appWindow = null
    });
}