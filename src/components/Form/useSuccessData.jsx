const useSuccessData = (purpose) => {
  const data = {
    "new-project": {
      title: "Project created successfully",
      description:
        "You created a new project and I ll always be here to create more projects woof woof",
      icon: "project-created",
    },
    "delete-project": {
      title: "Project deleted successfully",
      description: "",
      icon: "project-deleted",
    },
    "edit-details": {
      title: "Details updated successfully",
      description: "",
      icon: "project-updated",
    },
    "project-downloaded": {
      title: "Download is successful",
      description: "",
      icon: "project-downloaded",
    },

    "details-saved": {
      title: "Details saved successfully",
      description: "",
      icon: "details-saved",
    },
    "history-cleared": {
      title: "History cleared successfully",
      description: "",
      icon: "history-cleared",
    },
    "logged-time": {
      title: "Time logged successfully",
      description: "Now you can go back to review your projects",
      icon: "time-logged",
    },
    "password-updated": {
      title: "Password has been updated",
      description: "You can start using your new password now",
      icon: "password-updated",
    },

    "account-deleted": {
      title: "Account deleted successfully",
      description: "Sorry to see you leaving Goodbye until next time",
      icon: "account-deleted",
    },
    default: {
      title: "",
      description: "",
      icon: "",
    },
  };

  const { title, description, icon } = data[purpose];

  return { title, description, icon };
};

export default useSuccessData;
