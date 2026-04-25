import { useState } from "react";

export default function Tabs({ tabs, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div role="tablist">
      {/* Header */}
      <div style={{ display: "flex", gap: "12px" }}>
        {tabs.map((tab, index) => (
          <div
            role="tab"
            key={tab.id || index}
            onClick={() => setActiveIndex(index)}
            style={{
              cursor: "pointer",
              padding: "8px 12px",
              borderBottom:
                activeIndex === index ? "2px solid blue" : "2px solid transparent",
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ marginTop: "16px" }} role="tabContent">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}