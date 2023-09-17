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
                onclick: () => {
                  setSlide(1);
                  console.log('1')
                },
              },
              {
                onclick: () => {
                  setSlide(2);
                  console.log('2')
                },
              },
            ]
          : user.user_type === "ngo"
          ? []
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
