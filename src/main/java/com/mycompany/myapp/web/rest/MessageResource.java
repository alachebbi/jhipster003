package com.mycompany.myapp.web.rest;

import java.time.ZonedDateTime;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import com.mycompany.myapp.service.util.StaticWebsocketMessageStore;
import com.mycompany.myapp.service.dto.Message;




@Controller
public class MessageResource {
	@MessageMapping("/hello")
	@SendTo("/topic/messages")
	public Message greeting( Message message) throws Exception {
		message.setCreatedDate(ZonedDateTime.now());
		StaticWebsocketMessageStore.messages.add(message);
		return message;
	}

}
