
import { Branch } from './types';

export const MOCK_BRANCHES: Branch[] = [
  {
    id: '1',
    name: 'Sucursal Centro Histórico',
    address: "Av. Libertador Bernardo O'Higgins 1234",
    distance: '0.2 km',
    status: 'open',
    closingTime: '17:00',
    type: ['branch', 'atm'],
    lat: 40,
    lng: 45
  },
  {
    id: '2',
    name: 'ATM Plaza de Armas',
    address: 'Compañía de Jesús 960',
    distance: '0.5 km',
    status: '24hrs',
    type: ['atm'],
    lat: 30,
    lng: 55
  },
  {
    id: '3',
    name: 'Sucursal Bellavista',
    address: 'Pío Nono 450',
    distance: '1.2 km',
    status: 'closed',
    openingTime: '09:00',
    type: ['branch'],
    lat: 60,
    lng: 30
  },
  {
    id: '4',
    name: 'Cajero Metro Santa Lucia',
    address: "Av. Libertador Bernardo O'Higgins 550",
    distance: '0.8 km',
    status: '24hrs',
    type: ['atm'],
    lat: 45,
    lng: 40
  }
];

export const LOAN_MIN_AMOUNT = 500000;
export const LOAN_MAX_AMOUNT = 50000000;
export const LOAN_MIN_MONTHS = 12;
export const LOAN_MAX_MONTHS = 60;
