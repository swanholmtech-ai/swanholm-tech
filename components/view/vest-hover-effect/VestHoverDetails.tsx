"use client";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

const VestHoverDetails = ({ title }: { title: string }) => {
  return (
    <div>
      <h2
        className={`${poppinsBold.className} text-xl font-bold text-gray-700 tracking-tight text-left`}
      >
        {title}
      </h2>
      <p className="text-lg text-gray-600 text-left">
        The AI-driven lights illuminate the room, casting a warm and inviting
        glow that enhances the ambiance. These intelligent lights adjust their
        brightness and color temperature based on the time of day and the
        activity in the room, creating a personalized lighting experience that
        adapts to your needs.
      </p>
    </div>
  );
};

export default VestHoverDetails;
