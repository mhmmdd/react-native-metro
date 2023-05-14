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
