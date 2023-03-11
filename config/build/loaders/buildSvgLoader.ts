export const buildSvgLoader = () => ({
    test: /\.svg$/,
    // issuer: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: '@svgr/webpack',
            options: {
                svgConfig: {
                    plugins: [
                        'preset-default',
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            },
                        },
                        {
                            name: 'addClassesToSVGElement',
                            params: {
                                className: 'app-icon',
                            },
                        },
                    ],
                },
            },
        }],
});
