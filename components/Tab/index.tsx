"use client";
import { Tabs, TabList, TabPanels, Tab, TabIndicator } from "@chakra-ui/react";
import { Panel } from "@/components";
import { useEffect, useState } from "react";
import { getCategories } from "@/utils/getProduct";

const fetchCategories = async () => {
  try {
    const data = await getCategories();
    return tabList(data);
  } catch (error) {
    console.log(error);
  }
};

const tabList = (data: any) =>
  data.map((category: any, index: number) => <Tab key={index}>{category}</Tab>);

const TabComponents = () => {
  const [categories, setCategories] = useState<any>();
  useEffect(() => setCategories(fetchCategories()), []);
  return (
    <Tabs colorScheme="black" className="max-w-screen" variant="unstyled">
      <div className="max-w-screen whitespace-nowrap overflow-x-scroll overflow-y-hidden">
        <TabList p={0}>{categories}</TabList>
        <TabIndicator
          w={"full"}
          mt="-1.5px"
          height="2px"
          bg="black"
          borderRadius="1px"
        />
      </div>
      <TabPanels>
        <Panel />
      </TabPanels>
    </Tabs>
  );
};

export default TabComponents;
