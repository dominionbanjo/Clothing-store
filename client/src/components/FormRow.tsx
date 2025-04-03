import clsx from "clsx";

interface FormRow {
  type: string;
  name: string;
  defaultValue?: string;
  labelText?: string;
  placeHolder?: string;
  label?: boolean;
  className?: string;
  onChange?: () => void;
}

const FormRow = ({
  type,
  name,
  label = true,
  labelText,
  defaultValue,
  placeHolder,
  className,
  onChange,
}: FormRow) => {
  return (
    <div className={clsx("form-row", className)}>
      {label && (
        <label className="label" htmlFor={name}>
          {labelText || name}
        </label>
      )}

      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        placeholder={placeHolder || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
