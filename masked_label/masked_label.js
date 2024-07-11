/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on widgets/variables within this block */
Widget.onReady = function() {
    /*
     * variables can be accessed through 'Widget.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Widget.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Widget.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Widget.Widgets.username.datavalue'
     */
    let caption = Widget.pageParams.caption;
    const masktype = Widget.pageParams.masktype;
    Widget.maskedCaption = getMaskedCaption(caption, masktype);
};

const MASK_MAP = {
    'creditcard': '9999 **** **** 9999',
    'mobile': '**********',
    'aadhaar': '**** **** 9999',
    'atmpin': '****',
    'expirydate': '**/**'
}

function getMaskedCaption(caption, masktype) {
    const mask = MASK_MAP[masktype];
    let captionIdx = 0;
    let captionCharacters = caption.split('');
    let captionCharForIdx;
    let maskedCaption = mask.split('').map((char, i) => {
        if (char === '9') {
            captionCharForIdx = captionCharacters[captionIdx];
            captionIdx++;
            return captionCharForIdx;
        }
        if (char === '*') {
            captionIdx++;
            return char;
        }
        return char;
    }).join('');
    return maskedCaption;
}

Widget.onBtnClick = function() {
    //clear the textbx
    Widget.event('clear', {});
}
