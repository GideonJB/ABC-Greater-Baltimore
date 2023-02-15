import React, { useState } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller, set } from 'react-hook-form'

import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';

import { Wrapper, FormWrapper, ErrorMessage, InputLabel, SuccessMessage, GlassWrap } from './logicscholarshippage.styles'

const LogicScholarshipPage = ({ state, actions }) => {

  const [coverDoc, setCoverDoc] = useState();
  const [coverSubmitted, setCoverSubmission] = useState(true);

  const [resumeDoc, setResumeDoc] = useState();
  const [resumeSubmitted, setResumeSubmission] = useState(true);

  const [essayDoc, setEssayDoc] = useState();
  const [essaySubmitted, setEssaySubmission] = useState(true);

  const [letterDoc, setLetterDoc] = useState();
  const [letterSubmitted, setLetterSubmission] = useState(true);

  const [transcriptDoc, setTranscriptDoc] = useState();
  const [transcriptSubmitted, setTranscriptSubmission] = useState(true);

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState();

  const fileChange = (event, type) => {
    let files = event.target.files
    switch(type) {
      case 'cover' :
        //remove error for requirement
        setCoverSubmission(false);
        // console.log(files[0]);
        setCoverDoc(files[0]);
        break;
      case 'resume':
        //remove error for requirement
        setResumeSubmission(false);
        // console.log(files[0]);
        setResumeDoc(files[0]);
        break;
      case 'essay':
        //remove error for requirement
        setEssaySubmission(false);
        // console.log(files[0]);
        setEssayDoc(files[0]);
        break;
      case 'letter':
        //remove error for requirement
        setLetterSubmission(false);
        // console.log(files[0]);
        setLetterDoc(files[0]);
        break;
      case 'transcript':
        //remove error for requirement
        setTranscriptSubmission(false);
        // console.log(files[0]);
        setTranscriptDoc(files[0]);
        break;
    }
  }

  const { control, register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm({
    defaultValues: {
      input_2: "",
      input_3_1: "",
      input_3_3: "",
      input_3_4: "",
      input_3_5: "",
      input_4: "",
      input_5: "",
      input_6: "",
      input_7: "",
      input_9: "",
      input_11_1: "",
      input_12: "",
      input_15_1: "",
      input_13: "",
      input_14_1: "",
      input_23: "",
    }
  });

  const onSubmit = (data) => {
    setSuccess()
    setProcessing(true)
    const formElement = document.forms["logicscholarshipform"],
      { action, method } = formElement,
      formData = new FormData(formElement)
    // formData.set("input_17", coverDoc)
    formData.set("input_18", resumeDoc)
    formData.set("input_19", essayDoc)
    formData.set("input_24", letterDoc)
    formData.set("input_25", transcriptDoc)

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
          <h4>General Information</h4>

          <form id="logicscholarshipform" onSubmit={handleSubmit(onSubmit)} action="https://dev.abcbaltimore.org/wp-json/gf/v2/forms/13/submissions" method="post">
            
            <Controller control={control} name="input_2"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Name" />
              )} />
            {errors.input_2?.type === 'required' && (<ErrorMessage>"Name is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_3_1"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Street Address" />
              )} />
            {errors.input_3_1?.type === 'required' && (<ErrorMessage>"Street Address is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_3_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*City" />
              )} />
            {errors.input_3_3?.type === 'required' && (<ErrorMessage>"City is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_3_4"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*State" />
              )} />
            {errors.input_3_4?.type === 'required' && (<ErrorMessage>"State is Required"</ErrorMessage>)}
            
            <Controller control={control} name="input_3_5"
              rules={{ 
                required: true,
                pattern: /^[0-9]{5}(?:-[0-9]{4})?$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Zipcode" />
              )} />
            {errors.input_3_5?.type === 'required' && (<ErrorMessage>"Zipcode is Required"</ErrorMessage>)}
            {errors.input_3_5?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Zipcode"</ErrorMessage>)}
            
            <Controller control={control} name="input_4"
              rules={{
                required: true,
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Phone Number" />
              )} />
            {errors.input_4?.type === 'required' && (<ErrorMessage>"Phone Number is Required"</ErrorMessage>)}
            {errors.input_4?.type === 'pattern' && (<ErrorMessage>"Phone Number Not Valid"</ErrorMessage>)}
            
            <Controller control={control} name="input_5"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*School Attending or Apprenticeship Program" />
              )} />
            {errors.input_5?.type === 'required' && (<ErrorMessage>"School is Required"</ErrorMessage>)}
            
            <InputLabel htmlFor="input_6">Anticipated Graduation Date</InputLabel><br/>
            <input {...register("input_6", { required: true })} type="date" /><br /><br />
            {errors.input_6?.type === 'required' && (<ErrorMessage>"Anticipated Graduation Date is Required"</ErrorMessage>)}
           
            <Controller control={control} name="input_7"
              rules={{
                required: true,
                pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Email Address" />
              )} />
            {errors.input_7?.type === 'required' && (<ErrorMessage>"Email is required"</ErrorMessage>)}
            {errors.input_7?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
            
            <h4>Postsecondary Options</h4>
            <p>Name up to 3 colleges, technical schools, apprenticeship trainings,
              intended career paths, or employers to which you have applied.
            </p>

            <Controller control={control} name="input_9"
              render={({ field }) => (
                <FormInput {...field} label="Postsecondary Option 1" />
              )} />
            <Controller control={control} name="input_11_1"
              rules={{ required: false }}
              render={({ field }) => (
                <>
                <input {...field} id="first" type="radio" value="Yes" />
                <label htmlFor="first">Yes</label><br/>
                <input {...field} id="second" type="radio" value="No" />
                <label htmlFor="second">No</label><br/>
                <input {...field} id="third" type="radio" value="Not Yet" />
                <label htmlFor="third">Not Yet</label>
                </>
            )}/><br/>

            <Controller control={control} name="input_12"
              render={({ field }) => (
                <FormInput {...field} label="Postsecondary Option 2" />
              )} />
            <Controller control={control} name="input_15_1"
              rules={{ required: false }}
              render={({ field }) => (
                <>
                <input {...field} id="first" type="radio" value="Yes" />
                <label htmlFor="first">Yes</label><br/>
                <input {...field} id="second" type="radio" value="No" />
                <label htmlFor="second">No</label><br/>
                <input {...field} id="third" type="radio" value="Not Yet" />
                <label htmlFor="third">Not Yet</label>
                </>
            )}/><br/>

            <Controller control={control} name="input_13"
              render={({ field }) => (
                <FormInput {...field} label="Postsecondary Option 1" />
              )} />
            <Controller control={control} name="input_14_1"
              rules={{ required: false }}
              render={({ field }) => (
                <>
                <input {...field} id="first" type="radio" value="Yes" />
                <label htmlFor="first">Yes</label><br/>
                <input {...field} id="second" type="radio" value="No" />
                <label htmlFor="second">No</label><br/>
                <input {...field} id="third" type="radio" value="Not Yet" />
                <label htmlFor="third">Not Yet</label>
                </>
            )}/><br/><br/>

            <h4>Attachments</h4>

            {/* <InputLabel htmlFor="input_17">*Application Cover Letter</InputLabel><br/>
            <input {...register("input_17", { required: coverSubmitted })} type="file" onChange={(e) => {fileChange(e, "cover")}} /><br /><br />
            {errors.input_99?.type === 'required' && (<ErrorMessage>"Document is Required. If your document won't submit, try saving as a pdf or txt file."</ErrorMessage>)} */}

            <InputLabel htmlFor="input_18">*Resum&eacute;</InputLabel><br />
            <input {...register("input_18", { required: resumeSubmitted })} type="file" onChange={(e) => {fileChange(e, "resume")}} /><br /><br />
            {errors.input_99?.type === 'required' && (<ErrorMessage>"Document is Required. If your document won't submit, try saving as a pdf or txt file."</ErrorMessage>)}

            <InputLabel htmlFor="input_19">*Essay</InputLabel><br />
            <input {...register("input_19", { required: essaySubmitted })} type="file" onChange={(e) => {fileChange(e, "essay")}} /><br /><br />
            {errors.input_99?.type === 'required' && (<ErrorMessage>"Document is Required. If your document won't submit, try saving as a pdf or txt file."</ErrorMessage>)}

            <InputLabel htmlFor="input_24">*Letter of Recommendation</InputLabel><br />
            <input {...register("input_24", { required: letterSubmitted })} type="file" onChange={(e) => {fileChange(e, "letter")}} /><br /><br />
            {errors.input_99?.type === 'required' && (<ErrorMessage>"Document is Required. If your document won't submit, try saving as a pdf or txt file."</ErrorMessage>)}

            <InputLabel htmlFor="input_25">*High School and/or Postsecondary Transcript</InputLabel><br />
            <input {...register("input_25", { required: transcriptSubmitted })} type="file" onChange={(e) => {fileChange(e, "transcript")}} /><br /><br />
            {errors.input_99?.type === 'required' && (<ErrorMessage>"Document is Required. If your document won't submit, try saving as a pdf or txt file."</ErrorMessage>)}


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

export default connect(LogicScholarshipPage);

