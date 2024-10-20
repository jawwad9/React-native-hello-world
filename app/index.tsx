import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    style={{
      backgroundColor: '#008b8b',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Text
      style={{
        color: 'white',
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: 'Cochin',
        borderBottomColor: '#737373',
      }}
      >Hello World</Text>
    </View>
    
  );
}

