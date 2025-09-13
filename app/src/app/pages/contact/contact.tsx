
'use client'
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import { Mail, Smartphone, MapPin } from 'lucide-react'

import Messages from '@/app/components/message'

type UserData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const [dataToSend, setDataToSend] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [visible, setVisible] = useState(false)



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDataToSend({
      ...dataToSend,
      [e.target.name]: e.target.value,
    });
  };



  {/*
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {

    emailjs
      .sendForm('service_wx98oap', 'template_3afqdih', form.current, {
        publicKey: 'kb6AlgFZDZs-GYt_o',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          setDataToSend({
            name: "",
            phone: "",
            email: "",
            message: ""
          });

          setVisible(true);

          const timer = setTimeout(() => setVisible(false), 2000); // 3 seconds
          return () => clearTimeout(timer);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    }


  };
  */}
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_wx98oap', 'template_3afqdih',
        {
          name: dataToSend.name,
          phone: dataToSend.phone,
          email: dataToSend.email,
          message: dataToSend.message,
        },
        'kb6AlgFZDZs-GYt_o'
      );

      console.log('Email sent successfully:', result.text);
      alert('Message sent!');
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Something went wrong.');
    }
  };





  const commonInput = (
    id: string,
    label: string,
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    multiline = false
  ) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm text-gray-700 mb-1">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md text-gray-400 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          rows={4}
          style={{ resize: 'none' }}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md text-gray-400 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
    <Messages type="success" message="Message sent!" visible={visible} />

      <div className="flex flex-col w-[80%] md:w-fit md:flex-row-reverse md:bg-white md:dark:bg-dark-hl md:shadow-lg rounded-lg md:p-8">
        <div className="w-full max-w-md md:min-w-xs">
        <h2 className="text-2xl font-bold text-gray-600 text-center mb-6">
          Message
        </h2>

        <form
          ref={form} onSubmit={sendEmail}
        >

          {commonInput(
            "name",
            "Name",
            "name",
            dataToSend.name,
            handleInputChange
          )}

          {commonInput(
            "phone",
            "Phone Number",
            "phone",
            dataToSend.phone,
            handleInputChange
          )}

          {commonInput(
            "email",
            "Email",
            "email",
            dataToSend.email,
            handleInputChange
          )}

          {commonInput(
            "message",
            "Message",
            "text",
            dataToSend.message,
            handleInputChange,
            true // this enables multiline (textarea)
          )}


          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </form>
        </div>



        <div className="flex flex-row md:flex-col items-center my-6 md:mx-12">
          <div className="flex-grow border-t md:border-l border-gray-300 md:h-full md:my-2"></div>
          <span className="mx-2 md:my-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t md:border-l border-gray-300 md:h-full md:my-2"></div>
        </div>





        <div className="flex flex-col gap-3 self-center">
          <div className="flex flex-row items-center gap-2">
            <div className="flex p-3 text-gray-100 bg-gray-400 opacity-70 rounded-lg">
              <Mail />
            </div>
            <div>
              <h3 className="text-black text-lt-medium-txt dark:text-dk-medium-txt">Email</h3>
              <p className="text-sm text-gray-600">
                10gabriel.souzas@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex p-3 text-gray-100 bg-gray-400 opacity-70 rounded-lg">
              <Smartphone />
            </div>
            <div>
              <h3 className="text-black text-lt-medium-txt dark:text-dk-medium-txt">WhatsApp</h3>
              <p className="text-sm text-gray-600">
                +55 64 9 9655-5139
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex p-3 text-gray-100 bg-gray-400 opacity-70 rounded-lg">
              <MapPin />
            </div>
            <div>
              <h3 className="text-black text-lt-medium-txt dark:text-dk-medium-txt">Location</h3>
              <p className="text-sm text-gray-600">
                Jataí - GO, Brazil
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};
