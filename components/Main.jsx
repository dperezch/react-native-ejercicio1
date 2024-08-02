import {
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  //Button,
  //TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
//traer imagen local
//import icono from "./assets/icon.png";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { CircleInfoIcon } from "./Icons";
import Screen from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen
    /* style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} */
    >
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}

      {/* <ScrollView>
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </ScrollView> */}
      {/* <Image
          source={{
            uri: "https://gaming-cdn.com/images/products/14565/orig/starcraft-3-pc-juego-cover.jpg?v=1689599769",
          }}
          style={{ width: 500, height: 200, resizeMode: "contain" }}
        /> */}
      {/* <Image
          source={icono}
          style={{
            width: 100,
            height: 100,
            resizeMode: "center", //contain,repeat,stretch, etc..
          }}
        /> */}
      {/* <Text>Esto es una cadena de texto 6!</Text> */}

      {/* TouchableOpacity */}
      {/* <TouchableHighlight
          underlayColor={"#09f"}
          onPress={() => alert("Otro botón!")}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Presiona</Text>
        </TouchableHighlight>
        <Button color="green" title="Pulsa aquí" onPress={() => alert("Hola")} /> */}
    </Screen>
  );
}
