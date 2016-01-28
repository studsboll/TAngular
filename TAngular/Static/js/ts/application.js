/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-resource.d.ts" />
var FormControllers = require("./controllers/formController");
var TreeControllers = require("./controllers/treeController");
var Ta;
(function (Ta) {
    "use strict";
    var app = angular.module("ta", [
        "ngResource",
        FormControllers.moduleName,
        TreeControllers.moduleName
    ]);
})(Ta || (Ta = {}));
//# sourceMappingURL=application.js.map