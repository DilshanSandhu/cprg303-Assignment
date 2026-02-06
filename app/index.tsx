import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <Image
        // Absolute Url: "https://www.istockphoto.com/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-gm1458782106-493292590"
        source={require("../assets/images/a.jpg")}
        style={styles.image} />

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
    paddingTop: 44,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 380,
    backgroundColor: "#eee",
    borderRadius: 0,
    marginBottom: 10,
  },
  likes: {
    fontSize: 13,
    fontWeight: "600",
    paddingHorizontal: 12,
    marginBottom: 6,
    color: "#000",
  },
  caption: {
    fontSize: 13,
    paddingHorizontal: 12,
    marginBottom: 6,
    lineHeight: 18,
    color: "#000",
  },
  username: {
    fontWeight: "600",
    fontSize: 13,
    color: "#000",
  },
  username2: {
    fontWeight: "600",
    fontSize: 13,
    color: "#000",
  },
  comments: {
    fontSize: 13,
    paddingHorizontal: 12,
    color: "#000",
    lineHeight: 18,
    marginBottom: 4,
  },
  comment: {
    fontSize: 13,
    color: "#777",
    paddingHorizontal: 12,
    marginBottom: 6,
  },
});
