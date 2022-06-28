import React, { useState, useEffect } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller } from 'react-hook-form'


import Page from "../../components/page/page.component"
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { Wrapper, FormWrapper, ErrorMessage, InputLabel, TextArea, GlassWrap } from './apprenticeapppage.styles'

const ApprenticeAppPage = ({ state, actions }) => {

  const [ssn, setSsn] = useState();

  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      firstName:"",
      middleName:"",
      lastName:"",
      suffix:"",
      dateOfBirth:"",
      ssn:"",
      gender:"",
      ethnicity:"",
      veteran:"",
      street:"",
      street2:"",
      city:"",
      state:"",
      zipCode:"",
      phone1:"",
      email:"",
      apprenticeType:"",
      _op1:"",
      _op4:"",
      _mt1:"",
      _st4:"",
      _mt12:"",
      _lt1:"",
      _op3:"",
      _st6:"",
      _st7:"",
      _st7:"",
      _op5:"",
      _st15:"",
      _st1:"",
      _st2:"",
      _st16:"",
      _dt2:"",
      applicationGuid:"60e88e9d-87f8-4562-9c76-008afdc3743d",
    }
  });

  const onSubmit = (data) => {
   
    const formElement = document.forms["apprenticeshipform"],
      { action, method } = formElement,
      formData = new FormData(formElement);

    for (var value of formData.entries()) {
      // console.log(value);
    }

    const options = {
      method,
      body: formData,
    }

    // fetch(action, options)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response)
    //     // actions.router.set("/");

    //     if (isFormSubmissionError(response)) {

    //     }
    //   }).catch((error) => {

    //   })
  }

  const handleSSN = (event) => {
    // console.log("hi")
    // console.log(event);
    if (event.value) {

      // event.value = util.printx("999-99-9999", event.value);
      setSsn(event.value)

    }
  }


  return (
    <Wrapper>
      {/* <Page /> */}
      <GlassWrap className="glass-form">
      <FormWrapper>
        <h3>Apprenticeship Application</h3>
        <form id="apprenticeshipform" onSubmit={handleSubmit(onSubmit)} action="https://workforce.flashpoint.xyz/Api/EducationApi/SubmitApplication" method="post">
          
          <Controller control={control} name="firstName"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*First Name" />
            )} />
          {errors.firstName?.type === 'required' && (<ErrorMessage>"First Name is Required"</ErrorMessage>)}
          
          <Controller control={control} name="middleName"
            rules={{ required: false }}
            render={({ field }) => (
              <FormInput {...field} label="Middle Name" />
            )} />  
          
          <Controller control={control} name="lastName"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Last Name" />
            )} />
          {errors.lastName?.type === 'required' && (<ErrorMessage>"Last Name is Required"</ErrorMessage>)}

          <Controller control={control} name="suffix"
            rules={{ required: false }}
            render={({ field }) => (
              <FormInput {...field} label="Suffix" />
            )} />
          
          <InputLabel>Date of Birth</InputLabel><br />
          <input {...register("dateOfBirth", { required: true })} type="date" /><br />
          {errors.dateOfBirth?.type === 'required' && (<ErrorMessage>"Date of Birth is Required"</ErrorMessage>)}
          
           <Controller control={control} name="ssn"
              rules={{
                required: true,
                pattern: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/
              }}
              render={({ field }) => (
                <FormInput {...field} label="*Social Security Number xxx-xx-xxxx"/>
              )} />
            {errors.ssn?.type === 'required' && (<ErrorMessage>"Social Security Number is required"</ErrorMessage>)}
            {errors.ssn?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Social Security Number (including dashes)"</ErrorMessage>)}
          
          <InputLabel>Gender</InputLabel><br/>
          <Controller control={control} name="gender"
            rules={{ required: false }}
            render={({ field }) => (
              <select {...field} label="Gender">
                <option value="0"></option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            )} /><br/><br/>

          <InputLabel>Ethnicity</InputLabel><br/>
          <Controller control={control} name="ethnicity"
            rules={{ required: false }}
            render={({ field }) => (
              <select {...field} label="*Ethnicity">
                <option value="American Indian Or Alaskan Native">American Indian Or Alaskan Native</option>
                <option value="Asian / Pacific Islander">Asian / Pacific Islander</option>
                <option value="Black">Black</option>
                <option value="Hispanic">Hispanic</option>
                <option value="Other">Other</option>
                <option value="White - Not of Hispanic Origin">White - Not of Hispanic Origin</option>
              </select>
            )} /><br/><br/>
          
          <InputLabel>Are You a Veteran?</InputLabel><br/>
          <Controller control={control} name="veteran"
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input {...field} id="True" type="radio" value="True" />
                <label htmlFor="True">Yes</label><br />
                <input {...field} id="False" type="radio" value="False" />
                <label htmlFor="False">No</label><br />
              </>
            )} /><br /><br />
          {errors.veteran?.type === 'required' && (<ErrorMessage>Veteran Identification is Required</ErrorMessage>)}

          <h4>Address</h4>
          <Controller control={control} name="street"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Street Name" />
            )} />
          {errors.street?.type === 'required' && (<ErrorMessage>"Street Name is Required"</ErrorMessage>)}

          <Controller control={control} name="street2"
            rules={{ required: false }}
            render={({ field }) => (
              <FormInput {...field} label="*Street 2" />
            )} />
          
          <Controller control={control} name="city"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*City" />
            )} />
          {errors.city?.type === 'required' && (<ErrorMessage>"City is Required"</ErrorMessage>)}
          
          <InputLabel>State</InputLabel><br/>
          <Controller control={control} name="state"
            rules={{ required: false }}
            render={({ field }) => (
              <select {...field} value="MD" label="*State">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
               </select>
              )} />

          <Controller control={control} name="zipCode"
            rules={{
              required: true,
              pattern: /^[0-9]{5}(?:-[0-9]{4})?$/
            }}
            render={({ field }) => (
              <FormInput {...field} label="*Zipcode" />
            )} />
          {errors.zipCode?.type === 'required' && (<ErrorMessage>"Zipcode is Required"</ErrorMessage>)}
          {errors.zipCode?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Zipcode"</ErrorMessage>)}
          
          <Controller control={control} name="phone1"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Phone Number" />
            )} />
          {errors.phone1?.type === 'required' && (<ErrorMessage>"City is Required"</ErrorMessage>)}
          
          <Controller control={control} name="email"
            rules={{
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            }}
            render={({ field }) => (
              <FormInput {...field} label="*Email Address" />
            )} />
          {errors.email?.type === 'required' && (<ErrorMessage>"Email is required"</ErrorMessage>)}
          {errors.email?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
          
          <InputLabel>*Apprenticeship Type</InputLabel><br />
          <Controller control={control} name="apprenticeType"
            rules={{ required: false }}
            render={({ field }) => (
              <select {...field} label="*Apprenticeship Type">
                <option value="-183655">Carpenter</option>
                <option value="695242000">CEA Pre Apprenticeship</option>
                <option value="-183654">Drywall</option>
                <option value="-183653">Electrician</option>
                <option value="-183652">Glazing</option>
                <option value="-183651">Heavy Equipment Operations</option>
                <option value="-183650">HVAC Technician</option>
                <option value="-183649">Instrumentation</option>
                <option value="-183648">Insulating</option>
                <option value="-183647">Ironworking</option>
                <option value="-183646">Jumpstart Pre-Apprenticeship Program</option>
                <option value="-183645">Masonry</option>
                <option value="-183644">Pipefitter</option>
                <option value="-183643">Plumber</option>
                <option value="-183641">School-To-Career Registered Apprentice</option>
                <option value="-183640">Sheet Metal</option>
                <option value="-183639">Sprinkler Fitter</option>
              </select>
            )} /><br /><br />

          <InputLabel>Do you have your own transportation?</InputLabel><br />
          <Controller control={control} name="_op1"
            rules={{ required: false }}
            render={({ field }) => (
              <>
                <input {...field} id="Yes" type="radio" value="99358004" />
                <label htmlFor="No">Yes</label><br />
                <input {...field} id="No" type="radio" value="99358005" />
                <label htmlFor="No">No</label><br />
              </>
            )} /><br /><br />

          <h4>Employment Status</h4>
                    
          <InputLabel>*Are you currently with a participating Employer?</InputLabel><br />
          <Controller control={control} name="_op4"
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input {...field} id="Yes" type="radio" value="99358012" />
                <label htmlFor="No">Yes</label><br />
                <input {...field} id="No" type="radio" value="99358013" />
                <label htmlFor="No">No</label><br />
              </>
            )} />
          {errors._op4?.type === 'required' && (<ErrorMessage>"Participating Employer Status is Required"</ErrorMessage>)}

          <Controller control={control} name="_mt1"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Employer's Name" />
            )} />
          {errors._mt1?.type === 'required' && (<ErrorMessage>"Employer's Name is Required"</ErrorMessage>)}
          
          <Controller control={control} name="_st4"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="Work Phone" />
            )} />
          
          <Controller control={control} name="_mt12"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="Supervisor's Name" />
            )} />
          
          <InputLabel htmlFor="input_11">*Briefly Describe Your Current Job Responsibilities</InputLabel>
          <TextArea {...register("input_11", { required: true, maxLength: 500 })} />
          {errors.input_11?.type === 'required' && (<ErrorMessage>"Current Job Responsibility is Required"</ErrorMessage>)}
          <br />

          <h4>Education</h4>

          <InputLabel>*Please indicate last grade completed</InputLabel><br />
          <Controller control={control} name="_op3"
            rules={{ required: false }}
            render={({ field }) => (
              <select {...field} label="_op3">
                <option value=""></option>
                <option value="99358008">College</option>
                <option value="99358009">High School</option>
                <option value="99358010">Voc/Trade</option>
              </select>
            )} /><br /><br />
          
          <Controller control={control} name="_st6"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Name of Most Recent Educational Institution" />
            )} />
          {errors._st6?.type === 'required' && (<ErrorMessage>"Educational Institution is Required"</ErrorMessage>)}

          <Controller control={control} name="_st7"
            rules={{ required: false }}
            render={({ field }) => (
              <FormInput {...field} label="Course of Study (if applicable)" />
            )} />

          <h4>Applicant Profile</h4>
          <p>This information is required by the Maryland Apprenticeship &amp; Training Council.</p>
          
          <InputLabel>*Are you physically able to perform the duties of a construction trade?</InputLabel><br />
          <Controller control={control} name="_op5"
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input {...field} id="Yes" type="radio" value="99358014" />
                <label htmlFor="No">Yes</label><br />
                <input {...field} id="No" type="radio" value="99358015" />
                <label htmlFor="No">No</label><br />
              </>
            )} />
          {errors._op5?.type === 'required' && (<ErrorMessage>"Participating Employer Status is Required"</ErrorMessage>)}
          
          <Controller control={control} name="_st15"
            rules={{ required: false }}
            render={({ field }) => (
              <FormInput {...field} label="How did you hear about ABC Apprenticeship?" />
            )} />

          <p>"I understand that all of the following requirements must be submitted with completed application to be scheduled for an interview."</p>
          <p><em><strong>Please email or fax or mail the following requirements to:</strong></em></p>
          <p><em><strong>Fax: 410.821.0358</strong></em></p>
          <p><em><strong>Email: apr@abcbaltimore.org</strong></em></p>
          <p><em><strong>Mail: 2101 E. Biddle Stree, Ste. 5000, Baltimore, MD 21213</strong></em></p>
          <ol>
            <li><em><strong>DOCTOR'S CERTIFICATE</strong></em>&nbsp;- You must obtain a doctor's note stating that <span><strong>"YOU ARE PHYSICALLY ABLE TO WORK IN THE CONSTRUCTION FIELD"</strong></span>. &nbsp;This note must be signed by the attending physician stating the date you were examined, and the date must be within the last six months, and must be on the doctor's letterhead or prescription pad. &nbsp;Any doctor's note NOT having the above information will not be accepted.</li>
            <li><em><strong>PROOF OF AGE</strong></em><strong></strong> - &nbsp;Provide one of the following: Birth Certificate, Selective Service Card or Driver's License.</li>
            <li><em><strong>COPY OF YOUR HIGH SCHOOL DIPLOMA or GED.</strong></em></li>
            <li><strong><em>PROOF OF WORK EXPERIENCE</em></strong><em></em> - You must obtain a letter from a current or previous employer stating the length of employment and the duties you performed, and must be signed by the employer. &nbsp;(Experience does not have to be in the selected trade but is preferred).</li>
            <li><em><strong>VETERANS DISCHARGE (DD214)-IF APPLICABLE:</strong></em> You must supply a copy of your discharge papers if you served in the military.</li>
          </ol><br/>
          <p><em>"I certify that to the best of my knowledge and belief, the above information is true and correct. &nbsp;I fully understand that it is my responsibility to provide my own transportation to and from all job sites and that the inability to do so may disqualify me from the ABC Apprenticeship Program."</em></p>

          <Controller control={control} name="_st16"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Electronic Signature" />
            )} />
          {errors._st16?.type === 'required' && (<ErrorMessage>"Electronic Signature is Required"</ErrorMessage>)}
          
          <InputLabel>Today's Date</InputLabel><br />
          <input {...register("_dt2", { required: true })} type="date" /><br />
          {errors._dt2?.type === 'required' && (<ErrorMessage>"Date of Birth is Required"</ErrorMessage>)}
         
          <CustomButton>Submit Application</CustomButton>
        </form>
      </FormWrapper>
      </GlassWrap>
    </Wrapper>
  )

}

export default connect(ApprenticeAppPage);

