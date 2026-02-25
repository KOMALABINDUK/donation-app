import { useState } from "react";

function AddDonation({ onSubmit, onCancel }) {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item || !category || !quantity || !description) return;

    const newDonation = {
      id: `DON-${Date.now()}`,
      item,
      category,
      quantity: Number(quantity),
      description,
      status: "Pending",
      created: new Date().toLocaleDateString(),
    };

    onSubmit(newDonation);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>Add New Donation</h2>

      <label>Item Name *</label>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} required />
      <br /><br />

      <label>Category *</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Blankets">Blankets</option>
        <option value="Books">Books</option>
      </select>
      <br /><br />

      <label>Quantity *</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <br /><br />

      <label>Description *</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <br /><br />

      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="submit">Submit Donation</button>
    </form>
  );
}

export default AddDonation;
