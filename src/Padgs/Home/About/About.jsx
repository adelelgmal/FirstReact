import React from "react";
import Footer from "../../../Componant/Navbar/Footer/Footer";

export default function About() {
  return (
    <>
      <section className="bg-secondary  py-5">
        <div className="container py-5">
          <div  className="py-5">
            <h1 className="text-center text-uppercase">about component</h1>
            <div className="row justify-content-center align-items-center  p-1">
             <div className="col-lg-6">
               <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
             </div>
             <div className="col-lg-6">
               <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
             </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
