export interface UpdateLearnerResponse {
  success: boolean;
  message: string;
  user: User;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isVerified: boolean;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  contact: string;
  description: string;
  disabled: boolean;
  location: string;
}

export interface EnollmentResponse {
  success: boolean;
  message: string;
  transactionUrl: string;
  invoice: Invoice;
}

export interface Invoice {
  learner: string;
  track: string;
  amount: number;
  status: string;
  dueDate: Date;
  paystackReference: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface EnollmentType {
  track: string;
  amount: number;
  paystackCallbackUrl: string;
}
