webpackHotUpdate(0,{

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/chat/chat.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".chat-selected{\n    background: #242b5d;\n    color: white;\n    border-radius: 10px;\n}\n\n.hasMsg{\n    background: lightgreen;\n    border-radius: 10px;\n    color: white;\n}\nchat-div{\n    min-height: 50vh;\n}\n\n.chat-body {\n    margin-top:2em;\n    margin-bottom:5em;\n\n}\n\n#btn-chat{\n    height: 2.3em;\n}\n.chat\n{\n    list-style: none;\n    margin: 0;\n    padding: 0.5em;\n}\n\n.chat li\n{\n    margin-bottom: 10px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n\n.chat li.left .chat-body\n{\n    margin-left: 60px;\n}\n\n.chat li.right .chat-body\n{\n    margin-right: 60px;\n}\n\n\n.chat li .chat-body p\n{\n    margin: 0;\n    color: #777777;\n}\n\n.panel .slidedown .glyphicon, .chat .glyphicon\n{\n    margin-right: 5px;\n}\n\n.panel-body\n{\n    overflow-y: scroll;\n    height: 250px;\n}\n\n::-webkit-scrollbar-track\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar\n{\n    width: 12px;\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n    background-color: #555;\n}\n.direct-chat .box-body {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    position: relative;\n    overflow-x: hidden;\n    padding: 0;\n}\n/*\n * Component: Direct Chat\n * ----------------------\n */\n.direct-chat .box-body {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    position: relative;\n    overflow-x: hidden;\n    padding: 0;\n}\n.direct-chat.chat-pane-open .direct-chat-contacts {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n}\n.direct-chat-messages {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n    padding: 10px;\n    height: 250px;\n    overflow: auto;\n}\n.direct-chat-msg,\n.direct-chat-text {\n    display: block;\n}\n.direct-chat-msg {\n    margin-bottom: 10px;\n}\n.direct-chat-msg:before,\n.direct-chat-msg:after {\n    content: \" \";\n    display: table;\n}\n.direct-chat-msg:after {\n    clear: both;\n}\n.direct-chat-messages,\n.direct-chat-contacts {\n    -webkit-transition: -webkit-transform 0.5s ease-in-out;\n    -moz-transition: -moz-transform 0.5s ease-in-out;\n    -o-transition: -o-transform 0.5s ease-in-out;\n    transition: transform 0.5s ease-in-out;\n}\n.direct-chat-text {\n    border-radius: 5px;\n    position: relative;\n    padding: 5px 10px;\n    background: #d2d6de;\n    border: 1px solid #d2d6de;\n    margin: 5px 0 0 50px;\n    color: #444444;\n}\n.direct-chat-text:after,\n.direct-chat-text:before {\n    position: absolute;\n    right: 100%;\n    top: 15px;\n    border: solid transparent;\n    border-right-color: #d2d6de;\n    content: ' ';\n    height: 0;\n    width: 0;\n    pointer-events: none;\n}\n.direct-chat-text:after {\n    border-width: 5px;\n    margin-top: -5px;\n}\n.direct-chat-text:before {\n    border-width: 6px;\n    margin-top: -6px;\n}\n.right .direct-chat-text {\n    margin-right: 50px;\n    margin-left: 0;\n}\n.right .direct-chat-text:after,\n.right .direct-chat-text:before {\n    right: auto;\n    left: 100%;\n    border-right-color: transparent;\n    border-left-color: #d2d6de;\n}\n.direct-chat-img {\n    border-radius: 50%;\n    float: left;\n    width: 40px;\n    height: 40px;\n}\n.right .direct-chat-img {\n    float: right;\n}\n.direct-chat-info {\n    display: block;\n    margin-bottom: 2px;\n    font-size: 12px;\n}\n.direct-chat-name {\n    font-weight: 600;\n}\n.direct-chat-timestamp {\n    color: #ffd026;\n}\n.chat {\n    padding: 5px 20px 5px 10px;\n}\n.chat .item {\n    margin-bottom: 10px;\n}\n.chat .item:before,\n.chat .item:after {\n    content: \" \";\n    display: table;\n}\n.chat .item:after {\n    clear: both;\n}\n.chat .item > img {\n    width: 40px;\n    height: 40px;\n    border: 2px solid transparent;\n    border-radius: 50% !important;\n}\n.chat .item > img.online {\n    border: 2px solid #00a65a;\n}\n.chat .item > img.offline {\n    border: 2px solid #dd4b39;\n}\n.chat .item > .message {\n    margin-left: 55px;\n    margin-top: -40px;\n}\n.chat .item > .message > .name {\n    display: block;\n    font-weight: 600;\n}\n.chat .item > .attachment {\n    border-radius: 3px;\n    background: #f4f4f4;\n    margin-left: 65px;\n    margin-right: 15px;\n    padding: 10px;\n}\n.chat .item > .attachment > h4 {\n    margin: 0 0 5px 0;\n    font-weight: 600;\n    font-size: 14px;\n}\n.chat .item > .attachment > p,\n.chat .item > .attachment > .filename {\n    font-weight: 600;\n    font-size: 13px;\n    font-style: italic;\n    margin: 0;\n}\n.chat .item > .attachment:before,\n.chat .item > .attachment:after {\n    content: \" \";\n    display: table;\n}\n.chat .item > .attachment:after {\n    clear: both;\n}\n.box-input {\n    max-width: 200px;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXQvY2hhdC5jc3M/MzRhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXlDLDBCQUEwQixtQkFBbUIsMEJBQTBCLEdBQUcsWUFBWSw2QkFBNkIsMEJBQTBCLG1CQUFtQixHQUFHLFdBQVcsdUJBQXVCLEdBQUcsZ0JBQWdCLHFCQUFxQix3QkFBd0IsS0FBSyxjQUFjLG9CQUFvQixHQUFHLFVBQVUsdUJBQXVCLGdCQUFnQixxQkFBcUIsR0FBRyxlQUFlLDBCQUEwQiwwQkFBMEIsd0NBQXdDLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLGdDQUFnQyx5QkFBeUIsR0FBRyw4QkFBOEIsZ0JBQWdCLHFCQUFxQixHQUFHLHFEQUFxRCx3QkFBd0IsR0FBRyxrQkFBa0IseUJBQXlCLG9CQUFvQixHQUFHLGdDQUFnQyx3REFBd0QsZ0NBQWdDLEdBQUcsMEJBQTBCLGtCQUFrQixnQ0FBZ0MsR0FBRyxnQ0FBZ0MsdURBQXVELDZCQUE2QixHQUFHLDBCQUEwQixvQ0FBb0MsbUNBQW1DLHlCQUF5Qix5QkFBeUIsaUJBQWlCLEdBQUcseUZBQXlGLG9DQUFvQyxtQ0FBbUMseUJBQXlCLHlCQUF5QixpQkFBaUIsR0FBRyxxREFBcUQseUNBQXlDLHFDQUFxQyxvQ0FBb0MsaUNBQWlDLEdBQUcseUJBQXlCLHlDQUF5QyxxQ0FBcUMsb0NBQW9DLGlDQUFpQyxvQkFBb0Isb0JBQW9CLHFCQUFxQixHQUFHLHdDQUF3QyxxQkFBcUIsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcsb0RBQW9ELHFCQUFxQixxQkFBcUIsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsaURBQWlELDZEQUE2RCx1REFBdUQsbURBQW1ELDZDQUE2QyxHQUFHLHFCQUFxQix5QkFBeUIseUJBQXlCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLDJCQUEyQixxQkFBcUIsR0FBRyxzREFBc0QseUJBQXlCLGtCQUFrQixnQkFBZ0IsZ0NBQWdDLGtDQUFrQyxtQkFBbUIsZ0JBQWdCLGVBQWUsMkJBQTJCLEdBQUcsMkJBQTJCLHdCQUF3Qix1QkFBdUIsR0FBRyw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLDRCQUE0Qix5QkFBeUIscUJBQXFCLEdBQUcsb0VBQW9FLGtCQUFrQixpQkFBaUIsc0NBQXNDLGlDQUFpQyxHQUFHLG9CQUFvQix5QkFBeUIsa0JBQWtCLGtCQUFrQixtQkFBbUIsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcscUJBQXFCLHFCQUFxQix5QkFBeUIsc0JBQXNCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLDBCQUEwQixxQkFBcUIsR0FBRyxTQUFTLGlDQUFpQyxHQUFHLGVBQWUsMEJBQTBCLEdBQUcsMENBQTBDLHFCQUFxQixxQkFBcUIsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsb0NBQW9DLG9DQUFvQyxHQUFHLDRCQUE0QixnQ0FBZ0MsR0FBRyw2QkFBNkIsZ0NBQWdDLEdBQUcsMEJBQTBCLHdCQUF3Qix3QkFBd0IsR0FBRyxrQ0FBa0MscUJBQXFCLHVCQUF1QixHQUFHLDZCQUE2Qix5QkFBeUIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLEdBQUcsa0NBQWtDLHdCQUF3Qix1QkFBdUIsc0JBQXNCLEdBQUcseUVBQXlFLHVCQUF1QixzQkFBc0IseUJBQXlCLGdCQUFnQixHQUFHLHNFQUFzRSxxQkFBcUIscUJBQXFCLEdBQUcsbUNBQW1DLGtCQUFrQixHQUFHLGNBQWMsdUJBQXVCLEdBQUc7O0FBRTM1SiIsImZpbGUiOiIwLmFlZDQ2ZGQ0OTI3M2MyNmIyZDcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGF0LXNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kOiAjMjQyYjVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oYXNNc2d7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuY2hhdC1kaXZ7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxufVxcblxcbi5jaGF0LWJvZHkge1xcbiAgICBtYXJnaW4tdG9wOjJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTo1ZW07XFxuXFxufVxcblxcbiNidG4tY2hhdHtcXG4gICAgaGVpZ2h0OiAyLjNlbTtcXG59XFxuLmNoYXRcXG57XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbi5jaGF0IGxpXFxue1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNCM0E5QTk7XFxufVxcblxcbi5jaGF0IGxpLmxlZnQgLmNoYXQtYm9keVxcbntcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbi5jaGF0IGxpLnJpZ2h0IC5jaGF0LWJvZHlcXG57XFxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcXG59XFxuXFxuXFxuLmNoYXQgbGkgLmNoYXQtYm9keSBwXFxue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiAjNzc3Nzc3O1xcbn1cXG5cXG4ucGFuZWwgLnNsaWRlZG93biAuZ2x5cGhpY29uLCAuY2hhdCAuZ2x5cGhpY29uXFxue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnBhbmVsLWJvZHlcXG57XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xcbntcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhclxcbntcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcXG57XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmRpcmVjdC1jaGF0IC5ib3gtYm9keSB7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLypcXG4gKiBDb21wb25lbnQ6IERpcmVjdCBDaGF0XFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqL1xcbi5kaXJlY3QtY2hhdCAuYm94LWJvZHkge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5kaXJlY3QtY2hhdC5jaGF0LXBhbmUtb3BlbiAuZGlyZWN0LWNoYXQtY29udGFjdHMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG59XFxuLmRpcmVjdC1jaGF0LW1lc3NhZ2VzIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uZGlyZWN0LWNoYXQtbXNnLFxcbi5kaXJlY3QtY2hhdC10ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5kaXJlY3QtY2hhdC1tc2cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZGlyZWN0LWNoYXQtbXNnOmJlZm9yZSxcXG4uZGlyZWN0LWNoYXQtbXNnOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmRpcmVjdC1jaGF0LW1zZzphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uZGlyZWN0LWNoYXQtbWVzc2FnZXMsXFxuLmRpcmVjdC1jaGF0LWNvbnRhY3RzIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmRpcmVjdC1jaGF0LXRleHQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNkMmQ2ZGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ2ZGU7XFxuICAgIG1hcmdpbjogNXB4IDAgMCA1MHB4O1xcbiAgICBjb2xvcjogIzQ0NDQ0NDtcXG59XFxuLmRpcmVjdC1jaGF0LXRleHQ6YWZ0ZXIsXFxuLmRpcmVjdC1jaGF0LXRleHQ6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNkMmQ2ZGU7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5kaXJlY3QtY2hhdC10ZXh0OmFmdGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxufVxcbi5kaXJlY3QtY2hhdC10ZXh0OmJlZm9yZSB7XFxuICAgIGJvcmRlci13aWR0aDogNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xcbn1cXG4ucmlnaHQgLmRpcmVjdC1jaGF0LXRleHQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4ucmlnaHQgLmRpcmVjdC1jaGF0LXRleHQ6YWZ0ZXIsXFxuLnJpZ2h0IC5kaXJlY3QtY2hhdC10ZXh0OmJlZm9yZSB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2QyZDZkZTtcXG59XFxuLmRpcmVjdC1jaGF0LWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5yaWdodCAuZGlyZWN0LWNoYXQtaW1nIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZGlyZWN0LWNoYXQtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmRpcmVjdC1jaGF0LW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZGlyZWN0LWNoYXQtdGltZXN0YW1wIHtcXG4gICAgY29sb3I6ICNmZmQwMjY7XFxufVxcbi5jaGF0IHtcXG4gICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDEwcHg7XFxufVxcbi5jaGF0IC5pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmNoYXQgLml0ZW06YmVmb3JlLFxcbi5jaGF0IC5pdGVtOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmNoYXQgLml0ZW06YWZ0ZXIge1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmNoYXQgLml0ZW0gPiBpbWcge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0IC5pdGVtID4gaW1nLm9ubGluZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGE2NWE7XFxufVxcbi5jaGF0IC5pdGVtID4gaW1nLm9mZmxpbmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGQ0YjM5O1xcbn1cXG4uY2hhdCAuaXRlbSA+IC5tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU1cHg7XFxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xcbn1cXG4uY2hhdCAuaXRlbSA+IC5tZXNzYWdlID4gLm5hbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmNoYXQgLml0ZW0gPiAuYXR0YWNobWVudCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmNoYXQgLml0ZW0gPiAuYXR0YWNobWVudCA+IGg0IHtcXG4gICAgbWFyZ2luOiAwIDAgNXB4IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNoYXQgLml0ZW0gPiAuYXR0YWNobWVudCA+IHAsXFxuLmNoYXQgLml0ZW0gPiAuYXR0YWNobWVudCA+IC5maWxlbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQ6YmVmb3JlLFxcbi5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQ6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uY2hhdCAuaXRlbSA+IC5hdHRhY2htZW50OmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5ib3gtaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvY2hhdC9jaGF0LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvY2hhdC9jaGF0LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9