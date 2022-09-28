"use strict";

/**
 * ! Webview üzerinden yapılan istekleri görmek için yazılmıştır.
 *
 */
if (Java.available) {
  Java.perform(function () {
    try {
      let target_class = Java.use("android.webkit.WebView");
      target_class.loadUrl.overload("java.lang.String").implementation = function (a) {
          console.log("[+] Argument 1:" + a.toString());
        };
    } catch (err) {
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
