import React, { useState, useEffect } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  debounceDelay?: number; // Optional debounce delay in milliseconds
};

const SearchBar = ({ onSearch, debounceDelay = 300 }: SearchBarProps) => {
  const [query, setQuery] = useState(""); // For input field
  const [debouncedQuery, setDebouncedQuery] = useState(query); // Debounced value

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query); // Update debounced value after delay
    }, debounceDelay);

    return () => {
      clearTimeout(handler); // Cleanup timeout on input change
    };
  }, [query, debounceDelay]);

  useEffect(() => {
    onSearch(debouncedQuery); // Trigger the parent-provided search logic
  }, [debouncedQuery, onSearch]);

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
