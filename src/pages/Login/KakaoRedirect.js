import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BACKEND_TOKEN_URL } from '../../config';

export default function KakaoRedirect() {
  const history = useHistory();

  useEffect(() => {
    const kakaoCode = new URL(window.location.href).searchParams.get('code');
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${kakaoCode}`
    )
      .then(res => res.json())
      .then(res => {
        fetch(BACKEND_TOKEN_URL, {
          method: 'POST',
          headers: {
            Authorization: res.access_token,
          },
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('token', data.access_token);
            history.push('/');
          });
      });
  }, [history]);

  return <div />;
}
