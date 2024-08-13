import React from 'react'

const page = () => {
  return (
  <div><figure className="md:flex bg-blue-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/noman.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “I am Noman Aslam Working as a Freelancer on different platforms 
        like upwork and fiverr and also with local clients. My core skill are lead
        generation and data entry and i am also working as a Project Manager.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Noman Aslam
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Freelancer, Upwork
      </div>
    </figcaption>
  </div>
</figure></div>
  )
}

export default page
