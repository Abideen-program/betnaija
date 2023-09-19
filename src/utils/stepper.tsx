import Stepper from "react-stepper-horizontal";

export const stepper = (
  step: number,
  setSlide: (value: React.SetStateAction<number>) => void
) => {
  const user = JSON.parse(localStorage.getItem("newuser")!);
  return (
    <Stepper
      steps={
        user.user_type === "agent"
          ? [
              {
                onClick: () => {
                  setSlide(1);
                },
              },
              {},
            ]
          : user.user_type === "ngo"
          ? [
              {
                onClick: () => {
                  setSlide(1);
                },
              },
              {
                onClick: () => {
                  setSlide(2);
                },
              },
              {}
            ]
          : []
      }
      activeStep={step}
      activeColor={"green"}
      completeColor={"green"}
      defaultColor={"transparent"}
      defaultBorderColor={"white"}
      defaultBorderWidth={1}
      defaultBorderStyle={"solid"}
    />
  );
};
