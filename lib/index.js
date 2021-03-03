"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileSignatures {
    detectMimeType(base64) {
        for (const base64Element in signatures) {
            if (base64.indexOf(base64Element) === 0) {
                return signatures[base64Element];
            }
        }
    }
}
exports.default = FileSignatures;
//# sourceMappingURL=index.js.map