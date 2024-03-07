import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.one}>
          <Image source={require("./small.png")} style={styles.profilepicture} />
          <Text style={styles.rea}>ITUMELENG SELLO</Text>
        </View>
      </View>
      <Text>
        a software Engineer is an IT professional who designs,develops and maintains computer software at technical skills and apply  the principles of software engineering to help solve new and ongoing problems for an organization
        </Text>
      <Image source={require("./small.png")} style={styles.body} />
      <View style={styles.two}>
        <SimpleLineIcons name="like" size={24} color="black" />
        <Text> 62 likes</Text>
        <FontAwesome name="comment-o" size={24} color="black" />
        <Text> 9 comments</Text>
        <Feather name="share-2" size={24} color="black" />
        <Text>3 shares</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilepicture: {
    padding: 30,
    borderRadius: 39,
    height: 34,
    width: 23,
  },
  profile: {
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    padding: 25,
    height: 493,
    width: 493,
  },
  one: {
    flexDirection: 'row',
  },
  two: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
 
});
