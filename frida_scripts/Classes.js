"use strict";

/**
 * ! Sınıf Listesi almak için yazıldı. 
 * * onMatch --> Tüm listenin alındığı fonksiyorun
 * * onComplete --> Yüklenme işlemi tamamlanınca çalışan fonsiyon

*/

if (Java.available) {
  Java.perform(function () {
    try {
      Java.enumerateLoadedClasses({
        onMatch: function (className) {
          console.log(className);
        },
        onComplete: function () {
          console.log("[+] Thank you, Done!");
        },
      });
    } catch (err) {
      console.log("[-] An execption occured");
      console.log(String(err.stack));
    }
  });
} else {
  console.log("[-] Java is not available ");
}
