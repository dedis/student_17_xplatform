const FrameModule = require("ui/frame");
const Dialog = require("ui/dialogs");
const RequestPath = require("~/shared/lib/dedjs/RequestPath");
const CothorityMessages = require("~/shared/lib/dedjs/protobuf/build/cothority-messages");
const DecodeType = require("~/shared/lib/dedjs/DecodeType");
const DedisJsNet = require("~/shared/lib/dedjs/Net");
const Convert = require("~/shared/lib/dedjs/Convert");
const Helper = require("~/shared/lib/dedjs/Helper");
const Cisc = require("~/shared/lib/dedjs/object/cisc/Cisc").get;
const NetDedis = require("@dedis/cothority").net;
const LabelModule = require("tns-core-modules/ui/label");

let viewmodel;
let Page;
//let lay;

/* ***********************************************************
 * Use the "onNavigatingTo" handler to initialize the page binding context.
 *************************************************************/
function onLoaded(args) {
    /* ***********************************************************
     * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
     * Skipping the re-initialization on back navigation means the user will see the
     * page in the same data state that he left it in before navigating.
     *************************************************************/
    if (args.isBackNavigation) {
        return;
    }
    
    const page = args.object;
    Page = page.page;
    page.bindingContext = Cisc.getVMModule();
    viewmodel = page.bindingContext;
    Cisc.setSkipchain();
    //lay = page.getViewById("stackCert");
    //var domain=[4,5,30];
    //addSkipchainDomains(3,domain);
}

function addSkipchainDomains(scSize, domainSize){
    for(i = 0; i < scSize; i++){
        var text = "Skipchain"+(i+1);
        addLabel(text,lay);
        for(j=0;j < domainSize[i];j++){
            var text = "          Domain"+(j+1);
            addLabel(text, lay);
        }
    }
}

function addLabel(text, layout){
    const label = new LabelModule.Label();
    label.text= text;
    layout.addChild(label);
}

function certTapped(args){
    console.log("Hello");
    console.log(Cisc.getData());
}


/* ***********************************************************
 * According to guidelines, if you have a drawer on your page, you should always
 * have a button that opens it. Get a reference to the RadSideDrawer view and
 * use the showDrawer() function to open the app drawer section.
 *************************************************************/
function onDrawerButtonTap(args) {
    const sideDrawer = FrameModule.topmost().getViewById("sideDrawer");
    sideDrawer.showDrawer();
}

exports.certTapped = certTapped;
exports.onLoaded = onLoaded;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.viewmodel = viewmodel;

