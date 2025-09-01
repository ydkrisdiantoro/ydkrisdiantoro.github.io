// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Yayan Deka';
export const SITE_DESCRIPTION = 'Welcome to my personal blog where I share my thoughts, experiences, and insights.';

// Blog pagination settings
export const POSTS_PER_PAGE = 8;

// AdSense Configuration
// Set your Google AdSense Publisher ID here (format: ca-pub-xxxxxxxxxxxxxxxx)
// Leave empty to disable ads
export const ADSENSE_PUBLISHER_ID = '';

// AdSense settings
export const ADSENSE_CONFIG = {
	enableAds: ADSENSE_PUBLISHER_ID !== '',
	publisherId: ADSENSE_PUBLISHER_ID,
	// Ad slot configurations (you can add these later when you have actual ad units)
	adSlots: {
		sidebarTop: '',
		sidebarMiddle: '',
		sidebarBottom: '',
		inContent: '',
	}
};
