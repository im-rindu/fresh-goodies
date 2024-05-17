import { Text, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CartPageContext } from "@/context/CartPageContext";

const ButtonComponent = ({
  totalPrice,
  currentItem,
}: {
  totalPrice: number;
  currentItem: string[];
}) => {
  const { onOpen } = useContext(CartPageContext);
  return (
    <button
      className="w-full bg-black py-4 px-6 text-white rounded-full flex flex-row justify-between"
      onClick={() => onOpen()}
    >
      <div className="flex flex-row align-middle relative items-center">
        <Text mr={5} className="inline-block">
          Cart
        </Text>
        {currentItem.map((item, index) => (
          <Image
            className={`rounded-full ${
              currentItem.length < 3
                ? "-mr-1"
                : currentItem.length < 5
                ? "-mr-2"
                : currentItem.length < 6
                ? "-mr-3"
                : currentItem.length < 8
                ? "-mr-4"
                : currentItem.length < 10
                ? "-mr-5"
                : "-mr-[1.625em]"
            }`}
            key={index}
            src={item}
            alt={item}
            boxSize="36px"
          />
        ))}
      </div>
      <Text className="inline-block my-auto">${totalPrice.toFixed(2)}</Text>
    </button>
  );
};

export default ButtonComponent;
