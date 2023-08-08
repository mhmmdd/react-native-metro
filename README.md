## 1. Create React Native Project with Typescript
```bash
#$ npx react-native init <project-name> --template react-native-template-typescript
$ npx react-native init ReactNativeMetro --template react-native-template-typescript
```
Set the environment variable `ANDROID_HOME` to point to your Android SDK.
```bash
# C:\Users\Ba\AppData\Local\Android\Sdk
$ export ANDROID_HOME=/Users/Ba/AppData/Local/Android/Sdk
```
Add the platform-tools directory to your PATH environment variable.
```bash
# C:\Users\Ba\AppData\Local\Android\Sdk\platform-tools
$ export PATH=$PATH:/Users/Ba/AppData/Local/Android/Sdk/platform-tools
```
Set the environment variable `JAVA_HOME` to point to your JDK installation.
```bash
# C:\Users\Ba\.jdks\corretto-17.0.7
$ export JAVA_HOME=/Users/Ba/.jdks/corretto-17.0.7
```
Set the path to the JDK installation directory in the `PATH` environment variable.
```bash
# C:\Users\Ba\.jdks\corretto-17.0.7\bin
$ export PATH=$PATH:/Users/Ba/.jdks/corretto-17.0.7/bin
```
Check the java version
```bash
$ java -version
#openjdk 17.0.7 2023-04-18 LTS
#OpenJDK Runtime Environment Corretto-17.0.7.7.1 (build 17.0.7+7-LTS)
#OpenJDK 64-Bit Server VM Corretto-17.0.7.7.1 (build 17.0.7+7-LTS, mixed mode, sharing)
```

My emulator: Pixel 6 API 31

## 2. Add [ReactNativeMetroContext.ts](src%2Fcontext%2FReactNativeMetroContext.ts) and [ReactNativeMetroContextProvider.tsx](src%2Fcontext%2FReactNativeMetroContextProvider.tsx)

## 3. Configure global axios network configuration for network debugging
```bash
$ npm install @types/react @types/react-native 
$ npm install axios
$ npm install prettier --save-dev
$ npm i --save-dev reactotron-react-native
````

## 4. Install Flipper for debugging
```bash
$ npm install --save-dev flipper
```
Install Open SSL [here](https://slproweb.com/products/Win32OpenSSL.html).
https://slproweb.com/download/Win64OpenSSL_Light-3_1_0.msi

Add Open SSL to the PATH environment variable
```bash
# C:\Program Files\OpenSSL-Win64\bin
$ export PATH=$PATH:/c/Program\ Files/OpenSSL-Win64/bin
```
https://github.com/facebook/flipper/blob/cd67ce59f7dd70cbf459f0d4698071af6ee0abc8/desktop/flipper-server-core/src/server/utilities.tsx#LL56C1-L57C51


## 5. Image Save
```shell
npm install @react-native-camera-roll/camera-roll react-native-permissions react-native-fs
```
