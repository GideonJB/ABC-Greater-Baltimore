import React, { useState } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller, set } from 'react-hook-form'

import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';

import { Wrapper, FormWrapper, ErrorMessage, InputLabel, SuccessMessage, GlassWrap, TextArea } from './apprenticeresumepage.styles'

const ApprenticeResumePage = ({ state, actions }) => {

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState();

  const { control, register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm({
    defaultValues: {
      input_1: "", input_3: "", input_4: "", input_5_1: "",
      input_5_3: "", input_5_4: "", input_5_5: "",
      input_6: "", input_7: "", input_10: "", input_11: "",
      input_12: "", input_13: "", input_15: "", input_16: "",
      input_17: "", input_18: "", input_19: "", input_20: "",
      input_21: "", input_22: "", input_23: "", input_24: "",
      input_25: "", input_26_1: "", input_26_2: "", input_26_3: "",
      input_26_4: "", input_26_5: "", input_26_6: "", input_26_7: "",
      input_26_8: "", input_26_9: "", input_26_10: "", input_26_11: "",
      input_26_12: "", input_26_13: "", input_26_14: "", input_26_15: "",
      input_26_16: "", input_26_17: "", input_26_18: "", input_26_19: "",
      input_26_20: "", input_26_21: "", input_26_22: "",
    }
  });

  const skillChoices = {"input_26_1": "Carpentry", "input_26_2": "Plumbing",
    "input_26_3": "HVAC", "input_26_4": "Electrical", "input_26_5": "Sprinkler Fitting",
    "input_26_6": "Heavy Equipment", "input_26_7": "Sheet Metal", "input_26_8": "Cement Masonry",
    "input_26_9": "Drywall", "input_26_11": "Glazier", "input_26_12": "Heavy Equipment Operator",
    "input_26_13": "Laborer", "input_26_14": "Masonry", "input_26_15": "Painting",
    "input_26_16": "Pipe Insulator", "input_26_17": "Reinforced Ironwork",
    "input_26_18": "Roofing", "input_26_19": "Steamfitting", "input_26_21": "Structural Ironwork",
    "input_26_22": "Welding", "input_26_23": "Pipefitting"}

  const onSubmit = (data) => {
    setSuccess()
    setProcessing(true)
    const formElement = document.forms["apprenticeresumeform"],
      { action, method } = formElement,
      formData = new FormData(formElement)
      state.theme.resumeData = formData.entries();

    for (var value of formData.entries()) {
      console.log(value);
    }

    formData.forEach((value, key) => {
      state.theme.resumeData[key] = value;
    })

    const options = {
      method,
      body: formData,
    }
    console.log('OPTIONS', options);

    fetch(action, options)
      .then((response) => response.json())
      .then((response) => {
        setProcessing(false)
        // console.log(response)

        if (!response.is_valid) {
          setSuccess(false)

        } else {
          setSuccess(true)
          actions.router.set("/resume-print/");
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
          <h4>Contact Information</h4>

          <form id="apprenticeresumeform" onSubmit={handleSubmit(onSubmit)} action="https://dev.abcbaltimore.org/wp-json/gf/v2/forms/17/submissions" method="post">
            
            <Controller control={control} name="input_1"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Name" />
              )} />
            {errors.input_1?.type === 'required' && (<ErrorMessage>"Name is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_3"
              rules={{
                required: true,
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Phone Number" />
              )} />
            {errors.input_3?.type === 'required' && (<ErrorMessage>"Phone Number is Required"</ErrorMessage>)}
            {errors.input_3?.type === 'pattern' && (<ErrorMessage>"Phone Number Not Valid"</ErrorMessage>)}
            
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
            
            <p>Do you have a reliable vehicle to get to and from work?</p>
            <Controller control={control} name="input_6"
            rules={{ required: true }}
            render={({ field }) => (
              <>
              <input {...field} id="first" type="radio" value="Yes" />
              <label htmlFor="first">Yes</label><br/>
              <input {...field} id="second" type="radio" value="No" />
              <label htmlFor="second">No</label><br/>
              </>
            )}/>
            <br />
            {errors.input_6?.type === 'required' && (<ErrorMessage>"Vehicle Availability is Required"</ErrorMessage>)}
            <br/>

            <InputLabel htmlFor="input_7">*Briefly describe yourself including your strengths as an employee:</InputLabel>
            <TextArea {...register("input_7", { required: true, maxLength: 500 })} />
            {errors.input_7?.type === 'required' && (<ErrorMessage>"Personal Description is Required"</ErrorMessage>)}
            <br />

            <h4>Education</h4>
            <br />

            <p>Highest level of education completed</p>
            <Controller control={control} name="input_10"
            rules={{ required: true }}
            render={({ field }) => (
              <>
              <input {...field} id="first" type="radio" value="Traditional High School" />
              <label htmlFor="first">Traditional High School</label><br/>
              <input {...field} id="second" type="radio" value="Trade School" />
              <label htmlFor="second">Trade School</label><br/>
              <input {...field} id="third" type="radio" value="Career and Technology Education School (CTE)" />
              <label htmlFor="third">Career and Technology Education School (CTE)</label><br/>
              <input {...field} id="fourth" type="radio" value="College" />
              <label htmlFor="fourth">College</label><br/>
              </>
            )}/>
            <br />
            {errors.input_10?.type === 'required' && (<ErrorMessage>"Education Level is Required"</ErrorMessage>)}
            <br/>

            <Controller control={control} name="input_11"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Name of Education Degree" />
            )} />
            {errors.input_11?.type === 'required' && (<ErrorMessage>"Degree Name is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_12"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Name of Education Institution Attended" />
              )} />
            {errors.input_12?.type === 'required' && (<ErrorMessage>"Institution Name is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_13"
              rules={{ required: false }}
              render={({ field }) => (
                <FormInput {...field} label="List any other Construction Certificates you may have" />
            )} />
            <br />

            <h4>Work History</h4>
            <br />

            <Controller control={control} name="input_15"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Most Recent Place of Work" />
              )} />
            {errors.input_15?.type === 'required' && (<ErrorMessage>"Most Recent Workplace is Required"</ErrorMessage>)}
            
            <InputLabel htmlFor="input_16">Start Date</InputLabel><br/>
            <input {...register("input_16", { required: true })} type="date" /><br /><br />
            {errors.input_16?.type === 'required' && (<ErrorMessage>"Start Date is Required"</ErrorMessage>)}

            <InputLabel htmlFor="input_17">End Date (use today's date if still employed)</InputLabel><br/>
            <input {...register("input_17", { required: true })} type="date" /><br /><br />
            {errors.input_17?.type === 'required' && (<ErrorMessage>"End Date is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_18"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Job Title" />
              )} />
            {errors.input_18?.type === 'required' && (<ErrorMessage>"Job Title is Required"</ErrorMessage>)}
            
            <InputLabel htmlFor="input_19">*Job Description</InputLabel>
            <TextArea {...register("input_19", { required: true, maxLength: 500 })} />
            {errors.input_19?.type === 'required' && (<ErrorMessage>"Job Description is Required"</ErrorMessage>)}
            <br />

            <Controller control={control} name="input_20"
              rules={{ required: false }}
              render={({ field }) => (
                <FormInput {...field} label="Former Place of Work" />
              )} />
            
            <InputLabel htmlFor="input_21">Start Date</InputLabel><br/>
            <input {...register("input_21", { required: false })} type="date" /><br /><br />

            <InputLabel htmlFor="input_22">End Date</InputLabel><br/>
            <input {...register("input_22", { required: false })} type="date" /><br /><br />
            
            <Controller control={control} name="input_23"
              rules={{ required: false }}
              render={({ field }) => (
                <FormInput {...field} label="Job Title" />
              )} />
            
            <InputLabel htmlFor="input_24">Job Description</InputLabel>
            <TextArea {...register("input_24", { required: false, maxLength: 500 })} />
            <br />

            <h4>Skills</h4>
            <br />
            <p>Check any skills you currently have</p>
            {Object.entries(skillChoices).map(([key, value]) =>{
              return(
                <Controller key={key} control={control} name={key} 
                  render={({ field }) => (
                    <>
                      <input {...field} id={key} type="checkbox" value={value} />
                      <label htmlFor={key}>{value}</label><br/>
                    </>
                  )}
                />

              )
            })}

            <br />
            <CustomButton>Submit Form</CustomButton><br /><br />
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

export default connect(ApprenticeResumePage);

