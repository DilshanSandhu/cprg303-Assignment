import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header row*/}
      <View style={styles.header}>
        <View style={StyleSheet.headerCentre}>
          <Text style={styles.headerTitle}>Profile Name</Text>
          <Text style={styles.headerSubtitle}>Posts</Text>
        </View>
        <View style={styles.headerbackarrow}> add a back arrow header</View>
      </View>

      {/** Posts header */}
      <View style={styles.postHeader}>
        <View style={styles.postHeaderProfilePic}></View>
        <View style={styles.postUsername}>
          <Text style={styles.postUsernameText}>USername</Text>
        </View>
        <View>
          <Text styles={styles.rightIcon}>...</Text>
        </View>
      </View>

      {/*Post image */}

      <View style={styles.postImage}></View>

      {/*post actions */}

      <View style={styles.actions}>
        <View style={styles.actionsLeft}>
          <Text style={styles.actionIcon}> Like icon</Text>
          <Text style={styles.actionIcon}> comments icon </Text>
          <Text style={styles.actionIcon}> share icon </Text>
        </View>
        <View style={styles.actionsRight}>
          <Text style={styles.actionIcon}> save icon </Text>
        </View>
      </View>

      {/*likes section */}

      <View style={styles.likesSection}>
        <View style={styles.likesSectionText}>
          <Text>Liked by blah and blah</Text>
        </View>
      </View>

      {/*caption */}
      <View style={styles.postCaption}>
        <Text> Post caption</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>home icon</Text>
        <Text style={styles.navIcon}>search</Text>
        <Text style={styles.navIcon}>add posts</Text>
        <Text style={styles.navIcon}>shopping cart icon idk</Text>
        <Text style={styles.navIcon}>profile icon</Text>
      </View>

      {/* Alert Button */}
      <View style={styles.alertContainer}>
        <Button title="Alert" onPress={() => alert("Alert Button pressed")} />
      </View>
    </View>
  );
}
