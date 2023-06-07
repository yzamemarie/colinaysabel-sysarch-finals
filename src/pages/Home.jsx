import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col bg-[#f0ecec] w-fit p-8 box-border items-center gap-8 rounded-1  shadow-xl">
        <img src="/logo.png" className="h-20" />
        <p className="max-w-4xl text-center">
          MentorMingle is an innovative app that brings together students and
          knowledgeable mentors for personalized online learning. Find the perfect mentor
          to guide you through various subjects, from math to literature to programming.
          With flexible scheduling, one-on-one video calls, and tailored lesson plans,
          MentorMingle empowers you to learn at your own pace and conquer academic
          challenges. Join MentorMingle today and unlock a world of knowledge,
          inspiration, and growth. Join the vibrant community of MentorMingle today and
          unlock a world of endless possibilities. Embrace the power of mentorship, and
          let your dreams soar to new heights. Are you ready to mingle with mentors and
          embark on an educational adventure like no other? Sign up now and let the
          journey begin!
        </p>
        <Link to="/login" className="p-4 bg-[#8a5082] text-white rounded">
          Get started
        </Link>
      </div>
    </div>
  )
}
