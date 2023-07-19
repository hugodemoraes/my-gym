import { useState } from "react";
import { Heading, VStack, SectionList, Text } from "native-base";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "18.07.23",
      data: [
        { title: "Costas", description: "Puxada frontal" },
        { title: "Costas", description: "Remada unilateral" },
      ],
    },
    {
      title: "17.07.23",
      data: [{ title: "Costas", description: "Puxada frontal" }],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <HistoryCard title={item.title} description={item.description} />
        )}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            fontFamily="heading"
            mt={10}
            mb={3}
          >
            {section.title}
          </Heading>
        )}
        contentContainerStyle={
          !exercises.length && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda.
          </Text>
        )}
        px={8}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
