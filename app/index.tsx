"use client";
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList } from "react-native";
import { useWebSocket } from "../hooks/useWebSocket";
import { Match } from "../types/Match";



export default function HomeScreen() {
  const { matches, error } = useWebSocket();

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!matches.length) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
<View style={styles.container}>
  <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />
  <Text style={styles.title}>Match Tracker</Text>

  <FlatList
    data={matches}
    keyExtractor={(item) => `${item.title}-${item.time}`} 
    renderItem={({ item }: { item: Match }) => (
      <View style={styles.matchContainer}>
        <Text style={styles.matchTitle}>{item.title}</Text>
        <Text style={styles.matchText}>
          {item.homeTeam?.name || "Команда 1"} ({item.homeScore}) vs ({item.awayScore}) {item.awayTeam?.name || "Команда 2"}
        </Text>
        <Text style={styles.matchStatus}>Статус: {item.status}</Text>
      </View>
    )}
  />
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  matchContainer: {
    backgroundColor: "#1E1E1E",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: "90%",
  },
  matchTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  matchText: {
    color: "#ddd",
    fontSize: 16,
  },
  matchStatus: {
    color: "#ff9800",
    fontSize: 14,
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
