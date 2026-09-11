import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Heading from './Heading';

export const ContactForm = () => {
  const form = useRef();
  

  const service_id = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
  const [isSubmitted,setIsSubmitted] = useState(false);

  const [status, setStatus] = useState("idle");
  
  const timersRef = useRef([]);

  const safeTimeout = (callback, delay) => {
    const id = setTimeout(callback, delay);
    timersRef.current.push(id);
  };

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (status !== "idle") return;

    // Phase 1: Instantly start shrinking button
    setStatus("shrinking");

    safeTimeout(() => {
      setStatus("loading");
    }, 1300);

    try {
      
      await emailjs.sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      });
      setIsSubmitted(true);
      
      safeTimeout(() => {
        setStatus("morphing");
        
        safeTimeout(() => {
          setStatus("success");
        }, 1250); 
      }, 2000);

    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      
      
      safeTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <section id='contact' className='p-5 w-full sm:w-4/5 lg:w-2/5'>
    <form ref={form} onSubmit={handleSubmit} className="contact-form w-full border-2 border-[var(--border)] rounded-sm bg-[var(--bg-surface)] flex flex-col min-h-[200px]">
      <div className={`form-fields flex flex-col gap-3 ${isSubmitted ? "hidden" : ""}`}>
        <Heading className='text-center text-lg font-semibold p-2 border-solid border-b-2 border-[var(--border)] bg-[var(--bg-page)]'>Contact Form</Heading>
        <div className='flex gap-3 grow ml-2 lg:ml-10'>
          <label htmlFor='name'>Name</label>
          <input id="name" type="text" name="name" minLength={3} maxLength={100} required />
        </div>
        <div className='flex gap-3 grow ml-2 lg:ml-10'>
          <label htmlFor='email'>Email</label>  
          <input id='email' type="email" name="email" required />
        </div>
        <div className='flex gap-3 grow ml-2 lg:ml-10'>
          <label htmlFor='reason'>Reason for contacting: </label>
          <select id='reason' name='reason' required>
            <option value='Testing'>Testing</option>
            <option value='Suggestion'>Suggestion</option>
            <option value='Recruitment'>Recruitment</option>
            <option value='Project'>Project</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className='flex gap-3 grow ml-2 lg:ml-10'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name="message" />
        </div>
      </div>

      <div className="animation-wrapper mb-5">
        <button 
          type="submit" 
          className={`button ${status}`}
          disabled={status !== "idle"}
        >
          {status === "idle" && "Send"}
          {status === "error" && "Failed! Try Again"}
          {status === "shrinking" && ""}
          {status === "loading" && ""}
        </button>

        <div className={`progress-bar ${status}`}>
          {status === "success" && (
            <svg x="0px" y="0px" viewBox="0 0 25 30" className="checkmark-svg">
              <path className="check st0" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
            </svg>
          )}
        </div>
      </div>
    </form>
    </section>
  );
};
