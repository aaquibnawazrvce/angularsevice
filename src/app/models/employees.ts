export interface EmployeeIF {
  firstName: string;
  lastName: string;
  designation: string;
  experience: string;
  currentLocation?: string;
  teleCommuter: boolean;
  phoneNumber: number;
  age?: number;
  id: number;
}
