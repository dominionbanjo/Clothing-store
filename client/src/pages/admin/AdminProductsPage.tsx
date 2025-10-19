import { useState } from "react";
import { useAppSelector } from "../../hooks";
import useGetAllProductsController from "../../modules/AllProductsPage/controllers/getAllProductsController";
import useCreateProductController from "../../modules/admin/controllers/useCreateProductController";
import useDeleteProductController from "../../modules/admin/controllers/useDeleteProductCOntroller";
import useUpdateProductController from "../../modules/admin/controllers/useupdateProductController";
import useUploadProductImageController from "../../modules/admin/controllers/useUploadProductImageController";

interface ProductForm {
  image: string;
  category: string;
  subCategory: string;
  description: string;
  fit: string;
  price: string;
  sizes: string[];
  features: string[];
  featured: boolean;
}

export default function AdminProductsPage() {
  const { user } = useAppSelector((state) => state.user);
  const [form, setForm] = useState<ProductForm>({
    image: "",
    category: "Unisex",
    subCategory: "Glasses",
    description: "",
    fit: "",
    price: "",
    sizes: [""],
    features: [""],
    featured: false,
  });

  const [editingId, setEditingId] = useState<string | null>(null);

  const { products, getAllProducts, isLoading } = useGetAllProductsController();
  const { createProduct, isCreating } = useCreateProductController();
  const { updateProduct, isUpdating } = useUpdateProductController();
  const { deleteProduct } = useDeleteProductController();
  const { uploadImage, isUploading } = useUploadProductImageController();

  /* ---------------------------- Handlers ---------------------------- */
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    const res = await uploadImage(formData);
    setForm((prev) => ({ ...prev, image: res.imageUrl }));
  };

  const handleAddField = (key: "sizes" | "features") => {
    setForm((prev) => ({
      ...prev,
      [key]: [...prev[key], ""],
    }));
  };

  const handleChangeField = (
    key: "sizes" | "features",
    index: number,
    value: string
  ) => {
    setForm((prev) => {
      const updated = [...prev[key]];
      updated[index] = value;
      return { ...prev, [key]: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?._id) {
      alert("You must be logged in as an admin to create or edit products.");
      return;
    }

    const payload = {
      image: form.image.trim(),
      category: form.category,
      subCategory: form.subCategory,
      description: form.description.trim(),
      fit: form.fit.trim(),
      price: Number(form.price),
      sizes: form.sizes.filter(Boolean),
      features: form.features.filter(Boolean),
      featured: form.featured,
      user: user!._id,
    };

    try {
      if (editingId) {
        await updateProduct({ id: editingId, updates: payload });
        setEditingId(null);
      } else {
        await createProduct(payload);
      }

      await getAllProducts();
      setForm({
        image: "",
        category: "Unisex",
        subCategory: "Glasses",
        description: "",
        fit: "",
        price: "",
        sizes: [""],
        features: [""],
        featured: false,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error creating/updating product:", error);
    }
  };

  const handleEdit = (p: any) => {
    setEditingId(p._id);
    setForm({
      image: p.image,
      category: p.category,
      subCategory: p.subCategory,
      description: p.description,
      fit: p.fit,
      price: String(p.price),
      sizes: p.sizes,
      features: p.features,
      featured: p.featured,
    });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct({ id });
      await getAllProducts();
    }
  };

  /* ---------------------------- UI ---------------------------- */
  return (
    <div className="max-w-6xl p-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Manage Products</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 mb-10 md:grid-cols-2"
      >
        {/* Image upload */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-2 border rounded"
          />
          {isUploading && <p className="text-sm text-gray-500">Uploading...</p>}
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="object-cover w-32 h-32 mt-2 rounded"
            />
          )}
        </div>

        <input
          className="p-2 border rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="p-2 border rounded"
          placeholder="Fit"
          value={form.fit}
          onChange={(e) => setForm({ ...form, fit: e.target.value })}
        />
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        {/* Sizes dynamic */}
        <div>
          <label className="block mb-1 font-semibold">Sizes</label>
          {form.sizes.map((s, i) => (
            <input
              key={i}
              value={s}
              placeholder={`Size ${i + 1}`}
              className="w-full p-2 mb-2 border rounded"
              onChange={(e) => handleChangeField("sizes", i, e.target.value)}
            />
          ))}
          <button
            type="button"
            onClick={() => handleAddField("sizes")}
            className="text-sm text-blue-500 underline"
          >
            + Add Size
          </button>
        </div>

        {/* Features dynamic */}
        <div>
          <label className="block mb-1 font-semibold">Features</label>
          {form.features.map((f, i) => (
            <input
              key={i}
              value={f}
              placeholder={`Feature ${i + 1}`}
              className="w-full p-2 mb-2 border rounded"
              onChange={(e) => handleChangeField("features", i, e.target.value)}
            />
          ))}
          <button
            type="button"
            onClick={() => handleAddField("features")}
            className="text-sm text-blue-500 underline"
          >
            + Add Feature
          </button>
        </div>

        <button
          type="submit"
          disabled={isCreating || isUpdating}
          className="px-4 py-2 text-white rounded bg-primary hover:bg-primary/80 md:col-span-2"
        >
          {editingId
            ? isUpdating
              ? "Updating..."
              : "Update Product"
            : isCreating
            ? "Creating..."
            : "Create Product"}
        </button>
      </form>

      {/* Product List */}
      <h2 className="mb-4 text-lg font-semibold">All Products</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products?.map((p: any) => (
            <div
              key={p._id}
              className="relative p-4 border rounded-lg hover:shadow-md"
            >
              <img
                src={p.image}
                alt={p.description}
                className="object-cover w-full h-40 mb-2 rounded"
              />
              <h3 className="font-semibold">{p.description}</h3>
              <p className="text-sm text-gray-500">₦{p.price}</p>
              <div className="absolute flex gap-2 top-2 right-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="px-2 py-1 text-xs text-white bg-blue-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="px-2 py-1 text-xs text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
