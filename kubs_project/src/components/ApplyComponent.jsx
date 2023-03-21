/* eslint-disable */
import React, { useState } from 'react';
import { Container, Nav, Navbar, ToggleButton, ToggleButtonGroup, Modal, Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import '../styles/ApplyStyle.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import axios from 'axios';

function ApplyComponent({
  area,
  page,
  pageSet,
  radios,
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
  completeDateSet,
  completeStartTimeSet,
  completeEndTimeSet,
  completePlaceNameSet,
  handleClose,
  aryData,
}) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KUBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#mypage">My Page</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="apply-box">
        <Nav variant="tabs" defaultActiveKey="link-0" className="justify-content-end">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(0);
              }}
              eventKey="link-0"
            >
              B1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(1);
              }}
              eventKey="link-1"
            >
              1층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(2);
              }}
              eventKey="link-2"
            >
              2층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(3);
              }}
              eventKey="link-3"
            >
              3층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(4);
              }}
              eventKey="link-4"
            >
              4층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(5);
              }}
              eventKey="link-5"
            >
              5층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(6);
              }}
              eventKey="link-6"
            >
              6층
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="date-box">
          <div style={{ margin: 'auto', width: '90%', textAlign: 'center' }}>
            <p style={{ textAlign: 'left' }}>날짜 선택</p>
            <Calendar
              onChange={setDate} // useState로 포커스 변경 시 현재 날짜 받아오기
              formatDay={(locale, date) => moment(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
              value={date}
              minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
              maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
              navigationLabel={null}
              showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
              className="mx-auto w-full text-sm border-b"
            />
            <br />
            <p style={{ textAlign: 'left' }}>시작 시간</p>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`${idx + 9}h`}
                type="radio"
                variant="dark"
                name="radio"
                value={radio.value}
                checked={startTime === radio.value}
                onChange={(e) => setStartTime(e.currentTarget.value)}
                style={{ margin: '10px' }}
              >
                {radio.name}
              </ToggleButton>
            ))}
            <br />
            <br />
            <p style={{ textAlign: 'left' }}>사용 시간</p>
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton
                id="1h"
                value={1}
                variant="dark"
                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                onChange={() => {
                  setDuration('1');
                }}
              >
                1h
              </ToggleButton>
              <ToggleButton
                id="2h"
                value={2}
                variant="dark"
                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                onChange={() => {
                  setDuration('2');
                }}
              >
                2h
              </ToggleButton>
              <ToggleButton
                id="3h"
                value={3}
                variant="dark"
                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                onChange={() => {
                  setDuration('3');
                }}
              >
                3h
              </ToggleButton>
            </ToggleButtonGroup>
            <br />
            <br />
            <br />
            <button
              onClick={() => {
                console.log({
                  date: moment(date).format('YYYY-MM-DD'),
                  startTime: startTime,
                  duration: duration,
                  area: area,
                });
                axios
                  .post(
                    '/api/place/ablePlaceList',
                    {
                      date: moment(date).format('YYYY-MM-DD'),
                      startTime: startTime,
                      usageTime: duration,
                      area: area,
                    },
                    {
                      headers: { 'Content-Type': 'application/json' },
                    },
                  )
                  .then(function (response) {
                    console.log(response.data);

                    dataSet(response.data);

                    // response
                  })
                  .catch(function (error) {
                    console.log(error);
                    // 오류발생시 실행
                  });
              }}
            >
              {' '}
              강의실 조회{' '}
            </button>
          </div>
        </div>

        <div style={{ margin: 'auto', marginRight: '0', width: '80%', textAlign: 'center' }}>
          <TabContent
            aryData={aryData}
            tab={tab}
            setShow={setShow}
            classIDSet={classIDSet}
            classRoomSet={classRoomSet}
          />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>예약 확인</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            예약 날짜: {moment(date).format('YYYY년 MM월 DD일')} <br />
            시작 시간: {startTime} <br />
            사용 시간: {duration} <br />
            강의실: {classRoom}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                console.log({ date: moment(date).format('YYYY-MM-DD'), startTime: startTime, duration: duration });
                pageSet(3);
                console.log(page);
                axios
                  .post(
                    '/api/booking',
                    {
                      date: moment(date).format('YYYY-MM-DD'),
                      startTime: startTime,
                      usageTime: duration,
                      placeId: classID,
                    },
                    {
                      headers: { 'Content-Type': 'application/json' },
                    },
                  )
                  .then(function (response) {
                    console.log(response);
                    completeDateSet(response.data.date);
                    completeStartTimeSet(response.data.startTime);
                    completeEndTimeSet(response.data.endTime);
                    completePlaceNameSet(response.data.placeName);
                  })
                  .catch(function (error) {
                    console.log(error);
                    // 오류발생시 실행
                  });
              }}
            >
              예약
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

function TabContent({ aryData, tab, setShow, classIDSet, classRoomSet }) {
  for (let j = 0; j <= 6; j++) {
    if (tab == j) {
      return (
        <div>
          {aryData[j].map(function (e, i) {
            if (e.isAble == true) {
              return (
                <button
                  onClick={() => {
                    setShow(true);
                    classIDSet(e.placeId);
                    classRoomSet(e.placeName);
                  }}
                  style={{ marginTop: '40px', marginRight: '5px' }}
                >
                  {e.placeName}
                </button>
              );
            } else {
              return (
                <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{e.placeName}</button>
              );
            }
          })}
        </div>
      );
    }
  }
}

export default ApplyComponent;
