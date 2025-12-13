import React, { useState } from "react";
import "./Contact.css";
import Footer from "../../../Componant/Navbar/Footer/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    username: "",
    userage: "",
    useremail: "",
    userpassword: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const { username, userage, useremail, userpassword } = form;
    if (!username.trim()) return "Please enter your name.";
    if (!userage || Number(userage) <= 0) return "Please enter a valid age.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(useremail))
      return "Please enter a valid email.";
    if (userpassword.length < 6)
      return "Password must be at least 6 characters.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "danger", message: err });
      return;
    }

    // Simulate successful submission
    setStatus({
      type: "success",
      message: "Thank you! Your message has been received.",
    });
    setForm({ username: "", userage: "", useremail: "", userpassword: "" });
  };

  return <>

    <section className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card contact-card shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-primary"></i>
                  Contact Me
                </h3>

               

                {status.message && (
                  <div
                    className={`alert alert-${status.type} py-2`}
                    role="alert"
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person-fill"></i>
                        </span>
                        <input
                          type="text"
                          name="username"
                          value={form.username}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Age</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-calendar3"></i>
                        </span>
                        <input
                          type="number"
                          name="userage"
                          value={form.userage}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your age"
                          min="1"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          name="useremail"
                          value={form.useremail}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-lock-fill"></i>
                        </span>
                        <input
                          type="password"
                          name="userpassword"
                          value={form.userpassword}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Create a password"
                        />
                      </div>
                    </div>

                    <div className="col-12 ">
                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          <i className="bi bi-send-fill me-2"></i>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
 </>
}
