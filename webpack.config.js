const SRC = './src/';

module.exports = {
	mode: 'development',
	entry: {
		main: SRC + 'assets/js/main.js'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			}
		]
	}
}