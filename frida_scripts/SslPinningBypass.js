"use strict";

/**
 * ! Bu script Ssl saitlemesini aşmak için yazılmıştır.
 * * target_class --> Belirlenen sınıf yükleniliyor.
 * *
 */
if (Java.available) {
  Java.perform(function () {
    try {
      let target_class = Java.use("android.webkit.WebViewClient");
      target_class.onReceivedSslError.overload(
        "android.webkit.WebView",
        "android.webkit.SslErrorHandler",
        "android.net.http.SslError"
      ).implementation = function (a, b, c) {
        b.proceed()
        console.log("");
        console.log("[+] Found the method: onReceivedSslError");
        console.log("[+] Bypassed Ssl Pinning.");
      };
    } catch (err) {
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
