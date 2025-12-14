sap.ui.define([], 
    function() {
    'use strict';
    return {
        onInitSmartFilterBarExtension: function (oEvent){
        var sUser = ap.ushell.Container.getService("UserInfo").getId(),
        oDefaultFilter = {
            "Userid": sUser
        };

        this.byId("listReportFilter").setFilterData(oDefaultFilter);
        this.byId("listReportFilter").determineFilterItemByName("UserId").setVisibleInFilterBar(false);
        }
    };
});
