## Simple example project

Example project that fails on bcrypt on ARM machine.

Steps taken:

1. Install default Meteor blaze project
2. Install `account-password` and `account-ui`
3. Install bcrypt via npm
4. add bcrypt reference to server.js
5. It throws error below: `have 'arm64', need 'x86_64'`

Conclusions so far:

- After step 2 bcrypt was working correctly
- Npm install of bcrypt is not working correctly
- After manual copy of `~/.meteor/packages/accounts-password/3.0.2/npm/node_modules/bcrypt` to `/node_modules/bcrypt` meteor works again

- Is Meteor using some kind of rosetta wrapper?

Error:

```
W20250117-10:45:10.863(1)? (STDERR) packages/core-runtime.js:189
W20250117-10:45:10.871(1)? (STDERR)             throw error;
W20250117-10:45:10.871(1)? (STDERR)             ^
W20250117-10:45:10.871(1)? (STDERR)
W20250117-10:45:10.871(1)? (STDERR) Error: dlopen(/Users/timmeerhof/simple-blaze/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node, 0x0001): tried: '/Users/timmeerhof/simple-blaze/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node' (mach-o file, but is an incompatible architecture (have 'arm64', need 'x86_64')), '/System/Volumes/Preboot/Cryptexes/OS/Users/timmeerhof/simple-blaze/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node' (no such file), '/Users/timmeerhof/simple-blaze/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node' (mach-o file, but is an incompatible architecture (have 'arm64', need 'x86_64'))
W20250117-10:45:10.872(1)? (STDERR)     at Object..node (node:internal/modules/cjs/loader:1715:18)
W20250117-10:45:10.872(1)? (STDERR)     at Module.<anonymous> (node:internal/modules/cjs/loader:1318:32)
W20250117-10:45:10.872(1)? (STDERR)     at Module.Mp.load (/tools/static-assets/server/runtime.js:35:31)
W20250117-10:45:10.872(1)? (STDERR)     at Function._load (node:internal/modules/cjs/loader:1128:12)
W20250117-10:45:10.873(1)? (STDERR)     at TracingChannel.traceSync (node:diagnostics_channel:315:14)
W20250117-10:45:10.873(1)? (STDERR)     at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
W20250117-10:45:10.873(1)? (STDERR)     at Module.<anonymous> (node:internal/modules/cjs/loader:1340:12)
W20250117-10:45:10.873(1)? (STDERR)     at Module.mod.require (/Users/timmeerhof/.meteor/packages/meteor-tool/.3.1.0.13ujh73w1y2++os.osx.x86_64+web.browser+web.browser.legacy+web.cordova/mt-os.osx.x86_64/dev_bundle/server-lib/node_modules/@meteorjs/reify/lib/runtime/index.js:30:33)
W20250117-10:45:10.873(1)? (STDERR)     at require (node:internal/modules/helpers:141:16)
W20250117-10:45:10.873(1)? (STDERR)     at Object.<anonymous> (/Users/timmeerhof/simple-blaze/node_modules/bcrypt/bcrypt.js:6:16)
W20250117-10:45:10.874(1)? (STDERR)     at Module.<anonymous> (node:internal/modules/cjs/loader:1546:14)
W20250117-10:45:10.874(1)? (STDERR)     at Module.Mp._compile (/tools/static-assets/server/runtime.js:78:21)
W20250117-10:45:10.874(1)? (STDERR)     at Object.Module._extensions..js (/tools/static-assets/server/runtime.js:112:21)
W20250117-10:45:10.874(1)? (STDERR)     at Module.<anonymous> (node:internal/modules/cjs/loader:1318:32)
W20250117-10:45:10.874(1)? (STDERR)     at Module.Mp.load (/tools/static-assets/server/runtime.js:35:31)
W20250117-10:45:10.874(1)? (STDERR)     at Function._load (node:internal/modules/cjs/loader:1128:12) {
W20250117-10:45:10.874(1)? (STDERR)   code: 'ERR_DLOPEN_FAILED'
W20250117-10:45:10.874(1)? (STDERR) }
W20250117-10:45:10.874(1)? (STDERR)
W20250117-10:45:10.875(1)? (STDERR) Node.js v22.11.0
```
