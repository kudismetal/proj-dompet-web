import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import './Login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="image-sizing text-center">
        <img src="/images/icons/wallet_24px.svg" alt="sort-icon" />
        <br />
        <img src="/images/texts/text_dompet_dhuafa_24px.svg" alt="sort-icon" />
      </div>
      <div className="pd-0">
        <form onSubmit={handleSubmit}>
          <p><img src="/images/texts/text_selamat_datang_24px.svg" alt="sort-icon" /></p>
          <FormGroup>
            <FormControl
              autoFocus
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormControl
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Link to="/">
            <Button className="custom-button" block disabled={!validateForm()} type="submit">
              Masuk
            </Button>
          </Link>
        </form>
      </div>
      <p className="text-center mgt-10 fs-13"><Link to="/forgot-password"> Lupa kata sandi ? </Link></p>
      <p className="text-center mgt-9 fs-13">
        Tidak memiliki akun?
        <Link to="/register"> Daftar </Link>
      </p>
    </>
  );
}
