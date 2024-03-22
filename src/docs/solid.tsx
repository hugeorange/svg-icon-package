import React from 'react';
import {
  SolidBan,
  SolidBank,
  SolidBuilding,
  SolidCalendar,
  SolidCheck,
  SolidClock,
  SolidComment,
  SolidDollar,
  SolidDown,
  SolidEmail,
  SolidEquals,
  SolidEye,
  SolidEyeSlash,
  SolidFile,
  SolidHeart,
  SolidKeyhole,
  SolidList,
  SolidMappin,
  SolidMinus,
  SolidMobile,
  SolidPercent,
  SolidPerson,
  SolidPlus,
  SolidQuestion,
  SolidRightLong,
  SolidUp,
  SolidUpDown,
  SolidUser,
  SolidUserGroup,
  SolidUtensils,
} from '../index';
import '../index.css';

export default () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <SolidComment />
      <SolidList />
      <SolidUser />
      <SolidEmail />
      <SolidMobile />
      <SolidQuestion />
      <SolidBuilding />
      <SolidMappin />
      <SolidKeyhole />
      <SolidUserGroup />
      <SolidCalendar />
      <SolidDown />
      <SolidUp />
      <SolidPlus />
      <SolidMinus />
      <SolidEquals />
      <SolidPerson />
      <SolidUtensils />
      <SolidRightLong />
      <SolidHeart />
      <SolidPercent />
      <SolidBan />
      <SolidFile />
      <SolidCheck />
      <SolidUpDown />
      <SolidEye />
      <SolidEyeSlash />
      <SolidDollar />
      <SolidBank />
      <SolidClock />
    </div>
  );
};
