
export interface LoanSimulation {
  amount: number;
  months: number;
  monthlyTasa: number;
  cae: number;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  distance: string;
  status: 'open' | 'closed' | '24hrs';
  closingTime?: string;
  openingTime?: string;
  type: ('branch' | 'atm')[];
  lat: number;
  lng: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum Page {
  Home = '/',
  Simulator = '/simulator',
  Locator = '/locator',
  Help = '/help',
  Appointments = '/appointments',
  Login = '/login',
  SelectLoan = '/select-loan'
}
