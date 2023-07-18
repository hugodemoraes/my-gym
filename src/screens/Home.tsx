import { useState } from "react";
import { FlatList, VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

const GROUPS = ["costas", "bíceps", "tríceps", "ombro"];

export function Home() {
  const [groupSelected, setGroupSelected] = useState(GROUPS[0]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={GROUPS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
      />
    </VStack>
  );
}
