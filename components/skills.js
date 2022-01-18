import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { Skills } from "./data";
import { Tooltip } from "@chakra-ui/react";
export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10}>
        {Skills.map((item, i) => {
          return (
            <Tooltip placement='bottom' label={item.description} key={i}>
              <Stack>
                <Center>
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
                  </Center>
                  <Center>
                <Text fontWeight={600}>{item.title}</Text>
                 </Center>
                <Text color={"gray.600"}>{item.work}</Text>
              </Stack>
            </Tooltip>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
