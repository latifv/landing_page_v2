import React from "react";
import PagesLayout from "../../components/Layout/PagesLayout";
import { storeContent } from "../../utils/constants/HyperStore";

const Store = () => {
  return <PagesLayout data={storeContent} />;
};

export default Store;
