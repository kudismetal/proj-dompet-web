import React from 'react';
import {
  Button, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import './History.scss';
import HistoryList from './history_list/HistoryList';

class History extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          date: 'Hari ini',
          totalAmount: 5000000,
          data: [
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
            {
              name: 'Makan Odading Mang Oleh',
              day: 'Today',
              time: '15.00',
              type: 'expense',
              amount: 20000,
            },
            {
              name: 'Transfer Bank ke Opo',
              day: 'Today',
              time: '15.00',
              type: 'transfer',
              amount: 50000,
            },
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
          ],
        },
        {
          date: '10 Oktober 2020',
          totalAmount: 5000000,
          data: [
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
            {
              name: 'Makan Odading Mang Oleh',
              day: 'Today',
              time: '15.00',
              type: 'expense',
              amount: 20000,
            },
            {
              name: 'Transfer Bank ke Opo',
              day: 'Today',
              time: '15.00',
              type: 'transfer',
              amount: 50000,
            },
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
          ],
        },
        {
          date: '09 Oktober 2020',
          totalAmount: 5000000,
          data: [
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
            {
              name: 'Makan Odading Mang Oleh',
              day: 'Today',
              time: '15.00',
              type: 'expense',
              amount: 20000,
            },
            {
              name: 'Transfer Bank ke Opo',
              day: 'Today',
              time: '15.00',
              type: 'transfer',
              amount: 50000,
            },
            {
              name: 'Gaji',
              day: 'Today',
              time: '15.00',
              type: 'income',
              amount: 5000000,
            },
          ],
        },
      ],
      activeHistory: 'income',
    };
  }

  render() {
    const { history, activeHistory } = this.state;

    return (
      <div className="history-container">
        <Row className="p-3">
          <Col>
            <Link to="/">
              <div className="d-flex justify-content-start align-items-center">
                <img src="/images/icons/arrow-back.svg" alt="arrow-back-icon" />
                <p className="font-weight-bold fs-14 mb-0 mgl-20">Riwayat</p>
              </div>
            </Link>
            <div className="d-flex justify-content-center align-items-center mgy-24 history-button-group">
              <Button
                className="text-truncate fs-14 history-button"
                onClick={() => this.setState({ activeHistory: 'income' })}
                active={activeHistory === 'income'}
              >
                Pemasukan
              </Button>
              <Button
                className="text-truncate fs-14 history-button"
                onClick={() => this.setState({ activeHistory: 'expense' })}
                active={activeHistory === 'expense'}
              >
                Pengeluaran
              </Button>
              <Button
                className="text-truncate fs-14 history-button"
                onClick={() => this.setState({ activeHistory: 'transfer' })}
                active={activeHistory === 'transfer'}
              >
                Transfer
              </Button>
            </div>
            {
              history.map((data, index) => (
                <HistoryList history={data} key={index} />
              ))
            }
          </Col>
        </Row>
        <NavigationBar />
      </div>
    );
  }
}

export default History;