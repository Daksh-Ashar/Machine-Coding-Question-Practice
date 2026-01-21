import { memo, useState } from "react";
import data from "../config/data";
import CheckboxList from "../components/CheckboxList";
import { useCheckboxTree } from "../hook/useCheckboxTree";

const CheckboxTree = () => {
  const [listData, setListData] = useState(data);
  const [checkedItems, setCheckedItems] = useState({});
  const { onCheckboxChange } = useCheckboxTree({ setCheckedItems, listData });

  return (
    <CheckboxList
      list={listData}
      checkedItems={checkedItems}
      onCheckboxChange={onCheckboxChange}
    />
  );
};

export default memo(CheckboxTree);
