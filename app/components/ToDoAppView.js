import React, { Component } from 'react';
import { View, Button, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Task from './Task';

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: red;
`;

const StyledPageHeader = styled.Text`
  font-size: 24px;
  padding: 0px 16px;
  color: #fff;
`;

const StyledHeader = styled.Text`
  font-size: 24px;
  padding: 16px;
`;

const StyledClosedTasked = styled.Text`
  font-size: 16px;
  text-align: center
  margin: 30px;
`;

export default class ToDoAppView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFinishedTasks: false
    };

    this.onToggleFinishedTasks = this.onToggleFinishedTasks.bind(this);
  }

  onToggleFinishedTasks() {
    this.setState({
      showFinishedTasks: !this.state.showFinishedTasks
    });
  }

  render() {
    const { tasks, onAddNewTask, onEditTask, onFinishTask, onTaskDelete } = this.props;

    return (
      <View>
        <ScrollView>
          <StyledView>
            <StyledPageHeader>ToDo App</StyledPageHeader>
          </StyledView>

          <StyledHeader>ToDo List:</StyledHeader>

          <View>
            {
              Object.keys(tasks).map((task) => ((
                (tasks[task] !== null && tasks[task].isActive) ?
                  <Task isActive task={ tasks[task].text } id={ task } key={ task } onEditTask={ onEditTask }
                        onTaskDelete={ onTaskDelete } onFinishTask={ onFinishTask }
                  /> : null
              )))
            }
          </View>

          <Button title='Добавить задачу' onPress={ onAddNewTask } />

          <TouchableWithoutFeedback  onPress={ this.onToggleFinishedTasks }>
            <StyledClosedTasked>
              { this.state.showFinishedTasks ? 'Скрыть завершенные задачи' : 'Показать завершенные задачи'}
            </StyledClosedTasked>
          </TouchableWithoutFeedback >

          <View>
            {
              this.state.showFinishedTasks ?
                Object.keys(tasks).map((task) => ((
                  (tasks[task] !== null && !tasks[task].isActive) ?
                    <Task isActive={ false } task={ tasks[task].text } id={ task } key={ task }
                          onEditTask={ onEditTask } onTaskDelete={ onTaskDelete } onFinishTask={ onFinishTask }/> : null
                ))) : null
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

ToDoAppView.propTypes = {
  tasks: PropTypes.object,
  onAddNewTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onFinishTask: PropTypes.func,
  onTaskDelete: PropTypes.func
};
