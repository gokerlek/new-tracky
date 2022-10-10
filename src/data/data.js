import React from 'react';

export const inputData = {
  name: {
    type: 'text',
    purposeOfInput: 'name',
    placeholder: 'Name',
    errorMessages: 'Please enter your name',
  },
  surname: {
    type: 'text',
    purposeOfInput: 'surname',
    placeholder: 'Surname',
    errorMessages: 'Please enter your surname',
  },
  mail: {
    type: 'mail',
    purposeOfInput: 'mail',
    placeholder: 'Email Address',
    errorMessages: 'Please enter your email',
  },
  password: {
    type: 'password',
    purposeOfInput: 'password',
    placeholder: 'Password',
    errorMessages: 'Please enter your password',
  },
  reEnterPassword: {
    type: 'password',
    purposeOfInput: 'reEnterPassword',
    placeholder: 'Re-enter Password',
    errorMessages: 'Please re-enter your password',
  },
  createPassword: {
    type: 'password',
    purposeOfInput: 'createPassword',
    placeholder: 'Create a Password',
    errorMessages: 'Please create a password',
  },
  resetPassword: {
    type: 'password',
    purposeOfInput: 'reset-password',
    placeholder: 'Reset Password',
    errorMessages: 'Please reset your password',
  },
  currentPassword: {
    type: 'password',
    purposeOfInput: 'currentPassword',
    placeholder: 'Enter your current password',
    errorMessages: 'Please enter your current password',
  },
  newPassword: {
    type: 'password',
    purposeOfInput: 'newPassword',
    placeholder: 'Enter your new password',
    errorMessages: 'Please enter your new password',
  },
  reEnterNewPassword: {
    type: 'password',
    purposeOfInput: 'reEnterNewPassword',
    placeholder: 'Re-enter your new password',
    errorMessages: 'Please re-enter your new password',
  },
  date: {
    type: 'date',
    purposeOfInput: 'date',
    placeholder: 'Date of Birth',
    errorMessages: 'Please enter your birth date',
  },
  birthdate: {
    type: 'date',
    purposeOfInput: 'birthdate',
    placeholder: 'Date of Birth',
    errorMessages: 'Please enter your birth date',
  },
  invitation: {
    type: 'number',
    purposeOfInput: 'invitation',
    placeholder: 'Invitation Code',
    errorMessages: 'Please enter your invitation code',
  },
  topic: {
    type: 'text',
    purposeOfInput: 'topic',
    placeholder: 'Topic',
    errorMessages: 'Please enter your topic',
  },
  writeSomething: {
    type: 'textarea',
    purposeOfInput: 'writeSomething',
    placeholder: 'Write Something',
    errorMessages: 'Please enter your message',
  },
};

export const defaultButtonLabel = {
  join: 'Join waitlist',
  continue: 'Continue',
  reSend: 'Re-send Code',
  signup: 'Sign Up',
  loginRouter: 'Do you have an account?',
  loginRouterButtonBold: 'Login',
  signupRouter: "Don't have an account?",
  signupRouterButtonBold: 'Sign Up',
  terms: 'Terms of Use',
  privacy: 'Security Privacy',
  recovery: 'Forgot Password?',
  next: 'Next',
  nextOk: 'Next',
  get: 'Get Started',
  journaling: 'Start Journaling',
  pay: 'Pay Now',
  end: 'End Module',
  date: 'Go to date',
  check: 'Check',
  surveyTrue: 'True',
  surveyFalse: 'False',
  resetPassword: 'Change Password',
  reSendCode: 'Resent code',
  deleteMyAccount: 'Delete my account',
  verify: 'Verify',
  updatePasswprd: 'Update Password',
};

export const screenData = {
  // Onboarding
  onboarding: {
    first: {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    second: {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    third: {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    fourth: {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    fifth: {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    buttonLabel: defaultButtonLabel.next,
    buttonLabel2: defaultButtonLabel.get,
  },

  // Sign Up/In
  signup: {
    empty: {
      footer: {
        description: 'Your data is safe with us: ',
        terms: defaultButtonLabel.terms,
        and: 'and',
        privacy: defaultButtonLabel.privacy,
      },
    },
    login: {
      title: "Let's get tracking!",
      description: 'Log in to your account',
      buttonLabel: defaultButtonLabel.loginRouterButtonBold,
      footer: {
        description: defaultButtonLabel.loginRouter,
        buttonLabel: defaultButtonLabel.loginRouterButtonBold,
      },
    },
    joinOrSignup: {
      title: 'Get started with\nTracky',
      description: 'Sign up for a free Tracky account',
      buttonLabel: defaultButtonLabel.continue,
      footer: {
        description: defaultButtonLabel.signupRouter,
        buttonLabel: defaultButtonLabel.signupRouterButtonBold,
      },
    },

    referenceCode: {
      title: 'Reference Code',
      description: 'Check your email, enter the code',
      buttonLabel: defaultButtonLabel.verify,
      footer: {
        buttonLabel: defaultButtonLabel.reSendCode,
      },
    },

    recovery: {
      title: 'Forgot Password?',
      description: 'Enter your email address and we will send you a recovery code',
      buttonLabel: 'Submit',
      footer: {
        description: defaultButtonLabel.loginRouter,
        buttonLabel: defaultButtonLabel.loginRouterButtonBold,
      },
    },
    code: {
      title: 'Enter Your Code',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonLabel: defaultButtonLabel.enterYourCodeButton,
    },
    reset: {
      title: 'Reset Password',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonLabel: defaultButtonLabel.resetPassword,
    },
    create: {
      title: 'Create Password',
      description: 'Check your email, enter the code',
      buttonLabel: defaultButtonLabel.updatePasswprd,
      footer: {
        description: defaultButtonLabel.loginRouterButton,
        buttonLabel: defaultButtonLabel.loginRouterButtonBold,
      },
    },
  },

  // Home
  home: {},

  // Journaling
  journaling: {
    buttonLabel: defaultButtonLabel.journaling,
    notes: {
      buttonLabel: defaultButtonLabel.next,
      first: {
        title: 'Your story for today',
        options: [],
      },
      second: {
        title: 'How did you fell',
        options: ['Awesome', 'Pretty good', 'Quite Ok', 'Kind of bad', 'Horrible'],
      },
      third: {
        title: 'What was the reason?',
        options: ['Education', 'Family', 'Finance', 'Food', 'Sport', 'Relationship', 'Work'],
      },
      fourth: {
        title: 'How did you feel',
        options: ['Awesome', 'Pretty good', 'Quite Ok', 'Kind of bad', 'Horrible'],
      },
      fifth: {
        title: 'What did you feel',
        options: [
          'Is Organic The Way Forward Bbq Grilling Versus Smoking The Great Debate',
          'Planning Helps Make A Party Perfect Keep Dinner Simple Heat Frozen Vegetables And Precooked Smoked Sausage Together For A Complete Meal',
        ],
      },
    },
  },

  // Audio/Video Course
  audioVideoCourse: {},

  // Profile
  profile: {},

  // Statistics
  statistics: {},

  // Payment
  payment: {},
};

export const profileScreenData = [
  'Profile Detail',
  'Security and Privacy',
  'Settings',
  'Support',
  'Terms and Conditions',
  'Privacy Policy',
];
