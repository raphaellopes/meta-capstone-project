import { useFormikContext } from "formik";
import ErrorFormField from "@components/error-form-field";
import Button from "@components/button";
import type { AvailableTimesType, BookingFormValues } from "./types";

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

      <Button
        type="button"
        aria-label="Continue to contact details"
        disabled={!isValid}
        onClick={onContinue}
      >
        Continue
      </Button>
    </>
  );
};

export default BookingFormDataStep;
