"use client";
import { useFormStatus } from "react-dom";
function FormSubmit({ text }) {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-info text-white px-4 py-2 rounded-md mt-5 w-full"
      disabled={status.pending}
    >
      {text}
    </button>
  );
}

export default FormSubmit;
