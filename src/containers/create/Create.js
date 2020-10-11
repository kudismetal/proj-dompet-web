import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormControl from 'react-bootstrap/esm/FormControl';
import './Create.scss';

export default function Create() {
  return (
    <>
      <div className="Container">

        <div className="card card-body">
          <Link to="/">
            <div className="d-flex justify-content-start align-items-center">
              <img src="/images/icons/arrow-back.svg" alt="arrow-back-icon" />
              <p className="fs-14 mb-0 mgl-20 header">Tambah Catatan</p>
            </div>
          </Link>
          <div className="form-group">
            <table border="0" width="100%">
              <tr>
                <td colSpan="2">
                  <p className="fs-13 mb-0 mgl-20 header">Jumlah</p>
                </td>
              </tr>

              <tr>
                <td>
                  <FormControl className="form-rounded" placeholder="100.000" />
                  <Button variant="light" size="sm" className="fs-10">
                    IDR
                    {' '}
                    <img src="/images/icons/indonesian-flag.svg" alt="flag-icons" />
                  </Button>

                </td>

              </tr>
            </table>
          </div>
        </div>
        <div align="center " className="btn-frame" size="sm">
          <Button variant="btn btn-rounded active" size="sm">Pemasukan</Button>
          <Button variant="btn btn-rounded active" size="sm">Pengeluaran</Button>
          <Button variant="btn btn-rounded active" size="sm">Transfer</Button>
        </div>
        <div className="form-group">
          <table border="0" align="center" width="90%">
            <tbody>
              <tr>

                <td colSpan="2">
                  <FormControl className="form-rounded" as="select" defaultValue="Akun">
                    <option disabled>Akun</option>
                    <option>Opo</option>
                    <option>Gojex</option>
                    <option>Bank ABC</option>
                    <option>Tunai</option>
                  </FormControl>
                </td>
              </tr>
              <tr>
                <td>
                  <Form>
                    <FormControl className="form-rounded" type="text" placeholder="Tanggal" />
                  </Form>
                </td>
                <td>
                  <Form>
                    <FormControl className="form-rounded" type="text" placeholder="Waktu" />
                  </Form>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <FormControl className="form-rounded" as="select" defaultValue="Kategori" style={{ width: '85%' }}>
                    <option disabled>Kategori</option>
                    <option>Makan</option>
                    <option>Minum</option>
                  </FormControl>
                  <Link to="/" className="add"><img src="/images/icons/add-white.svg" alt="add-icon" /></Link>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Form>
                    <FormControl className="form-rounded" as="textarea" placeholder="Catatan" />
                  </Form>
                </td>
              </tr>
              <td colSpan="2" align="center"><Button className="custom-button btn-color">Simpan</Button></td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
