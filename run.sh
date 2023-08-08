#!/usr/bin/env bash

adb install -r android/app/build/outputs/apk/debug/app-debug.apk \
&& adb reverse tcp:8081 tcp:8081 \
&& adb reverse tcp:8080 tcp:8080 \
&& adb reverse tcp:9090 tcp:9090 \
&& adb shell am start -n com.reactnativemetro/com.reactnativemetro.MainActivity


# 9090 is reactotron port
