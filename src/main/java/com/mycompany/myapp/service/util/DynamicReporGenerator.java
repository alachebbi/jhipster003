package com.mycompany.myapp.service.util;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import net.sf.dynamicreports.report.builder.DynamicReports;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Component
public class DynamicReporGenerator {
	
	
	private static final String TEMPLATE_PREF = "classpath:jrxml/";
	private static final String TEMPLATE_EXT = ".jrxml";
	private ApplicationContext context ;
	
	public DynamicReporGenerator( ApplicationContext context) {
		this.context = context ;
	}
	
	public void generate(HttpServletResponse resp,  List<?> data,String templateName)
			throws IOException, DRException {
		JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(data);
		InputStream is = context.getResource(TEMPLATE_PREF+templateName+TEMPLATE_EXT).getInputStream();
		resp.setContentType("application/pdf");
        OutputStream out = resp.getOutputStream();
        DynamicReports.report()
        .setTemplateDesign(is)
      	.setDataSource(dataSource)
      	.toPdf(out);
        
	}

}
