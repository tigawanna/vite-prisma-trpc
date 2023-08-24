import { Features } from "./components/Features";

interface WelcomePageProps {}

export function WelcomePage({}: WelcomePageProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="min-h-[200px] flex flex-col justify-evenly items-center gap-5">
          <h1 className="text-5xl font-bold">Welcome To Sherpa</h1>
          <p className="text-2xl text-accent ">Your smart job application assistant</p>
          <Features />
          <button className="btn btn-secondary-focus">Get Started</button>
        </div>
      </div>
    </div>
  );
}
