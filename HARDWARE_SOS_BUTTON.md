# External SOS Button Setup

The Suraksha SOS screen supports two browser hardware paths:

- USB Serial for Arduino, ESP32, or similar boards.
- Bluetooth LE UART for ESP32 boards that advertise the Nordic UART Service.

When the physical button is pressed, send one of these tokens to the app:

```text
SOS
BUTTON
TRIGGER
PRESSED
S
1
```

The app starts the same 5 second SOS countdown used by the on-screen button and shake trigger.

## Volume Button Preferences For APK Builds

The web UI includes a `Volume Button SOS` preference panel. It saves the user's selected Android trigger pattern to:

```js
localStorage.getItem("surakshaVolumeSOS")
```

It also exposes the current value for a native wrapper:

```js
window.__SURAKSHA_SOS_NATIVE_CONFIG.volumeSOS
```

And dispatches this event whenever the user changes the setting:

```js
window.addEventListener("suraksha:volume-sos-pref", event => {
  console.log(event.detail);
});
```

The web app cannot detect real volume or power button presses by itself. In an APK, native Android code or a Capacitor/React Native plugin must listen for volume key events and trigger the same SOS action using the saved pattern.

## Arduino Or ESP32 Over USB Serial

Wire one side of the push button to `GND` and the other side to pin `2`.

```cpp
const int buttonPin = 2;
bool lastPressed = false;
unsigned long lastFire = 0;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  bool pressed = digitalRead(buttonPin) == LOW;
  unsigned long now = millis();

  if (pressed && !lastPressed && now - lastFire > 1500) {
    Serial.println("SOS");
    lastFire = now;
  }

  lastPressed = pressed;
  delay(20);
}
```

In the app, open `SOS Emergency`, choose `USB Serial`, select the board, then press the physical button.

## ESP32 Over Bluetooth LE

Wire one side of the push button to `GND` and the other side to pin `2`.

This sketch exposes the Nordic UART Service used by the web app's `Bluetooth LE` button.

```cpp
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

const int buttonPin = 2;
const char* deviceName = "Suraksha SOS Button";

#define UART_SERVICE_UUID "6e400001-b5a3-f393-e0a9-e50e24dcca9e"
#define UART_TX_UUID      "6e400003-b5a3-f393-e0a9-e50e24dcca9e"

BLECharacteristic* txCharacteristic;
bool lastPressed = false;
unsigned long lastFire = 0;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);

  BLEDevice::init(deviceName);
  BLEServer* server = BLEDevice::createServer();
  BLEService* service = server->createService(UART_SERVICE_UUID);

  txCharacteristic = service->createCharacteristic(
    UART_TX_UUID,
    BLECharacteristic::PROPERTY_NOTIFY
  );
  txCharacteristic->addDescriptor(new BLE2902());

  service->start();
  BLEAdvertising* advertising = BLEDevice::getAdvertising();
  advertising->addServiceUUID(UART_SERVICE_UUID);
  advertising->setScanResponse(true);
  BLEDevice::startAdvertising();
}

void loop() {
  bool pressed = digitalRead(buttonPin) == LOW;
  unsigned long now = millis();

  if (pressed && !lastPressed && now - lastFire > 1500) {
    txCharacteristic->setValue("SOS\n");
    txCharacteristic->notify();
    lastFire = now;
  }

  lastPressed = pressed;
  delay(20);
}
```

In the app, open `SOS Emergency`, choose `Bluetooth LE`, select `Suraksha SOS Button`, then press the physical button.

## Browser Notes

- USB Serial works best in Chrome or Edge on desktop over `localhost` or HTTPS.
- Bluetooth LE works in browsers with Web Bluetooth support, commonly Chrome or Edge.
- iPhone Safari does not support Web Serial or Web Bluetooth for this flow.
