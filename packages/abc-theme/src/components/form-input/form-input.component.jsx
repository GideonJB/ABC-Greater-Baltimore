import React, { useEffect, useState } from 'react'

import { FormInputContainer, FormInputLabel, GroupContainer, Eye } from './form-input.styles';

const FormInput = React.forwardRef(({ handleChange, label, style, ...otherProps }, ref) => {
  const [show, setShow] = useState("show")
  
  const handleShow = () => {
    const showButton = document.getElementById("loginPassword");
    if (showButton.type === "password") {
      showButton.type = "text";
      setShow("hide");
    } else {
      showButton.type = "password";
      setShow("show");
    }
  }

  useEffect (() => {
  
  });

  return(
  <GroupContainer ref={ref}>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel 
        className={`${
          otherProps.value.length ? 'shrink' : ''
        }`}
      >
        {label}
      </FormInputLabel>
    ) : null}
    {style ? <Eye onClick={handleShow}>{show}</Eye>: null}
  </GroupContainer>
  )
})

export default FormInput;