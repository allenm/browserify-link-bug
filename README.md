## Browserify bug with symbolic link file

### reproduce step

1. install `npminstall` tool: `npm install npminstall -g`
2. clone this repo to your disk.
3. run `npm start`
4. then you can see the error : "Cannot find module '../../../../.1.1.4@is-buffer/index.js' from '/YOUR_LOCAL_PATH/browserify-bug/node_modules/.1.0.2@core-util-is/lib'"