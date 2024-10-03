function Contact() {
  return (
    <div className="bg-gray-100">
      <div id="contact" className="text-2xl ml-4 text-blue-500 font-bold">
        <p className="underline underline-offset-[9px] decoration-4 m-[44px]">
          Contact Me
        </p>
      </div>

      <div className="flex-col min-h-screen flex items-center justify-center">
        <form
          action=" "
          className="space-y-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 "
            required
          />
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            placeholder="Message"
            className="w-full text-black py-2 px-4 border border-gray-300 rounded-md shadow-sm  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white border-gray-300  py-2 px-4 rounded-md hover:bg-indigo-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>

       
        
      </div>
    </div>
  );
}

export default Contact;
