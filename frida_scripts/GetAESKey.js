"use strict";

/**
 * ! AES Şifreleme için kullanılan keyi bulmak için script yazıldı.
 *
 */
if (Java.available) {
  Java.perform(function () {
    try {
      let target_class = Java.use(
        "com.androidpentesting.securestorev2.AESCrypt"
      );
      target_class.bytesToHex.overload("[B").implementation = function (a) {
        let res = this.bytesToHex(a);
        console.log(res);
        console.log("");
        return res;
      };
    } catch (err) {
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
