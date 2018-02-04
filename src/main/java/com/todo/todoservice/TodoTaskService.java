package com.todo.todoservice;

import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.entity.TaskEntity;

@Service
public interface TodoTaskService {
	
public List<TaskEntity> getAllTasks();

public String saveTask(TaskEntity taskEntity);

public String deleteTasks(List<Long> taskIds);

public String updateTasks(List<Long> taskIds);

}
