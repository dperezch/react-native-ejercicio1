import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRef, useEffect } from "react";
import Score from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export const GameCard = ({ game }) => {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable
        className="active: opacity-70 border border-black
       active:border-white/50 mb-2 bg-gray-500/30 rounded-xl p-4"
      >
        <View className="flex-row  gap-4 " key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>
              {game.description.slice(0, 100)} ...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
};

export const AnimatedGameCard = ({ game, index }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  card: {
    marginBottom: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginT: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
