import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import Screen from "../../components/Screen";

const StylePressable = styled(Pressable);

export default function About() {
  const insets = useSafeAreaInsets();
  return (
    <Screen>
      <View>
        <Link asChild href="/">
          {/* <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable> */}
          <StylePressable className={`active:opacity-20`}>
            <HomeIcon />
          </StylePressable>
        </Link>
      </View>

      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Consectetur aliquip irure non fugiat ex nostrud ea nisi. Adipisicing
          eiusmod exercitation consequat id cupidatat incididunt. Enim eu irure
          nulla qui laboris qui. Ipsum ullamco magna nulla duis eu sint laboris.
          Ad Lorem officia Lorem excepteur non deserunt reprehenderit
          consectetur exercitation est quis minim.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Consectetur aliquip irure non fugiat ex nostrud ea nisi. Adipisicing
          eiusmod exercitation consequat id cupidatat incididunt. Enim eu irure
          nulla qui laboris qui. Ipsum ullamco magna nulla duis eu sint laboris.
          Ad Lorem officia Lorem excepteur non deserunt reprehenderit
          consectetur exercitation est quis minim.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Consectetur aliquip irure non fugiat ex nostrud ea nisi. Adipisicing
          eiusmod exercitation consequat id cupidatat incididunt. Enim eu irure
          nulla qui laboris qui. Ipsum ullamco magna nulla duis eu sint laboris.
          Ad Lorem officia Lorem excepteur non deserunt reprehenderit
          consectetur exercitation est quis minim.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Consectetur aliquip irure non fugiat ex nostrud ea nisi. Adipisicing
          eiusmod exercitation consequat id cupidatat incididunt. Enim eu irure
          nulla qui laboris qui. Ipsum ullamco magna nulla duis eu sint laboris.
          Ad Lorem officia Lorem excepteur non deserunt reprehenderit
          consectetur exercitation est quis minim.
        </Text>
      </ScrollView>
    </Screen>
  );
}
