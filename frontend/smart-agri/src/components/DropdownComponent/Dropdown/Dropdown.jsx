import { useEffect, useState, useRef } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import DropdownItem from "../DropdownItem/DropdownItem"; // Import DropdownItem
import "./Dropdown.css";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [selectedItem, setSelectedItem] = useState("Select Division"); // State to hold the selected item

  const dropdownRef = useRef();
  const buttonRef = useRef();
  const contentRef = useRef();

  // Dropdown items array
  const dropdownItems = [
    "Division A",
    "Division B",
    "Division C",
    "Division D",
    "Division E",
    "Division F",
    "Division G",
    "Division H",
  ];

  const toggleDropdown = () => {
    if (!open) {
      const spaceRemaining =
        window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
      const contentHeight = contentRef.current.clientHeight;

      const topPosition =
        spaceRemaining > contentHeight
          ? null
          : -(contentHeight - spaceRemaining); // move up by height clipped by window
      setDropdownTop(topPosition);
    }
    setOpen((prev) => !prev); // Toggle the dropdown state
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler); // Cleanup event listener
    };
  }, [dropdownRef]);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update the selected item
    setOpen(false); // Close the dropdown
  };

  return (
    <div ref={dropdownRef} className="dropdown">
      <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open} selectedItem={selectedItem}>
        {/* No need to include the selectedItem here since it's passed to DropdownButton */}
      </DropdownButton>
      <DropdownContent top={dropdownTop} ref={contentRef} open={open}>
        {dropdownItems.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleItemClick(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
