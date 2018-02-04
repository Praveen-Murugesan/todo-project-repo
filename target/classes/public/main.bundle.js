webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\r\n    width: 120px;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-todo-header></app-todo-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_header_todo_header_component__ = __webpack_require__("../../../../../src/app/todo-header/todo-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_dashboard_todo_dashboard_component__ = __webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_addtask_todo_addtask_component__ = __webpack_require__("../../../../../src/app/todo-addtask/todo-addtask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_service_todo_service__ = __webpack_require__("../../../../../src/app/todo-service/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__todo_dashboard_todo_dashboard_component__["a" /* TodoDashboardComponent */]
    },
    {
        path: 'addNew',
        component: __WEBPACK_IMPORTED_MODULE_9__todo_addtask_todo_addtask_component__["a" /* TodoAddtaskComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__todo_header_todo_header_component__["a" /* TodoHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__todo_dashboard_todo_dashboard_component__["a" /* TodoDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__todo_addtask_todo_addtask_component__["a" /* TodoAddtaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__todo_service_todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tasks; });
var Tasks = /** @class */ (function () {
    function Tasks(taskId, taskName, taskDesc, taskDueDate, taskStatus, selected) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.taskDueDate = taskDueDate;
        this.taskStatus = taskStatus;
        this.selected = selected;
    }
    return Tasks;
}());



/***/ }),

/***/ "../../../../../src/app/todo-addtask/todo-addtask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-center {\r\n    text-align:center\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-addtask/todo-addtask.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"saveResp !== ''\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\" \n        [ngClass]=\"[saveRespColor == 'red'? 'alert alert-danger': 'alert alert-info']\">\n            <span [ngClass]=\"[saveRespColor == 'red'? 'glyphicon glyphicon-exclamation-sign' : 'glyphicon glyphicon-ok']\"></span><span  [ngStyle]=\"{'color' : saveRespColor }\"> {{saveResp}} </span>\n        </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form novalidate [formGroup]=\"todoForm\" (ngSubmit)=\"submitToDoForm()\">        \n        <div class=\"row\">\n          <div class=\"col-md-8\" class=\"form-group\"  \n              [ngClass]=\"{\n                'has-danger': taskName.invalid && (taskName.dirty || taskName.touched),\n                'has-success': taskName.valid && (taskName.dirty || taskName.touched)\n              }\">\n            <label for=\"taskName\">Task Name: </label>\n            <input type=\"text\" \n              id=\"taskName\" \n              class=\"form-control\"\n              placeholder=\"Enter Task Name here..\" \n              formControlName=\"taskName\"\n              required/>\n            <div class=\"alert alert-danger\"\n               *ngIf=\"taskName.errors && (taskName.dirty || taskName.touched)\">\n              <p *ngIf=\"taskName.errors.required\">Task Name is required</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8\" class=\"form-group\"\n            [ngClass]=\"{\n              'has-danger': taskDesc.invalid && (taskDesc.dirty || taskDesc.touched),\n              'has-success': taskDesc.valid && (taskDesc.dirty || taskDesc.touched)\n            }\">\n            <label for=\"taskDesc\">Task Description: </label>\n            <textarea \n              id=\"taskDesc\" \n              class=\"form-control\" \n              placeholder=\"Enter Task Description here..\"\n              rows=\"3\"\n              formControlName=\"taskDesc\" \n              required></textarea>\n            <div class=\"alert alert-danger\"\n              *ngIf=\"taskDesc.errors && (taskDesc.dirty || taskDesc.touched)\">\n              <p *ngIf=\"taskDesc.errors.required\">Task Description is required</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\" class=\"form-group\">            \n            <label for=\"dueDate\">Due Date: </label>\n            <div class=\"row\">\n\n              <div class=\"col-md-3\">\n                  <div class=\"input-group\" \n                    [ngClass]=\"{\n                      'has-error': dueDate.invalid && (dueDate.dirty || dueDate.touched),\n                      'has-success': dueDate.valid && (dueDate.dirty || dueDate.touched)\n                    }\">\n                      <input id=\"dueDate\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                              name=\"dp\" \n                              ngbDatepicker\n                              #datePicker=\"ngbDatepicker\" \n                              formControlName=\"dueDate\" \n                              required\n                              readonly\n                              #dueDateInpt>\n                      <div class=\"input-group-addon\">\n                          <button class=\"glyphicon glyphicon-calendar\" (click)=\"datePicker.toggle()\"></button>\n                      </div>                      \n                  </div>\n                  <div class=\"alert alert-danger\"\n                    *ngIf=\"dueDate.errors && (dueDate.dirty || dueDate.touched)\">\n                    <p *ngIf=\"dueDate.errors.required\">Due Date is required</p>\n                  </div>\n              </div>\n            </div>\n           \n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\" class=\"form-group\">\n            <button class=\"btn btn-success\" [type]=\"submit\" [disabled]=\"todoForm.invalid\">\n              <span class=\"glyphicon glyphicon-ok\"></span> Save\n            </button>\n            <button class=\"btn btn-primary\" (click)=\"clearForm()\">\n              <span class=\"glyphicon glyphicon-remove\"></span> Clear\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo-addtask/todo-addtask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoAddtaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service_todo_service__ = __webpack_require__("../../../../../src/app/todo-service/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_task_model__ = __webpack_require__("../../../../../src/app/shared/task.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoAddtaskComponent = /** @class */ (function () {
    function TodoAddtaskComponent(todoService) {
        this.todoService = todoService;
        this.saveResp = '';
        this.saveRespColor = '';
    }
    TodoAddtaskComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    TodoAddtaskComponent.prototype.createFormControls = function () {
        this.taskName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.taskDesc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.dueDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
    };
    TodoAddtaskComponent.prototype.createForm = function () {
        this.todoForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            taskName: this.taskName,
            taskDesc: this.taskDesc,
            dueDate: this.dueDate
        });
    };
    TodoAddtaskComponent.prototype.submitToDoForm = function () {
        if (this.todoForm.valid) {
            this.saveTask(this.taskName.value, this.taskDesc.value, this.dueDateInpt.nativeElement.value);
            this.todoForm.reset();
        }
    };
    TodoAddtaskComponent.prototype.saveTask = function (taskName, taskDesc, dueDate) {
        var _this = this;
        console.log('due date dfs.... ' + dueDate);
        this.todoService.saveTask(new __WEBPACK_IMPORTED_MODULE_3__shared_task_model__["a" /* Tasks */](null, taskName, taskDesc, new Date(dueDate), 'Pending', false))
            .subscribe(function (data) {
            if (data == 'success') {
                _this.saveResp = 'Task Saved Successfully.';
                _this.saveRespColor = 'blue';
            }
            else {
                _this.saveResp = 'Failure on Saving Task. Please contact Administrator.';
                _this.saveRespColor = 'red';
            }
        }, function (err) {
            console.log(err);
            _this.saveResp = 'Failure on Saving Task. Please contact Administrator.';
            _this.saveRespColor = 'red';
        });
        this.clearForm();
    };
    TodoAddtaskComponent.prototype.clearForm = function () {
        this.todoForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('dueDateInpt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TodoAddtaskComponent.prototype, "dueDateInpt", void 0);
    TodoAddtaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-addtask',
            template: __webpack_require__("../../../../../src/app/todo-addtask/todo-addtask.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-addtask/todo-addtask.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__todo_service_todo_service__["a" /* TodoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__todo_service_todo_service__["a" /* TodoService */]])
    ], TodoAddtaskComponent);
    return TodoAddtaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo-dashboard/todo-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-check-box{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.list-group-item{\r\n    background-color: #cde6fd;\r\n}\r\n\r\n.list-group-item:hover{\r\n    background-color: #93c9fc !important;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-dashboard/todo-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"button-group\">\n          <button class=\"btn btn-danger btn-md\" (click)=\"deleteTasks()\" [disabled]=\"isDisable\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n                Delete\n          </button>\n          <button class=\"btn btn-success btn-md\" (click)=\"markTasksAsComplete()\" [disabled]=\"isDisable\">\n              <span class=\"glyphicon glyphicon-saved\"></span>\n                Mark as Completed\n          </button>\n      </div>\n    </div>\n  </div>\n  \n  <hr>\n\n  <div *ngIf=\"resp !== ''\">\n    <div class=\"row\">\n        <div class=\"col-md-12\" [ngClass]=\"[respColor == 'red'? 'alert alert-danger': 'alert alert-info']\"> \n            <span [ngClass]=\"[respColor == 'red'? 'glyphicon glyphicon-exclamation-sign' : 'glyphicon glyphicon-ok']\"></span><span [ngStyle]=\"{'color' : respColor }\"> {{resp}} </span>\n        </div>\n    </div>\n  </div>\n  <div *ngIf=\"tasks?.length > 0; else noTasks\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"list-group\">\n          <div class=\"list-group-item\">\n              <input type=\"checkbox\" [checked]=\"selectedAll\" (change)=\"selectAll()\" class=\"task-check-box\"/>\n          </div>\n        <div class=\"list-group-item\" *ngFor=\"let task of tasks\">\n            <div class=\"row\">       \n                \n                <div class=\"col-md-1\">\n                    <input type=\"checkbox\" [(ngModel)]=\"task.selected\" [checked]=\"task.selected\" (change)=\"checkIfAllSelected()\" class=\"task-check-box\"/>\n                </div>\n                <div class=\"col-md-8\">\n                    <h4>{{task.taskName}}</h4>\n                    <p>{{task.taskDesc}}</p>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <span class=\"pull-right\" [ngStyle]=\"{'color': getColor(task.taskStatus) }\">{{task.taskStatus}}</span>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <span class=\"pull-right\">{{task.taskDueDate | date: 'EEEE, MMMM d, yyyy'}}</span>\n                      </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <ng-template #noTasks>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <span [ngStyle]=\"{'color' : 'darkgray' }\"> No Tasks to Display.</span>\n        </div>\n    </div>\n  </ng-template>\n  \n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/todo-dashboard/todo-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service_todo_service__ = __webpack_require__("../../../../../src/app/todo-service/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDashboardComponent = /** @class */ (function () {
    function TodoDashboardComponent(todoService) {
        this.todoService = todoService;
        this.selectedAll = false;
        this.tasks = [];
        this.isDisable = false;
    }
    TodoDashboardComponent.prototype.ngOnInit = function () {
        this.resp = '';
        this.respColor = '';
        this.getAllTasks();
    };
    TodoDashboardComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.todoService.getAllTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
            if (_this.tasks.length <= 0) {
                _this.isDisable = true;
            }
        }, function (err) {
            console.log(err);
            _this.isDisable = true;
        });
    };
    TodoDashboardComponent.prototype.deleteTasks = function () {
        var _this = this;
        this.tempTaskIds = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].selected == true) {
                this.tempTaskIds.push(this.tasks[i].taskId);
            }
        }
        if (this.tempTaskIds.length === 0) {
            this.resp = 'Please select atleast one Task to Delete.';
            this.respColor = 'red';
        }
        else {
            this.todoService.deleteTasks(this.tempTaskIds).subscribe(function (data) {
                console.log(data);
                if (data == 'success') {
                    _this.resp = 'Tasks Deleted Successfully.';
                    _this.respColor = 'blue';
                }
                else {
                    _this.resp = 'Failure on Deleting Tasks. Please contact Administrator.';
                    _this.respColor = 'red';
                }
            }, function (err) {
                console.log(err);
                _this.resp = 'Failure on Deleting Tasks. Please contact Administrator.';
                _this.respColor = 'red';
            });
            setTimeout(function () {
                _this.getAllTasks();
            }, 200);
        }
    };
    TodoDashboardComponent.prototype.markTasksAsComplete = function () {
        var _this = this;
        this.tempTaskIds = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].selected == true) {
                this.tempTaskIds.push(this.tasks[i].taskId);
            }
        }
        if (this.tempTaskIds.length === 0) {
            this.resp = 'Please select atleast one Task to Mark as Completed.';
            this.respColor = 'red';
        }
        else {
            this.todoService.updateTasks(this.tempTaskIds).subscribe(function (data) {
                if (data == 'success') {
                    _this.resp = 'Selected Tasks marked as Completed.';
                    _this.respColor = 'blue';
                }
                else {
                    _this.resp = 'Failure on marking Task as completed. Please contact Administrator.';
                    _this.respColor = 'red';
                }
            }, function (err) {
                console.log(err);
                _this.resp = 'Failure on marking Task as completed. Please contact Administrator.';
                _this.respColor = 'red';
            });
            setTimeout(function () {
                _this.getAllTasks();
            }, 200);
        }
        if (this.selectedAll === true) {
            this.selectedAll = !this.selectedAll;
        }
    };
    TodoDashboardComponent.prototype.getColor = function (status) {
        if (status == 'Completed') {
            return 'green';
        }
        else {
            return 'red';
        }
    };
    TodoDashboardComponent.prototype.selectAll = function () {
        this.selectedAll = !this.selectedAll;
        for (var i = 0; i < this.tasks.length; i++) {
            this.tasks[i].selected = this.selectedAll;
        }
    };
    TodoDashboardComponent.prototype.checkIfAllSelected = function () {
        this.selectedAll = this.tasks.every(function (item) {
            return item.selected == true;
        });
    };
    TodoDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-dashboard',
            template: __webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__todo_service_todo_service__["a" /* TodoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service_todo_service__["a" /* TodoService */]])
    ], TodoDashboardComponent);
    return TodoDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    background-color: #3cbcf8;\r\n}\r\n\r\n.navbar-brand{\r\n    color: #ffffff;\r\n    font-size: 2em;\r\n}\r\n\r\n.btn{    \r\n    width: 100px;\r\n}\r\n\r\n.todo-menu{\r\n    color: #ffffff;\r\n    font-size: 1em;\r\n}\r\n\r\n.todo-menu:hover{\r\n    color: #575353;\r\n    font-size: 1.25em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" \n                class=\"navbar-toggle collapsed\" \n                data-toggle=\"collapse\" \n                data-target=\"#todo-navbar\" \n                aria-expanded=\"false\" \n                aria-controls=\"navbar\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"navbar-brand\">ToDo</span>\n        </div>\n        \n        <div class=\"collapse navbar-collapse\" id=\"todo-navbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"#\" class=\"btn btn-link btn-md\" routerLink=\"\"> <span class=\"todo-menu\"><span class=\"glyphicon glyphicon-home\"></span> Home</span> </a></li>\n                <li><a href=\"#\" class=\"btn btn-link btn-md\" routerLink=\"addNew\"> <span class=\"todo-menu\"><span class=\"glyphicon glyphicon-plus\"></span> New Task</span> </a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoHeaderComponent = /** @class */ (function () {
    function TodoHeaderComponent() {
    }
    TodoHeaderComponent.prototype.ngOnInit = function () {
    };
    TodoHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-header',
            template: __webpack_require__("../../../../../src/app/todo-header/todo-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-header/todo-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoHeaderComponent);
    return TodoHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo-service/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8092/todo/';
    }
    TodoService.prototype.getAllTasks = function () {
        return this.http.get(this.apiUrl + 'getAllTasks')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.saveTask = function (task) {
        return this.http.post(this.apiUrl + '/saveTask', task)
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    TodoService.prototype.deleteTasks = function (taskIds) {
        return this.http.post(this.apiUrl + '/deleteTasks', taskIds)
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    TodoService.prototype.updateTasks = function (taskIds) {
        return this.http.post(this.apiUrl + '/updateTasks', taskIds)
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server Error');
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map