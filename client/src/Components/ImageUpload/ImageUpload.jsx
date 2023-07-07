import {
  Heading,
  Avatar as AvatarChakra,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Avatar from "react-avatar-edit";
import axios from "axios";

import image from "./nio 192.png";

export default function ProfileUpdatePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [src, SetSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [img, setimag] = useState(null);
  const [imageData, setImageData] = useState(null);

  const onCloses = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  // useEffect(() => {
  //   console.log(preview);
  // }, [preview]);
  function handleRefresh() {
    setRefresh((prevRefresh) => !prevRefresh); // Toggle the 'refresh' state value
  }
  const uploadImage = async () => {
    const formData = new FormData();

    formData.append("title", "image");
    formData.append("image", img);

    try {
      const response = await fetch("http://localhost:8000/image/", {
        method: "POST",
        body: formData,
      })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } catch (error) {
      // Error handling
    }

    handleRefresh();

    onClose();
  };

  const [profileImage, setProfileImage] = useState(null);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch("http://localhost:8000/imageshow/");
        const data = await response.json();
        setImageData(data[0].image);

        console.log(response);
        console.log(data);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImageData();
  }, [refresh]); // Add 'refresh' as a dependency

  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        mt={15}
      >
        {/* <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        /> */}
        <Flex justify={"center"}>
          <AvatarChakra
            size={"xl"}
            src={imageData ? `http://localhost:8000/${imageData}` : ""}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        {/* http://localhost:8000/Pictures/images/_po.png */}
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Priyanka Ravi
            </Heading>
            <Text color={"gray.500"}> Developer</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>24k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>24k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <Button
            onClick={onOpen}
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Update
          </Button>
        </Box>
      </Box>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <Avatar
              width={400}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
            />

            {preview && <img src={preview} alt="" />} */}

            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setimag(e.target.files[0])}
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={uploadImage}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <img src={imageData} width={100} height={100} alt="errror" /> */}
    </Center>
  );
}
