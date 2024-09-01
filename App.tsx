import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [segund, setSegund] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [running, setRunning] = useState(false);

  const timer = () => {
    try {
      setTimeout(() => {
        let segundValue = segund;
        segundValue++;
        setSegund(segundValue);
      }, 1000);

    } catch (error) {
      console.log("ERROR: " + error);
    }

    if (segund === 60) {
      let minuteValue = minute;
      minuteValue++;
      setMinute(minuteValue);
      setSegund(0);
    }

    if (minute === 60) {
      let hourValue = hour;
      hourValue++;
      setHour(hourValue);
      setMinute(0);
    }

  }

  const start = () => {
    running ? setRunning(false) : setRunning(true);
  }

  if (running) {
    timer();
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.main}>

        <View style={styles.box}>
          <Text style={styles.label}>Horas</Text>
          <Text style={styles.number}>{
            hour >= 10 ? hour : "0" + hour
          }</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Minutos</Text>
          <Text style={styles.number}>{
            minute >= 10 ? minute : "0" + minute
          }</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Segundos</Text>
          <Text style={styles.number}>{
            segund >= 10 ? segund : "0" + segund
          }</Text>
        </View>

        <TouchableOpacity onPress={start}>
          <Text style={styles.button}>
            {running ? "Parar" : "Contar"}
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
