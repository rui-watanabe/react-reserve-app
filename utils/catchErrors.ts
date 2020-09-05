import { Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';

function catchErrors(
  error: AxiosError,
  displayError: Dispatch<SetStateAction<string>>,
) {
  let errorMsg;
  if (error.response) {
    //The request was made and the server responsed with a status code
    //that is not in the range pf 2xx
    errorMsg = error.response.data;
    console.error('Error response', errorMsg);

    //For Cloudinary image upload
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    //The request was made,but no response as received
    errorMsg = error.request;
    console.error('Error request', errorMsg);
  } else {
    //something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error('Error message', errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
