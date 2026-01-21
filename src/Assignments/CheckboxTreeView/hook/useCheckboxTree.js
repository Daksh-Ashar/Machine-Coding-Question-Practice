import { useMemo } from "react";

export const useCheckboxTree = ({ setCheckedItems , listData}) => {
    // Custom hook logic for managing checkbox tree state can be added here
    // const onCheckboxChange = (item, isChecked, list) => {

    //     // updated item checked by user.
    //     setCheckedItems(prevState => {
    //        let newState = {...prevState, [item.id]: isChecked };

    //        // if item has children, update their checked state as well
    //        const updateChildren = (item, isChecked) => {
    //             if(item.children && item.children.length > 0) {
    //                 item.children.forEach(child => {
    //                     newState[child.id] = isChecked;
    //                     child.children && updateChildren(child, isChecked);
    //                 });
    //             }
    //           };
            
    //         updateChildren(item, isChecked);

    //         // if item has a parent whose all children are unchecked, uncheck the parent as well
    //         const verifyChecked = (node) => {
    //             if(!node.children)
    //                 return newState[node.id] || false;

    //             const allChildrenChecked = node.children.every(child => verifyChecked(child));
    //             newState[node.id] = allChildrenChecked;
    //             return allChildrenChecked;
    //         }

    //         list.forEach(rootItem => verifyChecked(rootItem));

    //        return newState;

    //     });

        

    // };

    const parentMap = useMemo(() => {
        const map = {};
    
        const dfs = (node, parent = null) => {
          if (parent) {
            map[node.id] = parent;
          }
          node.children?.forEach((child) => dfs(child, node));
        };

        listData.forEach((root) => dfs(root));
        return map;
      }, [listData]);


    const updateChildren = (node, isChecked, state) => {
        state[node.id] = isChecked;

        node.children?.forEach(child =>
          updateChildren(child, isChecked, state)
        );
    };

     const updateParents = (node, state) => {
      const parent = parentMap[node.id];
      if (!parent) return;

      const allChecked = parent.children.every(
        child => state[child.id]
      );

      state[parent.id] = allChecked;
      updateParents(parent, state);
    };


    const onCheckboxChange = (item, isChecked) => {
    setCheckedItems(prev => {
    const newState = { ...prev };

    updateChildren(item, isChecked, newState);
    updateParents(item, newState);

    return newState;
  });
};


    return { onCheckboxChange};
}
