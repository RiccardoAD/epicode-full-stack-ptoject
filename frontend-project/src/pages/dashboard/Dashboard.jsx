import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import { isToday, format, parseISO, isAfter } from 'date-fns';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './dashboard.css';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/apiClient';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const { signOut, user } = useAuth();
  const [monthAvailability, setMonthAvailability] = useState([]);

  const handleDateChange = useCallback((day, modifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  useEffect(() => {
    api
      .get(`/appointments/me`, {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then((response) => {
        const appointmentsFormatted = response.data.map((appointment) => {
          return {
            ...appointment,
            hourFormatted: format(parseISO(appointment.date), 'HH:mm'),
          };
        });

        setAppointments(appointmentsFormatted);
      });
  }, [selectedDate]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => !monthDay.available)
      .map((monthDay) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, 'MMMM, dd');
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc');
  }, [selectedDate]);

  const morningAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() < 12;
    });
  }, [appointments]);

  const afternoonAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() >= 12;
    });
  }, [appointments]);

  const nextAppointment = useMemo(() => {
    return appointments.find((appointment) =>
      isAfter(parseISO(appointment.date), new Date())
    );
  }, [appointments]);

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <img src={logoImg} alt="GoBarber" />

          <div className="profile">
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Welcome,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </div>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </div>
      </header>
      <div className="content">
        <div className="schedule">
          <h1>Appointments Schedule</h1>
          <p>
            {isToday(selectedDate) && <span>Today</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

          {isToday(selectedDate) && nextAppointment && (
            <div className="next-appointment">
              <strong>Next appointment</strong>
              <div>
                <img
                  src={nextAppointment.user.avatar_url}
                  alt={nextAppointment.user.name}
                />
                <strong>{nextAppointment.user.name}</strong>
                <span>
                  <FiClock />
                  {nextAppointment.hourFormatted}
                </span>
              </div>
            </div>
          )}

          <div className="section">
            <strong>Morning</strong>

            {morningAppointments.length === 0 && (
              <p>There is no appointments for this date</p>
            )}

            {morningAppointments.map((appointment) => (
              <div className="appointment" key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.hourFormatted}
                </span>
                <div>
                  <img
                    src={appointment.user.avatar_url}
                    alt={appointment.user.name}
                  />
                  <strong>{appointment.user.name}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="section">
            <strong>Afternoon</strong>

            {afternoonAppointments.length === 0 && (
              <p>There is no appointments for this date</p>
            )}
            {afternoonAppointments.map((appointment) => (
              <div className="appointment" key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.hourFormatted}
                </span>
                <div>
                  <img
                    src={appointment.user.avatar_url}
                    alt={appointment.user.name}
                  />
                  <strong>{appointment.user.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="calendar">
          <DayPicker
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;















// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { FiClock, FiPower } from 'react-icons/fi';
// import { isToday, format, parseISO, isAfter } from 'date-fns';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import './dashboard.css';
// import logoImg from '../../assets/logo.svg';
// import { useAuth } from '../../hooks/auth';
// import api from '../../services/apiClient';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [appointments, setAppointments] = useState([]);
//   const { signOut, user } = useAuth();
//   const [monthAvailability, setMonthAvailability] = useState([]);

//   const handleDateChange = useCallback((day, modifiers) => {
//     if (modifiers.available && !modifiers.disabled) {
//       setSelectedDate(day);
//     }
//   }, []);

//   const handleMonthChange = useCallback((month) => {
//     setCurrentMonth(month);
//   }, []);

//   useEffect(() => {
//     api
//       .get(`/providers/${user.id}/month-availability`, {
//         params: {
//           year: currentMonth.getFullYear(),
//           month: currentMonth.getMonth() + 1,
//         },
//       })
//       .then((response) => {
//         setMonthAvailability(response.data);
//       });
//   }, [currentMonth, user.id]);

//   useEffect(() => {
//     api
//       .get(`/appointments/me`, {
//         params: {
//           year: selectedDate.getFullYear(),
//           month: selectedDate.getMonth() + 1,
//           day: selectedDate.getDate(),
//         },
//       })
//       .then((response) => {
//         const appointmentsFormatted = response.data.map((appointment) => {
//           return {
//             ...appointment,
//             hourFormatted: format(parseISO(appointment.date), 'HH:mm'),
//           };
//         });

//         setAppointments(appointmentsFormatted);
//       });
//   }, [selectedDate]);

//   const disabledDays = useMemo(() => {
//     const dates = monthAvailability
//       .filter((monthDay) => !monthDay.available)
//       .map((monthDay) => {
//         const year = currentMonth.getFullYear();
//         const month = currentMonth.getMonth();

//         return new Date(year, month, monthDay.day);
//       });

//     return dates;
//   }, [currentMonth, monthAvailability]);

//   const selectedDateAsText = useMemo(() => {
//     return format(selectedDate, 'MMMM, dd');
//   }, [selectedDate]);

//   const selectedWeekDay = useMemo(() => {
//     return format(selectedDate, 'cccc');
//   }, [selectedDate]);

//   const morningAppointments = useMemo(() => {
//     return appointments.filter((appointment) => {
//       return parseISO(appointment.date).getHours() < 12;
//     });
//   }, [appointments]);

//   const afternoonAppointments = useMemo(() => {
//     return appointments.filter((appointment) => {
//       return parseISO(appointment.date).getHours() >= 12;
//     });
//   }, [appointments]);

//   const nextAppointment = useMemo(() => {
//     return appointments.find((appointment) =>
//       isAfter(parseISO(appointment.date), new Date())
//     );
//   }, [appointments]);

//   return (
//     <div className="container">
//       <header className="header">
//         <div className="header-content">
//           <img src={logoImg} alt="GoBarber" />

//           <div className="profile">
//             <img src={user.avatar_url} alt={user.name} />
//             <div>
//               <span>Welcome,</span>
//               <Link to="/profile">
//                 <strong>{user.name}</strong>
//               </Link>
//             </div>
//           </div>

//           <button type="button" onClick={signOut}>
//             <FiPower />
//           </button>
//         </div>
//       </header>
//       <div className="content">
//         <div className="schedule">
//           <h1>Appointments Schedule</h1>
//           <p>
//             {isToday(selectedDate) && <span>Today</span>}
//             <span>{selectedDateAsText}</span>
//             <span>{selectedWeekDay}</span>
//           </p>

//           {isToday(selectedDate) && nextAppointment && (
//             <div className="next-appointment">
//               <strong>Next appointment</strong>
//               <div>
//                 <img
//                   src={nextAppointment.user.avatar_url}
//                   alt={nextAppointment.user.name}
//                 />
//                 <strong>{nextAppointment.user.name}</strong>
//                 <span>
//                   <FiClock />
//                   {nextAppointment.hourFormatted}
//                 </span>
//               </div>
//             </div>
//           )}

//           <div className="section">
//             <strong>Morning</strong>

//             {morningAppointments.length === 0 && (
//               <p>There is no appointments for this date</p>
//             )}

//             {morningAppointments.map((appointment) => (
//               <div className="appointment" key={appointment.id}>
//                 <span>
//                   <FiClock />
//                   {appointment.hourFormatted}
//                 </span>
//                 <div>
//                   <img
//                     src={appointment.user.avatar_url}
//                     alt={appointment.user.name}
//                   />
//                   <strong>{appointment.user.name}</strong>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="section">
//             <strong>Afternoon</strong>

//             {afternoonAppointments.length === 0 && (
//               <p>There is no appointments for this date</p>
//             )}
//             {afternoonAppointments.map((appointment) => (
//               <div className="appointment" key={appointment.id}>
//                 <span>
//                   <FiClock />
//                   {appointment.hourFormatted}
//                 </span>
//                 <div>
//                   <img
//                     src={appointment.user.avatar_url}
//                     alt={appointment.user.name}
//                   />
//                   <strong>{appointment.user.name}</strong>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="calendar">
//           <DayPicker
//             fromMonth={new Date()}
//             disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
//             onDayClick={handleDateChange}
//             onMonthChange={handleMonthChange}
//             selectedDays={selectedDate}
//             modifiers={{
//               available: { daysOfWeek: [1, 2, 3, 4, 5] },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;