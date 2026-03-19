import { useFormikContext } from "formik";
import ErrorFormField from "@components/error-form-field";
import Button from "@components/button";
import BookingInfo from "@components/booking-info";
import type { BookingFormValues } from "./types";

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

      <Button
        type="submit"
        aria-label="Make your reservation"
        disabled={!isValid}
      >
        Make your reservation
      </Button>
    </>
  );
};

export default BookingFormContactDetailsStep;
