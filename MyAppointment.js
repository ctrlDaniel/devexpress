import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const MyAppointment = ({
    children, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: '#33ADFF',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  export default MyAppointment