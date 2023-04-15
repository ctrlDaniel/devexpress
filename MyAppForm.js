import * as React from 'react';
import { useState } from 'react';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import TextField from '@mui/material/TextField';
import {schedulerData} from './data.js'





const MyTextEditor = () => {
    const [flagValue,setFlagValueChange] = useState('');
    const [t2sValue,setT2sValueChange] = useState(0);
    return(
        <div>
        
        <AppointmentForm.TextEditor 
            placeholder='flag'
            type='noteTextEditor'
            readOnly= {false}
            value={flagValue}
            onValueChange={setFlagValueChange}
            />
            <AppointmentForm.TextEditor 
            placeholder='time 2 skip'
            type='noteTextEditor'
            readOnly= {false}
            value={t2sValue}
            onValueChange={setT2sValueChange}
            />
            
            </div>
            
    )
}

export const MyAppointmentForm = () => {
    return(
        <AppointmentForm
            recurrenceLayoutComponent={MyTextEditor}
            //commandButtonComponent={MyButton}
        >
            
        </AppointmentForm>
    )
}



