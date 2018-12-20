<template>
  <Page>
    <ActionBar title=" ">
    </ActionBar>
    <GridLayout class="" ~mainContent columns="*" rows="*">
      <Label row="1" col="1" textWrap="true" class="text-homepage drawer-item" text="Pour commencer il suffit de scanner le code"/>
      <!-- <Button row="1" col="0" class="btn-qr-code" text="Je scan le code de ma table" @tap="onButtonTap" /> -->
      <Image class="img-scan" row="6" col="0" src="~/assets/images/je-scanne.png" stretch="none" @tap="onButtonTap" />
      <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
    </GridLayout>
  </Page>
</template>

<script>
import List from './List';
import { socket } from '../shared/socket';
export default {

  methods: {
    onButtonTap() {
      const BarcodeScanner = require("nativescript-barcodescanner").BarcodeScanner;
      const barcodescanner = new BarcodeScanner();
      const httpModule = require("http");

      barcodescanner.scan({
        formats: "QR_CODE",   // Pass in of you want to restrict scanning to certain types
        cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
        cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
        message: "Scan du Qr code de la table", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
        showFlipCameraButton: false,   // default false
        preferFrontCamera: false,     // default false
        showTorchButton: false,        // default false
        beepOnScan: true,             // Play or Suppress beep on scan (default true)
        torchOn: false,               // launch with the flashlight on (default false)
        closeCallback: function () { console.log("Scanner closed"); }, // invoked when the scanner was closed (success or abort)
        resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
        orientation: "portrait",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
        openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
      }).then(
        (result) => {
          // Reponse du QRCODE
          var resQr = result.text.split(' ');
          var idResto = resQr[0];
          localStorage.setItem('id_resto', idResto);
          httpModule.request({
            url: localStorage.getItem('url')+"accounts/"+idResto+"/infos",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`,
              "account": localStorage.getItem('account')
            },
          }).then(response => {
            // Reponse du HTTP
            const str = response.content.toJSON();
            console.log(str.hasStarters);
            if (str.hasMenu) {
              console.log("true");
            } else {
              console.log("false");
            }
            socket.emit('room',  {roomId: localStorage.getItem('id_resto'), role: 1 } );
            this.$navigateTo(List, {props: {
              id_resto: idResto,
              name_resto: str.account.fullname,
              has_starters: str.hasStarters,
              has_main_courses: str.hasMainCourses,
              has_dessert: str.hasDessert,
              has_extra: str.hasExtra,
              has_menu: str.hasMenu
            }
          });
          }, (e) => {
            // Erreur HTTP
            console.log(e);
          });
        },
        function(error) {
          // Erreur QRCODEe
          console.info("No scan: " + error);
        }
      );
    }
  }
}
</script>

<style scoped>
</style>
