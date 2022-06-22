import React, { useState } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller, set } from 'react-hook-form'

import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';

import { Wrapper, FormWrapper, ErrorMessage, TextArea, InputLabel, SuccessMessage, GlassWrap, DropDown, RadioLabel, } from './joinABCpage.styles'

const JoinABCPage = ({ state, actions }) => {

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState();

  const { control, register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm({
    defaultValues: {
      input_8: "",
      input_9_1: "",
      input_9_2: "",
      input_9_3: "",
      input_9_4: "",
      input_9_5: "",
      input_9_6: "",
      input_10: "",
      input_11: "",
      input_12: "",
      input_13: "",
      input_14: "",
      input_19: "",
      input_16: "",
      input_17: "",
      input_18: "",
    }
  });

  const onSubmit = (data) => {
    setSuccess()
    setProcessing(true)
    const formElement = document.forms["joinABCform"],
      { action, method } = formElement,
      formData = new FormData(formElement);

    for (var value of formData.entries()) {
      console.log(value);
    }

    const options = {
      method,
      body: formData,
    }

    fetch(action, options)
      .then((response) => response.json())
      .then((response) => {
        setProcessing(false)
        console.log(response)

        if (!response.is_valid) {
          setSuccess(false)

        } else {
          setSuccess(true)
        }
      }).catch((error) => {

      })
  }

  return (
    <Wrapper>
      <Page />
      <GlassWrap className='glass-form'>
      
      {success ?
        <SuccessMessage>Thank you for your Submission. Someone will contact you soon with memebership details.</SuccessMessage>
        :
        <FormWrapper>
          <h3>ABC Membership Interest Form</h3>
          {/* <FormFrame src="https://dev.abcbaltimore.org/pdp-form/"></FormFrame> */}
          <form id="joinABCform" onSubmit={handleSubmit(onSubmit)} action="https://dev.abcbaltimore.org/wp-json/gf/v2/forms/4/submissions" method="post">
            <Controller control={control} name="input_8"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Company Name" />
              )} />
            {errors.input_8?.type === 'required' && (<ErrorMessage>"Company Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_9_1"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Address Line 1" />
              )} />
            {errors.input_9_1?.type === 'required' && (<ErrorMessage>"Address is Required"</ErrorMessage>)}
            <Controller control={control} name="input_9_2"
              rules={{ required: false }}
              render={({ field }) => (
                <FormInput {...field} label="Address Line 2" />
              )} />
            <Controller control={control} name="input_9_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*City" />
              )} />
            {errors.input_9_3?.type === 'required' && (<ErrorMessage>"City Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_9_4"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*State" />
              )} />
            {errors.input_9_4?.type === 'required' && (<ErrorMessage>"State Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_9_5"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Zip Code" />
              )} />
            {errors.input_9_5?.type === 'required' && (<ErrorMessage>"Zip Code is Required"</ErrorMessage>)}
            <Controller control={control} name="input_9_6"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Country" />
              )} />
            {errors.input_9_6?.type === 'required' && (<ErrorMessage>"Country Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_10"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Name" />
              )} />
            {errors.input_10?.type === 'required' && (<ErrorMessage>"Your Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_11"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Title" />
              )} />
            {errors.input_11?.type === 'required' && (<ErrorMessage>"Your Title is Required"</ErrorMessage>)}
            <Controller control={control} name="input_12"
              rules={{
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Email Address" />
              )} />
            {errors.input_12?.type === 'required' && (<ErrorMessage>"Email is required"</ErrorMessage>)}
            {errors.input_12?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
            <Controller control={control} name="input_13"
              rules={{
                required: true,
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="Company Phone Number" />
              )} />
            {errors.input_13?.type === 'required' && (<ErrorMessage>"Phone Number is required"</ErrorMessage>)}
            {errors.input_13?.type === 'pattern' && (<ErrorMessage>"Phone Number Not Valid"</ErrorMessage>)}
            
            <Controller control={control} name="input_14"
              rules={{
                required: true,
                pattern: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="Company Website (begin with https://)" />
              )} />
            {errors.input_14?.type === 'required' && (<ErrorMessage>"Website is required"</ErrorMessage>)}
            {errors.input_14?.type === 'pattern' && (<ErrorMessage>"Please Enter a vlaid website eg. https://www.mywebsite.com"</ErrorMessage>)}

            
            <br />
            <InputLabel>What is your main area of interest in ABC?</InputLabel><br/><br/>
            <Controller control={control} name="input_19"
              rules={{ required: false }}
              render={({ field }) => (
                <DropDown {...field} label="What is your main area of interest in ABC?">
                  <option value="Networking">Networking</option>
                  <option value="Education and Training">Education and Training</option>
                  <option value="Apprenticeship">Apprenticeship</option>
                  <option value="Young Professional Development">Young Professional Development</option>
                  <option value="Legislative Representation">Legislative Representation</option>
                  <option value="Legal Advice">Legal Advice</option>
                  <option value="Other">Other</option>
                </DropDown>
            )} />
            <br/>
            <br />
            <InputLabel>What is your firm type?</InputLabel><br/><br/>
            <Controller control={control} name="input_16"
            rules={{ required: true }}
            render={({ field }) => (
              <>
              <input {...field} id="first" type="radio" value="Contractor (GCs and Specialty Contractors)" />
              <RadioLabel htmlFor="first">Contractor (GCs and Specialty Contractors)</RadioLabel><br/>
              <input {...field} id="Second" type="radio" value="Supplier" />
              <RadioLabel htmlFor="Second">Supplier</RadioLabel><br/>
              <input {...field} id="Third" type="radio" value="Industry Associate (any professional/ associate firm working with contractors such as consulting, architectural, engineering, or developmental firms, etc.)" />
              <RadioLabel htmlFor="Third">Industry Associate (any professional/ associate firm working with contractors such as consulting, architectural, engineering, or developmental firms, etc.)</RadioLabel>
              </>
          )}/><br/><br/>
          {errors.input_16?.type === 'required' && (<ErrorMessage>Firm Type is Required</ErrorMessage>)}



            <Controller control={control} name="input_17"
              render={({ field }) => (
                <FormInput {...field} label="Who referred you to ABC Greater Baltimore" />
              )} />
            <Controller control={control} name="input_18"
              render={({ field }) => (
                <FormInput {...field} label="Referrer's Company" />
              )} />

            <br />
            <CustomButton>Submit Application</CustomButton><br /><br />
            {isSubmitted && isSubmitSuccessful === false ? <ErrorMessage>Please check the form for errors</ErrorMessage> : null}
          </form>
          {processing ? <Spinner /> : null}
          {success === false ? <ErrorMessage>There was an error processing your information. Please try again or contact ABC for help.</ErrorMessage> : null}
        </FormWrapper>
      }
      </GlassWrap>
    </Wrapper>
  )

}

export default connect(JoinABCPage);

