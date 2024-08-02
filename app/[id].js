import { Stack } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { ActivityIndicator } from "react-native";
import { getGameDetails } from "../lib/metacritic";
import { useState, useEffect } from "react";
import Score from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: `Título`,
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold text-xl text-center">
                {gameInfo.title}
              </Text>

              <Text className="text-white/70 mt-4 mb-8 text-base text-left">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
