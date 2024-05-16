import { Tab } from "@/components";
import { CartButtonProvider } from "@/context/CartButtonContext";
import { DrawerProvider } from "@/context/DrawerContext";
import { Heading } from "@chakra-ui/react";

const Home = () => (
  <main>
    <Heading mt={8} ml={6} mb={4} as="h1">
      Vegetables
    </Heading>
    <CartButtonProvider>
      <DrawerProvider>
        <Tab />
      </DrawerProvider>
    </CartButtonProvider>
  </main>
);

export default Home;
