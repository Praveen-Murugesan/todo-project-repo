package com.todo.tododao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.todo.entity.TaskEntity;

@Repository
@Transactional
public class TodoTaskDAOImpl implements TodoTaskDAO{

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<TaskEntity> getAllTasksDAO() {
		Query query = entityManager.createNamedQuery("get_all_tasks", TaskEntity.class);
		return query.getResultList();
	}

	@Override
	public String saveTask(TaskEntity taskEntity) {
		String res = "failure";
		try {			
			entityManager.persist(taskEntity);
			res = "success";
		}catch(PersistenceException e) {
			res = "failure";
		}		
		return res;
	}

	@Override
	public String deleteTasks(List<Long> taskIds) {
		int res = entityManager.createQuery("delete from TaskEntity te where te.taskId in (:tskIds)").
				setParameter("tskIds", taskIds).executeUpdate();
		return (res > 0 ? "success" : "failure");
	}

	@Override
	public String updateTasks(List<Long> taskIds) {
		int res = entityManager.createQuery("update TaskEntity te set te.taskStatus='Completed' where te.taskId in (:tskIds)").
				setParameter("tskIds", taskIds).executeUpdate();
		return (res > 0 ? "success" : "failure");
	}

} 
