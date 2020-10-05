import React from "react";
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Register.scss";

export default function Register() {
    const [email] = ("");
    const [password] = ("");
    const [cpassword] = ("");

    return (<>
     <div className="p-0 register">
     <form className="mx-auto">
     <FormGroup controlId="email" bsSize="large">
        <FormLabel><img src="/images/icons/text_daftar_baru_24px.svg" alt="sort-icon"></img></FormLabel>
        <br></br><br></br>
        <FormLabel>Email</FormLabel>
        <FormControl
            autoFocus
            type="email"
            value={email}
        />
     </FormGroup>
     <FormGroup controlId="password" bsSize="large">
          <FormLabel>Kata Sandi</FormLabel>
          <FormControl
            type="password"
            value={password}
          />
     </FormGroup>
     <FormGroup controlId="cpassword" bsSize="large">
          <FormLabel>Ulang Kata Sandi</FormLabel>
          <FormControl
            type="password"
            value={cpassword}
          />
     </FormGroup>
     <div class="form-group form-check">
          <input type="checkbox" class="form-check-input"></input>
          <p className="fs-13">
          Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s
          </p>
    </div>
     <div>
     <Button className="button-color" block type="submit">
          Masuk
     </Button>
     </div>
     </form>
     <br></br>
     <p className="text-center fs-13">Sudah memiliki akun? <Link to="/login" > Masuk </Link></p>

    </div>
    </>
  );
}
