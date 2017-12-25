import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const { item } = actionTypes;
const { groupState } = initialState;

const actionStates = {
  PENDING: 'PENDING',
  SUCCESSFUL: 'SUCCESSFUL',
  FAILED: 'FAILED',
};

const DeleteItem = (state, action, actionState) => {
  switch (actionState) {
    case actionStates.PENDING:
      return {
        ...state,
        deleteItemSuccessful: false,
        deleteItemPending: true,
        currentItemErrorMessage: '',
      };
    case actionStates.SUCCESSFUL:
      return {
        ...state,
        deletedIndex: action.payload,
        deleteItemSuccessful: true,
        deleteItemPending: false,
      }
  }
} 
