/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-resource.d.ts" />

import * as FormControllers from "./controllers/formController";
import * as TreeControllers from "./controllers/treeController";

module Ta {
    "use strict";

    var app = angular.module("ta", [
        "ngResource",
        FormControllers.moduleName,
        TreeControllers.moduleName
    ]);
}