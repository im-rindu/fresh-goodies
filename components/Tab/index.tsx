"use client";
import { Tabs, TabList, TabPanels, Tab, TabIndicator } from "@chakra-ui/react";
import { Panel } from "@/components";
import { useEffect, useState } from "react";
import { getCategories } from "@/utils/getProduct";

const fetchCategories = async (type: string) => {
  try {
    const data = await getCategories();
    return type === "category" ? tabList(data!) : panelList(data!);
  } catch (error) {
    console.log(error);
  }
};

const tabList = (data: string[]) =>
  data.map((category: string, index: number) => (
    <Tab key={index}>{category}</Tab>
  ));

const panelList = (data: string[]) =>
  data.map((category: string, index: number) => (
    <Panel key={index} category={category} />
  ));

const TabComponents = () => {
  const [categories, setCategories] = useState<any>();
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    setCategories(fetchCategories("category"));
    setProducts(fetchCategories("panel"));
  }, []);
  return (
    <Tabs colorScheme="black" className="max-w-screen">
      <div
        className="max-w-screen whitespace-nowrap overflow-x-scroll overflow-y-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <TabList p={0}>{categories}</TabList>
      </div>
      <TabPanels className="h-[80vh] overflow-y-scroll">{products}</TabPanels>
    </Tabs>
  );
};

export default TabComponents;
