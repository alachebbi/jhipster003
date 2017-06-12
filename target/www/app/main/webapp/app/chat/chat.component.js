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
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("../shared");
var message_model_1 = require("./message.model");
var user_service_1 = require("../shared/user/user.service");
var _ = require("lodash");
require("rxjs");
var chat_service_1 = require("./chat.service");
var SockJS = require('sockjs-client');
var Stomp = require('stompjs');
var ChatComponent = (function () {
    function ChatComponent(principal, loginModalService, eventManager, userService, chatService) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
        this.userService = userService;
        this.chatService = chatService;
        this.messages = [];
        this.receiverMessage = [];
        this.receiver = "clovis";
        this.users = [];
    }
    ChatComponent.prototype.connect = function () {
        var _this = this;
        var socket = new SockJS('http://localhost:8080/chat');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect(this.header, function (frame) {
            // subscribe to the Topic Chanel
            _this.stompTopicSubscription = _this.stompClient.subscribe('/topic/messages', function (message) {
                var msg = JSON.parse(message.body);
                if (_this.canShowMessage(msg.receiverName) && _this.canShowMessage(msg.senderName)) {
                    _this.receiverMessage.push(msg);
                }
                else if (msg.receiverName === _this.sender) {
                    _this.markUserWithMessage(msg.senderName);
                }
                _this.chatService.add(msg);
            }, _this.header);
        });
    };
    ChatComponent.prototype.onUserSelected = function (user) {
        var _this = this;
        user.hasMsg = false;
        _.forEach(this.users, function (item) {
            if (item == user) {
                item.active = true;
                _this.receiver = item.login;
            }
            else {
                item.active = false;
            }
        });
        var msgs = [];
        _.forEach(this.chatService.get(), function (msg) {
            if (_this.canShowMessage(msg.receiverName) && _this.canShowMessage(msg.senderName)) {
                msgs.push(msg);
            }
        });
        this.receiverMessage = msgs;
    };
    ChatComponent.prototype.markUserWithMessage = function (username) {
        _.forEach(this.users, function (user) {
            if (user.login === username) {
                user.hasMsg = true;
            }
        });
    };
    ChatComponent.prototype.canShowMessage = function (name) {
        return (this.sender === name || this.receiver === name);
    };
    ChatComponent.prototype.sendMessage = function () {
        var m = new message_model_1.Message();
        m.msg = this.sendText;
        m.senderName = this.sender;
        m.receiverName = this.receiver;
        this.stompClient.send('/api/hello', this.header, JSON.stringify(m));
        this.sendText = '';
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
            _this.sender = account.login;
            _this.header = { 'X-SENDER': _this.sender };
        });
        this.userService.query()
            .map(function (res) { return res.json(); })
            .subscribe(function (users) {
            _.forEach(users, function (user) {
                if (user.login !== _this.sender) {
                    _this.users.push(user);
                }
            });
            _this.onUserSelected(_this.users[0]);
            _this.connect();
        });
        this.registerAuthenticationSuccess();
        this.messages = [];
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.stompTopicSubscription != null) {
            this.stompTopicSubscription.unsubscribe();
        }
    };
    ChatComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    ChatComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    ChatComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chat',
        templateUrl: './chat.component.html',
        styleUrls: [
            'chat.css'
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.EventManager,
        user_service_1.UserService,
        chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map