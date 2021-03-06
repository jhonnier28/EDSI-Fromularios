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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var FormularioexpComponent = (function () {
    function FormularioexpComponent() {
        this.formulario = new forms_1.FormGroup({
            nombre: new forms_1.FormControl('Jhonnier', forms_1.Validators.required),
            correo: new forms_1.FormControl('jhonnier@gmail.com', [forms_1.Validators.required,
                forms_1.Validators.pattern('^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$'),
                this.elCorreoNoEsUnico], this.elCorreoNoEsUnicoAsync),
            numPrimo: new forms_1.FormControl('3', [forms_1.Validators.required], this.esNumeroPrimoAsync)
        });
    }
    FormularioexpComponent.prototype.enviarDatos = function () {
        console.log(this.formulario);
    };
    //Validacion personal
    FormularioexpComponent.prototype.elCorreoNoEsUnico = function (control) {
        var correos = ['jhonnier@gmail.com', 'susana@gmail.com'];
        if (correos.indexOf(control.value) != -1) {
            return { elCorreoNoEsUnico: true };
        }
        return null;
    };
    //Validacion asincrona numero primo
    FormularioexpComponent.prototype.esNumeroPrimoAsync = function (control) {
        return new Promise(function (resolver, rechazar) {
            setTimeout(function () {
                var numPrimo = control.value;
                var a = 0;
                for (var i = 1; i < (numPrimo + 1); i++) {
                    if (numPrimo % i == 0) {
                        a++;
                    }
                }
                if (a > 2) {
                    console.log("No es Primo");
                    resolver({ esNumeroPrimoAsync: true });
                }
                else {
                    console.log("Si es Primo");
                    resolver(null);
                }
            }, 10);
        });
    };
    //Validacion personal
    FormularioexpComponent.prototype.elCorreoNoEsUnicoAsync = function (control) {
        //antes de que se vaya al codigo declaramos la promesa que nos permite hacer un llamado asincronico para reesolver o rechazar
        //una peticion, entra a la funcion setTimeout y luego de 2 segundos ejecuta el codigo
        return new Promise(function (resolver, rechazar) {
            setTimeout(function () {
                var correos = ['jhonnier@gmail.com', 'susana@gmail.com'];
                if (correos.indexOf(control.value) != -1) {
                    resolver({ elCorreoNoEsUnicoAsync: true });
                }
                resolver(null);
            }, 2000);
        });
    };
    FormularioexpComponent = __decorate([
        core_1.Component({
            selector: 'formularioexp',
            templateUrl: './app/formularioexp.component.html',
            styles: ["input.ng-invalid {\n        border-left: 3px solid red;\n        border-right: 3px solid red;\n     } \n     \n     input.ng-valid {\n        border-left: 3px solid green;\n        border-right: 3px solid green;\n     }"]
        }), 
        __metadata('design:paramtypes', [])
    ], FormularioexpComponent);
    return FormularioexpComponent;
}());
exports.FormularioexpComponent = FormularioexpComponent;
//# sourceMappingURL=formularioexp.component.js.map