import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as AppActions from '../actions/AppActions';

import ToDoAppView from '../components/ToDoAppView';

class TodoAppMain extends Component {
  constructor(props) {
    super(props);

    this.onAddNewTask = this.onAddNewTask.bind(this);
    this.onEditTask = this.onEditTask.bind(this);
    this.onFinishTask = this.onFinishTask.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
  }

  onAddNewTask() {
    this.props.appActions.addNewTask();
  }

  onEditTask(id, editedTask) {
    this.props.appActions.editTask(id, editedTask);
  }

  onFinishTask(id) {
    this.props.appActions.finishTask(id);
  }

  onTaskDelete(id) {
    this.props.appActions.deleteTask(id);
  }

  render() {
    const { tasks } = this.props.app;

    return (
      <ToDoAppView
        tasks={ tasks }
        onAddNewTask={ this.onAddNewTask }
        onEditTask={ this.onEditTask }
        onFinishTask={ this.onFinishTask }
        onTaskDelete={ this.onTaskDelete }
      />
    );
  }
}

TodoAppMain.propTypes = {
  app: PropTypes.object,
  appActions: PropTypes.object
};

const mapStateToProps = (state) => ({
  app: state.app
});

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(AppActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppMain);
