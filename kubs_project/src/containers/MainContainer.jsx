import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApplyComponent from '../components/ApplyComponent';
import MainComponent from '../components/MainComponent';
import CompleteComponent from '../components/CompleteComponent';

function MainContainer() {
  useEffect(() => {
    axios
      .get('/api/')
      .then((결과) => {
        console.log(결과.data);
      })
      .catch(() => {
        console.log('실패');
      });
  });

  const navigate = useNavigate();

  const building = [
    { name: '1강', value: 'ONE' },
    { name: '2강', value: 'TWO' },
    { name: '3강', value: 'THREE' },
    { name: '예대', value: 'A' },
    { name: '학생관', value: 'B' },
    { name: '복지관', value: 'C' },
    { name: '어울림관', value: 'D' },
    { name: '4강', value: 'FOUR' },
    { name: '5강', value: 'FIVE' },
    { name: '이스퀘어', value: 'E' },
    { name: '6강', value: 'SIX' },
    { name: '7강', value: 'SEVEN' },
    { name: '8강', value: 'EIGHT' },
    { name: '제2공학관', value: 'NINE' },
    { name: '대운동장', value: 'F' },
    { name: '풋살장', value: 'G' },
    { name: '테니스장', value: 'H' },
  ];

  const radios = [
    { name: '09시', value: '09:00' },
    { name: '10시', value: '10:00' },
    { name: '11시', value: '11:00' },
    { name: '12시', value: '12:00' },
    { name: '13시', value: '13:00' },
    { name: '14시', value: '14:00' },
    { name: '15시', value: '15:00' },
    { name: '16시', value: '16:00' },
    { name: '17시', value: '17:00' },
    { name: '18시', value: '18:00' },
    { name: '19시', value: '19:00' },
    { name: '20시', value: '20:00' },
  ];

  const [area, areaSet] = useState();
  const [page, pageSet] = useState(1);

  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState();
  const [duration, setDuration] = useState();
  const [show, setShow] = useState(false);

  const [data, dataSet] = useState([]);
  const [classRoom, classRoomSet] = useState([]);
  const [classID, classIDSet] = useState();
  const [tab, tabSet] = useState(0);

  const [completeDate, completeDateSet] = useState();
  const [completeStartTime, completeStartTimeSet] = useState();
  const [completeEndTime, completeEndTimeSet] = useState();
  const [completePlaceName, completePlaceNameSet] = useState();

  const handleClose = () => setShow(false);

  const aryData = [];
  for (let i = 0; i <= 6; i += 1) {
    aryData[i] = data.filter((row) => row.floor === i).map((row) => row);
  }

  const onMain = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  const onApply = (e) => {
    e.preventDefault();
    navigate('/apply');
  };

  const onMypage = (e) => {
    e.preventDefault();
    navigate('/mypage');
  };

  const handleArea = (element) => {
    areaSet(element);
    pageSet(2);
  };

  return (
    <PageContent
      navigate={navigate}
      page={page}
      building={building}
      radios={radios}
      onMain={onMain}
      onApply={onApply}
      onMypage={onMypage}
      handleArea={handleArea}
      area={area}
      pageSet={pageSet}
      date={date}
      setDate={setDate}
      startTime={startTime}
      setStartTime={setStartTime}
      duration={duration}
      setDuration={setDuration}
      show={show}
      setShow={setShow}
      data={data}
      dataSet={dataSet}
      classRoom={classRoom}
      classRoomSet={classRoomSet}
      classID={classID}
      classIDSet={classIDSet}
      tab={tab}
      tabSet={tabSet}
      completeDate={completeDate}
      completeDateSet={completeDateSet}
      completeStartTime={completeStartTime}
      completeStartTimeSet={completeStartTimeSet}
      completeEndTime={completeEndTime}
      completeEndTimeSet={completeEndTimeSet}
      completePlaceName={completePlaceName}
      completePlaceNameSet={completePlaceNameSet}
      handleClose={handleClose}
      aryData={aryData}
    />
  );
}

function PageContent({
  navigate,
  page,
  building,
  radios,
  onMain,
  onApply,
  onMypage,
  handleArea,
  area,
  pageSet,
  date,
  setDate,
  startTime,
  setStartTime,
  duration,
  setDuration,
  show,
  setShow,
  data,
  dataSet,
  classRoom,
  classRoomSet,
  classID,
  classIDSet,
  tab,
  tabSet,
  completeDate,
  completeDateSet,
  completeStartTime,
  completeStartTimeSet,
  completeEndTime,
  completeEndTimeSet,
  completePlaceName,
  completePlaceNameSet,
  handleClose,
  aryData,
}) {
  if (page === 1) {
    return (
      <MainComponent
        building={building}
        onMain={onMain}
        onApply={onApply}
        onMypage={onMypage}
        handleArea={handleArea}
      />
    );
  }
  if (page === 2) {
    return (
      <ApplyComponent
        area={area}
        page={page}
        pageSet={pageSet}
        radios={radios}
        date={date}
        setdate={setDate}
        startTime={startTime}
        setStartTime={setStartTime}
        duration={duration}
        setDuration={setDuration}
        show={show}
        setShow={setShow}
        data={data}
        dataSet={dataSet}
        classRoom={classRoom}
        classRoomSet={classRoomSet}
        classID={classID}
        classIDSet={classIDSet}
        tab={tab}
        tabSet={tabSet}
        completeDateSet={completeDateSet}
        completeStartTimeSet={completeStartTimeSet}
        completeEndTimeSet={completeEndTimeSet}
        completePlaceNameSet={completePlaceNameSet}
        handleClose={handleClose}
        aryData={aryData}
      />
    );
  }
  if (page === 3) {
    return (
      <CompleteComponent
        navigate={navigate}
        pageSet={pageSet}
        completeDate={completeDate}
        completeStartTime={completeStartTime}
        completeEndTime={completeEndTime}
        completePlaceName={completePlaceName}
      />
    );
  }
}

export default MainContainer;
