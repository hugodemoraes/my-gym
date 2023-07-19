import { useState } from "react";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

const GROUPS = ["costas", "bíceps", "tríceps", "ombro"];

export function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const [groupSelected, setGroupSelected] = useState(GROUPS[0]);
  const [exercises, setExercises] = useState([
    { name: "Remada unilateral", description: "3 séries x 12 repetições" },
    { name: "Supino", description: "4 séries x 8 repetições" },
  ]);

  function handleOpenExerciseDetail() {
    navigate("exercise");
  }

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
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ExerciseCard
              name={item.name}
              description={item.description}
              onPress={handleOpenExerciseDetail}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </VStack>
    </VStack>
  );
}
