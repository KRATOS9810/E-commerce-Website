import Product from "../Model/Product.js";

export const getProducts = async (req, res) => {
  try {
    const allproducts = await Product.find();
    res.status(200).send(allproducts);
  } catch (error) {
    res.status(400).send("Error", error);
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, amount, description } = req.body;
    const img = req.file ? `/uploads/${req.file.filename}` : null;
    const newProduct = new Product({
      name,
      amount,
      description,
      img,
    });

    await newProduct.save();
    res.status(200).send("Product Saved");
    console.log("Product added");
  } catch (error) {
    res.status(400).send("Can't able to add product");
    console.log("Error", error);
  }
};

export const delproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Product.findByIdAndDelete(id);
    if (!deletedItem)
      return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error Occured", error });
    console.log("Can't delete", error);
  }
};
