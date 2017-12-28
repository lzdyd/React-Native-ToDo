import {
  ADD_NEW_TASK,
  FINISH_TASK,
  DELETE_TASK,
  EDIT_TASK
} from '../constants/Constants';

export function addNewTask() {
  return {
    type: ADD_NEW_TASK
  };
}

export function finishTask(id) {
  return {
    type: FINISH_TASK,
    payload: {
      id
    }
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  };
}

export function editTask(id, editedTask) {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      editedTask
    }
  };
}
