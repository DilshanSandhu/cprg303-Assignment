import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.arrow}>{"<"}</Text>
        <Text style={styles.header}>Posts</Text>
      </View>

      <View style={styles.userRow}>
        {/* put the user profile picture name and menu three dota here */}
      </View>

      <Image
        // Absolute Url: "https://www.istockphoto.com/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-gm1458782106-493292590"
        source={require("../assets/images/a.jpg")}
        style={styles.image} />

      {/* put like share and comment icons here */}

      <View style={styles.TextSection}>
        <Text style={styles.likes}>Liked by
          <Text style={styles.bold}> paisley.print.48</Text> and
          <Text style={styles.bold}> 7 others</Text>
        </Text>

        <Text style={styles.caption}>
          <Text style={styles.bold}>frenchie_fry39 </Text>
          Fresh shot on a sunny day</Text>

        <Text style={styles.viewComments}>View all 12 comments</Text>
        <Text style={styles.comment}>
          <Text style={styles.bold2}>lil_wyatt838</Text> Awesome tones</Text>
        <Text style={styles.comment}><Text style={styles.bold2}>pia.in.a.pod</Text> Love it!</Text>

        <Text style={styles.time}>1 day ago</Text>
      </View>
    </View>

    // please add the alert button here at the end
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40, // iOS-like top spacing
  },

  topbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    marginBottom: 10,
  },

  arrow: {
    position: "absolute",
    left: 12,
    fontSize: 22,
    color: "#000",
  },

  header: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  userRow: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },

  image: {
    width: "100%",
    height: 380,
    resizeMode: "cover",
    backgroundColor: "#eee",
    borderRadius: 0,
    marginBottom: 10,
  },

  TextSection: {
    paddingHorizontal: 12,
  },

  likes: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
  },

  caption: {
    fontSize: 13,
    color: "#000",
    marginBottom: 6,
    lineHeight: 18,
  },

  viewComments: {
    fontSize: 13,
    color: "#777",
    marginBottom: 6,
  },

  comment: {
    fontSize: 13,
    color: "#000",
    marginBottom: 4,
    lineHeight: 18,
  },

  bold: {
    fontWeight: "600",
    fontSize: 13,
    color: "#000",
  },

  bold2: {
    fontWeight: "600",
    fontSize: 13,
    color: "#000",
  },

  time: {
    fontSize: 11,
    color: "#999",
    marginTop: 4,
  },
});
