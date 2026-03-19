import * as Yup from "yup";

export function yupToFormErrors(
  err: Yup.ValidationError
): Record<string, string> {
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

export const bookingDataStepSchema = Yup.object({
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

export const fullBookingSchema = bookingDataStepSchema.shape({
  fullName: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string(),
});
