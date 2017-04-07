webpackHotUpdate(0,{

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/chat/chat.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".chat-selected{\n    background: #242b5d;\n    color: white;\n    border-radius: 10px;\n}\n\n.hasMsg{\n    background: lightgreen;\n    border-radius: 10px;\n    color: white;\n}\nchat-div{\n    min-height: 50vh;\n}\n\n.chat-body {\n    margin-top:2em;\n    margin-bottom:5em;\n\n}\n\n#btn-chat{\n    height: 2.3em;\n}\n.chat\n{\n    list-style: none;\n    margin: 0;\n    padding: 0.5em;\n}\n\n.chat li\n{\n    margin-bottom: 10px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n\n.chat li.left .chat-body\n{\n    margin-left: 60px;\n}\n\n.chat li.right .chat-body\n{\n    margin-right: 60px;\n}\n\n\n.chat li .chat-body p\n{\n    margin: 0;\n    color: #777777;\n}\n\n.panel .slidedown .glyphicon, .chat .glyphicon\n{\n    margin-right: 5px;\n}\n\n.panel-body\n{\n    overflow-y: scroll;\n    height: 250px;\n}\n\n::-webkit-scrollbar-track\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar\n{\n    width: 12px;\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n    background-color: #555;\n}\n.direct-chat .box-body {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    position: relative;\n    overflow-x: hidden;\n    padding: 0;\n}\n.direct-chat.chat-pane-open .direct-chat-contacts {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n}\n.direct-chat-messages {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n    padding: 10px;\n    height: 250px;\n    overflow: auto;\n}\n.direct-chat-msg,\n.direct-chat-text {\n    display: block;\n}\n.direct-chat-msg {\n    margin-bottom: 10px;\n}\n.direct-chat-msg:before,\n.direct-chat-msg:after {\n    content: \" \";\n    display: table;\n}\n.direct-chat-msg:after {\n    clear: both;\n}\n.direct-chat-messages,\n.direct-chat-contacts {\n    -webkit-transition: -webkit-transform 0.5s ease-in-out;\n    -moz-transition: -moz-transform 0.5s ease-in-out;\n    -o-transition: -o-transform 0.5s ease-in-out;\n    transition: transform 0.5s ease-in-out;\n}\n.direct-chat-text {\n    border-radius: 5px;\n    position: relative;\n    padding: 5px 10px;\n    background: #d2d6de;\n    border: 1px solid #d2d6de;\n    margin: 5px 0 0 50px;\n    color: #444444;\n}\n.direct-chat-text:after,\n.direct-chat-text:before {\n    position: absolute;\n    right: 100%;\n    top: 15px;\n    border: solid transparent;\n    border-right-color: #d2d6de;\n    content: ' ';\n    height: 0;\n    width: 0;\n    pointer-events: none;\n}\n.direct-chat-text:after {\n    border-width: 5px;\n    margin-top: -5px;\n}\n.direct-chat-text:before {\n    border-width: 6px;\n    margin-top: -6px;\n}\n.right .direct-chat-text {\n    margin-right: 50px;\n    margin-left: 0;\n}\n.right .direct-chat-text:after,\n.right .direct-chat-text:before {\n    right: auto;\n    left: 100%;\n    border-right-color: transparent;\n    border-left-color: #d2d6de;\n}\n.direct-chat-img {\n    border-radius: 50%;\n    float: left;\n    width: 40px;\n    height: 40px;\n}\n.right .direct-chat-img {\n    float: right;\n}\n.direct-chat-info {\n    display: block;\n    margin-bottom: 2px;\n    font-size: 12px;\n}\n.direct-chat-name {\n    font-weight: 600;\n}\n.direct-chat-timestamp {\n    color: #999;\n}\n.direct-chat-contacts-open {\n    /*.direct-chat-messages {\n      .translate(-101%, 0);\n    }*/\n}\n.direct-chat-contacts-open .direct-chat-contacts {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n}\n.direct-chat-contacts {\n    -webkit-transform: translate(101%, 0);\n    -ms-transform: translate(101%, 0);\n    -o-transform: translate(101%, 0);\n    transform: translate(101%, 0);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    height: 250px;\n    width: 100%;\n    background: #222d32;\n    color: #fff;\n    overflow: auto;\n}\n.chat {\n    padding: 5px 20px 5px 10px;\n}\n.chat .item {\n    margin-bottom: 10px;\n}\n.chat .item:before,\n.chat .item:after {\n    content: \" \";\n    display: table;\n}\n.chat .item:after {\n    clear: both;\n}\n.chat .item > img {\n    width: 40px;\n    height: 40px;\n    border: 2px solid transparent;\n    border-radius: 50% !important;\n}\n.chat .item > img.online {\n    border: 2px solid #00a65a;\n}\n.chat .item > img.offline {\n    border: 2px solid #dd4b39;\n}\n.chat .item > .message {\n    margin-left: 55px;\n    margin-top: -40px;\n}\n.chat .item > .message > .name {\n    display: block;\n    font-weight: 600;\n}\n.chat .item > .attachment {\n    border-radius: 3px;\n    background: #f4f4f4;\n    margin-left: 65px;\n    margin-right: 15px;\n    padding: 10px;\n}\n.chat .item > .attachment > h4 {\n    margin: 0 0 5px 0;\n    font-weight: 600;\n    font-size: 14px;\n}\n.chat .item > .attachment > p,\n.chat .item > .attachment > .filename {\n    font-weight: 600;\n    font-size: 13px;\n    font-style: italic;\n    margin: 0;\n}\n.chat .item > .attachment:before,\n.chat .item > .attachment:after {\n    content: \" \";\n    display: table;\n}\n.chat .item > .attachment:after {\n    clear: both;\n}\n.box-input {\n    max-width: 200px;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXQvY2hhdC5jc3M/MzRhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXlDLDBCQUEwQixtQkFBbUIsMEJBQTBCLEdBQUcsWUFBWSw2QkFBNkIsMEJBQTBCLG1CQUFtQixHQUFHLFdBQVcsdUJBQXVCLEdBQUcsZ0JBQWdCLHFCQUFxQix3QkFBd0IsS0FBSyxjQUFjLG9CQUFvQixHQUFHLFVBQVUsdUJBQXVCLGdCQUFnQixxQkFBcUIsR0FBRyxlQUFlLDBCQUEwQiwwQkFBMEIsd0NBQXdDLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLGdDQUFnQyx5QkFBeUIsR0FBRyw4QkFBOEIsZ0JBQWdCLHFCQUFxQixHQUFHLHFEQUFxRCx3QkFBd0IsR0FBRyxrQkFBa0IseUJBQXlCLG9CQUFvQixHQUFHLGdDQUFnQyx3REFBd0QsZ0NBQWdDLEdBQUcsMEJBQTBCLGtCQUFrQixnQ0FBZ0MsR0FBRyxnQ0FBZ0MsdURBQXVELDZCQUE2QixHQUFHLDBCQUEwQixvQ0FBb0MsbUNBQW1DLHlCQUF5Qix5QkFBeUIsaUJBQWlCLEdBQUcscURBQXFELHlDQUF5QyxxQ0FBcUMsb0NBQW9DLGlDQUFpQyxHQUFHLHlCQUF5Qix5Q0FBeUMscUNBQXFDLG9DQUFvQyxpQ0FBaUMsb0JBQW9CLG9CQUFvQixxQkFBcUIsR0FBRyx3Q0FBd0MscUJBQXFCLEdBQUcsb0JBQW9CLDBCQUEwQixHQUFHLG9EQUFvRCxxQkFBcUIscUJBQXFCLEdBQUcsMEJBQTBCLGtCQUFrQixHQUFHLGlEQUFpRCw2REFBNkQsdURBQXVELG1EQUFtRCw2Q0FBNkMsR0FBRyxxQkFBcUIseUJBQXlCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLGdDQUFnQywyQkFBMkIscUJBQXFCLEdBQUcsc0RBQXNELHlCQUF5QixrQkFBa0IsZ0JBQWdCLGdDQUFnQyxrQ0FBa0MsbUJBQW1CLGdCQUFnQixlQUFlLDJCQUEyQixHQUFHLDJCQUEyQix3QkFBd0IsdUJBQXVCLEdBQUcsNEJBQTRCLHdCQUF3Qix1QkFBdUIsR0FBRyw0QkFBNEIseUJBQXlCLHFCQUFxQixHQUFHLG9FQUFvRSxrQkFBa0IsaUJBQWlCLHNDQUFzQyxpQ0FBaUMsR0FBRyxvQkFBb0IseUJBQXlCLGtCQUFrQixrQkFBa0IsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLHFCQUFxQixxQkFBcUIseUJBQXlCLHNCQUFzQixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsOEJBQThCLCtCQUErQiw2QkFBNkIsT0FBTyxLQUFLLG9EQUFvRCx5Q0FBeUMscUNBQXFDLG9DQUFvQyxpQ0FBaUMsR0FBRyx5QkFBeUIsNENBQTRDLHdDQUF3Qyx1Q0FBdUMsb0NBQW9DLHlCQUF5QixhQUFhLGdCQUFnQixvQkFBb0Isa0JBQWtCLDBCQUEwQixrQkFBa0IscUJBQXFCLEdBQUcsU0FBUyxpQ0FBaUMsR0FBRyxlQUFlLDBCQUEwQixHQUFHLDBDQUEwQyxxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLG9DQUFvQyxvQ0FBb0MsR0FBRyw0QkFBNEIsZ0NBQWdDLEdBQUcsNkJBQTZCLGdDQUFnQyxHQUFHLDBCQUEwQix3QkFBd0Isd0JBQXdCLEdBQUcsa0NBQWtDLHFCQUFxQix1QkFBdUIsR0FBRyw2QkFBNkIseUJBQXlCLDBCQUEwQix3QkFBd0IseUJBQXlCLG9CQUFvQixHQUFHLGtDQUFrQyx3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLHlFQUF5RSx1QkFBdUIsc0JBQXNCLHlCQUF5QixnQkFBZ0IsR0FBRyxzRUFBc0UscUJBQXFCLHFCQUFxQixHQUFHLG1DQUFtQyxrQkFBa0IsR0FBRyxjQUFjLHVCQUF1QixHQUFHOztBQUUxeksiLCJmaWxlIjoiMC4zMzFlNzdlMjAyZGQ2ZmUxNjE2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hhdC1zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZDogIzI0MmI1ZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaGFzTXNne1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmNoYXQtZGl2e1xcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4uY2hhdC1ib2R5IHtcXG4gICAgbWFyZ2luLXRvcDoyZW07XFxuICAgIG1hcmdpbi1ib3R0b206NWVtO1xcblxcbn1cXG5cXG4jYnRuLWNoYXR7XFxuICAgIGhlaWdodDogMi4zZW07XFxufVxcbi5jaGF0XFxue1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uY2hhdCBsaVxcbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjQjNBOUE5O1xcbn1cXG5cXG4uY2hhdCBsaS5sZWZ0IC5jaGF0LWJvZHlcXG57XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4uY2hhdCBsaS5yaWdodCAuY2hhdC1ib2R5XFxue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxufVxcblxcblxcbi5jaGF0IGxpIC5jaGF0LWJvZHkgcFxcbntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogIzc3Nzc3NztcXG59XFxuXFxuLnBhbmVsIC5zbGlkZWRvd24gLmdseXBoaWNvbiwgLmNoYXQgLmdseXBoaWNvblxcbntcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5wYW5lbC1ib2R5XFxue1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGhlaWdodDogMjUwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcXG57XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXJcXG57XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXFxue1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5kaXJlY3QtY2hhdCAuYm94LWJvZHkge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5kaXJlY3QtY2hhdC5jaGF0LXBhbmUtb3BlbiAuZGlyZWN0LWNoYXQtY29udGFjdHMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG59XFxuLmRpcmVjdC1jaGF0LW1lc3NhZ2VzIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uZGlyZWN0LWNoYXQtbXNnLFxcbi5kaXJlY3QtY2hhdC10ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5kaXJlY3QtY2hhdC1tc2cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZGlyZWN0LWNoYXQtbXNnOmJlZm9yZSxcXG4uZGlyZWN0LWNoYXQtbXNnOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmRpcmVjdC1jaGF0LW1zZzphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uZGlyZWN0LWNoYXQtbWVzc2FnZXMsXFxuLmRpcmVjdC1jaGF0LWNvbnRhY3RzIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmRpcmVjdC1jaGF0LXRleHQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNkMmQ2ZGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ2ZGU7XFxuICAgIG1hcmdpbjogNXB4IDAgMCA1MHB4O1xcbiAgICBjb2xvcjogIzQ0NDQ0NDtcXG59XFxuLmRpcmVjdC1jaGF0LXRleHQ6YWZ0ZXIsXFxuLmRpcmVjdC1jaGF0LXRleHQ6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNkMmQ2ZGU7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5kaXJlY3QtY2hhdC10ZXh0OmFmdGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxufVxcbi5kaXJlY3QtY2hhdC10ZXh0OmJlZm9yZSB7XFxuICAgIGJvcmRlci13aWR0aDogNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xcbn1cXG4ucmlnaHQgLmRpcmVjdC1jaGF0LXRleHQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4ucmlnaHQgLmRpcmVjdC1jaGF0LXRleHQ6YWZ0ZXIsXFxuLnJpZ2h0IC5kaXJlY3QtY2hhdC10ZXh0OmJlZm9yZSB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2QyZDZkZTtcXG59XFxuLmRpcmVjdC1jaGF0LWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5yaWdodCAuZGlyZWN0LWNoYXQtaW1nIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZGlyZWN0LWNoYXQtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmRpcmVjdC1jaGF0LW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZGlyZWN0LWNoYXQtdGltZXN0YW1wIHtcXG4gICAgY29sb3I6ICM5OTk7XFxufVxcbi5kaXJlY3QtY2hhdC1jb250YWN0cy1vcGVuIHtcXG4gICAgLyouZGlyZWN0LWNoYXQtbWVzc2FnZXMge1xcbiAgICAgIC50cmFuc2xhdGUoLTEwMSUsIDApO1xcbiAgICB9Ki9cXG59XFxuLmRpcmVjdC1jaGF0LWNvbnRhY3RzLW9wZW4gLmRpcmVjdC1jaGF0LWNvbnRhY3RzIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxufVxcbi5kaXJlY3QtY2hhdC1jb250YWN0cyB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxJSwgMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDElLCAwKTtcXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMSUsIDApO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzIyMmQzMjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uY2hhdCB7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAxMHB4O1xcbn1cXG4uY2hhdCAuaXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5jaGF0IC5pdGVtOmJlZm9yZSxcXG4uY2hhdCAuaXRlbTphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxufVxcbi5jaGF0IC5pdGVtOmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5jaGF0IC5pdGVtID4gaW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xcbn1cXG4uY2hhdCAuaXRlbSA+IGltZy5vbmxpbmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBhNjVhO1xcbn1cXG4uY2hhdCAuaXRlbSA+IGltZy5vZmZsaW5lIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkNGIzOTtcXG59XFxuLmNoYXQgLml0ZW0gPiAubWVzc2FnZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcXG59XFxuLmNoYXQgLml0ZW0gPiAubWVzc2FnZSA+IC5uYW1lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQgPiBoNCB7XFxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQgPiBwLFxcbi5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQgPiAuZmlsZW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4uY2hhdCAuaXRlbSA+IC5hdHRhY2htZW50OmJlZm9yZSxcXG4uY2hhdCAuaXRlbSA+IC5hdHRhY2htZW50OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmNoYXQgLml0ZW0gPiAuYXR0YWNobWVudDphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uYm94LWlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXQvY2hhdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXQvY2hhdC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==