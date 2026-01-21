import { memo } from "react";

const CheckboxList = ({ list , checkedItems, onCheckboxChange}) => {
    return (
        <>
        {
            list.map((item) => (
                <div key={item.id} style={{ marginLeft: '0.5rem' }}>
                    <input type="checkbox" id={`checkbox-${item.id}`} checked={checkedItems[item.id] || false} onChange={(e) => {onCheckboxChange(item, e.target.checked, list);}}/>
                    <label htmlFor={`checkbox-${item.id}`} style={{ marginLeft: '0.4rem' }}>{item.name}</label>
                    {item.children && item.children.length > 0 && (
                        <CheckboxList list={item.children} checkedItems={checkedItems} onCheckboxChange={onCheckboxChange} />
                    )}
                </div>
            ))
        }
        </>
    )
}

export default memo(CheckboxList);