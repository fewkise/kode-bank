package com.kodeBank.modules.appBridge

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.kodeBank.BuildConfig
import com.kodeBank.R

class AppBridgeModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = MODULE_NAME

    override fun getConstants(): MutableMap<String, Any> {
        return hashMapOf(
            "APP_SCHEME" to BuildConfig.APP_SCHEME,
            "BASE_URL" to BuildConfig.BASE_URL,
        )
    }

    companion object {
        private const val MODULE_NAME = "AppBridge"
    }
}