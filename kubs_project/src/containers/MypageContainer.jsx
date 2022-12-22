import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MypageComponent from '../components/MypageComponent';
import mypage from '../thunk/mypage';
import useDidMountEffect from '../util/useDidMountEffect';

function MypageContainer() {
  const [name, setName] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);
  const [reservationList, setReservationList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onMain = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  const onApply = (e) => {
    e.preventDefault();
    navigate('/apply');
  };

  const onLogout = (e) => {
    e.preventDefault();
    navigate('/');
    sessionStorage.removeItem('authorized');
  };

  useDidMountEffect(() => {
    dispatch(mypage()).then((res) => {
      console.log(res);
      setName(res.payload.data.name);
      setStudentId(res.payload.data.studentId);
      setEmail(res.payload.data.email);
      setPhoneNumber(res.payload.data.phoneNumber);
      setDepartmentName(res.payload.data.departmentName);
      setReservationList(res.payload.data.bookings);
    });
  });

  if (name === null) return <div>null</div>;

  return (
    <MypageComponent
      name={name}
      studentId={studentId}
      email={email}
      phoneNumber={phoneNumber}
      departmentName={departmentName}
      reservationList={reservationList}
      onMain={onMain}
      onApply={onApply}
      onLogout={onLogout}
    />
  );
}

export default MypageContainer;
