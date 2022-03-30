import {
    Box,
    chakra,
    Flex,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  
  

interface profileCardProps {
    data: {
      name: string;
      location: string;
      bio: string;
      avatarUrl: string;
    };
  }
  

export const ProfileCard: React.FC<profileCardProps> = ({
    data,
  }: profileCardProps) => {
    return (
      <Flex
        maxW="md"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mt="10"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage: `url(${data.avatarUrl})`,
          }}
        ></Box>
  
        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {data.name}
          </chakra.h1>
  
          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {data.bio}
          </chakra.p>
  
          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1 color="black" fontWeight="bold" fontSize="lg">
              {data.location}
            </chakra.h1>
          </Flex>
        </Box>
      </Flex>
    );
  };