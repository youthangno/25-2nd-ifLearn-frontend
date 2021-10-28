import React, { useEffect, useState } from 'react';
import NavLogin from './NavLogin';

export default function Nav() {
  const isTokenValid = localStorage.getItem('token') != undefined;

  return (
    <>
      {isTokenValid ? (
        <NavLogin isLogined="로그아웃" isTokenValid={isTokenValid} />
      ) : (
        <NavLogin isLogined="로그인" />
      )}
    </>
  );
}
