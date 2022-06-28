import React, { useState } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller, set } from 'react-hook-form'

import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';

import { Wrapper,
        FormWrapper,
        ErrorMessage,
        InputLabel,
        SuccessMessage,
        TextArea,
        GlassWrap,
        FormTitle,
        SectionTitle,
      } from './facilityrentalpage.styles'

const FacilityRentalPage = ({ state, actions }) => {

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState();

  const { control, register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm({
    defaultValues: {
      input_1_3: "",
      input_3: "",
      input_4: "",
      input_5_1: "",
      input_5_3: "",
      input_5_4: "",
      input_5_5: "",
      input_8: "",
      input_9: "",
      input_10: "",
      input_11: "",
      input_12: "",
    }
  });

  const onSubmit = (data) => {
    setSuccess()
    setProcessing(true)
    const formElement = document.forms["logicscholarshipform"],
      { action, method } = formElement,
      formData = new FormData(formElement)

    for (var value of formData.entries()) {
      // console.log(value);
    }

    const options = {
      method,
      body: formData,
    }

    fetch(action, options)
      .then((response) => response.json())
      .then((response) => {
        setProcessing(false)
        // console.log(response)

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
        <SuccessMessage>Thank you for your Submission. Someone will contact you soon.</SuccessMessage>
        :
        <FormWrapper>
            <FormTitle>Facility Rental Application</FormTitle>
          <SectionTitle>Company Details</SectionTitle>
          <hr></hr>
          <form id="logicscholarshipform" onSubmit={handleSubmit(onSubmit)} action="https://dev.abcbaltimore.org/wp-json/gf/v2/forms/12/submissions" method="post">

            <Controller control={control} name="input_1_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Name" />
              )} />
            {errors.input_1_3?.type === 'required' && (<ErrorMessage>"Name is Required"</ErrorMessage>)}

            <Controller control={control} name="input_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Company" />
              )} />
            {errors.input_3?.type === 'required' && (<ErrorMessage>"Company is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_4"
              rules={{
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Email Address" />
              )} />
            {errors.input_4?.type === 'required' && (<ErrorMessage>"Email is required"</ErrorMessage>)}
            {errors.input_4?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}

            <Controller control={control} name="input_5_1"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Street Address" />
              )} />
            {errors.input_5_1?.type === 'required' && (<ErrorMessage>"Street Address is Required"</ErrorMessage>)}

            <Controller control={control} name="input_5_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*City" />
              )} />
            {errors.input_5_3?.type === 'required' && (<ErrorMessage>"City is Required"</ErrorMessage>)}

            <Controller control={control} name="input_5_4"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*State" />
              )} />
            {errors.input_5_4?.type === 'required' && (<ErrorMessage>"State is Required"</ErrorMessage>)}

            <Controller control={control} name="input_5_5"
              rules={{
                required: true,
                pattern: /^[0-9]{5}(?:-[0-9]{4})?$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Zipcode" />
              )} />
            {errors.input_5_5?.type === 'required' && (<ErrorMessage>"Zipcode is Required"</ErrorMessage>)}
            {errors.input_5_5?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Zipcode"</ErrorMessage>)}
            

            <SectionTitle>Event Details</SectionTitle>
            <hr></hr>
            <InputLabel>Event Date</InputLabel><br /><br />
            <input {...register("input_8", { required: true })} type="date" /><br /><br />
            {errors.input_8?.type === 'required' && (<ErrorMessage>"Date is Required"</ErrorMessage>)}
            
            <InputLabel>Expected Start Time</InputLabel><br /><br />
            <input {...register("input_9", { required: true })} type="time" /><br /><br />
            {errors.input_9?.type === 'required' && (<ErrorMessage>"Start Time is Required"</ErrorMessage>)}

            <InputLabel>Expected End Time</InputLabel><br /><br />
            <input {...register("input_10", { required: true })} type="time" /><br /><br />
            {errors.input_10?.type === 'required' && (<ErrorMessage>"End Time is Required"</ErrorMessage>)}





            <Controller control={control} name="input_11"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Expected Number of People" />
              )} />
            {errors.input_11?.type === 'required' && (<ErrorMessage>"Number of People is Required"</ErrorMessage>)}
            
            <InputLabel htmlFor="input_12">*Briefly Describe Your Event</InputLabel>
            <TextArea {...register("input_12", { required: true, maxLength: 500 })} />
            {errors.input_12?.type === 'required' && (<ErrorMessage>"Event Description is Required"</ErrorMessage>)}
            <br />

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

export default connect(FacilityRentalPage);

