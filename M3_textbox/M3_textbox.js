/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on widgets/variables within this block */
Widget.onReady = function() {
    /* 
     * variables can be accessed through 'Partial.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Partial.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Partial.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Partial.Widgets.username.datavalue'
     */
    if (Widget.pageParams.leadingIcon) {
        Widget.Widgets.text1.class += ' has-leading-icon';
    }
    if (Widget.Widgets.text1.datavalue === '' || !Widget.Widgets.text1.datavalue) {
        Widget.Widgets.label1.class += ' no-float-label';
    }
};
Widget.button1Click = function($event, widget) {
    Widget.Widgets.text1.datavalue = '';
    Widget.invokeEvent('clear');
};
Widget.text1Focus = function($event, widget) {
    if (Widget.Widgets.label1.class.includes("no-float-label")) {
        Widget.Widgets.label1.class = Widget.Widgets.label1.class.replace(" no-float-label", "");
    }
    console.log('focus', Widget.Widgets.label1.class);
};
Widget.text1Blur = function($event, widget) {
    if ((Widget.Widgets.text1.datavalue === '' || !Widget.Widgets.text1.datavalue) && !Widget.Widgets.label1.class.includes("no-float-label")) {
        Widget.Widgets.label1.class += ' no-float-label';
    }
    console.log('blur', Widget.Widgets.label1.class);
};
