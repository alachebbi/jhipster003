webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-1\"></div>\n        <div class=\"col-md-3\">\n            <div class=\"list-group\">\n                <a href=\"#\" class=\"list-group-item disabled\">\n                    List of users\n                </a>\n                <div style=\"height: 400px; overflow-y: scroll\">\n                    <span *ngFor=\"let user of users\" (click)=\"onUserSelected(user)\" [ngClass]=\"{'chat-selected':user.active,'hasMsg':user.hasMsg}\" class=\"list-group-item\">{{user.login}}</span>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-7 col-lg-7\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading chat-header\" >\n                    <span class=\"glyphicon glyphicon-comment\"></span> Chat Room - [ {{receiver}} ]\n                </div>\n                <hr class=\"line\" />\n                <div  angular2-auto-scroll lock-y-offset=\"5\" observe-attributes class=\"panel-body chat-body\">\n                    <ul class=\"chat\">\n                        <div *ngFor=\"let msg of receiverMessage\">\n                            <li *ngIf=\"msg.senderName != sender\" class=\"left clearfix\"><span class=\"chat-img pull-left\">\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\n                        </span>\n                                <div class=\"chat-body clearfix\">\n                                    <div class=\"header\">\n                                        <strong class=\"primary-font\">{{msg.senderName}}</strong> <small class=\"pull-right text-muted\">\n                                        <span class=\"glyphicon glyphicon-time\"></span>{{msg.createdDate | date :'medium'}}</small>\n                                    </div>\n                                    <div class=\"direct-chat-text\">\n                                    <p>\n                                        {{msg.msg}}\n                                    </p></div>\n                                </div>\n                            </li>\n                            <li *ngIf=\"msg.senderName == sender \"  class=\"right clearfix\"><span class=\"chat-img pull-right\">\n                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\n                        </span>\n                                <div class=\"chat-body clearfix\">\n                                    <div class=\"header\">\n                                        <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{msg.createdDate | date :'medium' }}</small>\n                                        <strong class=\"pull-right primary-font\">{{msg.senderName}}</strong>\n                                    </div>\n                                    <p>\n                                        {{msg.msg}}\n                                    </p>\n                                </div>\n                            </li>\n                        </div>\n                    </ul>\n                </div>\n\n                <div class=\"panel-footer chat-footer\">\n                    <form name=\"sendForm\" role=\"form\" novalidate  #sendForm=\"ngForm\">\n                        <div class=\"input-group\">\n                            <input id=\"btn-input\" type=\"text\" autocomplete=\"off\" [(ngModel)]=\"sendText\" name=\"text\"  required class=\"form-control input-sm\" placeholder=\"Type your message here...\" />\n                            <span class=\"input-group-btn\">\n                            <button [disabled]=\"sendForm.form.invalid\" (click)=\"sendMessage()\" class=\"btn btn-primary\" id=\"btn-chat\">Send</button>\n                        </span>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- DIRECT CHAT -->\n    <!-- DIRECT CHAT -->\n    <div id=\"myDirectChat\" class=\"box box-warning direct-chat direct-chat-warning\">\n        <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Direct Chat</h3>\n            <div class=\"box-tools pull-right\">\n                <span data-toggle=\"tooltip\" title=\"3 New Messages\" class='badge bg-yellow'>3</span>\n                <button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i></button>\n                <button class=\"btn btn-box-tool\" data-toggle=\"tooltip\" title=\"Contacts\" data-widget=\"chat-pane-toggle\"><i class=\"fa fa-comments\"></i></button>\n                <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n        </div><!-- /.box-header -->\n        <div class=\"box-body\">\n            <!-- Conversations are loaded here -->\n            <div class=\"direct-chat-messages\">\n                <!-- Message. Default to the left -->\n                <div class=\"direct-chat-msg\">\n                    <div class='direct-chat-info clearfix'>\n                        <span class='direct-chat-name pull-left'>Alexander Pierce</span>\n                        <span class='direct-chat-timestamp pull-right'>23 Jan 2:00 pm</span>\n                    </div><!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"message user image\" /><!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text-left\">\n                        Is this template really for free? That's unbelievable!\n                    </div><!-- /.direct-chat-text -->\n                </div><!-- /.direct-chat-msg -->\n\n                <!-- Message to the right -->\n                <div class=\"direct-chat-msg right\">\n                    <div class='direct-chat-info clearfix'>\n                        <span class='direct-chat-name pull-right'>Sarah Bullock</span>\n                        <span class='direct-chat-timestamp pull-left'>23 Jan 2:05 pm</span>\n                    </div><!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"message user image\" /><!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                        You better believe it!\n                    </div><!-- /.direct-chat-text -->\n                </div><!-- /.direct-chat-msg -->\n\n                <!-- Message. Default to the left -->\n                <div class=\"direct-chat-msg\">\n                    <div class='direct-chat-info clearfix'>\n                        <span class='direct-chat-name pull-left'>Alexander Pierce</span>\n                        <span class='direct-chat-timestamp pull-right'>23 Jan 5:37 pm</span>\n                    </div><!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"message user image\" /><!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text-left\">\n                        Working with AdminLTE on a great new app! Wanna join?\n                    </div><!-- /.direct-chat-text -->\n                </div><!-- /.direct-chat-msg -->\n\n                <!-- Message to the right -->\n                <div class=\"direct-chat-msg right\">\n                    <div class='direct-chat-info clearfix'>\n                        <span class='direct-chat-name pull-right'>Sarah Bullock</span>\n                        <span class='direct-chat-timestamp pull-left'>23 Jan 6:10 pm</span>\n                    </div><!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"message user image\" /><!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                        I would love to.\n                    </div><!-- /.direct-chat-text -->\n                </div><!-- /.direct-chat-msg -->\n\n            </div><!--/.direct-chat-messages-->\n            <div class=\"box-footer\">\n                <form action=\"#\" method=\"post\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\"/>\n                        <span class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-warning btn-flat\">Send</button>\n                      </span>\n                    </div>\n                </form>\n            </div><!-- /.box-footer-->\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuaHRtbD9mZjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK1ZBQStWLDZIQUE2SCxpREFBaUQsK0JBQStCLFlBQVksdVRBQXVULFVBQVUsNndCQUE2d0IsZ0JBQWdCLDZJQUE2SSxrQ0FBa0MsK01BQStNLFNBQVMseXBCQUF5cEIsbUNBQW1DLDhGQUE4RixnQkFBZ0IsMElBQTBJLFNBQVMsdWlMIiwiZmlsZSI6IjAuMTk1Mjk1YWU0NzQ4YjMxMzU3ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTFcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtIGRpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIExpc3Qgb2YgdXNlcnNcXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDQwMHB4OyBvdmVyZmxvdy15OiBzY3JvbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgdXNlciBvZiB1c2Vyc1xcXCIgKGNsaWNrKT1cXFwib25Vc2VyU2VsZWN0ZWQodXNlcilcXFwiIFtuZ0NsYXNzXT1cXFwieydjaGF0LXNlbGVjdGVkJzp1c2VyLmFjdGl2ZSwnaGFzTXNnJzp1c2VyLmhhc01zZ31cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPnt7dXNlci5sb2dpbn19PC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTcgY29sLWxnLTdcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nIGNoYXQtaGVhZGVyXFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb21tZW50XFxcIj48L3NwYW4+IENoYXQgUm9vbSAtIFsge3tyZWNlaXZlcn19IF1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxociBjbGFzcz1cXFwibGluZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGRpdiAgYW5ndWxhcjItYXV0by1zY3JvbGwgbG9jay15LW9mZnNldD1cXFwiNVxcXCIgb2JzZXJ2ZS1hdHRyaWJ1dGVzIGNsYXNzPVxcXCJwYW5lbC1ib2R5IGNoYXQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImNoYXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgbXNnIG9mIHJlY2VpdmVyTWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwibXNnLnNlbmRlck5hbWUgIT0gc2VuZGVyXFxcIiBjbGFzcz1cXFwibGVmdCBjbGVhcmZpeFxcXCI+PHNwYW4gY2xhc3M9XFxcImNoYXQtaW1nIHB1bGwtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwOi8vcGxhY2Vob2xkLml0LzUwLzU1QzFFNy9mZmYmdGV4dD1VXFxcIiBhbHQ9XFxcIlVzZXIgQXZhdGFyXFxcIiBjbGFzcz1cXFwiaW1nLWNpcmNsZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGF0LWJvZHkgY2xlYXJmaXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcInByaW1hcnktZm9udFxcXCI+e3ttc2cuc2VuZGVyTmFtZX19PC9zdHJvbmc+IDxzbWFsbCBjbGFzcz1cXFwicHVsbC1yaWdodCB0ZXh0LW11dGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdGltZVxcXCI+PC9zcGFuPnt7bXNnLmNyZWF0ZWREYXRlIHwgZGF0ZSA6J21lZGl1bSd9fTwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlyZWN0LWNoYXQtdGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bXNnLm1zZ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwibXNnLnNlbmRlck5hbWUgPT0gc2VuZGVyIFxcXCIgIGNsYXNzPVxcXCJyaWdodCBjbGVhcmZpeFxcXCI+PHNwYW4gY2xhc3M9XFxcImNoYXQtaW1nIHB1bGwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaHR0cDovL3BsYWNlaG9sZC5pdC81MC9GQTZGNTcvZmZmJnRleHQ9TUVcXFwiIGFsdD1cXFwiVXNlciBBdmF0YXJcXFwiIGNsYXNzPVxcXCJpbWctY2lyY2xlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXQtYm9keSBjbGVhcmZpeFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCIgdGV4dC1tdXRlZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdGltZVxcXCI+PC9zcGFuPnt7bXNnLmNyZWF0ZWREYXRlIHwgZGF0ZSA6J21lZGl1bScgfX08L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IHByaW1hcnktZm9udFxcXCI+e3ttc2cuc2VuZGVyTmFtZX19PC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bXNnLm1zZ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyIGNoYXQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcInNlbmRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlICAjc2VuZEZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImJ0bi1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIFsobmdNb2RlbCldPVxcXCJzZW5kVGV4dFxcXCIgbmFtZT1cXFwidGV4dFxcXCIgIHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cXFwiIHBsYWNlaG9sZGVyPVxcXCJUeXBlIHlvdXIgbWVzc2FnZSBoZXJlLi4uXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCJzZW5kRm9ybS5mb3JtLmludmFsaWRcXFwiIChjbGljayk9XFxcInNlbmRNZXNzYWdlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGlkPVxcXCJidG4tY2hhdFxcXCI+U2VuZDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0gRElSRUNUIENIQVQgLS0+XFxuICAgIDwhLS0gRElSRUNUIENIQVQgLS0+XFxuICAgIDxkaXYgaWQ9XFxcIm15RGlyZWN0Q2hhdFxcXCIgY2xhc3M9XFxcImJveCBib3gtd2FybmluZyBkaXJlY3QtY2hhdCBkaXJlY3QtY2hhdC13YXJuaW5nXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlXFxcIj5EaXJlY3QgQ2hhdDwvaDM+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LXRvb2xzIHB1bGwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgdGl0bGU9XFxcIjMgTmV3IE1lc3NhZ2VzXFxcIiBjbGFzcz0nYmFkZ2UgYmcteWVsbG93Jz4zPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWJveC10b29sXFxcIiBkYXRhLXdpZGdldD1cXFwiY29sbGFwc2VcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1taW51c1xcXCI+PC9pPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWJveC10b29sXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgdGl0bGU9XFxcIkNvbnRhY3RzXFxcIiBkYXRhLXdpZGdldD1cXFwiY2hhdC1wYW5lLXRvZ2dsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnRzXFxcIj48L2k+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tYm94LXRvb2xcXFwiIGRhdGEtd2lkZ2V0PVxcXCJyZW1vdmVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+PCEtLSAvLmJveC1oZWFkZXIgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keVxcXCI+XFxuICAgICAgICAgICAgPCEtLSBDb252ZXJzYXRpb25zIGFyZSBsb2FkZWQgaGVyZSAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXJlY3QtY2hhdC1tZXNzYWdlc1xcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gTWVzc2FnZS4gRGVmYXVsdCB0byB0aGUgbGVmdCAtLT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlyZWN0LWNoYXQtbXNnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RpcmVjdC1jaGF0LWluZm8gY2xlYXJmaXgnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdkaXJlY3QtY2hhdC1uYW1lIHB1bGwtbGVmdCc+QWxleGFuZGVyIFBpZXJjZTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZGlyZWN0LWNoYXQtdGltZXN0YW1wIHB1bGwtcmlnaHQnPjIzIEphbiAyOjAwIHBtPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmRpcmVjdC1jaGF0LWluZm8gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJkaXJlY3QtY2hhdC1pbWdcXFwiIHNyYz1cXFwiZGlzdC9pbWcvdXNlcjEtMTI4eDEyOC5qcGdcXFwiIGFsdD1cXFwibWVzc2FnZSB1c2VyIGltYWdlXFxcIiAvPjwhLS0gLy5kaXJlY3QtY2hhdC1pbWcgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXJlY3QtY2hhdC10ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIElzIHRoaXMgdGVtcGxhdGUgcmVhbGx5IGZvciBmcmVlPyBUaGF0J3MgdW5iZWxpZXZhYmxlIVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmRpcmVjdC1jaGF0LXRleHQgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5kaXJlY3QtY2hhdC1tc2cgLS0+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gTWVzc2FnZSB0byB0aGUgcmlnaHQgLS0+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRpcmVjdC1jaGF0LW1zZyByaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdkaXJlY3QtY2hhdC1pbmZvIGNsZWFyZml4Jz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZGlyZWN0LWNoYXQtbmFtZSBwdWxsLXJpZ2h0Jz5TYXJhaCBCdWxsb2NrPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdkaXJlY3QtY2hhdC10aW1lc3RhbXAgcHVsbC1sZWZ0Jz4yMyBKYW4gMjowNSBwbTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5kaXJlY3QtY2hhdC1pbmZvIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZGlyZWN0LWNoYXQtaW1nXFxcIiBzcmM9XFxcImRpc3QvaW1nL3VzZXIzLTEyOHgxMjguanBnXFxcIiBhbHQ9XFxcIm1lc3NhZ2UgdXNlciBpbWFnZVxcXCIgLz48IS0tIC8uZGlyZWN0LWNoYXQtaW1nIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlyZWN0LWNoYXQtdGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGJldHRlciBiZWxpZXZlIGl0IVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmRpcmVjdC1jaGF0LXRleHQgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5kaXJlY3QtY2hhdC1tc2cgLS0+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gTWVzc2FnZS4gRGVmYXVsdCB0byB0aGUgbGVmdCAtLT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlyZWN0LWNoYXQtbXNnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RpcmVjdC1jaGF0LWluZm8gY2xlYXJmaXgnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdkaXJlY3QtY2hhdC1uYW1lIHB1bGwtbGVmdCc+QWxleGFuZGVyIFBpZXJjZTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZGlyZWN0LWNoYXQtdGltZXN0YW1wIHB1bGwtcmlnaHQnPjIzIEphbiA1OjM3IHBtPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmRpcmVjdC1jaGF0LWluZm8gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJkaXJlY3QtY2hhdC1pbWdcXFwiIHNyYz1cXFwiZGlzdC9pbWcvdXNlcjEtMTI4eDEyOC5qcGdcXFwiIGFsdD1cXFwibWVzc2FnZSB1c2VyIGltYWdlXFxcIiAvPjwhLS0gLy5kaXJlY3QtY2hhdC1pbWcgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXJlY3QtY2hhdC10ZXh0LWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFdvcmtpbmcgd2l0aCBBZG1pbkxURSBvbiBhIGdyZWF0IG5ldyBhcHAhIFdhbm5hIGpvaW4/XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uZGlyZWN0LWNoYXQtdGV4dCAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmRpcmVjdC1jaGF0LW1zZyAtLT5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBNZXNzYWdlIHRvIHRoZSByaWdodCAtLT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlyZWN0LWNoYXQtbXNnIHJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RpcmVjdC1jaGF0LWluZm8gY2xlYXJmaXgnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdkaXJlY3QtY2hhdC1uYW1lIHB1bGwtcmlnaHQnPlNhcmFoIEJ1bGxvY2s8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2RpcmVjdC1jaGF0LXRpbWVzdGFtcCBwdWxsLWxlZnQnPjIzIEphbiA2OjEwIHBtPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmRpcmVjdC1jaGF0LWluZm8gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJkaXJlY3QtY2hhdC1pbWdcXFwiIHNyYz1cXFwiZGlzdC9pbWcvdXNlcjMtMTI4eDEyOC5qcGdcXFwiIGFsdD1cXFwibWVzc2FnZSB1c2VyIGltYWdlXFxcIiAvPjwhLS0gLy5kaXJlY3QtY2hhdC1pbWcgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXJlY3QtY2hhdC10ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBJIHdvdWxkIGxvdmUgdG8uXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uZGlyZWN0LWNoYXQtdGV4dCAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmRpcmVjdC1jaGF0LW1zZyAtLT5cXG5cXG4gICAgICAgICAgICA8L2Rpdj48IS0tLy5kaXJlY3QtY2hhdC1tZXNzYWdlcy0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJUeXBlIE1lc3NhZ2UgLi4uXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWZsYXRcXFwiPlNlbmQ8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICA8L2Rpdj48IS0tIC8uYm94LWZvb3Rlci0tPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9