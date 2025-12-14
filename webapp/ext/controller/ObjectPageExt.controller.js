sap.ui.define([
    "sap/suite/ui/generic/template/extensionAPI/extensionAPI",
    "sap/m/MessageBox",
],
 function( extensionAPI, MessageBox) {
    "use strict"

    return {
        onInit: function (oEvent) {
            extensionAPI.getExtensionAPIPromise(this.getView()).then(function (oExtensionAPI) {
                oExtensionAPI.attachPageDataLoaded(function (event) {
                    var sPath = event.context.sPath,
                        oData = event.context.getModel().getProperty(sPath),
                        that = this,
                        oButton = this.byId("com.moovie.zui5.usuario.base.conhecimento::sap.suite.ui.generic.template.ObjectPage.view.Details::BaseConhecimentoUser--action::cds_znfmsd_c_users.cds_znfmsd_c_users_Entities::setInactive");
                        oButton.setVisible(false);

                    if (oData.Isnew == false) {                    
                        MessageBox.success(oData.Fullname + ', \n' + this._i18n().getText("InfoMsg"), {
                            actions: MessageBox.Action.OK,
                            title: this._i18n().getText("BemVindo(a)"),
                            emphasizedAction: MessageBox.Action.OK,
                            onClose: function (sAction) {
                                that.byId("com.moovie.zui5.usuario.base.conhecimento::sap.suite.ui.generic.template.ObjectPage.view.Details::BaseConhecimentoUser--action::cds_znfmsd_c_users.cds_znfmsd_c_users_Entities::setInactive").firePress();
                            }
                        });
                    }
                    //else{
                    //    oButton.setVisible(false);
                    //}
                }.bind(this));
            }.bind(this));
        },

        _i18n: function () {
            return this.getView().getModel("i18n").getResourceBundle();
        }
    };
});