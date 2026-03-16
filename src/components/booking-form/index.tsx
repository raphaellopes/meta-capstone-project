import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./styles.module.css";
import ErrorFormField from "@components/error-form-field";

export interface FormDataType {
  date: string;
  time: string;
  guests: string;
  occasion: string;
}
export type AvailableTimesType = string[];
export type OnDateChangeType = (date: string) => void;
export type OnSubmitType = (data: FormDataType) => void;

export interface BookingFormProps {
  availableTimes: AvailableTimesType;
  onDateChange: OnDateChangeType;
  onSubmit: OnSubmitType;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  onDateChange,
  onSubmit,
}) => {
  const { handleSubmit, values, getFieldProps, errors, touched } =
    useFormik<FormDataType>({
      initialValues: {
        date: new Date().toISOString().split("T")[0],
        time: availableTimes[0],
        guests: "",
        occasion: "birthday",
      },
      validationSchema: Yup.object({
        date: Yup.date().required("Date is required"),
        time: Yup.string().required("Time is required"),
        guests: Yup.number()
          .min(1, "At least 1 guest")
          .max(10, "At most 10 guests")
          .required("Number of guests is required"),
        occasion: Yup.string().required("Occasion is required"),
      }),
      onSubmit: (values) => {
        onSubmit(values);
      },
    });

  useEffect(() => {
    if (values.date) {
      onDateChange(values.date);
    }
  }, [values.date]);

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <div>
        <label htmlFor="choose-date">Choose date:</label>
        <input type="date" id="choose-date" {...getFieldProps("date")} />
        {touched.date && errors.date && (
          <ErrorFormField message={errors.date} />
        )}
      </div>

      <div>
        <label htmlFor="choose-time">Choose time:</label>
        <select id="choose-time" {...getFieldProps("time")}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <ErrorFormField message={errors.time} />
        )}
      </div>

      <div>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          {...getFieldProps("guests")}
        />
        {touched.guests && errors.guests && (
          <ErrorFormField message={errors.guests} />
        )}
      </div>

      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" {...getFieldProps("occasion")}>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {touched.occasion && errors.occasion && (
          <ErrorFormField message={errors.occasion} />
        )}
      </div>

      <button type="submit">Make your reservation</button>
    </form>
  );
};

export default BookingForm;
