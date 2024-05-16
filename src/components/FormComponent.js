import React from "react";

export default function FormComponent({
  title,
  setTitle,
  description,
  setDescription,
  status,
  setStatus,
  dueDate,
  setDueDate,
  handleSubmit,
  buttonText,
  handleCancel,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="w-2/3 md:w-1/2 flex flex-col mx-auto space-y-2 md:space-y-5 pt-5 md:pt-10 justify-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border-2 rounded-lg focus:outline-none px-2 py-1 focus:shadow-md cursor-text"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border-2 rounded-lg focus:outline-none px-2 py-1 focus:shadow-md cursor-text"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border py-1 px-2 rounded-lg focus:outline-none focus:shadow-md cursor-pointer"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border py-2 px-2 rounded-lg focus:outline-none focus:shadow-md cursor-pointer"
          required
        >
          <option value="" disabled>
            Status
          </option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div className="flex items-center justify-center space-x-2 md:space-x-5">
          <button
            type="submit"
            className="bg-black text-white px-2 py-1 w-24 cursor-pointer rounded-lg shadow-xl hover:animate-pulse"
          >
            {buttonText}
          </button>
          {handleCancel && (
            <button
              type="button"
              className="bg-black text-white px-2 py-1 w-24 cursor-pointer rounded-lg shadow-xl hover:animate-pulse"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
