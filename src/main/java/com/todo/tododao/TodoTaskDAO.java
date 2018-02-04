package com.todo.tododao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.todo.entity.TaskEntity;

@Repository
public interface TodoTaskDAO {
	
	public List<TaskEntity> getAllTasksDAO();
	
	public String saveTask(TaskEntity taskEntity);
	
	public String deleteTasks(List<Long> taskIds);
	
	public String updateTasks(List<Long> taskIds);
}
