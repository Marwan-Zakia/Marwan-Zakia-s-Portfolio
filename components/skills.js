import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { Skills } from "./data";
import { Tooltip } from "@chakra-ui/react";
export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {Skills.map((item, i) => {
          return (
            <Tooltip label={item.description} key={i}>
              <Stack>
                <Flex
                  w={16}
                  h={16}
                  align={"center"}
                  justify={"center"}
                  color={"white"}
                  rounded={"full"}
                  bg={"gray.100"}
                  mb={1}
                >
                  {item.icon}
                </Flex>
                <Text fontWeight={600}>{item.title}</Text>
                <Text color={"gray.600"}>{item.work}</Text>
              </Stack>
            </Tooltip>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
