import React, { useState } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller, set } from 'react-hook-form'

import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  Wrapper,
  FormWrapper,
  ErrorMessage,
  InputLabel,
  SuccessMessage,
  TextArea,
  GlassWrap,
  FormTitle,
  SectionTitle,
} from './companyupdatepage.styles'

const CompanyUpdatePage = ({ state, actions }) => {

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState();

  const { control, register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm({
    defaultValues: {
      input_1: "",
      input_7: "",
      input_6: "",
      input_5: "",
      input_4: "",
      input_3: "",
      input_2: "",
      input_8: "",

    }
  });

  const onSubmit = (data) => {
    setSuccess()
    setProcessing(true)
    const formElement = document.forms["companyupdateform"],
      { action, method } = formElement,
      formData = new FormData(formElement)

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
      <GlassWrap>
        {success ?
          <SuccessMessage>Thank you for your submission. We will update your information as soon as possible.</SuccessMessage>
          :
          <FormWrapper>
            <FormTitle>Company Update Form</FormTitle><br/>
            <SectionTitle>Company Details</SectionTitle>
            <hr></hr>
            <form id="companyupdateform" onSubmit={handleSubmit(onSubmit)} action="https://dev.abcbaltimore.org/wp-json/gf/v2/forms/16/submissions" method="post">

              <Controller control={control} name="input_1"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormInput {...field} label="*Your Name" />
                )} />
              {errors.input_1?.type === 'required' && (<ErrorMessage>"Your Name is Required"</ErrorMessage>)}

              <Controller control={control} name="input_7"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormInput {...field} label="*Company Name" />
                )} />
              {errors.input_7?.type === 'required' && (<ErrorMessage>"Company Name is Required"</ErrorMessage>)}

              <Controller control={control} name="input_6"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormInput {...field} label="*Company Address" />
                )} />
              {errors.input_6?.type === 'required' && (<ErrorMessage>"Company Address is Required"</ErrorMessage>)}

              <Controller control={control} name="input_5"
                rules={{
                  required: true,
                  pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
                }}
                render={({ field }) => (
                  <FormInput {...field} label="*Company Phone Number" />
                )} />
              {errors.input_5?.type === 'required' && (<ErrorMessage>"Company Phone Number is Required"</ErrorMessage>)}
              {errors.input_5?.type === 'pattern' && (<ErrorMessage>"Phone Number Not Valid"</ErrorMessage>)}

              <Controller control={control} name="input_4"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormInput {...field} label="*Company Primary Contact Name and Title" />
                )} />
              {errors.input_4?.type === 'required' && (<ErrorMessage>"Primary Contact is Required"</ErrorMessage>)}


              <Controller control={control} name="input_3"
                rules={{
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                }}
                render={({ field }) => (
                  <FormInput {...field} label="*Primary Contact Email Address" />
                )} />
              {errors.input_3?.type === 'required' && (<ErrorMessage>"Contact Email is required"</ErrorMessage>)}
              {errors.input_3?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
              
              <Controller control={control} name="input_2"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormInput {...field} label="*Company Website" />
                )} />
              {errors.input_2?.type === 'required' && (<ErrorMessage>"Company Website is Required"</ErrorMessage>)}

              <InputLabel htmlFor="input_10">Other Information that Needs to be Updated</InputLabel>
              <TextArea {...register("input_10", { required: false, maxLength: 500 })} />

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

export default connect(CompanyUpdatePage);

