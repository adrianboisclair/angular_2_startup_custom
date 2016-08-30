# angular_2_startup_custom
A custom Angular 2 startup - still being developed

# "npm install"
// Add the following to the first line in "/node_modules/angular2/src/facade/promise.d.ts"
// Add this declaration as a TS 1.8 bug fix https://github.com/angular/angular/issues/6468
declare var Promise: PromiseConstructor; 

then..
# "gulp"