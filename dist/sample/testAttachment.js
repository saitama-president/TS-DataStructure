"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Attachment_1 = require("../src/Attachment");
class testAttachment extends Attachment_1.default {
    constructor() {
        super(...arguments);
        this.name = "attachment!";
    }
}
exports.default = testAttachment;
