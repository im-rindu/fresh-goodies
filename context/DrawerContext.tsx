"use client";
import { Detail } from "@/components";
import { useDisclosure, Drawer, DrawerOverlay } from "@chakra-ui/react";
import { createContext } from "react";

const DrawerContext = createContext(() => {});

const DrawerProvider = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DrawerContext.Provider value={onOpen}>
      {props.children}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <Detail />
      </Drawer>
    </DrawerContext.Provider>
  );
};

export { DrawerContext, DrawerProvider };
