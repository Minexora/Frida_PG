"use strict";

/**
 * ! Bu fonsiyon sınıfın özelleiklerini çekmek için yazıldı.
 * * Kullanılan sınıf adı: "AESCrypt"
 */
if (Java.available) {
  Java.perform(function () {
    try {
      let target_class = Java.use(
        "com.androidpentesting.securestorev2.AESCrypt"
      );
      console.log(Object.getOwnPropertyNames(target_class).join('\n'));
    } catch (err) {
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
