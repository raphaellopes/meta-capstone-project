export interface FormDataType {
  date: string;
  time: string;
  guests: number;
  occasion: string;
  fullName: string;
  email: string;
  phone: string;
}

export type BookingFormValues = {
  date: string;
  time: string;
  guests: string;
  occasion: string;
  fullName: string;
  email: string;
  phone: string;
};

export type AvailableTimesType = string[];
export type OnDateChangeType = (date: string) => void;
export type OnSubmitType = (data: FormDataType) => void;
