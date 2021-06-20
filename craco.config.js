const path = require("path");
const env = require('dotenv')
	.config({
		path: '.env',
	}).parsed;
	

//console.log(env);
//process.exit(-1);

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, "src/components/"),
			'@images': path.resolve(__dirname, "src/assets/images/"),
			'@css': path.resolve(__dirname, "src/assets/css/"),
			'@scss': path.resolve(__dirname, "src/assets/scss/"),
			
			'@vstore-layouts': path.resolve(__dirname, "src/components/layouts/" + env.REACT_APP_THEME_LAYOUT),
			'@vstore-collection': path.resolve(__dirname, "src/components/collection/" + env.REACT_APP_THEME_COLLECTION),
			'@vstore-products': path.resolve(__dirname, "src/components/products/" + env.REACT_APP_THEME_PRODUCTS),
			
			'@vstore-header': path.resolve(__dirname, "src/components/common/headers/" + env.REACT_APP_THEME_HEADER),
			'@vstore-footer': path.resolve(__dirname, "src/components/common/footers/" + env.REACT_APP_THEME_FOOTER),
			
			'@vstore-translation': path.resolve(__dirname, "src/translations/" + env.REACT_APP_TRANSLATION),
		}
	}
}