import { useCallback, useEffect, useState } from "react";
import { FormikProvider, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";

import ErrorFormField from "@components/error-form-field";
import Button from "@components/button";
import BookingInfo from "@components/booking-info";
import styles from "./styles.module.css";

export interface FormDataType {
  date: string;
  time: string;
  guests: number;
  occasion: string;
  fullName: string;
  email: string;
  phone: string;
}

type BookingFormValues = {
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

export interface BookingFormProps {
  availableTimes: AvailableTimesType;
  onDateChange: OnDateChangeType;
  onSubmit: OnSubmitType;
}

function yupToFormErrors(err: Yup.ValidationError): Record<string, string> {
  const errors: Record<string, string> = {};
  if (err.inner?.length) {
    for (const e of err.inner) {
      if (e.path && errors[e.path] === undefined) {
        errors[e.path] = e.message;
      }
    }
  }
  if (err.path && errors[err.path] === undefined) {
    errors[err.path] = err.message;
  }
  return errors;
}

const bookingDataStepSchema = Yup.object({
  date: Yup.date().typeError("Date is required").required("Date is required"),
  time: Yup.string().required("Time is required"),
  guests: Yup.number()
    .transform((_v, orig) => (orig === "" ? NaN : Number(orig)))
    .typeError("Number of guests is required")
    .min(1, "At least 1 guest")
    .max(10, "At most 10 guests")
    .required("Number of guests is required"),
  occasion: Yup.string().required("Occasion is required"),
});

const fullBookingSchema = bookingDataStepSchema.shape({
  fullName: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string(),
});

enum Steps {
  BOOKING_DATA = 1,
  CONTACT_DETAILS = 2,
}

interface BookingFormDataStepProps {
  availableTimes: AvailableTimesType;
  onContinue: () => void;
  isInputInvalid: (field: keyof BookingFormValues) => boolean;
}
const BookingFormDataStep: React.FC<BookingFormDataStepProps> = ({
  availableTimes,
  onContinue,
  isInputInvalid,
}) => {
  const { getFieldProps, errors, isValid } =
    useFormikContext<BookingFormValues>();
  return (
    <>
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
          <ErrorFormField message={errors.date ?? ""} />
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
          <ErrorFormField message={errors.time ?? ""} />
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
          <ErrorFormField message={errors.guests ?? ""} />
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
          <ErrorFormField message={errors.occasion ?? ""} />
        )}
      </div>

      <div className={styles.actions}>
        <Button
          type="button"
          aria-label="Continue to contact details"
          disabled={!isValid}
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

interface BookingFormContactDetailsStepProps {
  onBack: () => void;
  isInputInvalid: (field: keyof BookingFormValues) => boolean;
}
const BookingFormContactDetailsStep: React.FC<
  BookingFormContactDetailsStepProps
> = ({ onBack, isInputInvalid }) => {
  const { getFieldProps, errors, isValid, values } =
    useFormikContext<BookingFormValues>();
  return (
    <>
      <BookingInfo
        onClickEdit={onBack}
        date={values.date}
        time={values.time}
        guests={values.guests}
        occasion={values.occasion}
      />

      <div>
        <label htmlFor="full-name">Full name:</label>
        <input
          type="text"
          id="full-name"
          autoComplete="name"
          aria-label="Full name"
          className={isInputInvalid("fullName") ? "input-error" : ""}
          {...getFieldProps("fullName")}
        />
        {isInputInvalid("fullName") && (
          <ErrorFormField message={errors.fullName ?? ""} />
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          aria-label="Email"
          className={isInputInvalid("email") ? "input-error" : ""}
          {...getFieldProps("email")}
        />
        {isInputInvalid("email") && (
          <ErrorFormField message={errors.email ?? ""} />
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone (optional):</label>
        <input
          type="tel"
          id="phone"
          autoComplete="tel"
          aria-label="Phone"
          className={isInputInvalid("phone") ? "input-error" : ""}
          {...getFieldProps("phone")}
        />
        {isInputInvalid("phone") && (
          <ErrorFormField message={errors.phone ?? ""} />
        )}
      </div>

      <div className={styles.actions}>
        <Button
          type="submit"
          aria-label="Make your reservation"
          disabled={!isValid}
        >
          Make your reservation
        </Button>
      </div>
    </>
  );
};

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  onDateChange,
  onSubmit,
}) => {
  const [step, setStep] = useState<Steps>(Steps.BOOKING_DATA);

  const validate = useCallback(
    (values: BookingFormValues) => {
      const schema =
        step === Steps.BOOKING_DATA ? bookingDataStepSchema : fullBookingSchema;
      try {
        schema.validateSync(values, { abortEarly: false });
        return {};
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          return yupToFormErrors(e);
        }
        return {};
      }
    },
    [step]
  );

  const formik = useFormik<BookingFormValues>({
    initialValues: {
      date: new Date().toISOString().split("T")[0],
      time: availableTimes[0] ?? "",
      guests: "",
      occasion: "birthday",
      fullName: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit: (formValues) => {
      onSubmit({
        date: formValues.date,
        time: formValues.time,
        guests: Number(formValues.guests),
        occasion: formValues.occasion,
        fullName: formValues.fullName.trim(),
        email: formValues.email.trim(),
        phone: formValues.phone.trim(),
      });
    },
  });

  const {
    handleSubmit,
    values,
    getFieldProps,
    errors,
    touched,
    isValid,
    validateForm,
    setFieldTouched,
  } = formik;

  const isInputInvalid = (field: keyof BookingFormValues) => {
    return Boolean(touched[field] && errors[field]);
  };

  useEffect(() => {
    if (values.date) {
      onDateChange(values.date);
    }
  }, [values.date, onDateChange]);

  const handleContinue = async () => {
    const bookingDataKeys: (keyof BookingFormValues)[] = [
      "date",
      "time",
      "guests",
      "occasion",
    ];
    bookingDataKeys.forEach((k) => setFieldTouched(k, true));
    const formErrors = await validateForm();
    const hasBookingDataErrors = bookingDataKeys.some((k) =>
      Boolean(formErrors[k])
    );
    if (!hasBookingDataErrors) {
      setStep(Steps.CONTACT_DETAILS);
    }
  };

  const handleBack = () => {
    setStep(Steps.BOOKING_DATA);
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit} className={styles.root} noValidate>
        {step === Steps.BOOKING_DATA && (
          <BookingFormDataStep
            availableTimes={availableTimes}
            onContinue={handleContinue}
            isInputInvalid={isInputInvalid}
          />
        )}

        {step === Steps.CONTACT_DETAILS && (
          <BookingFormContactDetailsStep
            onBack={handleBack}
            isInputInvalid={isInputInvalid}
          />
        )}
      </form>
    </FormikProvider>
  );
};

export default BookingForm;
