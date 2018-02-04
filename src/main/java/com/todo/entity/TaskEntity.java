package com.todo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="TASK")
@NamedQuery(query=" select tsk from TaskEntity tsk order by tsk.taskDueDate desc", name="get_all_tasks")
public class TaskEntity {
	
	@Id
	@Column(name="TASK_ID")
	@SequenceGenerator(sequenceName = "TASK_SEQUENCE", name = "taskSeq", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="taskSeq")	
	private Long taskId;
	
	@Column(name="TASK_NAME")
	private String taskName;
	
	@Column(name="TASK_DESC")
	private String taskDesc;
	
	@Column(name="TASK_DUE_DATE")
	private Date taskDueDate;
	
	@Column(name="TASK_STATUS")
	private String taskStatus;
		
	public Long getTaskId() {
		return taskId;
	}
	public void setTaskId(Long taskId) {
		this.taskId = taskId;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getTaskDesc() {
		return taskDesc;
	}
	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}
	public Date getTaskDueDate() {
		return taskDueDate;
	}
	public void setTaskDueDate(Date taskDueDate) {
		this.taskDueDate = taskDueDate;
	}
	public String getTaskStatus() {
		return taskStatus;
	}
	public void setTaskStatus(String taskStatus) {
		this.taskStatus = taskStatus;
	}	
}
