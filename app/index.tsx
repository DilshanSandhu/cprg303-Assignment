import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
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
      style={styles.image}/>
      
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
  bold: {
    fontWeight: "bold",
    fontSize: 14,
  },
  bold2 : {
    fontWeight: "bold",
    fontSize: 12,
  },
  comment: {
    fontSize: 12,
    marginBottom: 2,
  },
  viewComments: {
    fontSize: 12,
    color: "gray",
    marginBottom: 4,
  },
  time: {
  },
  topbar: {
  },
  arrow: {
  },
  userRow: {
  },
  TextSection: {
  },
});
