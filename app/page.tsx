import { Tab } from "@/components";
import { DrawerProvider } from "@/context/DrawerContext";
import { Heading, Text } from "@chakra-ui/react";

const Home = () => (
  <main>
    <Heading mt={8} ml={6} mb={4} as="h1">
      Vegetables
    </Heading>
    <DrawerProvider>
      <Tab />
    </DrawerProvider>
  </main>
);

export default Home;
