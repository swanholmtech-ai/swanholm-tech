import MainPart from "./MainPart";
import ProblemPart from "./ProblemPart";
import SolutionPart from "./SolutionPart";
import ValuePart from "./ValuePart";

const StepCard = ({ currentStep }: { currentStep: number }) => {
  switch (currentStep) {
    case 0:
      return <MainPart />;
    case 1:
      return <ProblemPart />;
    case 2:
      return <SolutionPart />;
    case 3:
      return <ValuePart />;
    default:
      return <MainPart />;
  }
};

export default StepCard;
