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
      {title === "Pockets" ? (
        <p className="text-lg text-gray-600 text-left mt-4 bg-gray-100 p-4 border border-gray-200 rounded-md">
          <span className="font-bold">
            Four different pockets for every taste:
          </span>
          <br />
          Two vertical pockets with flaps at the bottom on the left and right
          sides, and two zippered pockets on the chest, one on each side.
        </p>
      ) : (
        <p className="text-lg text-gray-600 text-left mt-4">
          The AI-driven lights illuminate the room, casting a warm and inviting
          glow that enhances the ambiance. These intelligent lights adjust their
          brightness and color temperature based on the time of day and the
          activity in the room, creating a personalized lighting experience that
          adapts to your needs.
        </p>
      )}
    </div>
  );
};

export default VestHoverDetails;
