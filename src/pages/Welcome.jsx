import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="font-600 text-4xl">Welcome to MentorMingle!</h1>
      <div className="w-3/4 text-center flex flex-col gap-4">
        <p>
          Unlock your full learning potential with MentorMingle, the revolutionary app
          that connects eager students like you with experienced mentors from around the
          world. Say goodbye to traditional learning barriers and embark on an educational
          journey that knows no bounds.
        </p>
        <p>
          With MentorMingle, finding the perfect mentor for any subject has never been
          easier. Whether you're struggling with math, seeking guidance in literature, or
          eager to dive deep into computer programming, our diverse pool of mentors is
          ready to assist you in conquering any academic challenge.
        </p>
        <p>
          Here's how it works: simply create your profile, outline your learning goals,
          and let MentorMingle's intelligent algorithm match you with the most suitable
          mentors based on your preferences and requirements. Our mentors are carefully
          vetted experts, passionate about sharing their knowledge and dedicated to
          helping you succeed.
        </p>
        <p>
          Experience the flexibility of online learning at its finest. No matter where you
          are in the world, MentorMingle enables you to schedule sessions that fit your
          busy lifestyle. Enjoy one-on-one video calls, interactive discussions, and
          personalized lesson plans designed to cater to your unique learning style. Learn
          at your own pace, ask questions freely, and gain the confidence you need to
          excel in your chosen field.
        </p>
        <p>
          But MentorMingle isn't just about academic growth; it's also a platform for
          forging lifelong connections. Engage in meaningful conversations with mentors
          who share your passions, exchange ideas, and explore new perspectives. Expand
          your horizons beyond the textbooks and discover the joy of learning from mentors
          who truly inspire.
        </p>
        <Link
          to="/"
          className="fixed bottom-8 right-8 w-[max-content] text-center p-4 bg-[#8a5082] text-white box-border rounded shadow-xl"
        >
          Sign out
        </Link>
      </div>
    </div>
  )
}
