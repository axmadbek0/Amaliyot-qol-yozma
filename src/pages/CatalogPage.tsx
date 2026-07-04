import { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';

export default function CatalogPage() {
    const { products, loading, error } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Generate unique categories for the filter
    const categories = useMemo(() => {
        if (!products) return ['all'];
        const uniqueCategories = new Set(products.map(p => p.category));
        return ['all', ...Array.from(uniqueCategories)];
    }, [products]);

    // Handle loading and error states
    if (loading) return <div className="p-4 text-center">Loading products...</div>;
    if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;

    // Filter products based on search and category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
            
            {/* Filters */}
            <div className="flex gap-4 mb-6">
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="border p-2 rounded flex-1"
                />
                <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border p-2 rounded"
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
                        <h2 className="font-semibold text-lg truncate">{product.title}</h2>
                        <p className="text-gray-600 mb-2">${product.price}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            
            {filteredProducts.length === 0 && (
                <div className="text-center text-gray-500 py-8">No products found.</div>
            )}
        </div>
    );
}