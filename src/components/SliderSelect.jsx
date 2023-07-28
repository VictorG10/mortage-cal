import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);
  return (
    <>
      <SliderComponent
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        label="Home Value"
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        label="Interest Rate"
        unit="% "
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
