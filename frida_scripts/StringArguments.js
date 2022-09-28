"use strict";

/**
 * ! Uygulama içerisindeki şifreleme algoritmasını override ederek salt kısmını ve hangi key geldiği görülebilmektedir.
 *
 */
if (Java.available) {
  Java.perform(function () {
    try {
      let target_class = Java.use(
        "com.androidpentesting.securestorev2.AESCrypt"
      );
      target_class.encrypt.overload(
        "java.lang.String",
        "java.lang.String"
      ).implementation = function (a, b) {
        console.log("[+] Argument 1:" + a.toString());
        console.log("[+] Argument 2:" + b.toString());
        return a;
      };
    } catch (err) { 
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
