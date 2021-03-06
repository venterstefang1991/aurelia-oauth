System.register(["aurelia-dependency-injection", "./oauth-service"], function (exports_1, context_1) {
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
    var aurelia_dependency_injection_1, oauth_service_1, OAuthAuthorizeStep;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            }
        ],
        execute: function () {
            OAuthAuthorizeStep = (function () {
                function OAuthAuthorizeStep(oauthService) {
                    this.oauthService = oauthService;
                }
                OAuthAuthorizeStep.prototype.run = function (routingContext, next) {
                    var toState = routingContext.config;
                    if (this.oauthService.loginOnStateChange(toState)) {
                        return next.complete('Redirect');
                    }
                    return next();
                };
                OAuthAuthorizeStep = __decorate([
                    aurelia_dependency_injection_1.autoinject(),
                    __metadata("design:paramtypes", [oauth_service_1.OAuthService])
                ], OAuthAuthorizeStep);
                return OAuthAuthorizeStep;
            }());
            exports_1("OAuthAuthorizeStep", OAuthAuthorizeStep);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vYXV0aC1hdXRob3JpemUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT0UsNEJBQW9CLFlBQTBCO29CQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztnQkFBSSxDQUFDO2dCQUVuRCxnQ0FBRyxHQUFILFVBQUksY0FBYyxFQUFFLElBQVU7b0JBQzVCLElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7b0JBRXBDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDakQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUNsQztvQkFFRCxPQUFPLElBQUksRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQVhVLGtCQUFrQjtvQkFEOUIseUNBQVUsRUFBRTtxREFFdUIsNEJBQVk7bUJBRG5DLGtCQUFrQixDQVk5QjtnQkFBRCx5QkFBQzthQVpELEFBWUM7O1FBQUEsQ0FBQyIsImZpbGUiOiJvYXV0aC1hdXRob3JpemUtc3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHQgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuXHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJy4vb2F1dGgtc2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBPQXV0aEF1dGhvcml6ZVN0ZXAge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UpIHsgfVxyXG5cclxuICBydW4ocm91dGluZ0NvbnRleHQsIG5leHQ6IE5leHQpIHtcclxuICAgIGxldCB0b1N0YXRlID0gcm91dGluZ0NvbnRleHQuY29uZmlnO1xyXG5cclxuICAgIGlmICh0aGlzLm9hdXRoU2VydmljZS5sb2dpbk9uU3RhdGVDaGFuZ2UodG9TdGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIG5leHQuY29tcGxldGUoJ1JlZGlyZWN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9XHJcbn0iXX0=
