import React from 'react';
import {
  Col, Row, FormControl,
} from 'react-bootstrap';
import CustomButton from '../../components/custom_button/CustomButton';
import './SaldoAwal.scss';

const SaldoAwal = () => (
  <>
    <Row>
      <Col className="d-flex flex-column align-items-left justify-content-center pd-28 saldoawal">
        <img src="/images/icons/saldo-awal.svg" alt="saldo-awal" />
        <br />
        <div className="float-left">
          <img src="/images/icons/text-saldo-awal-anda.svg" alt="sort-icon" />
        </div>
        <br />
        <FormControl
          autoFocus
          type="text"
          placeholder="Saldo Awal"
        />
        <br />
        <CustomButton
          onClick={() => { }}
          className="lanjut"
          text="Lanjut"
        />
        <br />
      </Col>
    </Row>

  </>
);

export default SaldoAwal;
