function search(query) {
    console.log("Searching for:", query);
  }
  
  const debouncedSearch = debounce(search, 500);
  
  // Simulate rapid typing
  debouncedSearch("a");
  debouncedSearch("ap");
  debouncedSearch("app");
  debouncedSearch("appl");
  debouncedSearch("apple"); // <-- Only this one actually runs after 500ms