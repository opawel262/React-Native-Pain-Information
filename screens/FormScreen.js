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
  const [typeOfPain, setTypeOfPain] = useState("");
  const [intensityOfPain, setIntensityOfPain] = useState("");
  const [note, setNote] = useState("");
  const [code, setCode] = useState("");
  const [formPage, setFormPage] = useState("PainScreen");

  const [heightCm, setHeightCm] = useState(0);
  const [weightKg, setWeightKg] = useState(0);
  const [age, setAge] = useState(0);
  const [pastIlnesses, setPastIlnesses] = useState("");
  const [medications, setMedications] = useState("");

  if (formPage === "Back") {
    navigation.navigate("Welcome");
  }
  console.log(formPage);
  const HumanInformation = {
    code: code,
    note: note,
    pain_location_x: point.x,
    pain_location_y: point.y,
    body_side: humanImage,
    type_of_pain: typeOfPain,
    intensity_of_pain: intensityOfPain,
  };

  const HumanAdditionalInformation = {
    code: code,
    height_cm: heightCm,
    weight_kg: weightKg,
    age: age,
    past_illnesses: pastIlnesses,
    current_medications: medications,
    note: "",
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
          setFormPage={setFormPage}
          typeOfPain={typeOfPain}
          setTypeOfPain={setTypeOfPain}
          intensityOfPain={intensityOfPain}
          setIntensityOfPain={setIntensityOfPain}
          setCode={setCode}
          note={note}
          setNote={setNote}
        />
      )}
      {formPage === "AdditionalInfoScreen" && (
        <AdditionalInfoScreen
          HumanAdditionalInformation={HumanAdditionalInformation}
          setFormPage={setFormPage}
          heightCm={heightCm}
          setHeightCm={setHeightCm}
          weightKg={weightKg}
          setWeightKg={setWeightKg}
          age={age}
          setAge={setAge}
          pastIlnesses={pastIlnesses}
          setPastIlnesses={setPastIlnesses}
          medications={medications}
          setMedications={setMedications}
          setCode={setCode}
        />
      )}
      {formPage === "ReturnCodeScreen" && (
        <ReturnCodeScreen
          HumanInformation={HumanInformation}
          HumanAdditionalInformation={HumanAdditionalInformation}
          setFormPage={setFormPage}
          code={code}
        />
      )}
    </>
  );
}

export default FormScreen;
