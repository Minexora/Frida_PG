"use strict";

/**
 * ! Bu script root bypass için yazılmıştır.
 * * target_class --> Belirlenen sınıf yükleniliyor.
 * * hedef sınıfın içindeki 'isDeviceRooted' fonksiyonu implament edilip return değeri ne olursa olsun false gidecek sekilde ayarlanıyor.
 */
if (Java.available) {
  Java.perform(function () {
    try {
      let target_class = Java.use(
        "com.androidpentesting.securestorev2.UserMainActivity"
      );
      target_class.isDeviceRooted.implementation = function () {
        console.log("");
        console.log("[+] Found the method: isDeviceRooted");
        console.log("[+] Bypassing Root Detection");
        console.log("[+] Bypassed Root Detection, Enjoy!");
        return false;
      };
    } catch (err) {
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
