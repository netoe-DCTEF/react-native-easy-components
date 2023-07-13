import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

/*Lembre-se de instalar essa dependência!*/
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dataString, setDataString] = useState("");
  const [first, setFirst] = useState(true);
  useEffect(() => {
    if (first) {
      setDataString("Selecionar a data!");
      setFirst(false);
    }
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    const formattedDate =
      date.getDate().toString().padStart(2, "0") +
      "/" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      date.getFullYear();
    console.log(formattedDate);
    setDataString(formattedDate);
    props.getData(dataString);
    hideDatePicker();
    setFirst(false);
  };

  return (
    <View>
      <Button title={dataString} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        //mode="time"
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;
