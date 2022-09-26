'use strict'

if(Java.available) {
    Java.perform(function(){
        console.log("")
        console.log("[+] Hello word!")
    });
}
else {
    console.log("[-] Java is not available ");
}