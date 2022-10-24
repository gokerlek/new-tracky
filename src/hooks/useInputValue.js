/**
 * @summary  useInputValue hook is used to get the input name label and placeholder from the inputValues object.
 * @param {string} purpose - purpose of the input. It is used to match the "name", "label" and "purpose" props.
 * @return {object} - returns the input name, label and placeholder.
 */

const useInputValue = (purpose, t) => {
  const inputValues = {
    projectName: {
      name: purpose,
      label: "Project name",
      placeholder: "Ex Tracky",
      type: "text",
    },
    currency: {
      name: purpose,
      label: "Currency",
      placeholder: "US Dollar",
      type: "text",
    },
    hourlyRate: {
      name: purpose,
      label: "Hourly rate",
      placeholder: "0.00",
      type: "text",
    },

    activityDescription: {
      name: purpose,
      label: "Activity description",
      placeholder: "Ex. Designing",
      type: "text",
    },
    startDate: {
      name: purpose,
      label: "Start date",
      placeholder: "",
      type: "text",
    },
    end: {
      name: purpose,
      label: "End date",
      placeholder: "",
      type: "text",
    },
    duration: {
      name: purpose,
      label: "Duration",
      placeholder: "",
      type: "text",
    },
    workedFrom: {
      name: purpose,
      label: "Worked from",
      placeholder: "",
      type: "text",
    },
    to: {
      name: purpose,
      label: "To",
      placeholder: "",
      type: "text",
    },

    shareLink: {
      name: purpose,
      label: "Share live link",
      placeholder: "",
      type: "text",
    },

    topic: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    description: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },

    email: {
      name: purpose,
      label: "",
      placeholder: t("Enter email"),
      type: "email",
    },

    password: {
      name: purpose,
      label: "",
      placeholder: t("Enter password"),
      type: "password",
    },

    createPassword: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "password",
    },

    currentPassword: {
      name: purpose,
      label: "Current password",
      placeholder: "Current password",
      type: "password",
    },

    choosePassword: {
      name: purpose,
      label: "",
      placeholder: "Choose password",
      type: "password",
    },

    newPassword: {
      name: purpose,
      label: "New password",
      placeholder: "New password",
      type: "password",
    },

    kode: {
      name: purpose,
      label: "",
      placeholder: "Code",
      type: "text",
    },

    code1: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code2: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code3: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code4: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code5: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    code6: {
      name: purpose,
      label: "",
      placeholder: "0",
      type: "text",
    },

    confirmNewPassword: {
      name: purpose,
      label: "Confirm new password",
      placeholder: "Confirm new password",
      type: "password",
    },

    name: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },

    referenceCode: {
      name: purpose,
      type: "text",
    },

    preferredName: {
      name: purpose,
      label: "Preferred name",
      placeholder: "Your name",
    },
  };

  const { name, label, placeholder, leftIcon, rightIcon, type } =
    inputValues[purpose];

  return { name, label, placeholder, leftIcon, rightIcon, type };
};

export default useInputValue;
