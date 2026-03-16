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

  const isInputInvalid = (field: string) => {
    return (
      touched[field as keyof FormDataType] &&
      errors[field as keyof FormDataType]
    );
  };

  useEffect(() => {
    if (values.date) {
      onDateChange(values.date);
    }
  }, [values.date]);

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <div>
        <label htmlFor="choose-date">Choose date:</label>
        <input
          type="date"
          id="choose-date"
          aria-label="Choose date"
          className={isInputInvalid("date") ? "input-error" : ""}
          {...getFieldProps("date")}
        />
        {isInputInvalid("date") && (
          <ErrorFormField message={errors.date || ""} />
        )}
      </div>

      <div>
        <label htmlFor="choose-time">Choose time:</label>
        <select
          id="choose-time"
          aria-label="Choose time"
          className={isInputInvalid("time") ? "select-error" : ""}
          {...getFieldProps("time")}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {isInputInvalid("time") && (
          <ErrorFormField message={errors.time || ""} />
        )}
      </div>

      <div>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          aria-label="Number of guests"
          className={isInputInvalid("guests") ? "input-error" : ""}
          {...getFieldProps("guests")}
        />
        {isInputInvalid("guests") && (
          <ErrorFormField message={errors.guests || ""} />
        )}
      </div>

      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          aria-label="Occasion"
          className={isInputInvalid("occasion") ? "select-error" : ""}
          {...getFieldProps("occasion")}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {isInputInvalid("occasion") && (
          <ErrorFormField message={errors.occasion || ""} />
        )}
      </div>

      <button type="submit" aria-label="Make your reservation">
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
