export interface UpdateLearnerResponse {
  success: boolean;
  message: string;
  learner: Learner;
}

export interface Learner {
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
  location: string;
}
