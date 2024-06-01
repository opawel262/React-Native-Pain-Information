import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PainScreen from "./PainScreen";
import InfoScreen from "./InfoScreen";
const FormStack = createNativeStackNavigator();

function FormScreen({ navigation }) {
  const [humanImage, setHumanImage] = useState("front");
  const [point, setPoint] = useState({ x: -500, y: -500 });

  const [formPage, setFormPage] = useState("PainScreen");
  console.log(formPage);
  const HumanInformation = {
    bodyPainLocationX: point.x,
    bodyPainLocationY: point.y,
    bodySide: humanImage,
    note: "",
    typeOfPain: "",
    intesityOfPain: 0,
  };

  const HumanAdditionalInformation = {
    code: "",
    heightCm: 0,
    weightKg: 0,
    age: 0,
    pastIlnesses: "",
    medications: "",
  };

  return (
    <>
      {formPage === "PainScreen" && (
        <PainScreen
          point={point}
          setPoint={setPoint}
          humanImage={humanImage}
          setHumanImage={setHumanImage}
          setFormPage={setFormPage}
        />
      )}
      {formPage === "InfoScreen" && (
        <InfoScreen
          HumanInformation={HumanInformation}
          HumanAdditionalInformation={HumanAdditionalInformation}
        />
      )}
      {formPage === "AdditionalInfoScreen" && (
        <AdditionalInfoScreen
          HumanInformation={HumanInformation}
          HumanAdditionalInformation={HumanAdditionalInformation}
        />
      )}
    </>
  );
}

export default FormScreen;
