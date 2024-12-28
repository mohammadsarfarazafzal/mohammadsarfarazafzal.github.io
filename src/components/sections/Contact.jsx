import React from 'react'

const Contact = () => {
  return (
    <section
        id="contact"
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold mb-8"
          >
            Get In Touch
          </h2>
          <p 
            className="text-xl text-gray-600 mb-8"
          >
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll get back to you!
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Say Hello
          </a>
        </div>
      </section>
  )
}

export default Contact