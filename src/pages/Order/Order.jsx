import { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import OrderTab from "./OrderTab/OrderTab";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);
  const dessert = menu.filter((item) => item?.category === "dessert");
  const soup = menu.filter((item) => item?.category === "soup");
  const salad = menu.filter((item) => item?.category === "salad");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const drinks = menu.filter((item) => item?.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderImg} title={"Order Food"} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab food={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab food={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab food={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab food={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab food={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
