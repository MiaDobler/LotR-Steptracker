import React, {useState, useEffect} from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Pedometer } from 'expo-sensors';
import CircularProgress from "react-native-circular-progress-indicator";

import { Text, View } from '../../components/Themed';
  
  const screenHeight = Dimensions.get('window').height; 
  const screenWidth = Dimensions.get('window').width;



export default function TabOneScreen() {

  const [PedometerAvailability, setPedometerAvailability] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  var Dist = currentStepCount / 1350;
  var DistanceCovered = Dist.toFixed(3);

  var totalDist = (currentStepCount + pastStepCount) / 1350;
  var totalDistanceCovered = totalDist.toFixed(2);

  var distanceLeft = (2863 - totalDistanceCovered).toFixed(2);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setPedometerAvailability(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  // useEffect(() => {
  //   const subscription = subscribe();
  //   return () => subscription && subscription.remove();
  // }, []);

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription.then(r => r.remove())
    }, [])

  return (
    <View style={styles.container}>
      
      <ImageBackground 
      style = {{flex:1}}
      source={require('../../assets/images/blue.jpg')}
      width={screenWidth}
      resizeMode="stretch"
      styles= {styles.img}>


      <View style={styles.main}>
          <Text style={styles.title}>Paths to Mordor</Text>

          <Text style={styles.subtitle} color="rgba(2, 25, 34)" >A Lord of the Rings Steptracking app</Text>
          
          <Text>{"\n\n\n\n"}</Text>
          
          <Text style={styles.pedometer1}>Steps taken in the last 24 hours: {pastStepCount}</Text>        
          
          <Text>{"\n\n\n\n"}</Text>

          <View style={styles.circle}>
          <CircularProgress
          value={currentStepCount}
          maxValue={8000}
          radius={150}
          textColor={"#E1EDF1"}
          activeStrokeColor={"#E1EDF1"}
          inActiveStrokeColor={"#9c9e93"}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={25}
          activeStrokeWidth={20}
          title={"Steps taken"}
          titleColor={"#E1EDF1"}
          titleStyle={{ fontWeight: "bold" }}/>
       
        </View>
        {/* <Text>{"\n"}</Text> */}

          <Text style={styles.text}>Total Distance covered: {totalDistanceCovered}km{"\n"}</Text>

          <Text style={styles.text}>Distance left to reach Mount Doom: {distanceLeft}km</Text>

        </View>

      </ImageBackground>
        
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>StepTracker</Text>
  //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  //     <EditScreenInfo path="app/(tabs)/index.tsx" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  img: { 
    height: screenHeight, 
    width: screenWidth, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textColor: "rgba(2, 25 , 34)",
    alignSelf: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  subtitle: {
    fontSize: 15,
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    color:"#eee",
    paddingTop:5,
    alignSelf: 'center'
  },
  pedometer: {
    fontSize: 15,
    color: "#ffffff",
    alignSelf: 'center'
  },
  circle: {
    alignItems: 'center'
  },
  pedometer1: {
   alignSelf: 'center',
   textAlign: 'center',
   backgroundColor: "rgba(4, 34, 44,0.5)",
   height: 30,
   width : '100%',
   borderColor: "rgba(4, 34, 44,0.5)",
   borderWidth: .7,
   overflow: "hidden",
   fontSize: 20,
   color:"#eee"
  }
});
