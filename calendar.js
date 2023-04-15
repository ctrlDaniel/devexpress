import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    WeekView,
    Toolbar,
    ViewSwitcher,
    MonthView,
    DateNavigator, 
    TodayButton,
    DragDropProvider,
    Resources,
    ConfirmationDialog,
    CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui';
import {schedulerData, currentDate} from './data.js'
import { CheckBoxContainer } from './checkbox.js';
import {MyAppointmentForm} from './MyAppForm.js'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

export default class Calendar extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: schedulerData,
        shadePreviousCells: true,
        shadePreviousAppointments: true,
        
      };
  
      this.commitChanges = this.commitChanges.bind(this);
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(stateField) {
        const { [stateField]: fieldToChange } = this.state;
        this.setState({
          [stateField]: !fieldToChange,
        });
      }
  
    commitChanges({ added, changed, deleted }) {
      this.setState((state) => {
        let { data } = state;
        if (added) {
            console.log("redirecting...")
          const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
          data = [...data, { id: startingAddedId, ...added }];
        }
        if (changed) {
            console.log("redirecting...")
          data = data.map(appointment => (
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        }
        if (deleted !== undefined) {
            console.log("redirecting...")
          data = data.filter(appointment => appointment.id !== deleted);
        }
        return { data };
      });
    }

    /*store = configureStore({
      reducer: this.commitChanges,
    })*/

    
  
    render() {
      const { currentDate, data, shadePreviousCells, shadePreviousAppointments} = this.state;
  

    
    return (
        //<Provider store={this.store}>
        <React.Fragment>
            <Grid container>
            <CheckBoxContainer
                shadePreviousCells={shadePreviousCells}
                shadePreviousAppointments={shadePreviousAppointments}
                handleCheckboxChange={this.handleCheckboxChange}
          />
            </Grid>
        <Paper>
            <Scheduler
                data={data}
                height={660}   
            >
                <ViewState
                    currentDate={currentDate}
                />
                <EditingState 
                    onCommitChanges={this.commitChanges}
                />
                <IntegratedEditing />
                <DayView
                    startDayHour={0}
                    endDayHour={24}
                />
                <WeekView
                    startDayHour={0}
                    endDayHour={24}
                />
                <MonthView
                    startDayHour={10}
                    endDayHour={19}
                />
                <Toolbar />
                <ViewSwitcher />
                <DateNavigator />
                <ConfirmationDialog />
                <Appointments 
                    //appointmentComponent={MyAppointment}
                />
                <AppointmentTooltip 
                    showOpenButton
                    showDeleteButton
                />
                <MyAppointmentForm />
                <DragDropProvider />
                <CurrentTimeIndicator 
                    shadePreviousCells={shadePreviousCells}
                    shadePreviousAppointments={shadePreviousAppointments}
                />
            </Scheduler>
        </Paper>
        </React.Fragment>
        //</Provider>
      );
    };  
};

