import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        disableStaticImages: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/shared/styles')],
        silenceDeprecations: ['legacy-js-api', 'import', 'slash-div'],
    },
    webpack: (config, { dev }) => {
        config.resolve.alias['@variables'] = path.join(
            __dirname,
            'src/shared/styles/_variables.scss'
        )

        config.module.rules.push({
            test: /\.(png|jpe?g|gif|webp|avif|ico|bmp)$/i,
            type: 'asset/resource',
        })

        if (dev) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            }
        }

        return config
    },
}

export default nextConfig
