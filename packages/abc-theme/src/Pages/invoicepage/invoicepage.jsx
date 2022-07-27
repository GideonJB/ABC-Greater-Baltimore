import React, { useState, useEffect } from 'react';
import { connect, fetch } from 'frontity'
import { useForm, Controller } from 'react-hook-form'

import recaptchaFetch from '../../utils/recaptcha-fetch';

import Page from '../../components/page/page.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Captcha from '../../components/captcha/captcha.component';

import { GlassWrap, FormWrapper, Wrapper, ErrorMessage } from './invoicepage.styles'


const InvoicePage = ({ state, actions }) => {

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     state.theme.token = loggedInUser;
  //   }
  //   else if (state.theme.token === false) {
  //     actions.router.set("/register/");
  //   }
  // }, []);

  const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      FullName: "",
      CustRefID: "",
      Email: "",
      PhoneNumber: "",
      Amount: "",
      CustRefID1: "",
      CustRefID3: "",
    }
  });

  const onVerifyCaptcha = (token) => {
    setValue('captchaToken', token);
    recaptchaFetch(state.theme.captchaSecret, token);

  };

  const onSubmit = (data) => {
    if (document.getElementById("a_pass").value.length > 0){
      return  
    }else{
      document.forms["invoicepayment"].submit();
    }
  }
  
  useEffect(() => {
    // register('captchaToken', { required: true });
  });
   
  return(
    <Wrapper>
      <Page />
      <GlassWrap className='glass-form'>
      <FormWrapper>
        <h3>ABC Member Invoice Form</h3>
          <form id="invoicepayment" onSubmit={handleSubmit(onSubmit)} action="https://hosted.transactionexpress.com/Transaction/Transaction/Index" method="post" target="_blank">
          <p>Transaction Type:</p>
          <select name="RecurringType">
            <option value="N">One-time Payment</option>
            <option value="A">Recurring Payment - Membership</option>
          </select>
          <br/>
          <Controller control={control} name="CustRefID"
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput {...field} label="*Company Name" />
            )} />
          {errors.CustRefID?.type === 'required' && (<ErrorMessage>"Company Name is Required"</ErrorMessage>)}
          
          <Controller control={control} name="FullName"
                      rules={{ required: true }}
                      render={({ field }) => (
                      <FormInput {...field} label="*Billing Contact (First & Last Name)"/>
          )}/>
          {errors.FullName?.type === 'required' && (<ErrorMessage>"First name is required"</ErrorMessage>)}

          <Controller control={control} name="Email"
            rules={{ required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  }}
            render={({ field }) => (
              <FormInput {...field} label="*Billing Contact (Email Address)" />
            )} />
          {errors.Email?.type === 'required' && (<ErrorMessage>"Email is required"</ErrorMessage>)}
          {errors.Email?.type === 'pattern' && (<ErrorMessage>"Please Enter a Valid Email Address"</ErrorMessage>)}
          
          <Controller control={control} name="PhoneNumber"
            rules={{
              required: true,
              pattern: /^\d{3}-\d{3}-\d{4}$/
            }}
            render={({ field }) => (
              <FormInput {...field} label="*Company Phone Number (xxx-xxx-xxxx)" />
            )} />
          {errors.PhoneNumber?.type === 'required' && (<ErrorMessage>"Phone Number is required"</ErrorMessage>)}
          {errors.PhoneNumber?.type === 'pattern' && (<ErrorMessage>"Please Use Correct Phone Number Formatting with Dashes"</ErrorMessage>)}
          
          <Controller control={control} name="Amount"
            rules={{
              required: true,
              pattern: /(([0-9]{4})|([0-9]{3})|[0-9]{2}|[0-9]{1}|10000)(\.[0-9]{2})$/
            }}
            render={({ field }) => (
              <FormInput {...field} label="*Amount (Please Include Decimals, e.g. 1.00))" />
            )} />
          {errors.Amount?.type === 'required' && (<ErrorMessage>"Payment Amount is required"</ErrorMessage>)}
          {errors.Amount?.type === 'pattern' && (<ErrorMessage>"Please Use a Decimal Point Followed by Two Numbers"</ErrorMessage>)}
    
          <p>If paying an invoice, please enter your Invoice Number here:</p>
          <Controller control={control} name="CustRefID1"
            render={({ field }) => (
              <FormInput {...field} label="Invoice No." />
            )} />
          
          <p>Additional Membership or Payment Notes:</p>
          <Controller control={control} name="CustRefID3"
            render={({ field }) => (
              <FormInput {...field} label="Notes" />
            )} />
          
         {/* <Captcha onVerifyCaptcha={onVerifyCaptcha} />
         {errors.captchaToken?.type === 'required' && (<ErrorMessage>"Captcha is required"</ErrorMessage>)} */}
          <br/>
          <CustomButton>Pay Invoice</CustomButton>
          <input type="text" id="a_pass" name="a_password" style={{display: "none"}} tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="HostedKey" id="HostedKey" value="1e7d250e-a7e3-4b10-93fa-8e0fce72cce1" />
          <input type="hidden" name="Gateway_ID" id="Gateway_ID" value="9251490268" />
          <input type="hidden" name="IndustryCode" id="IndustryCode" value="2" />
          <input type="hidden" name="Amount" id="Amount" value="" />
          <input type="hidden" name="RecurringType" id="RecurringType" value="N" />
          <input type="hidden" name="RecurringAmount" id="RecurringAmount" value="" />
          <input type="hidden" name="RURL" id="RURL" value="https://www.abcbaltimore.org" />
          <input type="hidden" name="CURL" id="CURL" value="https://www.abcbaltimore.org" />
          <input type="hidden" name="AVSRequired" id="AVSRequired" value="N" />
          <input type="hidden" name="CVV2Required" id="CVV2Required" value="Y" />
          <input type="hidden" name="EmailRequired" id="EmailRequired" value="Y" />
          <input type="hidden" name="PostRspMsg" id="PostRspMsg" value="N" />
          <input type="hidden" name="SECCode" id="SECCode" value="2" />
          <input type="hidden" name="Descriptor" id="Descriptor" value="ABC Pay" />
        </form>
      </FormWrapper>
      </GlassWrap>
    </Wrapper>
  )

}

export default connect(InvoicePage);

{/* <form action="https://dev.abcbaltimore.org/wp-json/contact-form-7/v1/contact-forms/931/feedback" method="post">
  <label htmlFor="your-name">Somebody's name</label>
  <input id="your-name" type="text" name="your-name" />
  <label htmlFor="your-email">Somebody's email</label>
  <input id="your-email" type="email" name="your-email" />
  <label htmlFor="your-subject">Somebody's subject</label>
  <input id="your-subject" type="text" name="your-subject" />
  <label htmlFor="your-message">Somebody's message</label>
  <input id="your-message" type="textarea" name="your-message" />
  <button type="submit">Submit</button>
</form> */}