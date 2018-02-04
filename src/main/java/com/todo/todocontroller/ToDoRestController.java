package com.todo.todocontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.todo.entity.TaskEntity;
import com.todo.todoservice.TodoTaskService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="/todo")
public class ToDoRestController {
	
	@Autowired
	private TodoTaskService todoTaskService;
		
	 @RequestMapping(value="/getAllTasks", method=RequestMethod.GET)
	 public List<TaskEntity> getAllTasks() {
		return todoTaskService.getAllTasks();
	 }
	 
	 @RequestMapping(value="/saveTask", method=RequestMethod.POST)
	 public String saveTask(@RequestBody TaskEntity task) {
		 return todoTaskService.saveTask(task);
	 }
	 
	 @RequestMapping(value="/deleteTasks", method=RequestMethod.POST)
	 public String deleteTasks(@RequestBody List<Long> taskIds) {
		 return todoTaskService.deleteTasks(taskIds);
	 }
	 
	 @RequestMapping(value="/updateTasks", method=RequestMethod.POST)
	 public String updateTasks(@RequestBody List<Long> taskIds) {		 
		 return todoTaskService.updateTasks(taskIds);
	 }
	 
}
