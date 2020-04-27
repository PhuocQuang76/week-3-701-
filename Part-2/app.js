let myString = angular.module("myString",[])
    .component("stringDelimiter",{
    templateUrl:'string-delimiter/string-delimiter.template.html',
    controller:function stringController(){

        this.inputString ="";
        this.delimiterString = "";

    }

});