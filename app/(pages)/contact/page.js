"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaComment,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaWhatsapp,
  FaSpinner,
  FaTimes
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: "", message: "" });
  const formRef = useRef();

  // Validate form fields
  const isFormValid = () => {
    return (
      fullname.trim() !== "" &&
      email.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      phoneNumber.trim() !== "" &&
      message.trim() !== ""
    );
  };

  // Show notification
  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: "", message: "" });
    }, 5000);
  };

  // Reset form
  const resetForm = () => {
    setFullname("");
    setEmail("");
    setPhoneNumber("");
    setWhatsappNumber("");
    setCompany("");
    setMessage("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      showNotification("error", "Please fill in all required fields correctly!");
      return;
    }

    setIsLoading(true);

    try {
      const messageTemplate = {
        fullname,
        email,
        phoneNumber,
        whatsappNumber: whatsappNumber || "Not provided",
        company: company || "Not provided",
        message,
        date: new Date().toLocaleString(),
      };

      await emailjs.send(
        "service_eusxbqj",
        "template_9qmoffu",
        messageTemplate,
        "Iap4oFWQdl9mq30xb"
      );

      showNotification("success", "Message sent successfully! We'll get back to you soon. 🎉");
      resetForm();
    } catch (error) {
      console.log(error);
      showNotification("error", "Failed to send message. Please try again later. 😞");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#67D2FF] focus:bg-white/10 focus:shadow-[0_0_30px_rgba(103,210,255,0.15)] backdrop-blur-xl";

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] py-24 px-5 sm:px-8 lg:px-16 flex items-center">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUpForm {
          from {
            opacity: 0;
            transform: translateY(70px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100px);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .fade-in-up-form {
          animation: fadeInUpForm 0.8s ease-out forwards;
        }
        .slide-down {
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .spin-animation {
          animation: spin 0.8s linear infinite;
        }
        .form-group {
          transition: transform 0.3s ease;
        }
        .form-group:hover {
          transform: translateY(-3px);
        }
        .input-wrapper {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #67D2FF;
          width: 20px;
          height: 20px;
          transition: all 0.3s ease;
        }
        .input-wrapper:focus-within .input-icon {
          transform: translateY(-50%) scale(1.1);
        }
        .textarea-icon {
          position: absolute;
          left: 16px;
          top: 24px;
          color: #67D2FF;
          width: 20px;
          height: 20px;
          transition: all 0.3s ease;
        }
        .input-wrapper:focus-within .textarea-icon {
          transform: scale(1.1);
        }
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px 16px 16px 48px;
          color: white;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .form-input:focus {
          border-color: #67D2FF;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 30px rgba(103, 210, 255, 0.15);
        }
        .form-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px 16px 16px 48px;
          color: white;
          outline: none;
          resize: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          min-height: 150px;
        }
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .form-textarea:focus {
          border-color: #67D2FF;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 30px rgba(103, 210, 255, 0.15);
        }
        .submit-btn {
          position: relative;
          overflow: hidden;
          padding: 14px 28px;
          border-radius: 16px;
          background: linear-gradient(90deg, #67D2FF, #A7D85E);
          color: #071026;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 0 35px rgba(103, 210, 255, 0.35);
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%;
          max-width: 280px;
        }
        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 0 55px rgba(103, 210, 255, 0.55);
          transform: scale(1.03);
        }
        .submit-btn:active:not(:disabled) {
          transform: scale(0.96);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .submit-btn-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #A7D85E, #67D2FF);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .submit-btn:hover:not(:disabled) .submit-btn-overlay {
          opacity: 1;
        }
        @media (min-width: 640px) {
          .submit-btn {
            padding: 16px 40px;
            font-size: 18px;
            width: auto;
            max-width: none;
          }
        }
        .glass-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 35px;
          padding: 24px;
          box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);
        }
        @media (min-width: 640px) {
          .glass-container {
            padding: 40px;
          }
        }
        @media (min-width: 1024px) {
          .glass-container {
            padding: 56px;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-400/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-lime-400/10 blur-[120px] rounded-full"></div>

      {/* Grid Glow */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Notification Toast - Professional Design */}
      {notification.show && (
        <div className={`fixed top-6 sm:top-8 right-4 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-auto sm:min-w-95 max-w-120 slide-down`}>
          <div className={`rounded-xl p-4 shadow-2xl backdrop-blur-xl border ${
            notification.type === 'success' 
              ? 'bg-emerald-500/15 border-emerald-500/30' 
              : 'bg-rose-500/15 border-rose-500/30'
          }`}>
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                notification.type === 'success' 
                  ? 'bg-emerald-500/25' 
                  : 'bg-rose-500/25'
              }`}>
                {notification.type === 'success' ? (
                  <FaCheckCircle className="w-5 h-5 text-emerald-400" />
                ) : (
                  <FaTimesCircle className="w-5 h-5 text-rose-400" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className={`font-semibold text-sm ${
                    notification.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {notification.type === 'success' ? 'Success' : 'Error'}
                  </p>
                  <button
                    onClick={() => setNotification({ show: false, type: "", message: "" })}
                    className="text-gray-400 hover:text-white transition-colors shrink-0"
                  >
                    <FaTimes className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-white text-sm mt-0.5 leading-relaxed">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up opacity-0">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-cyan-400/20 mb-6 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-300 text-xs sm:text-sm tracking-wide">
              LET'S BUILD SOMETHING AMAZING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Contact <span className="text-cyan-400">Us</span>
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Tell us about your project and let's create a modern digital
            experience together.
          </p>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={submitHandler}
          className="fade-in-up-form opacity-0"
        >
          <div className="glass-container">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div className="form-group">
                <label className="text-sm text-gray-300 mb-2 sm:mb-3 block">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="text-sm text-gray-300 mb-2 sm:mb-3 block">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    className="form-input"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label className="text-sm text-gray-300 mb-2 sm:mb-3 block">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="input-wrapper">
                  <FaPhone className="input-icon" />
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="form-input"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="form-group">
                <label className="text-sm text-gray-300 mb-2 sm:mb-3 block">
                  WhatsApp Number <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <div className="input-wrapper">
                  <FaWhatsapp className="input-icon" style={{ color: '#25D366' }} />
                  <input
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="form-input"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="form-group">
                <label className="text-sm text-gray-300 mb-2 sm:mb-3 block">
                  Company Name <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <div className="input-wrapper">
                  <FaBuilding className="input-icon" />
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    placeholder="Your Company"
                    className="form-input"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Message - Full Width */}
              <div className="form-group md:col-span-2">
                <label className="text-sm text-gray-300 mb-2 sm:mb-3 block">
                  Project Details <span className="text-red-400">*</span>
                </label>
                <div className="input-wrapper">
                  <FaComment className="textarea-icon" />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="form-textarea"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Form Validation Hint */}
            {!isFormValid() && (
              <div className="mt-4 flex items-center justify-center gap-2 text-amber-400 text-sm animate-pulse">
                <FaExclamationCircle className="w-4 h-4" />
                <span>Please fill in all required fields (*)</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <button
                type="submit"
                disabled={isLoading || !isFormValid()}
                className="submit-btn"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <FaSpinner className="w-4 h-4 sm:w-5 sm:h-5 spin-animation" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </span>
                <div className="submit-btn-overlay"></div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;