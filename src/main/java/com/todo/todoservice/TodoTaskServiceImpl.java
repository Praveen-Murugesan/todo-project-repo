package com.todo.todoservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.entity.TaskEntity;
import com.todo.tododao.TodoTaskDAO;

@Service
public class TodoTaskServiceImpl implements TodoTaskService {

	@Autowired
	private TodoTaskDAO todoTaskDao;
	
	@Override
	public List<TaskEntity> getAllTasks() {
		return todoTaskDao.getAllTasksDAO();
	}

	@Override
	public String deleteTasks(List<Long> taskIds) {
		return todoTaskDao.deleteTasks(taskIds);
	}

	@Override
	public String updateTasks(List<Long> taskIds) {
		return todoTaskDao.updateTasks(taskIds);
	}

	@Override
	public String saveTask(TaskEntity taskEntity) {		
		return todoTaskDao.saveTask(taskEntity);
	}

}
	