export const validateString=(value)=>{
    return value?.length < 3 || value === null ? 'must have atleast 3 characters':null;
  }

  export const trancateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  