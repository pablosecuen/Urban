"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const connection_1 = require("../../connection/connection");
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw (0, http_errors_1.default)(401, "Token de acceso no proporcionado");
        }
        const token = authorization.replace("Bearer", "").trim();
        const decodedToken = jsonwebtoken_1.default.verify(token, "clavemegasecreta");
        const userId = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.id;
        const userSnapshot = yield connection_1.db.collection("users").doc(userId).get();
        if (!userSnapshot.exists || ((_a = userSnapshot.data()) === null || _a === void 0 ? void 0 : _a.deleted)) {
            throw (0, http_errors_1.default)(401, "Acceso no autorizado");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.authenticate = authenticate;
