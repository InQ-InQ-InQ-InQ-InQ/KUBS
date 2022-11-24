
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../thunk/login";
// import ApplyComponent from "../components/ApplyComponent";

// const ApplyContainer = () => {
//     const dispatch = useDispatch();
//     // const navigate = useNavigate();

//     const [date, setDate] = useState("");
//     const [startTime, setStartTime] = useState("");
//     const [duration, setDuration] = useState("");

//     const onDateHandler = (e) => {
//         setDate(e.currentTarget.value);
//     }

//     const onStartTimeHandler = (e) => {
//         setStartTime(e.currentTarget.value);
//     }

//     const onDurationHandler = (e) => {
//         setDuration(e.currentTarget.value);
//     }


//     const onSubmitHandler = (e) => {
//         e.preventDefault();
//         let body = {
//             date: date,
//             startTime: startTime,
//             duration: duration
//         }

//         dispatch(login(body));
//     }

//     return (
//         <ApplyComponent 
//             onDateHandler={onDateHandler} onstartTimeHandler={onStartTimeHandler} 
//             onDurationHandler={onDurationHandler} onSubmitHandler={onSubmitHandler}
//         />
//     );
// };

// export default ApplyContainer;