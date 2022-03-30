import {
  InputGroup,
  InputLeftAddon,
  Input,
  Center,
  Button,
  HStack,
  chakra,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ProfileCard } from "../components/ProfileCard";


const Home: NextPage = () => {

  const [input, setInput] = useState("");

  const [data, setData]: any = useState({});

  const [profileDetails, setProfileDetails] = useState({
    name: "",
    location: "",
    bio: "",
    avatarUrl: "",
  });

  const [showProfile, setShowProfile] = useState(false);

  function getProfile(profile: string) {
    axios
      .get("https://api.github.com/users/" + profile)
      .then((res) => setData(res.data));
  }

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setProfileDetails({
        name: data.name,
        location: data.location,
        bio: data.bio,
        avatarUrl: data.avatar_url,
      });

      setShowProfile(true)
    }
  }, [data]);

  return (
    <div>
      <VStack>
      <chakra.h1
          fontSize="3xl"
          mt='20'
          fontWeight="bold"
          color={useColorModeValue("gray.800", "white")}
        >
          GitSearch
        </chakra.h1>
      <Center mt="20vh">
        <HStack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="github.com/" />
            <Input
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
              name="profile"
              type="tel"
              placeholder="profile"
            />
            <Button bgColor='blue' color='white' px='10' onClick={() => getProfile(input)} ml="10">
              Search
            </Button>
          </InputGroup>
        </HStack>
      </Center>
      </VStack>
      {showProfile === true && <ProfileCard data={profileDetails} />}
    </div>
  );
};

export default Home;
