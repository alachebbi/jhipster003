"use strict";
var Message = (function () {
    function Message(senderName, receiverName, msg, createdDate) {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.msg = msg;
        this.createdDate = createdDate;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map