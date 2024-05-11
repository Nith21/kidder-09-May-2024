import React from 'react'

function ContactPage() {
  return (
    <>
    {/* <!-- Page Header End --> */}
    <div class="container-xxl py-5 page-header position-relative mb-5">
            <div class="container py-5">
                <h1 class="display-2 text-white animated slideInDown mb-4">Contact Us</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
            </div>
        </div>
{/* <!-- Page Header End --> */}

    <div class="container-xxl py-5">
    <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
            <h1 class="mb-3">Get In Touch</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div class="row g-4 mb-5">
            <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width:"75px",height:"75px"}}>
                    <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <h6>No. 20, 26, Velunaicker Street, Sholinganallur, Chennai, Tamil Nadu 600119.</h6>
            </div>
            <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width:"75px",height:"75px"}}>
                    <i class="fa fa-envelope-open fa-2x text-primary"></i>
                </div>
                <h6>sreeiyappaschool1@gmail.com</h6>
            </div>
            <div class="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width:"75px",height:"75px"}}>
                    <i class="fa fa-phone-alt fa-2x text-primary"></i>
                </div>
                <h6>+91 44 42181159, +91 44 42181160</h6>
            </div>
        </div>
        <div class="bg-light rounded">
            <div class="row g-0">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="h-100 d-flex flex-column justify-content-center p-5">
                        <div>
                            <h1 class="mb-3">Contact Us</h1>
                        </div>
                        <form>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-0" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control border-0" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-0" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control border-0" placeholder="Leave a message here" id="message" style={{height:"100px"}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight:"400px"}} >
                    <div class="position-relative h-100">
                        <iframe class="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.216317409059!2d80.22880787567061!3d12.89380748741446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b81e61bda5f%3A0xa6c8319baa288e4c!2sSree%20Iyappa%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1715416806274!5m2!1sen!2sin"
                        frameborder="0" style={{minHeight:"400px",border:"0"}} allowfullscreen="" aria-hidden="false" 
                        tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Back to Top --> */}
<a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</>
  )
}

export default ContactPage