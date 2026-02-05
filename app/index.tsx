import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style={styles.header}>Posts</Text>
      <Image
      // Absolute Url: "https://www.istockphoto.com/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-gm1458782106-493292590"
      source={require("../assets/images/a.jpg")}
      style={styles.image}/>
      
      <Text style={styles.likes}>Liked by 
        <Text style={styles.username}> paisley.print.48</Text> and 
        <Text style={styles.username}> 7 others</Text>
      </Text>

      <Text style={styles.caption}>
        <Text style={styles.username}>frenchie_fry39 </Text>
        Fresh shot on a sunny day</Text>

        <Text style={styles.comment}>View all 12 comments</Text>
        <Text style={styles.comments}>
          <Text style={styles.username2}>lil_wyatt838</Text> Awesome tones</Text>
        <Text style={styles.comments}><Text style={styles.username2}>pia.in.a.pod</Text> Love it!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  likes: {
    fontSize: 14,
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
    marginBottom: 8,
  },
  username: { 
    fontWeight: "bold",
    fontSize: 14,
  },
  username2: {
    fontWeight: "bold",
    fontSize: 10,
  },
  comments: {
    fontSize: 10,
    marginBottom: 2,
  },
  comment: {
    fontSize: 10,
    color: "gray",
    marginBottom: 4,
  },
});
