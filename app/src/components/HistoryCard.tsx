import { HStack, Heading, Text, VStack } from "native-base";

type Props = {
  title: string;
  description: string;
};

export function HistoryCard({ title, description }: Props) {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5} flex={1}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          {title}
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          {description}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        22:45
      </Text>
    </HStack>
  );
}
