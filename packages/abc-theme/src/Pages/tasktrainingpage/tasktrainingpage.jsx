import React, { useState } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller, set } from 'react-hook-form'

import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';

import { Wrapper, FormWrapper, ErrorMessage, GlassWrap, InputLabel, SuccessMessage } from './tasktrainingpage.styles'


const TaskTrainingPage = ({ state, actions }) => {

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState();

  const { control, register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm({
    defaultValues: {
      input_12: "",
      input_2: "",
      input_5: "",
      input_11_1: "",
      input_8: "",
      input_4: "",
      input_6: "",
      input_7: "",
    }
  });

  const watchFields = watch("input_11_1");

  const onSubmit = (data) => {
    setSuccess()
    setProcessing(true)
    const formElement = document.forms["tasktrainingform"],
      { action, method } = formElement,
      formData = new FormData(formElement);

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
      <GlassWrap className="glass">
      {success ?
        <SuccessMessage>Thank you for your Submission. Someone will contact you soon.</SuccessMessage>
        :
        <FormWrapper>
          <h3>Training Request Form</h3>
          <p>All training requests must have 5 or more participating trainees.</p>
          <form id="tasktrainingform" onSubmit={handleSubmit(onSubmit)} action="https://dev.abcbaltimore.org/wp-json/gf/v2/forms/14/submissions" method="post">
            <Controller control={control} name="input_12"
              rules={{ required: true }}
              render={({ field }) => (
                <FormInput {...field} label="*Name" />
              )} />
            {errors.input_12?.type === 'required' && (<ErrorMessage>"Your Name is Required"</ErrorMessage>)}
            <Controller control={control} name="input_2"
              rules={{
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Email Address" />
              )} />
            {errors.input_2?.type === 'required' && (<ErrorMessage>"Email is required"</ErrorMessage>)}
            {errors.input_2?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
            <Controller control={control} name="input_5"
              rules={{ required: false }}
              render={({ field }) => (
                <FormInput {...field} label="Company Name" />
              )} />
            <InputLabel>Task Training Choice</InputLabel><br /><br />
            <Controller control={control} name="input_11_1"
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field} label="Task Training Choice">
                  <option value="HVAC - Tool recognition">HVAC - Tool recognition</option>
                  <option value="HVAC - Copper and Plastic Piping Practices plus Soldering & Brazing">HVAC - Copper and Plastic Piping Practices plus Soldering & Brazing</option>
                  <option value="HVAC - Basic Maintenance">HVAC - Basic Maintenance</option>
                  <option value="HVAC - Leak Detection, Evacuation, Recovery, and Charging">HVAC - Leak Detection, Evacuation, Recovery, and Charging</option>
                  <option value="HVAC Troubleshooting - Control Circuit and Motor">HVAC Troubleshooting - Control Circuit and Motor</option>
                  <option value="HVAC Troubleshooting - Cooling">HVAC Troubleshooting - Cooling</option>
                  <option value="HVAC Troubleshooting - Heat Pumps">HVAC Troubleshooting - Heat Pumps</option>
                  <option value="HVAC Troubleshooting - Gas Heating">HVAC Troubleshooting - Gas Heating</option>
                  <option value="HVAC Troubleshooting - Oil Heating">HVAC Troubleshooting - Oil Heating</option>
                  <option value="Electrical - Hand Bending">Electrical - Hand Bending</option>
                  <option value="Electrical - Conduit Bending">Electrical - Conduit Bending</option>
                  <option value="Electrical - Motor Controls">Electrical - Motor Controls</option>
                  <option value="Electrical - Pull and Junction Boxes">Electrical - Pull and Junction Boxes</option>
                  <option value="Electrical - Grounding and Bonding">Electrical - Grounding and Bonding</option>
                  <option value="Electrical - Cable Tray">Electrical - Cable Tray</option>
                  <option value="Electrical - Fire Alarm">Electrical - Fire Alarm</option>
                  <option value="Plumbing - Tool Recognition">Plumbing - Tool Recognition</option>
                  <option value="Plumbing - Service Plumbing">Plumbing - Service Plumbing</option>
                  <option value="Plumbing - Measure, Cut, Reem, and join various types of pipe">Plumbing - Measure, Cut, Reem, and join various types of pipe</option>
                  <option value="Plumbing - Intro to Welding">Plumbing - Intro to Welding</option>
                  <option value="Plumbing - Medgas intro plus Soldering & Brazing">Plumbing - Medgas intro plus Soldering & Brazing</option>
                  <option value="Plumbing - Intro to Plumbing Math">Plumbing - Intro to Plumbing Math</option>
                  <option value="Plumbing - Intro to Plumbing Drawings">Plumbing - Intro to Plumbing Drawings</option>
                  <option value="Plumbing - Intro to Plumbing Fixtures">Plumbing - Intro to Plumbing Fixtures</option>
                  <option value="Plumbing - Intro to Drain, Waste, and Vent (DWV) Systems">Plumbing - Intro to Drain, Waste, and Vent (DWV) Systems</option>
                  <option value="Plumbing - Intro to Water Distribution Systems">Plumbing - Intro to Water Distribution Systems</option>
                  <option value="Plumbing - Installing Fixtures and Valves">Plumbing - Installing Fixtures and Valves</option>
                  <option value="Plumbing - Fuel Gas and Fuel Oil Systems">Plumbing - Fuel Gas and Fuel Oil Systems</option>
                  <option value="Carpentry - Vertical Formwork">Carpentry - Vertical Formwork</option>
                  <option value="Carpentry - Horizontal Formwork">Carpentry - Horizontal Formwork</option>
                  <option value="Carpentry - Metal Framing">Carpentry - Metal Framing</option>
                  <option value="Carpentry - Doors and Door Hardware">Carpentry - Doors and Door Hardware</option>
                  <option value="Carpentry - Drywall Installation">Carpentry - Drywall Installation</option>
                  <option value="Carpentry - Drywall Finishing">Carpentry - Drywall Finishing</option>
                  <option value="CUSTOMIZED TRAINING">CUSTOMIZED TRAINING</option>
                </select>
              )} />
              {watchFields === "CUSTOMIZED TRAINING" ?
              <Controller control={control} name="input_8"
                rules={{ required: false }}
                render={({ field }) => (
                  <FormInput {...field} label="What type of training would you like?" />
                )} />
              : 
              null
              }
            <br /><br />
            <InputLabel>Do you need ABC to supply a Trainer?</InputLabel><br /><br />
              <Controller control={control} name="input_4"
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <input {...field} id="Yes" type="radio" value="Yes" />
                    <label htmlFor="Yes">Yes</label><br />
                    <input {...field} id="No" type="radio" value="No" />
                    <label htmlFor="No">No</label><br />
                  </>
                )} /><br />
              {errors.input_4?.type === 'required' && (<ErrorMessage>Trainer Choice is Required</ErrorMessage>)}
            <InputLabel>Date of Training</InputLabel><br /><br />
            <input {...register("input_6", { required: true })} type="date" /><br /><br />
            {errors.input_6?.type === 'required' && (<ErrorMessage>"Date is Required"</ErrorMessage>)}
            <InputLabel>Preferred Time of Day</InputLabel><br /><br />
            <Controller control={control} name="input_7"
              rules={{ required: false }}
              render={({ field }) => (
                <select {...field} label="Preferred Time of Day">
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Saturdays">Saturdays</option>
                </select>
              )} />
            <br />
            <br />
            <CustomButton>Submit Request</CustomButton><br /><br />
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

export default connect(TaskTrainingPage);

