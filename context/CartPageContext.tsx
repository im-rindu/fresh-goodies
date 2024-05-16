"use client";
import Cart from "@/components/Cart";
import { useDisclosure, Drawer, DrawerOverlay } from "@chakra-ui/react";
import { createContext } from "react";

const CartPageContext = createContext(() => {});

const CartPageProvider = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CartPageContext.Provider value={onOpen}>
      {props.children}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <Cart />
      </Drawer>
    </CartPageContext.Provider>
  );
};

export { CartPageContext, CartPageProvider };
