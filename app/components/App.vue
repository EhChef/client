<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer"/>
                <Label class="drawer-item" text="Item 1"/>
                <Label class="drawer-item" text="Item 2"/>
                <Label class="drawer-item" text="Item 3"/>
            </StackLayout>

            <GridLayout class="" ~mainContent columns="*" rows="*">
                <Label row="1" col="1" textWrap="true" class="text-homepage drawer-item" text="Pour commencer il suffit de scanner le code"/>
                <!-- <Button row="1" col="0" class="btn-qr-code" text="Je scan le code de ma table" @tap="onButtonTap" /> -->
                <Image class="img-scan" row="6" col="0" src="~/assets/images/je-scanne.png" stretch="none" @tap="onButtonTap" />
                <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
export default {
    methods: {
        onButtonTap() {
            var BarcodeScanner = require("nativescript-barcodescanner").BarcodeScanner;
            var barcodescanner = new BarcodeScanner();

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
                function(result) {
                    console.info("Scan format: " + result.format);
                    console.info("Scan text:   " + result.text);
                },
                function(error) {
                    console.info("No scan: " + error);
                }
            );
        }
    }
}
</script>

<style scoped>

</style>
