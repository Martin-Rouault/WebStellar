export const SUBMIT_CONTACT_MESSAGE = 'SUBMIT_CONTACT_MESSAGE';
export const HANDLE_SUCCESSFUL_CONTACT = 'HANDLE_SUCCESSFUL_CONTACT';

export const submitContactMessage = (mail, message) => ({
  type: SUBMIT_CONTACT_MESSAGE,
  mail,
  message,
});

export const handleSuccessfulContact = () => ({
  type: 'HANDLE_SUCCESSFUL_CONTACT',
});
