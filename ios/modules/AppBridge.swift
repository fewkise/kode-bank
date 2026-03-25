import React

@objc(AppBridge)
class AppBridge: RCTEventEmitter {
    static let NAME = "AppBridge"

    static let appScheme = Bundle.main.infoDictionary?["APP_SCHEME"] as? String ?? "kode-bank"
    static let baseUrl = Bundle.main.infoDictionary?["BASE_URL"] as? String ?? ""

    override static func moduleName() -> String! {
        return NAME
    }

    override class func requiresMainQueueSetup() -> Bool {
        return false
    }

    override func stopObserving() {}

    override func startObserving() {}

    override func supportedEvents() -> [String]! {
        return []
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        [
            "APP_SCHEME": AppBridge.appScheme,
            "BASE_URL": AppBridge.baseUrl,
        ]
    }
}
