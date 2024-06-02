import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PainScreen from "./PainScreen";
import InfoScreen from "./InfoScreen";
import ReturnCodeScreen from "./ReturnCodeScreen";
import AdditionalInfoScreen from "./AdditionalInfoScreen";

const FormStack = createNativeStackNavigator();

function FormScreen({ navigation }) {
  const [humanImage, setHumanImage] = useState("front");
  const [point, setPoint] = useState({ x: -500, y: -500 });

  const [formPage, setFormPage] = useState("PainScreen");
  if (formPage === "Back") {
    navigation.navigate("Welcome");
  }
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
          setFormPage={setFormPage}
        />
      )}
      {formPage === "AdditionalInfoScreen" && (
        <AdditionalInfoScreen
          HumanInformation={HumanInformation}
          HumanAdditionalInformation={HumanAdditionalInformation}
          setFormPage={setFormPage}
        />
      )}
      {formPage === "ReturnCodeScreen" && (
        <ReturnCodeScreen
          HumanInformation={HumanInformation}
          HumanAdditionalInformation={HumanAdditionalInformation}
          setFormPage={setFormPage}
        />
      )}
    </>
  );
}

export default FormScreen;
