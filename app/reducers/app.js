import {
  ADD_NEW_TASK,
  FINISH_TASK,
  DELETE_TASK,
  EDIT_TASK
} from '../constants/Constants';

/* eslint-disable */
const generateUUID = () => {
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};
/* eslint-enable */

const initialState = {
  tasks: {
    id1: {
      text: 'Task 1',
      isActive: false
    },
    id2: {
      text: 'Task 2',
      isActive: false
    },
    id3: {
      text: 'Task 3',
      isActive: true
    },
    id4: {
      text: 'Task 4',
      isActive: true
    }
  }
};

// TODO: this looks ugly, try to use smth different to provide immutability
export default function app(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TASK:
      const UUID = generateUUID();

      return {
        ...state, tasks: {
          ...state.tasks,
          [UUID]: {
            ...state.tasks[UUID],
            text: 'New Task',
            isActive: true
          }
        }
      };

    case FINISH_TASK:
      return {
        ...state, tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            isActive: !state.tasks[action.payload.id].isActive
          }
        }
      };

    case DELETE_TASK:
      return {
        ...state, tasks: {
          ...state.tasks,
          [action.payload.id]: null
        }
      };

    case EDIT_TASK:
      return {
        ...state, tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            text: action.payload.editedTask
          }
        }
      };

    default:
      return state;
  }
}
