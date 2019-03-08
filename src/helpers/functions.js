// basic validation of inputs if blank
export const validateInputs = data => {
  if (!data || typeof data !== "object") return false;
  const array = Object.values(data);
  return array.every(input => input.length > 0);
};

// simulate latency
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
