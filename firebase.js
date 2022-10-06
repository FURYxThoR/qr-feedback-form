import React from 'react'
import { getAuth } from "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
  
}, auth);



const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;