/**
 * @summary  useInputValue hook is used to get the input name label and placeholder from the inputValues object.
 * @param {string} purpose - purpose of the input. It is used to match the "name", "label" and "purpose" props.
 * @return {object} - returns the input name, label and placeholder.
 */

const useInputValue = (purpose, t) => {
  const inputValues = {
    projectName: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    currency: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    hourlyRate: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },

    activityDescription: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    startDate: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    end: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    duration: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    workedFrom: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },
    to: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "text",
    },

    shareLiveLink: {
      name: purpose,
      label: "",
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
      label: "",
      placeholder: "",
      type: "password",
    },

    newPassword: {
      name: purpose,
      label: "",
      placeholder: "",
      type: "password",
    },

    confirmNewPassword: {
      name: purpose,
      label: "",
      placeholder: "",
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
  };

  const { name, label, placeholder, leftIcon, rightIcon, type } =
    inputValues[purpose];

  return { name, label, placeholder, leftIcon, rightIcon, type };
};

export default useInputValue;
