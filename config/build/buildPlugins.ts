import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin, type WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev)
    }),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
}
