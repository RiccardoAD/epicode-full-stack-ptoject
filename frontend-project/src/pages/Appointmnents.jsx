
import AppointmentsList from '../components/AppointmentsList';
import AppointmentsBooking from '../components/AppointmentsBooking';
import AppointmentsForm from '../components/AppointmentsForm';
// import '../asset/style.css'
 
 
 const Appointments = () => {
   return (
    <div>
      {/* <Header /> */}
       
         <AppointmentsForm />
         <AppointmentsBooking />
         <AppointmentsList />
         {/* <Appointment /> */}
       
     </div>
  );
 };

 export default Appointments;