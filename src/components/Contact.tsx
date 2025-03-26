import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from "../utils/SectionWrapper";
import { slideIn } from "../utils/motion";

// Email service configuration
const EMAIL_SERVICE_URL = "https://formsubmit.co/gitonga.r.nyaga@gmail.com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // FormSubmit.co handles the email delivery
    fetch(EMAIL_SERVICE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: `Portfolio Contact from ${form.name}`,
        _template: "table",
        _captcha: "false"
      }),
    })
      .then(response => {
        console.log("Message sent successfully:", response);
        setLoading(false);
        setFormSubmitted(true);
        
        // Reset form
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(error => {
        console.error("Error sending message:", error);
        setLoading(false);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <div className="flex justify-between items-center">
          <div>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
          </div>
        </div>

        {formSubmitted ? (
          <div className="mt-12 p-8 bg-tertiary rounded-lg text-center">
            <h4 className="text-white text-[24px] font-bold mb-4">Thank You!</h4>
            <p className="text-secondary text-[17px]">
              Your message has been sent successfully. I will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 hover:scale-105"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
            action={EMAIL_SERVICE_URL}
            method="POST"
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to discuss?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            
            {/* Hidden fields for FormSubmit.co */}
            <input type="hidden" name="_subject" value={`Portfolio Contact from ${form.name}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <button
              type='submit'
              className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 hover:scale-105'
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            
            <p className="text-gray-400 text-sm">
              Messages will be sent directly to my email inbox.
            </p>
          </form>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 flex items-center justify-center">
          <div className="text-center p-6">
            <h3 className="text-white text-2xl font-bold mb-4">Let's Create Something Amazing Together</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="space-y-2">
              <p className="text-white"><span className="font-bold">Email:</span> gitonga.r.nyaga@gmail.com</p>
              <p className="text-white"><span className="font-bold">LinkedIn:</span> linkedin.com/in/gitonga-nyaga-7ba5a126b</p>
              <p className="text-white"><span className="font-bold">Location:</span> Oklahoma City, OK</p>
              <p className="text-white"><span className="font-bold">Phone:</span> (405) 922-2239</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact"); 