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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameController = void 0;
const common_1 = require("@nestjs/common");
const name_service_1 = require("./name.service");
const create_name_dto_1 = require("./dto/create-name.dto");
const update_name_dto_1 = require("./dto/update-name.dto");
let NameController = class NameController {
    constructor(nameService) {
        this.nameService = nameService;
    }
    create(createNameDto) {
        return this.nameService.create(createNameDto);
    }
    findAll() {
        return this.nameService.findAll();
    }
    findOne(id) {
        return this.nameService.findOne(+id);
    }
    update(id, updateNameDto) {
        return this.nameService.update(+id, updateNameDto);
    }
    remove(id) {
        return this.nameService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_name_dto_1.CreateNameDto]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NameController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_name_dto_1.UpdateNameDto]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NameController.prototype, "remove", null);
NameController = __decorate([
    (0, common_1.Controller)('name'),
    __metadata("design:paramtypes", [name_service_1.NameService])
], NameController);
exports.NameController = NameController;
//# sourceMappingURL=name.controller.js.map