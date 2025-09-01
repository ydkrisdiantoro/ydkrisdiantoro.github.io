// Utility functions for blog categories

export function categoryToSlug(category: string): string {
	return category.toLowerCase().replace(/\s+/g, '-');
}

export function slugToCategory(slug: string): string {
	return slug
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function getCategoryDisplayName(slug: string, allCategories: string[]): string {
	// Find the matching category from the list of all categories
	return allCategories.find(cat => categoryToSlug(cat) === slug) || slugToCategory(slug);
}
