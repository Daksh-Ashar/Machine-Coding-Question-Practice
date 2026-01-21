import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxTree from  "../../Assignments/CheckboxTreeView/view/CheckboxTree";

// Test cases
describe("useCheckboxTree Hook", () => {
  it("should check/uncheck parent and child checkboxes correctly", () => {
    render(<CheckboxTree />);

    // Get Parent 1 checkbox
    const parent1Checkbox = screen.getByLabelText("Parent Node 1");
    const child1Checkbox = screen.getByLabelText("Child Node 1");
    const child2Checkbox = screen.getByLabelText("Child Node 2");

    // Initially, all checkboxes should be unchecked
    expect(parent1Checkbox).not.toBeChecked();
    expect(child1Checkbox).not.toBeChecked();
    expect(child2Checkbox).not.toBeChecked();

    // Check Parent 1
    fireEvent.click(parent1Checkbox);
    expect(parent1Checkbox).toBeChecked();
    expect(child1Checkbox).toBeChecked();
    expect(child2Checkbox).toBeChecked();

    // Uncheck Child 1-1
    fireEvent.click(child1Checkbox);
    expect(child1Checkbox).not.toBeChecked();
    expect(parent1Checkbox).not.toBeChecked(); // Parent should be unchecked
    expect(child2Checkbox).toBeChecked();

    // Check Child 1-1 again
    fireEvent.click(child1Checkbox);
    expect(child1Checkbox).toBeChecked();
    expect(parent1Checkbox).toBeChecked(); // Parent should be checked again
  });

  it("should handle multiple parents independently", () => {
    render(<CheckboxTree />);

    // Get Parent 1 and Parent 2 checkboxes
    const parent1Checkbox = screen.getByLabelText("Parent Node 1");
    const parent2Checkbox = screen.getByLabelText("Parent Node 2");

    // Check Parent 1
    fireEvent.click(parent1Checkbox);
    expect(parent1Checkbox).toBeChecked();

    // Parent 2 should remain unchecked
    expect(parent2Checkbox).not.toBeChecked();
  });
});