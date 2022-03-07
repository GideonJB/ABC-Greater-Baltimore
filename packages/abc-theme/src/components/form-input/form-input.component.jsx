import React, { useEffect } from 'react'

import { FormInputContainer, FormInputLabel, GroupContainer } from './form-input.styles';

const FormInput = React.forwardRef(({ handleChange, label, ...otherProps }, ref) => {
  

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
  </GroupContainer>
  )
})

export default FormInput;