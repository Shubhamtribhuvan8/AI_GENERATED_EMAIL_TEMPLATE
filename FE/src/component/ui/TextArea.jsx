import React from "react";

const Textarea = React.forwardRef(({ id, name, value, onChange, required, ...props }, ref) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      ref={ref}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
