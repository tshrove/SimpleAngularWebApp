"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ApiConfig = (function () {
    function ApiConfig() {
        //@TODO change to match the actual server url
        this._domain = "http://something.at.msic";
    }
    Object.defineProperty(ApiConfig.prototype, "domain", {
        get: function () {
            return this._domain;
        },
        enumerable: true,
        configurable: true
    });
    ApiConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ApiConfig);
    return ApiConfig;
}());
exports.ApiConfig = ApiConfig;
//# sourceMappingURL=ApiConfig.js.map