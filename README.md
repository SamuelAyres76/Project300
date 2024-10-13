# TimetableApplication
## Building and Deploying
🌐 Web
```
Build:
ng build

Serve:
ng serve
```
📱 Mobile (Android)
```
Build:
npm run build-mobile

Serve:
npm run serve-mobile
```
🖥️ Desktop
```
Serve (development):
ng build && electron .

Package (production):
electron-packager ./ TimetableApplication --platform=win32 --overwrite
```