electron-packager . oi-14 --out ./out --platform=linux --arch=ia32 -icon=OI-14.jpg --overwrite
electron-packager . oi-14 --out ./out --platform=linux --arch=x64 -icon=OI-14.jpg --overwrite
electron-packager . oi-14 --out ./out --platform=win32 --arch=ia32 -icon=OI-14.jpg --overwrite
electron-packager . oi-14 --out ./out --platform=win32 --arch=x64 -icon=OI-14.jpg --overwrite
electron-packager . oi-14 --out ./out --platform=darwin --arch=x64 -icon=OI-14.jpg --overwrite
cd out
zip -r oi-14-linux-ia32.zip oi-14-linux-ia32
zip -r oi-14-linux-x64.zip oi-14-linux-x64
zip -r oi-14-win32-ia32.zip oi-14-win32-ia32
zip -r oi-14-win32-x64.zip oi-14-win32-x64
zip -r oi-14-darwin-x64.zip oi-14-darwin-x64
cd ..