@echo off
call npm install
call npm init -y
call npm i --save-dev webdriverio
call npm install --save-dev jasmine
call npm install wdio-spec-reporter --save-dev
call npm install wdio-junit-reporter --save-dev
rem call npm install selenium-standalone@latest -g
rem call selenium-standalone install
rem call selenium-standalone start
pause