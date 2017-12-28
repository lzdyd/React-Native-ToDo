import React, { Component } from 'react';
import { CheckBox, Button } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
  border: 0px solid #000;
  border-bottom-width: 1px;
`;

const StyledTextInput = styled.TextInput`
  flex: 2;
  padding-top: 4px;
  padding-left: 7px;
  padding-right: 24px;
  font-size: 16px;
`;

export default class ToDoAppActiveTask extends Component {
  constructor(props) {
    super(props);

    // Antipattern, but for some reasons TextInput's value can not be changed without onChange func
    this.state = {
      taskText: this.props.task
    };

    this.onEditTask = this.onEditTask.bind(this);
    this.onFinishTask = this.onFinishTask.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
  }

  onEditTask() {
    this.props.onEditTask(this.props.id, this.state.taskText);
  }

  onFinishTask() {
    this.props.onFinishTask(this.props.id);
  }

  onTaskDelete() {
    this.props.onTaskDelete(this.props.id);
  }

  render() {
    return (
      <StyledView>
        {
          this.props.isActive ?
            <CheckBox onChange={ this.onFinishTask } value={ false } /> :
            <CheckBox onChange={ this.onFinishTask } value />
        }
        <StyledTextInput value={ this.state.taskText } onChangeText={(text) => this.setState({ taskText: text })}
                         onEndEditing={ this.onEditTask } />
        <Button title="Удалить" onPress={ this.onTaskDelete } />
      </StyledView>
    );
  }
}

ToDoAppActiveTask.propTypes = {
  isActive: PropTypes.bool,
  task: PropTypes.string,
  id: PropTypes.string,
  onEditTask: PropTypes.func,
  onTaskDelete: PropTypes.func,
  onFinishTask: PropTypes.func
};
