import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplyComponent from '../components/ApplyComponent';
import MainComponent from '../components/MainComponent';
import CompleteComponent from '../components/CompleteComponent';

function MainContainer() {
  const navigate = useNavigate();
  const building = [
    { name: '1강', value: 'ONE' },
    { name: '2강', value: 'TWO' },
    { name: '3강', value: 'THREE' },
    // '예대',
    // '학생관',
    // '복지관',
    // '어울림관',
    // {name : '4강', value : 'four'},
    // '5강',
    // '6강',
    // '7강',
    // '8강',
    // '제2공학관',
    // '대운동장',
    // '풋살장',
    // '테니스장',
  ];
  const [area, areaSet] = useState();
  const [page, pageSet] = useState(1);
  const [completeDate, completeDateSet] = useState();
  const [completeStartTime, completeStartTimeSet] = useState();
  const [completeEndTime, completeEndTimeSet] = useState();
  const [completePlaceName, completePlaceNameSet] = useState();

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
      page={page}
      building={building}
      onMain={onMain}
      onApply={onApply}
      onMypage={onMypage}
      handleArea={handleArea}
      area={area}
      pageSet={pageSet}
      completeDate={completeDate}
      completeDateSet={completeDateSet}
      completeStartTime={completeStartTime}
      completeStartTimeSet={completeStartTimeSet}
      completeEndTime={completeEndTime}
      completeEndTimeSet={completeEndTimeSet}
      completePlaceName={completePlaceName}
      completePlaceNameSet={completePlaceNameSet}
    />
  );
}

function PageContent({
  page,
  building,
  onMain,
  onApply,
  onMypage,
  handleArea,
  area,
  pageSet,
  completeDate,
  completeDateSet,
  completeStartTime,
  completeStartTimeSet,
  completeEndTime,
  completeEndTimeSet,
  completePlaceName,
  completePlaceNameSet,
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
        completeDateSet={completeDateSet}
        completeStartTimeSet={completeStartTimeSet}
        completeEndTimeSet={completeEndTimeSet}
        completePlaceNameSet={completePlaceNameSet}
      />
    );
  }
  if (page === 3) {
    return (
      <CompleteComponent
        completeDate={completeDate}
        completeStartTime={completeStartTime}
        completeEndTime={completeEndTime}
        completePlaceName={completePlaceName}
      />
    );
  }
}

export default MainContainer;
