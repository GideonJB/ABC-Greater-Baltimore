import React, { useState } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller, set } from 'react-hook-form'

import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';

import { Wrapper, FormWrapper, ErrorMessage, TextArea, InputLabel, GlassWrap, SuccessMessage } from './pdppage.styles'

const PdpPage = ({ state, actions }) => {

  const [fileUpload, setFileUpload] = useState();
  const [fileName, setFileName] = useState();
  const [fileTest, setFileTest] = useState();
  const [docSubmitted, setDocSubmission] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState();
  let isFilesReady = false

  const fileChange = (event) => {
    // reset if earlier file was uploaded
    setFileUpload()
    setDocSubmission(false)

    //generate the file name for potential later use
    const inputKey = event.target.files[0].name

    //store file for conversion
    const files = event.target.files
    // console.log(files[0])
    setFileTest(files[0])

    //this conversion turned out to be unnecessary, but was useful to have
    // const filePromises = Object.entries(files).map(item => {
    //   console.log(item)
    //   return new Promise((resolve, reject) => {
    //     const [index, file] = item
    //     const reader = new FileReader();
    //     reader.readAsBinaryString(file);

    //     reader.onload = function(event) {
    //       //if multiple file upload se the object keys as picture[0], picture[1]
    //       //otherwise just use picture
    //       const fileKey = `${inputKey}${files.length > 1 ? `[${index}]` : ''}`
    //       console.log(fileKey);
    //       setFileName(fileKey)
    //       //Convert Base64 data URI
    //       //Assign it to your object
          
    //       const myFiles = `data:${file.type};base64,${btoa(event.target.result)}`
    //       // const blobFile = new Blob(myFiles)
    //       setFileUpload(myFiles)

    //       resolve()
    //     };
    //   })
    // })
    // Promise.all(filePromises)
    //   .then(() => {
    //     console.log('ready to submit')
    //     isFilesReady = true;
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     console.log('something wrong happened')
    //   })
    
  }

  const { control, register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm({
    defaultValues: {
      input_5_3: "",
      input_2: "",
      input_3: "",
      input_4: "",
      input_6: "",
      input_7: "",
      input_8: "",
      input_9: "",
      input_10: "",
      input_11: "",
      input_17: "",
      input_13_3: "",
      input_14: "",
      input_15: "",
      input_19: "",
      input_20: "",
      input_21_1: "",
  }
});

  const onSubmit = (data) => {
    setSuccess()
    setProcessing(true)
    const formElement = document.forms["pdpform"],
      { action, method } = formElement,
      formData = new FormData(formElement);
      formData.append("input_21_2", "By selecting the Electronic Signature button, you are signing this form electronically. You agree your electronic signature is the legal equivalent of your manual signature on this form. ")
      formData.append("input_17", fileTest)
    
    for (var value of formData.entries()) {
      // console.log(value);
    }

    const options = {
      method,
      body: formData,
    }
    // delete options.headers['Content-Type'];

    fetch(action, options)
      .then((response) => response.json())
      .then((response) => {
        setProcessing(false)
        // console.log(response)
        // actions.router.set("/");
        
        if (!response.is_valid) {
          setSuccess(false)

        }else{
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
        <SuccessMessage>Thank you for your Submission. Someone will contact you soon.</SuccessMessage>
      :
        <FormWrapper>
          <h3>PDP Application</h3>
          {/* <FormFrame src="https://dev.abcbaltimore.org/pdp-form/"></FormFrame> */}
          <form id="pdpform" onSubmit={handleSubmit(onSubmit)} action="https://dev.abcbaltimore.org/wp-json/gf/v2/forms/10/submissions" method="post">
            <Controller control={control} name="input_5_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Applicant Name" />
              )} />
            {errors.input_5_3?.type === 'required' && (<ErrorMessage>"Applicant Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_2"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Company" />
              )} />
            {errors.input_2?.type === 'required' && (<ErrorMessage>"Company Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Job Title" />
              )} />
            {errors.input_3?.type === 'required' && (<ErrorMessage>"Job Title is Required"</ErrorMessage>)}
            <Controller control={control} name="input_4"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Business Address" />
              )} />
            {errors.input_4?.type === 'required' && (<ErrorMessage>"Business Address is Required"</ErrorMessage>)}
            <Controller control={control} name="input_6"
              rules={{
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="Phone Number" />
              )} />
            {errors.input_6?.type === 'pattern' && (<ErrorMessage>"Phone Number Not Valid"</ErrorMessage>)}
            <Controller control={control} name="input_7"
              rules={{
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Email Address" />
              )} />
            {errors.input_7?.type === 'required' && (<ErrorMessage>"Email is required"</ErrorMessage>)}
            {errors.input_7?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
            <Controller control={control} name="input_8"
              render={({ field }) => (
                <FormInput {...field} label="Number of Years with this Company" />
              )} />
            <Controller control={control} name="input_9"
              render={({ field }) => (
                <FormInput {...field} label="Number of Years in the Construction Industry" />
              )} />
            <InputLabel htmlFor="input_10">Work History</InputLabel>
            <TextArea {...register("input_10", {required: false, maxLength: 500})} />
            <InputLabel htmlFor="input_11">*Briefly Describe Your Current Job Responsibilities</InputLabel>
            <TextArea {...register("input_11", { required: true, maxLength: 500 })} />
            {errors.input_11?.type === 'required' && (<ErrorMessage>"Current Job Responsibility is Required"</ErrorMessage>)}
            <br/>
            <InputLabel htmlFor="input_17">*Please Submit the following with your application
              <p>A one (1) page written letter explaining, - Why would you like to participate in the Professional Development Program? - What you hope to gain from participating? - How you plan to manage the time commitment of all that is required? - What benefit will this program have on your company and ABC Baltimore?</p>
              <p><strong>Files must be less than 15mb. If you are receving an error try a plain text file.</strong></p>
            </InputLabel>
            <input {...register("input_99", { required: docSubmitted})} type="file" onChange={fileChange} /><br/><br />
            {errors.input_99?.type === 'required' && (<ErrorMessage>"Document is Required. If your document won't submit, try saving as a pdf or txt file."</ErrorMessage>)}
            <Controller control={control} name="input_13_3"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Employer Name" />
              )} />
            {errors.input_13_3?.type === 'required' && (<ErrorMessage>"Employer Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_14"
              rules={{
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="* Emplyer Email Address" />
              )} />
            {errors.input_14?.type === 'required' && (<ErrorMessage>"Employer Email is required"</ErrorMessage>)}
            {errors.input_14?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
            <Controller control={control} name="input_15"
              render={({ field }) => (
                <FormInput {...field} label="Employer Job Title" />
              )} />
            <Controller control={control} name="input_19"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Signature" />
              )} />
            {errors.input_19?.type === 'required' && (<ErrorMessage>"Signature is Required"</ErrorMessage>)}
            <InputLabel htmlFor="input_21_1">*Electronic Signature</InputLabel>
            <input {...register("input_21_1", { required: true })} type="checkbox" value="1" />
            <br/><br/>
            {errors.input_21_1?.type === 'required' && (<ErrorMessage>"Electronic Signature Verification is Required"</ErrorMessage>)}
            <p>
              By selecting the Electronic Signature button, you are signing this form electronically. You agree your electronic signature is the legal equivalent of your manual signature on this form.
            </p>
            
              <br />
            <CustomButton>Submit Application</CustomButton><br/><br/>
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

export default connect(PdpPage);

