interface FormFieldRulesType {
  required?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

interface OptionObject {
  label: string;
  value: string;
  disabled?: boolean;
}

interface FormInputFieldProps {
  control: Control;
  name: string;
  label: string;
  disabled?: boolean;
  rules?: FormFieldRulesType;
  variant?: "small" | "medium";
  textarea?: boolean;
  clearable?: boolean;
  identifier?: string;
  options: OptionObject[];
  showCheckbox?: boolean;
  trigger?: () => void;
}

interface ProfileFormValues {
  name: string;
  phone: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
  timezone: string;

  address: string;
  locality: string;
  city: string;
  country: string;
  state: string;
  pinCode: string;

  alternatePhone: string;
  language: string;
}