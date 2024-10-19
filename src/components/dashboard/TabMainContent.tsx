"use client";

import { categories, CategoryType, tabsListLabel } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CategoryCardItem from "./CategoryCardItem";
import PopularCategory from "./PopularCategory";
import { useState } from "react";

const TabMainContent = () => {
  const [tab, setTab] = useState<CategoryType["type"]>("all");

  const handelChangeTab = (value: string) => {
    setTab(value as CategoryType["type"]);
  };

  const filteredCategories = tab === "all" ? categories : categories.filter(category => category.type === tab);
  console.log(filteredCategories);

  return (
    <Tabs
      defaultValue="all"
      className="mt-[50px] w-full flex flex-col items-center gap-8"
      onValueChange={handelChangeTab}
      value={tab}
    >
      <TabsList className="w-full max-w-[890px] p-0 bg-transparent overflow-x-auto scrollbar-hide flex-nowrap">
        {tabsListLabel.map((tab) => (
          <TabsTrigger key={tab.type} value={tab.type}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <PopularCategory />
      <TabsContent
        value={tab || "all"}
        className="flex flex-col gap-4 items-start w-full"
      >
        <h5 className="text-base text-slate-800 font-bold">
        {tab === "all" ? "All Topics" : tabsListLabel.find(t => t.type === tab)?.label}
        </h5>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-x-[30px] md:gap-y-5">
          {filteredCategories.map((category: CategoryType) => (
            <CategoryCardItem key={category.title} {...category} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabMainContent;
