import { useCallback, useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import BookingFormDataStep from "./form-data-step";
import BookingFormContactDetailsStep from "./form-contact-detail-step";
import type {
  BookingFormValues,
  AvailableTimesType,
  OnDateChangeType,
  OnSubmitType,
} from "./types";
import {
  bookingDataStepSchema,
  fullBookingSchema,
  yupToFormErrors,
} from "./form-schema";
import styles from "./styles.module.css";

enum Steps {
  BOOKING_DATA = 1,
  CONTACT_DETAILS = 2,
}

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
    errors,
    touched,
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
